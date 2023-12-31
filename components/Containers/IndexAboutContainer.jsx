import 'styles/index-about-container.css'
import Link from 'next/link'

export default function IndexAboutContainer(){
    return (
        <div className='index-about-container'>
            <span className='text-container'>
                <h1 className='about-header'>Hi, I'm Eziz. Nice to meet you.</h1>
                <h3 className='about-text'>Motivated student with excellent hard and soft skills looking forward to gain valuable experience in a professional environment and working on real world projects with team. I’m skilled in development of modern MERN stack web apps and keeping design responsive and elegant.</h3>
                <span className='margin-auto-1440 centre'>
                    <Link href='/my_resume.pdf' className='resume-btn' target='_blank' rel='noopener noreferrer'>
                        Get resume
                    </Link>
                </span>
            </span>
        </div>
    )
}