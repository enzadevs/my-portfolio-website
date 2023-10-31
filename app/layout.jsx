export const metadata = {
    title: 'Enza Devs',
    description: 'Young and ambitious web developer from Turkmenistan.',
    name: 'viewport', 
    content:'width=device-width, initial-scale=1'
}

import './global.css'

export default function RootLayout({children}){
    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    )
}