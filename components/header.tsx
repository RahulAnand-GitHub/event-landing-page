'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-base-100/90 shadow-md backdrop-blur supports-[backdrop-filter]:bg-base-100/60'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary"></div>
          <span className="text-xl font-bold">
            Campus<span className="text-primary"> Code</span>
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            href="#about"
            className="font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#speakers"
            className="font-medium hover:text-primary transition-colors"
          >
            Speakers
          </Link>
          <Link
            href="#sponsors"
            className="font-medium hover:text-primary transition-colors"
          >
            Sponsors
          </Link>
          <Link
            href="#register"
            className="font-medium hover:text-primary transition-colors"
          >
            Register
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="#register"
            className="hidden md:flex btn btn-primary btn-sm"
          >
            Register Now
          </Link>
          <button className="btn btn-ghost btn-circle md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
