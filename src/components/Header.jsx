import MarcomLogo from '../images/marcom.png'

export default function Header(){

    return <>
    
    <div className='flex bg-bg-head justify-between items-center'>
        {/* company logo */}
        <div>
            <img className='w-48 mx-2 my-2' src={MarcomLogo} alt="" />
        </div>
        <div className=' flex gap-3 mx-2'>
            {/* search */}
            <div className="border-2 border-gray-300 rounded-md p-1">
                <i class="ri-search-2-line"></i>
                <input className=" p-1 text-sm outline-none" type="text" placeholder='Search...'/>
            </div>
            
            {/* button */}
            <button className='className="border-2 p-2 text-white border-blue-700 bg-blue-700 rounded-md p-1"'>Subscribe</button>
        </div>
    </div>
    
    </>
}