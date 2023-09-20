import Hero from "@/components/home/hero"
import Blog from "@/components/home/blog"
import CTA from "@/components/home/cta"
import About from "@/components/home/about"
export default function Home() {
  return (
    <>
      <main className='min-h-screen'>
        <Hero />
        <Blog />
        <CTA />
        <About />
      </main>
    </>
  )
}
