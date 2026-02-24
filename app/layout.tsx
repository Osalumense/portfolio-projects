import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Stephen Akugbe - Backend Developer & Fullstack Engineer',
  description: 'Portfolio of Stephen Akugbe - Building robust backend systems and high-performance APIs for e-commerce, fintech, logistics, and agritech solutions. Specializing in Laravel, Node.js, TypeScript, AWS, and PostgreSQL.',
  keywords: ['Backend Developer', 'Fullstack Engineer', 'Laravel', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'API Development'],
  authors: [{ name: 'Stephen Akugbe' }],
  openGraph: {
    title: 'Stephen Akugbe - Backend Developer & Fullstack Engineer',
    description: 'Portfolio of Stephen Akugbe - Building robust backend systems and high-performance APIs',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
