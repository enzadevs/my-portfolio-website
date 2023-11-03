import Link from 'next/link'
import Image from 'next/image'
import GreenTrees from 'public/images/photo_stash_bg_img.jpg'

export default function RecentWorkContainer(){
    return (
        <div className='recent-works-container margin-auto-1440'>
            <h2 className='hero-header'>My recent work</h2>
            <p>Here are a few projects I've developed and been working on:</p>
                <span className='projects-container'>
                    <span className='project-itself centre'>
                        <span className='link-container'>
                            <p className='project-title'>Search and download free stock photos.</p>
                            <Link href='https://photo-stash.vercel.app/' className='visit-wesite-button next-link centre' target='_blank'>
                                Visit website
                            </Link>
                        </span>
                        <Image
                            className='project-image'
                            src={GreenTrees}
                            alt='green trees'
                            fill
                        ></Image>
                    </span>
                </span>
        </div>
    )
}