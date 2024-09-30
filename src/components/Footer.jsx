import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';


export default function Footer(){

    const [userInfo, setuserInfo]  = useState({
        name:"",
        email: "",
    });
    // const [email, setEmail]  = useState('');
    return <>
    
    <footer className=" bg-dark-blue">
        {/* Newsletter Section */}
        <section className=' mx-20 flex flex-col'>
            <div className='pt-5 flex justify-between items-center'>
                <div className='flex flex-col gap-3 mt-10'>
                    <p className='text-base text-white w-[450px]'>
                    MarCom has been the consistent leader online in reporting on the Nepali marketing, advertising and media space since 1999.
                    </p>
                <h2 className='font-bold text-2xl text-white'>{"Subscribe to Our Newsletter!"}</h2>
                    <div className=' flex'>
                        <input onChange={(e)=>setuserInfo({...userInfo, name:e.target.value})}
                        className='rounded-md text-black outline-none m-1 p-1' type="text" value={userInfo.name} placeholder='Your Name'/>
                        <input onChange={(e)=>{
                            setuserInfo({...userInfo, email:e.target.value})
                        }} className='rounded-md black outline-none m-1 p-1' type="email" value={userInfo.email} placeholder='Email address'/>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            console.log({userInfo});
                        }} className='rounded-md text-white bg-blue-800 outline-none m-1 p-1'>Subscribe Now</button>
                        {/* {userInfo.name} - {userInfo.email} */}
                    </div>
                </div>
                <div>
                <div className="flex items-center space-x-4 mb-4 mr-2 ">
                    
                    <ul className="flex items-center space-x-4">
                        <li className=''>
                            <a className="hover:text-blue-400 transition duration-200 text-white" href="#"><i className="ri-facebook-circle-fill text-3xl  rounded-full"></i></a>
                        </li>
                        <li>
                            <a className="hover:text-red-500 transition duration-200 text-white" href="#"><i className="ri-instagram-line text-3xl"></i></a>
                        </li>
                        <li>
                            <a className="hover:text-black transition duration-200 text-white" href="#"><i className="ri-twitter-x-line text-3xl"></i></a>
                        </li>
                        <li>
                            <a className="hover:text-red-700 transition duration-200 text-white" href="#"><i className="ri-youtube-fill text-3xl"></i></a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            
            {/* Nav Links */}

            {/* Home */}
            <div className='flex flex-col justify-center gap-3 mt-10 text-white'>
                <h1 className='font-bold text-xl uppercase'>{"HOME"}</h1>
                <ul className=' ml-3'>
                    <li className=' list-disc'>Service Agreement</li>
                </ul>
                <hr className=' border-1 border-gray-300 my-2'/>
            </div>

            {/* News */}
            <div className='flex flex-col justify-center gap-3 mt-7 text-white'>
                <h1 className='font-bold text-xl uppercase'>{"NEWS"}</h1>
                <ul className=' ml-4 grid grid-cols-6 gap-3'>
                    <li className=' list-disc'>
                        <a href="#">Politics</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Corporate</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Banking & Insurance</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">IT & Telecom</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Consumer Durables</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">FMCG</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Automobiles</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Entertainment</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Travels</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Construction</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Education</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Misc</a>
                    </li>
                </ul>
                <hr className=' border-1 border-gray-300 my-2'/>
            </div>

            {/* Articles */}
            <div className='flex flex-col justify-center gap-3 mt-7 text-white'>
                <h1 className='font-bold text-xl uppercase'>{"Articles"}</h1>
                <ul className=' ml-4 grid grid-cols-6 gap-3'>
                <li className=' list-disc'>
                        <a href="#">Politics</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Corporate</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Banking & Insurance</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">IT & Telecom</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Consumer Durables</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">FMCG</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Automobiles</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Entertainment</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Travels</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Construction</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Education</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Misc</a>
                    </li>
                </ul>
                <hr className=' border-1 border-gray-300 my-2'/>
            </div>
            
            {/* Voices */}
            <div className='flex flex-col justify-center gap-3 mt-7 text-white'>
                <h1 className='font-bold text-xl uppercase'>{"Voices"}</h1>
                <ul className=' ml-4 grid grid-cols-6 gap-3'>
                <li className=' list-disc'>
                        <a href="#">Politics</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Corporate</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Banking & Insurance</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">IT & Telecom</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Consumer Durables</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">FMCG</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Automobiles</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Entertainment</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Travels</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Construction</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Education</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Misc</a>
                    </li>
                </ul>
                <hr className=' border-1 border-gray-300 my-2'/>
            </div>

            {/* PR */}

            <div className='flex flex-col justify-center gap-3 mt-7 text-white'>
                <h1 className='font-bold text-xl uppercase'>{"PR"}</h1>
                <ul className=' ml-4 grid grid-cols-6 gap-3'>
                <li className=' list-disc'>
                        <a href="#">Politics</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Corporate</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Banking & Insurance</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">IT & Telecom</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Consumer Durables</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">FMCG</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Automobiles</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Entertainment</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Travels</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Construction</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Education</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Misc</a>
                    </li>
                </ul>
                <hr className=' border-1 border-gray-300 my-2'/>
            </div>

            {/* Advertising */}

            <div className='flex flex-col justify-center gap-3 mt-7 text-white'>
                <h1 className='font-bold text-xl uppercase'>{"Advertising"}</h1>
                <ul className=' ml-4 grid grid-cols-6 gap-3'>
                <li className=' list-disc'>
                        <a href="#">Politics</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Corporate</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Banking & Insurance</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">IT & Telecom</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Consumer Durables</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">FMCG</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Automobiles</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Entertainment</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Travels</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Construction</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Education</a>
                    </li>
                    <li className=' list-disc'>
                        <a href="#">Misc</a>
                    </li>
                </ul>
                <hr className=' border-1 border-gray-300 my-2'/>
            </div>
            
            {/* Copyright part */}
            <div className=' mb-10 mt-4'>
                <p className=' text-center text-sm text-white'>
                Copyright © 2024 marcom!. All pages of the Website are subject to our terms and conditions and privacy policy. You must not reproduce, duplicate, copy, sell, resell or exploit any material on the Website for any commercial purposes.
                </p>
            </div>
        </section>
    </footer>
    
    
    </>
}