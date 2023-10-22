export const metadata = {
    title: 'NextJS',
    description: 'App',
    name: 'viewport', 
    content:'width=device-width, initial-scale=1'
}

import 'styles/global.css'
import { StrictMode } from 'react'
import localFont from 'next/font/local'

const InterFont = localFont({
    src: '../public/fonts/inter-regular.ttf'
})

export default function RootLayout({ children }) {
    return (
        <StrictMode>
            <html lang='en' className={InterFont.className}>
                <body>
                    {children}
                </body>
            </html>
        </StrictMode>
  )
}