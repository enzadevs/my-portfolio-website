'use client'

import './navbar.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/images/eziz_logo.png'
import {FaTimes} from 'react-icons/fa'
import { usePathname } from 'next/navigation'

function ContactMe(){
    return(
        <Link href='/contact' className='primary-button next-link centre'>
            Contact me
        </Link>
    )
}

function Cancel(){
    return(
        <Link href='/' className='cancel-container centre transition-fast border-radius'><FaTimes className='cancel-logo'/></Link>
    )
}

export default function NavBar(){
    const pathname = usePathname()
    return (
        <nav>
            <Link href='/' className='brand-container next-link centre transition-fast border-radius'>
                <Image
                    className='navbar-logo'
                    src={Logo}
                    alt='logo'
                ></Image>
            </Link>
            {pathname === '/' ? <ContactMe/> : <Cancel/>}
        </nav>
    )
}