import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramya Reddy Koppula | Senior Software Engineer · Broadcom DevTest",
  description:
    "Portfolio of Ramya Reddy Koppula, a senior software engineer specializing in Broadcom DevTest v10.9.x, service virtualization, Java and JavaScript automation, VSE administration, Jenkins pipelines, OpenShift, and banking integrations.",
  keywords: [
    "Senior Software Engineer",
    "Broadcom DevTest",
    "CA DevTest",
    "Service Virtualization",
    "Virtual Service Environment",
    "VSE",
    "Java",
    "JavaScript",
    "REST",
    "SOAP",
    "MQ",
    "Windows Server",
    "OpenShift",
    "Jenkins",
    "Banking",
  ],
  openGraph: {
    title: "Ramya Reddy Koppula | Broadcom DevTest & Service Virtualization",
    description: "Virtualize dependencies. Automate testing. Accelerate banking software delivery.",
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
