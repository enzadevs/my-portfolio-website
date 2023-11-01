export const metadata = {
    title: 'Enza Devs | Full stack web developer',
    description: 'Young and ambitious web developer from Turkmenistan.',
    name: 'viewport', 
    content:'width=device-width, initial-scale=1'
}

import './global.css'
import localFont from 'next/font/local'
import NavBar from 'components/NavContainers/NavBar/NavBar'

const FontEuropa = localFont({
    src: '../styles/fonts/europa_font_regular.woff'
})

export default function RootLayout({children}){
    return (
        <html lang='en' className={FontEuropa.className}>
            <body>
                <NavBar/>
                {children}
            </body>
        </html>
    )
}