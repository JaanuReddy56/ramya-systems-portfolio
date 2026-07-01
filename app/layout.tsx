import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramya Reddy Koppula | Senior Java Software Engineer",
  description:
    "Portfolio of Ramya Reddy Koppula, a senior software engineer specializing in Java, Spring Boot, JavaScript automation, Broadcom DevTest service virtualization, Snowflake data workflows, OpenShift, and banking integrations.",
  keywords: [
    "Senior Software Engineer",
    "Senior Java Engineer",
    "Java",
    "Spring Boot",
    "JavaScript",
    "Broadcom DevTest",
    "CA DevTest",
    "Service Virtualization",
    "Virtual Service Environment",
    "VSE",
    "Snowflake",
    "Python ETL",
    "REST",
    "SOAP",
    "MQ",
    "Windows Server",
    "OpenShift",
    "Jenkins",
    "Banking",
  ],
  openGraph: {
    title: "Ramya Reddy Koppula | Senior Java Software Engineer",
    description: "Java services, service virtualization, automation, and secure data platforms for reliable financial-software delivery.",
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
