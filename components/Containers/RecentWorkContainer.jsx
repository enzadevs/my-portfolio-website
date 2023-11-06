import 'styles/recent-work-container.css'
import Link from 'next/link'
import Image from 'next/image'
import PhotoStash from 'public/images/photo_stash_bg_img.jpg'
import Zehinlije from 'public/images/zehinlije.JPG'

export default function RecentWorkContainer(){
    return (
        <div className='recent-works-container margin-auto-1440'>
            <h2 className='hero-header'>My recent work</h2>
            <p className='recent-work-text'>Here are a few projects I've developed and been working on:</p>
                <span className='projects-container'>
                    <span className='project-wrapper'>
                        <span className='project-overlay'>
                            <h4 className='hero-header overlay-header'>Search and download high quality stock photos.</h4>
                            <Link href='https://photo-stash.vercel.app/' className='secondary-button next-link centre' target='_blank'>
                                Visit website
                            </Link>
                        </span>
                        <Image
                            className='project-image'
                            src={PhotoStash}
                            alt='photo of photostash website'
                            quality='80'
                        ></Image>
                    </span>
                    <span className='project-wrapper'>
                        <span className='project-overlay'>
                            <h4 className='hero-header overlay-header'>Best place for your kids.</h4>
                            <span className='prototyping-button centre'>
                                Prototyping
                            </span>
                        </span>
                        <Image
                            className='project-image'
                            src={Zehinlije}
                            alt='photo of zehinlije website'
                            quality='80'
                        ></Image>
                    </span>
                </span>
        </div>
    )
}