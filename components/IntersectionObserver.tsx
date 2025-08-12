"use client"

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyIntersecting = entry.isIntersecting
        setIsIntersecting(isCurrentlyIntersecting)
        
        if (isCurrentlyIntersecting && !hasIntersected) {
          setHasIntersected(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        }
      },
      { 
        threshold, 
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, hasIntersected, triggerOnce])

  const shouldAnimate = triggerOnce ? hasIntersected : isIntersecting

  return { elementRef, isIntersecting: shouldAnimate }
}

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn'
  delay?: number
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeIn',
  delay = 0
}: AnimatedSectionProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver()
  
  const animationClasses = {
    fadeIn: isIntersecting ? 'opacity-100' : 'opacity-0',
    slideUp: isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    slideLeft: isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
    slideRight: isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
    scaleIn: isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
  }

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-500 ease-out animate-element ${animationClasses[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}