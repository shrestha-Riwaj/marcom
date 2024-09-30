import Desktop from '../images/desktop.jpg'

export default function BlogArticles(){


    return <>
    {/* 2col articles/ post for every page */}

    <section className=" grid grid-cols-2 gap-4">
        {/* first post */}
        <div className="bg-gray-100">
            {/* image and button */}
            <div className='relative'>
            <img src={Desktop} alt="" />
            <button className='border-2 border-blue-900 bg-blue-900 absolute bottom-0 right-0 m-1 p-1 rounded-md text-white text-sm'>Marketing</button>
        </div>

        {/* heading/title */}
        <div className=' m-1 line-clamp-2'>
            <h1 className='font-bold text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quaerat harum unde consequatur officia sunt.</h1>
        </div>

        {/* short description */}
        <div className=' flex flex-col m-1 gap-1'>
            <p>By Nisha qureshi</p>
        </div>

        {/* published date */}
        <div className='m-1 flex font-light text-gray-400 gap-4'>
            <div className='flex gap-1'>
            <i class="ri-calendar-2-line"></i>
            <p>Sep 27, 2024</p>
            <p>7:00</p>
            </div>
            <div className='flex gap-1'>
            <i class="ri-time-line"></i>
                <p>4 Min read</p>
            </div>
        </div>
        </div>

        {/* second post */}
        <div className="bg-gray-100">
            {/* image and button */}
            <div className='relative'>
            <img src={Desktop} alt="" />
            <button className='border-2 border-blue-900 bg-blue-900 absolute bottom-0 right-0 m-1 p-1 rounded-md text-white text-sm'>Marketing</button>
        </div>

        {/* heading/title */}
        <div className=' m-1 line-clamp-2'>
            <h1 className='font-bold text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quaerat harum unde consequatur officia sunt.</h1>
        </div>

        {/* short description */}
        <div className=' flex flex-col m-1 gap-1'>
            <p>By Nisha qureshi</p>
        </div>

        {/* published date */}
        <div className='m-1 flex font-light text-gray-400 gap-4'>
            <div className='flex gap-1'>
            <i class="ri-calendar-2-line"></i>
            <p>Sep 27, 2024</p>
            <p>7:00</p>
            </div>
            <div className='flex gap-1'>
            <i class="ri-time-line"></i>
                <p>4 Min read</p>
            </div>
        </div>
        </div>

    </section>
    
    </>
}