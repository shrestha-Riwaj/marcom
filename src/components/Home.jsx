import { useState } from 'react';
import Desktop from '../images/desktop.jpg'
import MainPage from './MainPage'
import Subscribe from './Subscribe'
import BlogArticles from './blogArticles'


export default function Home(){
    const [userInfo, setuserInfo] = useState({name:"", email:""});

    return <>
    {/* main home page */}

    <section className=' grid grid-cols-6 gap-5 mb-10'>

        {/* div for articles.... */}
        <div className=' col-span-1'></div>

        {/* show our main product */}
        <div className='flex flex-col col-span-3 '>
            {/* main product div */}
            <MainPage />
            {/* Other posts */}
            <div className=' mt-5'>
                <div className=' '>
                    <BlogArticles />
                </div>
            </div>

            {/* Other posts */}
            <div className=' mt-5'>
                <div className=' '>
                    <BlogArticles />
                </div>
            </div>

            {/* Brands */}
            <div>
            <div className='flex items-center gap-4 my-4'>
                <h2 className='font-bold text-blue-800 text-3xl'>Brands</h2>
                
                <hr className=' border-[1px] w-32 border-blue-800  my-2'/>
            </div>
            <MainPage />
            {/* Other posts */}
            <div className=' mt-5'>
                <div className=' '>
                    <BlogArticles />
                </div>
            </div>

            {/* Other posts */}
            <div className=' mt-5'>
                <div className=' '>
                    <BlogArticles />
                </div>
            </div>
            </div>
        </div>

        
        

        {/* page for ads and all */}
        <div className=' col-span-2 ml-5 mr-16 my-5'>
        <div className='flex items-center justify-between gap-4 my-4'>
                <h2 className='font-bold text-blue-800 text-3xl'>Latest stories</h2>
                
                <hr className=' border-[1px] w-28 border-blue-800 mr-4 my-2'/>
            </div>
            <div className='mb-4'>
                <img src={Desktop} alt="" />
            </div>
            <div className='mb-4'>
                <img src={Desktop} alt="" />
            </div>
            <div className=' flex flex-col gap -5 bg-slate-50 shadow-lg my-10 mr-2 px-2 h-[500px] w-[300px] sticky top-2 max-h-[500px] overflow-auto'>
                {/* heading and text */}
                <div className='my-10 mx-6 flex flex-col gap-3'>
                    <h1 className='font-bold text-xl'>Subscribe to our Newsletter!</h1>
                    <p className='text-gray-400'>Be the first to get exclusive offers and the latest news</p>
                </div>
                
                <div className=' flex flex-col'>
                        <input onChange={(e)=>setuserInfo({...userInfo, name:e.target.value})}
                        className='rounded-md text-black outline-none mx-6 p-1' type="text" value={userInfo.name} placeholder='Your Name'/>
                        <input onChange={(e)=>{
                            setuserInfo({...userInfo, email:e.target.value})
                        }} className='rounded-md mt-2 black outline-none mx-6 p-1' type="email" value={userInfo.email} placeholder='Email address'/>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            console.log({userInfo});
                        }} className='rounded-md py-3 mt-10 text-white bg-blue-800 outline-none mx-6 p-1'>Subscribe Now</button>
                        {/* {userInfo.name} - {userInfo.email} */}
                </div>
            </div>

            
        </div>
        
    </section>

    </>
}