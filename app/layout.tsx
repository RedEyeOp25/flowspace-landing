import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FlowSpace - Automate Your Workflow",
  description: "FlowSpace is a powerful SaaS platform that helps teams automate workflows, manage projects, and collaborate more efficiently.",
  keywords: "SaaS, automation, workflow, project management, collaboration",
  authors: [{ name: "FlowSpace" }],
  creator: "FlowSpace",
  openGraph: {
    title: "FlowSpace - Automate Your Workflow",
    description: "Powerful automation tools for modern teams",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}