'use client'

import type React from 'react'

import { useState, type FormEvent } from 'react'
import { submitRegistration } from '@/lib/actions'

export default function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    college: '',
    branch: '',
    year: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.contact || formData.contact.length < 10) {
      newErrors.contact = 'Please enter a valid contact number'
    }

    if (!formData.college || formData.college.length < 2) {
      newErrors.college = 'College name must be at least 2 characters'
    }

    if (!formData.branch || formData.branch.length < 2) {
      newErrors.branch = 'Branch must be at least 2 characters'
    }

    if (!formData.year) {
      newErrors.year = 'Please select your year of study'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      await submitRegistration(formData)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        contact: '',
        college: '',
        branch: '',
        year: '',
      })
    } catch (error) {
      console.error('Registration failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="register" className="relative py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 dark:from-primary/10 dark:via-base-100 dark:to-secondary/10">
        <div className="absolute inset-0 bg-grid dark:bg-grid-dark"></div>
      </div>

      <div className="section-container relative z-10">
        <h2 className="section-title">
          Reserve Your <span className="gradient-text">Spot</span>
        </h2>
        <p className="section-subtitle">
          Register now to secure your place at this exclusive event. Limited
          spots available!
        </p>

        <div className="max-w-3xl mx-auto mt-12 relative">
          {/* Decorative elements */}
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>

          <div className="card card-shadow bg-base-100 border border-base-300/50 overflow-hidden relative z-10">
            <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>

            {submitSuccess ? (
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 text-success"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-success mb-2">
                  Registration Successful!
                </h3>
                <p className="text-neutral mb-6 max-w-md">
                  Thank you for registering for our event. We've sent you a
                  confirmation email with all the details.
                </p>
                <button
                  className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-primary-content"
                  onClick={() => setSubmitSuccess(false)}
                >
                  Register Another Person
                </button>
              </div>
            ) : (
              <form
                id="registrationForm"
                onSubmit={handleSubmit}
                className="p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-medium">Full Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-colors ${
                        errors.name ? 'input-error' : ''
                      }`}
                    />
                    {errors.name && (
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {errors.name}
                        </span>
                      </label>
                    )}
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-medium">
                        Email Address
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      className={`input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-colors ${
                        errors.email ? 'input-error' : ''
                      }`}
                    />
                    {errors.email && (
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {errors.email}
                        </span>
                      </label>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-medium">
                        Contact Number
                      </span>
                    </label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className={`input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-colors ${
                        errors.contact ? 'input-error' : ''
                      }`}
                    />
                    {errors.contact && (
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {errors.contact}
                        </span>
                      </label>
                    )}
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-medium">
                        College/University
                      </span>
                    </label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="Delhi University"
                      className={`input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-colors ${
                        errors.college ? 'input-error' : ''
                      }`}
                    />
                    {errors.college && (
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {errors.college}
                        </span>
                      </label>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-medium">
                        Branch/Major
                      </span>
                    </label>
                    <input
                      type="text"
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      placeholder="Computer Science"
                      className={`input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-colors ${
                        errors.branch ? 'input-error' : ''
                      }`}
                    />
                    {errors.branch && (
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {errors.branch}
                        </span>
                      </label>
                    )}
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-medium">
                        Year of Study
                      </span>
                    </label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className={`select select-bordered w-full bg-base-200/50 focus:bg-base-100 transition-colors ${
                        errors.year ? 'select-error' : ''
                      }`}
                    >
                      <option value="" disabled>
                        Select your year
                      </option>
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                    </select>
                    {errors.year && (
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {errors.year}
                        </span>
                      </label>
                    )}
                  </div>
                </div>

                <div className="mt-6 text-center text-sm text-neutral">
                  By registering, you agree to receive communications about this
                  and future events.
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Register Now'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
