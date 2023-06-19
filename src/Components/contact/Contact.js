import React, { useState } from 'react'
import Title from '../layouts/Title'
import { contactImg } from '../../assets/index'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Contact = () => {
    const [userName, setUserName] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errmsg, setErrmsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const emailValidation =()=>{
        return String(email)
        .toLocaleLowerCase()
        
    }

//..........Email validation start .........
    const handleSend=(e)=>{
        e.preventDefault()
        console.log(userName);
        if(userName === ""){
            setErrmsg("Username id required!");
        }else if(phoneNumber === ""){
            setErrmsg("Phone number is required!");
        }else if(email === ""){
            setErrmsg("Email id  is required!");
        }
        else if(!emailValidation(email)){
            setErrmsg("Give a Valid email!");
        }else if(subject === ""){
            setErrmsg("Please give your subject!");
        }else if(message === ""){
            setErrmsg("Email id  is required!");
        }else{
            setSuccessMsg("Your message has been sent Successfully");
            setErrmsg("");
            setUserName("");
            setphoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
            console.log(userName,phoneNumber,email,subject,message);
        }
        
    };
    return (
        <section id='contacts' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center'>
                <Title title="CONTACT" des="Contact With Me" />
            </div>
            <div className='w-full'>
                <div className='w-full h-auto flex justify-between flex-col lgl:flex-row'>
                    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne'>
                        <img
                            className='w-full h-64 object-cover rounded-lg mb-2'
                            src={contactImg}
                            alt="contactImg"
                        />
                        <div className=' flex flex-col gap-4'>
                            <h3 className='text-xl lgl:text-3xl font-bold text-white mt-5'>Sujit Vishwakarma</h3>
                            <p className='text-lg font-normal text-gray-400'>MERN Stack Developer
                            </p>
                            <p className='text-base text-gray-400 tracking-wide'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta est quidem sunt! Ipsa autem odit minima repellendus ab aliquid asperiores.
                            </p>
                            <p className='text-base text-gray-400 flex- items-center gap-2'>
                                Phone: <span className='text-lightText'>+91 8847877012</span>
                            </p>
                            <p className='text-base text-gray-400 flex- items-center gap-2'>
                                Email: <span className='text-lightText'>sujitv257@gmail.com</span>
                            </p>
                        </div>
                        <div>
                            <h2 className='text-base uppercase font-titleFont mb-4 mt-4'>
                                Find me in
                            </h2>
                            <div className='flex gap-4'>
                                <span className='bannerIcon'>
                                    <FaFacebook />
                                </span>
                                <span className='bannerIcon'>
                                    <FaTwitter />
                                </span>
                                <span className='bannerIcon'>
                                    <FaLinkedinIn />
                                </span><span className='bannerIcon'>
                                    <FaInstagram />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lgl:w-[60%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne'>
                        <form className='w-full flex-col gap-3 lgl:gap-6 py-2 lgl:py-5'>
                            {
                                errmsg && <p className='text-designColor items-center text-center animate-bounce'>{errmsg}</p>
                            }
                            {
                                successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne tracking-wide animate-bounce text-center text-green-500'>{successMsg}</p>
                            }
                            <div className='w-full flex flex-col lgl:flex-row gap-10'>
                                <div className='w-full lgl:w-1/2 flex flex-col gap-2 lgl:gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                        Your Name
                                    </p>
                                    <input onChange={(e)=>setUserName(e.target.value)} value={userName} className='contactInput bgOpacity' 
                                    type='text' placeholder='Enter your Name'/>
                                </div>
                                <div className='w-full lgl:w-1/2 flex flex-col gap-2 lgl:gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                        Phone Number
                                    </p>
                                    <input onChange={(e)=>setphoneNumber(e.target.value)} value={phoneNumber}
                                    className='contactInput bgOpacity' type='text' placeholder='Enter your Phone Number'/>
                                </div>    
                            </div>
                            <div className='w-full flex flex-col gap-4 mt-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                        Your e-mail Id
                                    </p>
                                    <input onChange={(e)=>setEmail(e.target.value)} value={email}
                                    className='contactInput bgOpacity' type='email' placeholder='Your Email-id'/>
                                </div>
                                <div className='w-full flex flex-col gap-4 mt-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                        Subject
                                    </p>
                                    <input onChange={(e)=>setSubject(e.target.value)} value={subject}
                                    className='contactInput bgOpacity' type='text' placeholder='Your Subject'/>
                                </div>
                                <div className='w-full flex flex-col gap-4 mt-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                        Your Message
                                    </p>
                                    <textarea onChange={(e)=>setMessage(e.target.value)} value={message}
                                    className='contactTextArea' cols='30' rows='8'></textarea>
                                </div>
                                <div className='w-full flex flec-col mt-4'>
                                    <button onClick={handleSend} className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent'
                                    >
                                    Send Message</button>
                                </div>
                                {
                                errmsg && <p className='text-designColor items-center text-center animate-bounce'>{errmsg}</p>
                                }
                                {
                                successMsg && <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne tracking-wide animate-bounce text-center text-green-500'>{successMsg}</p>
                                }
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
