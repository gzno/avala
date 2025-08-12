"use client"

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    const throttledToggleVisibility = (() => {
      let timeoutId: NodeJS.Timeout | null = null
      return () => {
        if (timeoutId === null) {
          timeoutId = setTimeout(() => {
            timeoutId = null
            toggleVisibility()
          }, 100)
        }
      }
    })()

    window.addEventListener('scroll', throttledToggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', throttledToggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
          role="button"
          tabIndex={0}
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  )
}