import Hero from "@/components/home/hero"
import Blog from "@/components/home/blog"
import CTA from "@/components/home/cta"
export default function Home() {
  return (
    <>
      <main className='min-h-screen'>
        <Hero />
        <Blog />
        <CTA />
      </main>
    </>
  )
}
