import './navbar.css'
import Link from 'next/link'

export default function NavBar(){
    return (
        <nav className=''>
            <Link href='/' className='brand-container next-link centre transition-fast border-radius'>
                Enza
            </Link>
            <Link href='/contact' className='primary-button next-link centre'>
                Contact me
            </Link>
        </nav>
    )
}