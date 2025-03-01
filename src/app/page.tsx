import PhoneSection from "./phone-section"
import Phone1Section from "./phone1-section"
import Phone2Section from "./phone2-section"
import Phone3Section from "./phone3-section"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <PhoneSection />
      <Phone1Section />
      <Phone3Section />
      <Phone2Section />
    </main>
  )
}