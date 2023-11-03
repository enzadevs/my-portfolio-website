import './footer.css'
import EzizLogo from 'public/images/eziz_logo_white.png'
import Link from 'next/link'
import Image from 'next/image'
import {BsGithub} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'

export default function Footer(){
    return (
        <footer>
            <div className='footer-div margin-auto-1440 centre'>
                <Image
                    className='footer-logo'
                    src={EzizLogo}
                    alt='my logo'
                    quality={100}
                ></Image>
                <h2 className='footer-header'>Living, learning and leveling up daily.</h2>
                <p>Handcrafted by me.</p>
                <span className='links-container'>
                    <Link href='https://github.com/enzadevs' className='footer-link-container next-link centre'>
                        <BsGithub className='footer-icons'/>
                    </Link>
                    <Link href='mailto:e.eziz5@yandex.ru?subject=Hello' className='footer-link-container next-link centre'>
                        <MdOutlineMail className='footer-icons'/>
                    </Link>
                </span>
                <p>2023</p>
            </div>
        </footer>
    )
}