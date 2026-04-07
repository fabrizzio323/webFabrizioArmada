import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Fabrizio Armada | Backend Developer',
  description: 'Portfolio de Fabrizio Armada - Backend Developer especializado en Java, Spring Boot, PostgreSQL y arquitectura de software. Estudiante de Ingenieria en la UNJu.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
          
          <div id="google_translate_element" className="hidden"></div>
          <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
          <Script id="google-translate" strategy="afterInteractive">
            {`
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'es',
                  includedLanguages: 'es,en,ru',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  )
}
