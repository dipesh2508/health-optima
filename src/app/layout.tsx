import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/shared/NavBar";
import FootBar from "@/components/shared/FootBar";
// import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import localFont from 'next/font/local'
import ChatBot from "@/components/shared/ChatBot";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({ subsets: ["latin"] });
const mona = localFont({src: '../assets/font/Mona-Sans.ttf'})

export const metadata: Metadata = {
  title: "Health Optima - Your Ultimate Health and Wellness Companion",
  description: "Discover comprehensive health resources, wellness tools, and expert guidance at Health Optima. Transform your lifestyle with personalized fitness tracking, nutrition advice, and mental wellness support. Start your journey to optimal health today.",
  keywords: "health optima, wellness platform, fitness tracking, nutrition guidance, mental health, wellness tools, health monitoring, personal wellness, health optimization, wellness journey, health technology, wellness companion",
  robots: "index, follow",
  authors: [{ name: "Health Optima" }, { name: "Dipesh Ranjan" }],
  openGraph: {
    title: "Health Optima - Your Ultimate Health and Wellness Companion",
    description: "Transform your lifestyle with Health Optima's comprehensive wellness tools, personalized health tracking, and expert guidance. Start your journey to optimal health today.",
    url: "https://www.healthoptima.in",
    siteName: "Health Optima",
    images: [{
      url: "/logo.png",
      width: 1200,
      height: 630,
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Optima - Your Ultimate Health and Wellness Companion",
    description: "Transform your lifestyle with Health Optima's comprehensive wellness tools, personalized health tracking, and expert guidance.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.healthoptima.in"
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const {userId} = auth();
  let isSignedIn = false;

  if(userId === null){
    isSignedIn = false;
  } else {
    isSignedIn = true;
  }

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Open Graph Meta Tags (for social media sharing) */}
          <meta
            property="og:title"
            content="Health Optima: Your Wellness Companion"
          />
          <meta
            property="og:description"
            content="Empower Your Wellness Journey with Health Optima: Your Ultimate Health and Wellness Companion"
          />
          <meta
            property="og:image"
            content="https://healthoptima.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.38b8d5ed.png&w=256&q=75"
          />{" "}
          {/* Replace with your actual image URL */}
          <meta property="og:url" content="https://www.healthoptima.in" />
          <meta property="og:type" content="website" />
          {/* Google tag (gtag.js) */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id= ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}")`,
            }}
          />
        </head>

        <body className={`${montserrat.className} ${mona.className}`}>
          <NavBar signedIn={isSignedIn} />
          {children}
          <Toaster />
          <ChatBot />
          <FootBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
