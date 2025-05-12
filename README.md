# Tech Horizons Event Landing Page

A modern, responsive event landing page built with Next.js and Tailwind CSS for the "Tech Horizons 2025" software development engineering webinar. This project features a sleek design with dark mode support, interactive components, and Google Sheets integration for registration data.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme toggle with persistent user preference
- **Interactive Components**:
  - Live countdown timer to the event date
  - Registration form with validation
  - Dynamic sections for event details, speakers, and sponsors
- **Google Sheets Integration**: Form submissions are stored in Google Sheets
- **Modern UI**: Built with Tailwind CSS and DaisyUI for a polished look
- **Accessibility**: Follows best practices for web accessibility
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility

## 🛠️ Technologies

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**:
  - [Tailwind CSS](https://tailwindcss.com/)
  - [DaisyUI](https://daisyui.com/)
- **Form Handling**: React Hook Form with custom validation
- **Data Storage**: Google Sheets API integration
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18.x or later
- npm or yarn
- Google account (for Sheets integration)

## 🚀 Getting Started

### Installation

1.  Clone the repository:

        git clone https://github.com/yourusername/event-landing-page.git
        cd event-landing-page

2.  Install dependencies:

        npm install

    ##### or

        yarn install

3.  Create a `.env.local` file in the root directory with the following variables:

        GOOGLE_SHEETS_WEB_URL=your-sheet-web-url

4.  Run the development server:

        npm run dev

    ##### or

        yarn dev

5.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
event-landing-page/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── countdown.tsx     # Event countdown timer
│   ├── event-details.tsx # Event information section
│   ├── footer.tsx        # Page footer
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Hero section
│   ├── register-form.tsx # Registration form
│   ├── speakers.tsx      # Speakers section
│   ├── sponsors.tsx      # Sponsors section
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx  # Dark/light mode toggle
├── lib/                  # Utility functions
│   └── actions.ts        # Server actions for form submission
├── public/               # Static assets
│   └── images/           # Image files
├── .env.local            # Environment variables (create this)
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```
