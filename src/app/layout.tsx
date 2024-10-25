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

const montserrat = Montserrat({ subsets: ["latin"] });
const mona = localFont({src: '../assets/font/Mona-Sans.ttf'})

export const metadata: Metadata = {
  title: "Health Optima",
  description:
    "Empower Your Wellness Journey with Health Optima: Your Ultimate Health and Wellness Companion",
  keywords:
    "health optima, health, wellness, fitness, sleep, hydration, bmi, todo, tasks, productivity, health apps, wellness apps, fitness apps, sleep apps, hydration apps, bmi apps, todo apps, tasks apps, productivity apps",
  robots: "index, follow",
  authors: [{ name: "Health Optima" }, { name: "Dipesh Ranjan" }],
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
          <ChatBot />
          <FootBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
