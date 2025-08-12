import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}
if (!supabaseAnonKey) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface WaitlistEntry {
  id: string
  email: string
  role?: string
  reason?: string
  created_at: string
  ip_address?: string
  user_agent?: string
}

export async function addToWaitlist(data: {
  email: string
  role?: string
  reason?: string
  ip_address?: string
  user_agent?: string
}) {
  if (!supabase) {
    throw new Error('Supabase client not initialized')
  }

  const { data: result, error } = await supabase
    .from('waitlist')
    .insert([{
      email: data.email,
      role: data.role,
      reason: data.reason,
      ip_address: data.ip_address,
      user_agent: data.user_agent,
    }])
    .select()

  if (error) {
    console.error('Error adding to waitlist:', error)
    throw error
  }

  return result
}

export async function checkEmailExists(email: string) {
  if (!supabase) {
    throw new Error('Supabase client not initialized')
  }

  const { data, error } = await supabase
    .from('waitlist')
    .select('email')
    .eq('email', email.toLowerCase())
    .single()

  if (error && error.code !== 'PGRST116') {
    console.error('Error checking email:', error)
    throw error
  }

  return !!data
}

export async function getWaitlistStats() {
  if (!supabase) {
    throw new Error('Supabase client not initialized')
  }

  const { count, error } = await supabase
    .from('waitlist')
    .select('*', { count: 'exact', head: true })

  if (error) {
    console.error('Error getting waitlist stats:', error)
    throw error
  }

  return count || 0
}