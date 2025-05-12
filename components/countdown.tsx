'use client'

import { useState, useEffect } from 'react'

export default function Countdown() {
  const eventDate = new Date('2025-06-15T18:00:00+05:30').getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [eventDate])

  return (
    <div className="bg-base-200 dark:bg-base-200/30 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Event Starts In:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-base-100 w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center shadow-md border border-base-300/50">
                  <span className="text-3xl md:text-4xl font-bold text-primary">
                    {item.value}
                  </span>
                </div>
                <span className="mt-2 text-sm text-neutral">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
