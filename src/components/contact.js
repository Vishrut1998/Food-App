import React from 'react'
import {HiOutlineMail} from 'react-icons/hi';
import {BsPhone} from 'react-icons/bs';


const Contact = () => {
    return (
        <div name='contact' className='w-full h-[1238px] bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/f3ebe8bb-a653-4e6d-a884-fbbe08bec439" className='mb-20 flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-2xl font-bold text-gray-300 py-4'>Submit the form or contact admin :</p>
                <p className='text-gray-300 py-4 gap-2 flex flex-row justify-left items-center'><HiOutlineMail size={30}/>sharmavishrut1998@gmail.com</p>
                <p className='text-gray-300 py-4 gap-2 flex flex-row justify-left items-center'><BsPhone size={30}/>+91 9540105285</p>
            </div>
            <input className="bg-[#ccd6f6] p-2" type="text" placeholder='Your Name' name="Name"/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Your Email' name="Email"/>
            <textarea className='p-2 bg-[#ccd6f6]' name="message" rows="10" placeholder='Message'/>
            <button className='text-white border-2 hover:bg-pink-600 hover-border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
    )
}


export default Contact