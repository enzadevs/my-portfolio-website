'use client'

import './contact.css'
import { useState,useEffect } from 'react'
import Link from 'next/link'

function MyContacts(){
    return(
        <>
            <span className='info-span'>
                <h3 className='info-element centre transition-fast border-radius'>Eziz Egemberdiyev</h3>
                <p className='info-element centre transition-fast border-radius'>+99362934985</p>
                <p className='info-element centre transition-fast border-radius'>e.eziz5@yandex.ru</p>
                <Link href='mailto:e.eziz5@yandex.ru?subject=Hello' className='send-button next-link centre transition-fast border-radius' target='_blank'>
                    Send E-mail
                </Link>
            </span>
        </>
    )
}

export default function ContactPage(){
    const [ isHidden,setIsHidden ] = useState(true)

    useEffect(()=>{
        setIsHidden(true)
    },[])

    function handleClick(){
        setIsHidden(false)
    }

    function Button(){
        return(
            <button onClick={handleClick} className='primary-button'>
                I'm not a robot 🤖
            </button>
        )
    }

    return (
        <>
            <div className='border-bottom'></div>
            <div className='contact-page-wrapper margin-auto-1440'>
                {isHidden ? 
                    <h2 className='contact-header'>
                        Here are my contacts. Just click on button to prove you are not a robot.
                    </h2>
                :
                    <></>
                }
                <span className='contacts-container centre'>
                    {isHidden ? <Button/> : <MyContacts/>}
                </span>
            </div>
        </>
    )
}