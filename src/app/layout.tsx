import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/shared/NavBar";
import FootBar from "@/components/shared/FootBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Health Optima",
  description: "Your Ultimate Health and Wellness Companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
      <body className={inter.className}>
        <NavBar />
        {children}
        <FootBar />
      </body>
    </html>
  );
}
