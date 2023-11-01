import 'styles/index.css'

import Image from 'next/image'
import HeroDevices from 'public/images/hero-devices.svg'
import IndexHeroContainer from 'components/Containers/IndexHeroContainer'
import IndexAboutContainer from 'components/Containers/IndexAboutContainer'
import SkillsContainer from 'components/Containers/SkillsContainer'

export default function HomePage(){
    return (
        <div className='home-page-container'>
            <IndexHeroContainer/>
            <Image
                className='index-hero-devices-img'
                src={HeroDevices}
                alt='desktop with pc and tablet'
            ></Image>
            <IndexAboutContainer/>
            <SkillsContainer/>
        </div>
    )
}