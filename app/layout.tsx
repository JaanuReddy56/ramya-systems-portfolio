import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramya Reddy Koppula | Senior Java Full-Stack Engineer",
  description:
    "Portfolio of Ramya Reddy Koppula, a senior Java full-stack engineer specializing in secure cloud-native systems, Spring Boot, Angular, React, AWS, Azure, and distributed architecture.",
  keywords: [
    "Senior Java Developer",
    "Full-Stack Engineer",
    "Spring Boot",
    "Angular",
    "React",
    "AWS",
    "Azure",
    "Microservices",
  ],
  openGraph: {
    title: "Ramya Reddy Koppula | Senior Java Full-Stack Engineer",
    description: "Secure systems. Observable architecture. Reliable delivery.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}`}
        </Script>
        {children}
      </body>
    </html>
  );
}
