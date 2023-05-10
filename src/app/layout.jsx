import './globals.css'

export const metadata = {
  title: 'Claretmun',
  description: 'tetas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
