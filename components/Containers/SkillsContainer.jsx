import {TbDatabaseCog} from 'react-icons/tb'
import {LiaTerminalSolid} from 'react-icons/lia'
import {BsPatchPlus} from 'react-icons/bs'

export default function SkillsContainer(){
    return (
        <div className='wrapper margin-auto-1440 centre'>
            <div className='skills-container'>
                <div className='skill-column'>
                    <span className='skill-header-container'>
                        <span className='skill-svg-container centre'>
                            <TbDatabaseCog className='skill-icons'/>
                        </span>
                        <h3 className='hero-header'>Backend and database</h3>
                    </span>
                    <span className='skill-body'>
                        <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                        <p className='highlight-text'>Tech I like working with:</p>
                        <p>Node</p>
                        <p>Express</p>
                        <p>MongoDB</p>
                    </span>
                </div>
                <div className='skill-column'>
                    <span className='skill-header-container'>
                        <span className='skill-svg-container centre'>
                            <LiaTerminalSolid className='skill-icons'/>
                        </span>
                        <h3 className='hero-header'>Frontend development</h3>
                    </span>
                    <span className='skill-body'>
                        <p>I really enjoy working on frontend part of app, and prefer designing things from scratch.</p>
                        <p className='highlight-text'>Languages I speak:</p>
                        <p>React</p>
                        <p>NextJS</p>
                        <p>Javascript</p>
                        <p>CSS</p>
                    </span>
                </div>
                <div className='skill-column last-column'>
                    <span className='skill-header-container'>
                        <span className='skill-svg-container centre'>
                            <BsPatchPlus className='skill-icons'/>
                        </span>
                        <h3 className='hero-header'>Utilities</h3>
                    </span>
                    <span className='skill-body'>
                        <p>I love learning new stuff and keep growing on craft I'm passionate about.</p>
                        <p className='highlight-text'>Additional skills:</p>
                        <p>Github</p>
                        <p>Stackoverflow</p>
                        <p>Git</p>
                        <p>Vercel</p>
                        <p>Photoshop</p>
                    </span>
                </div>
            </div>
        </div>
    )
}