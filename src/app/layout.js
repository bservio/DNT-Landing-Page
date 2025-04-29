import { Montserrat } from 'next/font/google'
import './globals.css'
import{ GoogleTagManager } from "@next/third-parties/google"
import Navbar from './components/Header'
import LGPDNotice from './components/LGPDNotice';
import Footer from './components/Footer';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'IV Congresso DNT',
  description: 'IV Congresso de Direito, Negócios e Tecnologia.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">

      <GoogleTagManager gtmId="GTM-PB72P9C"/>
      
      <body className={`${montserrat.className} flex flex-col min-h-screen`}>
        <LGPDNotice />
        <Navbar />
        <div className='flex-1'>
          {children}
        </div>
        <Footer />
         <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PB72P9C"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            strategy="lazyOnload"
          ></iframe>
        </noscript>

      </body>
    </html>
  )
}
