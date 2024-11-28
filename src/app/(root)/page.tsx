import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from "@/components/home/hero";

const Blog = dynamic(() => import("@/components/home/blog"), {
  loading: () => <div className="min-h-screen animate-pulse bg-gray-100" />
});

const CTA = dynamic(() => import("@/components/home/cta"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />
});

const About = dynamic(() => import("@/components/home/about"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />
});

const Contact = dynamic(() => import("@/components/home/contact"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />
});

export const metadata: Metadata = {
  title: "Health Optima - Transform Your Wellness Journey Today",
  description: "Start your wellness transformation with Health Optima. Access personalized health tracking, expert wellness resources, and comprehensive tools for optimal living. Begin your journey to better health now.",
  alternates: {
    canonical: "https://www.healthoptima.in"
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Priority loading for above-the-fold content */}
      <Hero />
      
      {/* Suspense boundaries for better loading performance */}
      <section className="lazy-section">
        <Blog />
      </section>
      
      <section className="lazy-section">
        <CTA />
      </section>
      
      <section className="lazy-section">
        <About />
      </section>
      
      <section className="lazy-section">
        <Contact />
      </section>
    </main>
  );
}