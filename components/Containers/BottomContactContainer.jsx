import 'styles/bottom-contact-container.css'
import Link from 'next/link'

export default function BottomContactContainer(){
    return (
        <div className='bottom-contacts-container centre'>
            <div className='contacts-box'>
                <h2 className='hero-header contact-header'>Start a project</h2>
                <p>Interested in working together? We could meet up.</p>
                <Link href='/contact' className='secondary-button next-link centre'>
                    Call me
                </Link>
            </div>
        </div>
    )
}