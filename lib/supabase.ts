import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Allow build to succeed without environment variables
let supabase: any = null

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else if (typeof window !== 'undefined') {
  console.warn('Supabase environment variables not found')
}

export { supabase }

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
    throw new Error('Waitlist service is not available. Please try again later.')
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
    return false // Assume email doesn't exist if service unavailable
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
    return 0 // Return 0 if service unavailable
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