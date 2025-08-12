"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-8">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-[#5c6eff] to-[#b9c6ff] bg-clip-text text-transparent">
            Something went wrong
          </span>
        </h1>
        
        <p className="text-gray-400 text-xl leading-relaxed">
          We encountered an unexpected error. Please try again or return to the home page.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #251f49 0%, #473a99 100%)",
            }}
          >
            Try Again
          </Button>
          
          <Link href="/">
            <Button
              variant="outline"
              className="px-8 py-3 rounded-full text-lg font-medium border-gray-600 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}