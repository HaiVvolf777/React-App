import React from 'react'

import {   
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-black text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4 outline-none text-gray-700 font-bold' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 Haiwolf, All rights reserved</p>
        <div className='flex justify-between sm:w-[100px] pt-4 text-2xl'>
            <a href='"https://www.instagram.com/_hadii.7._/?igshid=YmMyMTA2M2Y%3D"' target="_blank" rel="noreferrer"><FaInstagram /> </a>
            <a href='https://www.linkedin.com/in/haider-ali-391868229/' target="_blank" rel="noreferrer"><FaLinkedin /> </a>
           <a href='https://github.com/HaiVvolf777' target="_blank" rel="noreferrer"> <FaGithub /> </a>
        </div>
        </div>
    </div>
  )
}

export default Footer