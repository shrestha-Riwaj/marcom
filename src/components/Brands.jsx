import Pagination from "./Pagination";
import BlogArticles from "./blogArticles";

export default function Brand(){

    return <>
    {/* Brands section */}
    <section className="grid grid-cols-7">

        <div className=" col-span-1">
            
        </div>
        {/* title */}
        
        {/* Options */}
        <div className=" col-span-4 mt-4">
            <div className="col-span-full">
                <h2 className="font-bold text-blue-800 m-1 text-xl">Brands</h2>
            </div>
            <div className=" overflow-x-auto my-2">
            <div className="flex items-center gap-5 whitespace-nowrap pr-2">
                <div>
                    <button className="border-2 border-blue-800 px-3 m-1 rounded-full text-black">News</button>
                </div>
                <div>
                    <button className="border-2 border-blue-800 px-3 m-1 rounded-full text-black">Advertising</button>
                </div>
                <div>
                    <button className="border-2 border-blue-800 px-3 m-1 rounded-full text-black">Media</button>
                </div>
                <div>
                    <button className="border-2 border-blue-800 px-3 m-1 rounded-full text-black">Marketing Initiative</button>
                </div>
                <div>
                    <button className="border-2 border-blue-800 px-3 m-1 rounded-full text-black">Marketing</button>
                </div>
                <div>
                    <button className="border-2 border-blue-800 px-3 m-1 rounded-full text-black">Social Media</button>
                </div>
                <div>
                    <button className="border-2 border-blue-800 px-3 m-1 rounded-full text-black">Social Media</button>
                </div>
            </div>
            </div>
            <div className="m-1 ">
                <div className="mb-2">
                    <BlogArticles />
                </div>
                <div className="mb-2">
                <BlogArticles />
                </div>
            </div>
            <div className="flex justify-center ">
                <Pagination totalPages={10}/>
                
            </div>
        </div>
        

        <div className=" col-span-2 ">
            <div className="col-span-full">  
            </div>
            
        </div>
    </section>
    
    </>
}