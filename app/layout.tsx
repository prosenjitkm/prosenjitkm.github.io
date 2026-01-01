import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prosenjit Kumar Mandal',
  description: 'Personal Portfolio of Prosenjit Kumar Mandal',
  robots: 'noindex, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/logo/favicon.ico" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* CSS Stylesheets */}
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/slick.css" />
        <link rel="stylesheet" href="/assets/css/vendor/slick-theme.css" />
        <link rel="stylesheet" href="/assets/css/vendor/aos.css" />
        <link rel="stylesheet" href="/assets/css/plugins/feature.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className="template-color-1 spybody" data-spy="scroll" data-target=".navbar-example2" data-offset="70">
        {children}
        
        <Script src="/assets/js/vendor/jquery.js" strategy="beforeInteractive" />
        <Script src="/assets/js/vendor/modernizer.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/vendor/feather.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/slick.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/bootstrap.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/text-type.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/wow.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/aos.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/particles.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/email.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
