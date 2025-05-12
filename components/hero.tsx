'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 dark:from-primary/10 dark:via-base-100 dark:to-secondary/10">
        <div className="absolute inset-0 bg-grid dark:bg-grid-dark"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="hidden lg:block absolute top-1/3 right-1/4 h-32 w-32 animate-pulse rounded-full bg-accent/20 blur-2xl"></div>

      {/* Hero content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="animate-pulse relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              June 15, 2025 • Live Online Event
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="gradient-text">Mastering</span> Software
              Development Engineering
            </h1>
            <p className="text-lg md:text-xl text-neutral mb-8 max-w-xl mx-auto lg:mx-0">
              Join industry experts as they share insider tips, career
              strategies, and technical insights to help you excel in the
              competitive world of software engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#register" className="btn btn-primary btn-lg">
                Reserve Your Spot
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#about"
                className="btn btn-outline border-primary/30 hover:border-primary hover:bg-primary/10 text-base-content"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="avatar">
                    <div className="w-8 h-8 rounded-full border-2 border-base-100">
                      <img
                        src={`/images/avatar-${i}.png`}
                        alt={`Attendee ${i}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <span className="text-sm text-neutral">
                  Join <span className="text-primary font-medium">389+</span>{' '}
                  attendees
                </span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-base-300/50 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img
                src="/images/event-hero.jpg"
                alt="Tech conference"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-xl font-bold">SDE Workshop Series</p>
                  <p className="text-sm opacity-90">
                    Learn from the industry's best
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/30 blur-2xl rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/30 blur-2xl rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Gradient line divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
    </section>
  )
}
