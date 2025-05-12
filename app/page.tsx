import Hero from '@/components/hero'
import EventDetails from '@/components/event-details'
import RegisterForm from '@/components/register-form'
import Footer from '@/components/footer'
import Speakers from '@/components/speakers'
import Countdown from '@/components/countdown'
import Sponsors from '@/components/sponsors'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Countdown />
      <EventDetails />
      <Speakers />
      <Sponsors />
      <RegisterForm />
      <Footer />
    </main>
  )
}
