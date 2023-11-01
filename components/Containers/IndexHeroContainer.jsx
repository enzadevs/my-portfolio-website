import ProfilePic from 'public/images/template.png'
import Image from 'next/image'

export default function IndexHeroContainer(){
    return (
        <div className='index-hero-container'>
            <h1 className='hero-header'>Full Stack Web Developer.</h1>
            <h2 className='hero-text'>I make modern full-stack web apps,and I'm in love with it.</h2>
            <span className='her-image-wrapper'>
                <Image
                    className='hero-profile-img'
                    src={ProfilePic}
                    alt='profile photo of mine'
                    height={200}
                    width={200}
                ></Image>
            </span>
        </div>
    )
}