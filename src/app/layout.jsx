import { Open_Sans } from 'next/font/google'

import '@/styles/tailwind.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '800'],
  style: ['normal', 'italic'],
  variable: '--font-open-sans',
})

export const metadata = {
  title: {
    template: '%s - Keeping Up With Craft',
    default: 'Keeping Up With Craft',
  },
  description:
    'Short conversations wherein we help you keep up with the goings-on of the CraftCMS world (and web development in general) by highlighting stuff that happened that we think is worth a look.',
  authors: [{ name: 'Michael Rog' }, { name: 'Andrew Welch' }],
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} h-full bg-theme font-normal text-white/85 antialiased`}
    >
      <body className="flex min-h-full">
        <div className="w-full p-6 pb-40">{children}</div>
      </body>
    </html>
  )
}
