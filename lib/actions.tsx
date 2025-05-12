'use server'

interface RegistrationData {
  name: string
  email: string
  contact: string
  college: string
  branch: string
  year: string
}

export async function submitRegistration(data: RegistrationData) {
  try {
    // Direct call to Google Apps Script
    const scriptURL = process.env.GOOGLE_SHEET_WEB_URL

    const response = await fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      redirect: 'follow',
    })

    // Delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error('Error submitting registration:', error)
    throw new Error('Failed to submit registration')
  }
}
