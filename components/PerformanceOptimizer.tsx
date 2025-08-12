"use client"

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    const optimizePerformance = () => {
      // Enable hardware acceleration for smooth animations
      const style = document.createElement('style')
      style.textContent = `
        * {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        .animate-element {
          transform: translateZ(0);
          will-change: transform, opacity;
        }
      `
      document.head.appendChild(style)

      // Preload critical resources
      const preloadLink = document.createElement('link')
      preloadLink.rel = 'preload'
      preloadLink.as = 'font'
      preloadLink.href = '/fonts/inter-var.woff2'
      preloadLink.type = 'font/woff2'
      preloadLink.crossOrigin = 'anonymous'
      document.head.appendChild(preloadLink)

      // Passive event listeners for better scroll performance
      const passiveOptions = { passive: true }
      window.addEventListener('scroll', () => {}, passiveOptions)
      window.addEventListener('touchstart', () => {}, passiveOptions)
      window.addEventListener('touchmove', () => {}, passiveOptions)
    }

    const rafId = requestAnimationFrame(optimizePerformance)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return null
}