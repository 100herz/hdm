import { ReactNode, useEffect } from 'react'
import Head from 'next/head'

import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import { initFocusRingOnlyOnTab } from '@/utils/accessibility'

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  title?: string
  description?: string
  appName?: string
}

export default function Layout({
  children,
  title = 'This is the default title',
  description = 'Die Holz Design Moers GmbH bietet ihren Handelspartnern auch in Zukunft abverkaufsstarke Produkte, Konzepte und Ideen für eine erfolgreiche Zusammenarbeit.',
  appName = 'HDM – Holz Design Moers',
}: LayoutProps) {
  useEffect(() => {
    initFocusRingOnlyOnTab()
  }, [])

  return (
    <div className="antialiased">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />

        {/* <meta name="robots" content="noindex, nofollow" /> */}

        <meta name="application-name" content={appName} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={appName} />
        <meta name="description" content={description} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#0084B0" />

        <link rel="apple-touch-icon" href="/ci/hdm192.png" />
        <link rel="manifest" href="/app.webmanifest" />
        <link rel="shortcut icon" href="/ci/favicon.svg" type="image/svg+xml" sizes="any" />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  )
}
