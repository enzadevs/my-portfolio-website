import './navbar.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/images/eziz_logo.png'

export default function NavBar(){
    return (
        <nav className=''>
            <Link href='/' className='brand-container next-link centre transition-fast border-radius'>
                <Image
                    className='navbar-logo'
                    src={Logo}
                    alt='logo'
                ></Image>
            </Link>
            <Link href='/contact' className='primary-button next-link centre'>
                Contact me
            </Link>
        </nav>
    )
}