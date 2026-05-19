import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Subscription Profit Analyzer — Track True Customer Profitability',
  description: 'Calculate lifetime value minus support costs, churn risk, and hidden fees for each subscription customer. Built for SaaS founders.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="dfc2559d-0970-4aa0-820f-53a6d153d1d3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
