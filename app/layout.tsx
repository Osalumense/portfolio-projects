import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Stephen Akugbe - Product Engineer',
  description: 'Portfolio of Stephen Akugbe, a product engineer who designs and ships useful software across product, systems, AI, data, and reliable delivery.',
  keywords: ['Product Engineer', 'Systems Engineer', 'AI Engineer', 'LLM APIs', 'Node.js', 'TypeScript', 'Kubernetes', 'Prometheus', 'Grafana'],
  authors: [{ name: 'Stephen Akugbe' }],
  openGraph: {
    title: 'Stephen Akugbe - Product Engineer',
    description: 'Product engineering across useful software, systems, AI, data, and reliable delivery.',
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
