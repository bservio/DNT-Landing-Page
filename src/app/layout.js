import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'III Congresso DNT',
  description: 'III Congresso de Direito, Negócios e Tecnologia.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
