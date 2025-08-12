"use client"

import type React from "react"

import { useState, useCallback, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import Image from "next/image"
import { addToWaitlist, checkEmailExists } from "@/lib/supabase"

export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [reason, setReason] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null)

  const getClientInfo = useCallback(() => {
    return {
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
      timestamp: new Date().toISOString(),
    }
  }, [])

  const disposableDomains = useMemo(() => [
    '10minutemail.com', 'guerrillamail.com', 'mailinator.com', 'yopmail.com',
    'tempmail.org', 'temp-mail.org', '20minutemail.com', 'throwaway.email',
    'mailinator.net', 'maildrop.cc', 'sharklasers.com', 'guerrillamail.info'
  ], [])

  const spamKeywords = useMemo(() => [
    'crypto', 'bitcoin', 'loan', 'casino', 'viagra', 'cialis', 'pharmacy'
  ], [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError("")

    try {
      if (honeypot.trim() !== "") {
        throw new Error("Please try again.")
      }

      const now = Date.now()
      const timeSinceLastSubmission = lastSubmissionTime ? now - lastSubmissionTime : Infinity
      if (timeSinceLastSubmission < 30000) {
        throw new Error(`Please wait ${Math.ceil((30000 - timeSinceLastSubmission) / 1000)} seconds before trying again.`)
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address")
      }

      
      const emailDomain = email.toLowerCase().split('@')[1]
      if (disposableDomains.includes(emailDomain)) {
        throw new Error("Please use a permanent email address")
      }

      if (email.includes('+') && email.split('+')[1].split('@')[0].length > 10) {
        throw new Error("Please use your main email address")
      }

      const emailExists = await checkEmailExists(email)
      if (emailExists) {
        throw new Error("This email is already on our waitlist!")
      }

      if (reason.length > 500) {
        throw new Error("Please keep your message under 500 characters")
      }

      const reasonLower = reason.toLowerCase()
      if (spamKeywords.some(keyword => reasonLower.includes(keyword))) {
        throw new Error("Please provide a genuine reason for joining")
      }

      setLastSubmissionTime(now)

      const clientInfo = getClientInfo()

      await addToWaitlist({
        email: email.toLowerCase().trim(),
        role: role || undefined,
        reason: reason.trim() || undefined,
        user_agent: clientInfo.userAgent,
      })

      setIsSubmitted(true)
    } catch (err: any) {
      console.error('Waitlist submission error:', err)
      setError(err.message || "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }, [email, honeypot, lastSubmissionTime, reason, role, disposableDomains, spamKeywords, getClientInfo])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Launch%20Page%20Image%204.jpg-y6NBbQ7acRiusA1gnESWP9Zj98gEqD.jpeg"
          alt=""
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Header */}
      <header className="relative z-10 p-4" role="banner">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-200 ease-out px-2 py-1 rounded-lg hover:bg-white/5"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-base font-medium">Back to Home</span>
          </Link>

          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon128-XjCfMVctJG9W9ZYrkF8E5RnWwfKNmd.png"
            alt="Avala Logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-8 pt-2">
        <div className="w-full max-w-4xl mx-auto text-center space-y-6">
          {!isSubmitted ? (
            <>
              <div className="space-y-4 px-2 sm:px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#5c6eff] to-[#c3ceff] bg-clip-text text-transparent">
                    Join the Waitlist
                  </span>
                </h1>
                <p className="text-gray-400 text-base sm:text-lg md:text-xl text-center leading-relaxed max-w-3xl mx-auto px-2">
                  Get early access to the fastest way to detect AI-generated content online.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto px-4">
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{
                    position: 'absolute',
                    left: '-9999px',
                    opacity: 0,
                    height: 0,
                    width: 0,
                    zIndex: -1
                  }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center space-x-3" role="alert" id="email-error" aria-live="polite">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" aria-hidden="true" />
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <div className="space-y-3 text-left">
                  <label htmlFor="email-input" className="text-lg font-medium" style={{ color: "#ffffef" }}>
                    Email *
                  </label>
                  <Input
                    id="email-input"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="bg-[#303335] border-gray-600 text-white placeholder-gray-300 h-12 text-base rounded-lg px-4 w-full disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    aria-describedby={error ? "email-error" : undefined}
                    autoComplete="email"
                  />
                </div>

                <div className="space-y-3 text-left">
                  <label className="text-lg font-medium" style={{ color: "#ffffef" }}>
                    How would you describe yourself? (optional)
                  </label>
                  <Select value={role} onValueChange={setRole} disabled={isLoading}>
                    <SelectTrigger className="bg-[#303335] border-gray-600 text-white h-12 rounded-lg px-4 w-full text-base disabled:opacity-50">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#303335] border-gray-600 border rounded-lg shadow-xl z-50 min-w-full">
                      <SelectItem
                        value="student"
                        className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                      >
                        Student
                      </SelectItem>
                      <SelectItem
                        value="educator"
                        className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                      >
                        Educator
                      </SelectItem>
                      <SelectItem
                        value="business"
                        className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                      >
                        Business
                      </SelectItem>
                      <SelectItem
                        value="other"
                        className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                      >
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3 text-left">
                  <div className="flex justify-between items-center">
                    <label className="text-lg font-medium" style={{ color: "#ffffef" }}>
                      What brings you to Avala? (optional)
                    </label>
                    <span className={`text-xs ${reason.length > 450 ? 'text-orange-400' : reason.length > 500 ? 'text-red-400' : 'text-gray-500'}`}>
                      {reason.length}/500
                    </span>
                  </div>
                  <Input
                    placeholder="Tell us what interests you about AI detection..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value.slice(0, 500))}
                    disabled={isLoading}
                    className="bg-[#303335] border-gray-600 text-white placeholder-gray-300 h-12 text-base rounded-lg px-4 w-full disabled:opacity-50"
                    maxLength={500}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-1/2 mx-auto h-12 text-lg font-medium rounded-xl transition-all duration-500 ease-out hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-white border-0 shadow-lg shadow-purple-500/25 mt-6 relative overflow-hidden group"
                  style={{
                    background: "linear-gradient(135deg, #251f49 0%, #473a99 100%)",
                  }}
                >
                  <span className="relative z-10">
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Joining...</span>
                      </div>
                    ) : (
                      "Join Waitlist"
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3b4394] to-[#7a82e3] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                </Button>
              </form>
            </>
          ) : (
            <div className="space-y-6 max-w-2xl mx-auto px-4 -mt-8">
              <div className="flex justify-center">
                <CheckCircle className="w-16 h-16 text-blue-400" />
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-[#5c6eff] to-[#c3ceff] bg-clip-text text-transparent">
                    You're In!
                  </span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  We will be in touch soon on updates and beta access.
                </p>
              </div>

              <div className="space-y-4">
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-2/3 mx-auto border-gray-600 text-white hover:bg-gray-800 h-12 text-lg rounded-xl bg-transparent transition-all duration-500 ease-out hover:scale-110 hover:shadow-xl hover:shadow-gray-500/20"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
    </div>
  )
}
