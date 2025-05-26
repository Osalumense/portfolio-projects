import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stephen Akugbe portfolio projects',
  description: 'List of projects I have created over the past 5 years'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
