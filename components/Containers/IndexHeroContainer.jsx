import 'styles/index-hero-container.css'
import ProfilePic from 'public/images/my_profile.png'
import Image from 'next/image'

export default function IndexHeroContainer(){
    return (
        <div className='index-hero-container'>
            <h1 className='hero-header'>Full Stack Web Developer</h1>
            <h2 className='hero-text'>I make modern full-stack web apps,and I'm in love with it.</h2>
            <span className='hero-image-wrapper'>
                <Image
                    className='hero-profile-img'
                    src={ProfilePic}
                    alt='profile photo of mine'
                    height={200}
                    width={200}
                    quality={85}
                    priority={true}
                ></Image>
            </span>
        </div>
    )
}