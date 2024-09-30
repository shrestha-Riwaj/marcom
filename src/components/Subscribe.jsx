import { useState } from "react"

export default function Subscribe(){

    const [userInfo, setuserInfo] = useState({name:"", email:""});
    return <>

    {/* Newsletter section */}
    <section className=" grid grid-cols-6">
        <div className="col-span-1"></div>
        <div className="col-span-3 m-2 bg-red-100 px-2">
            <h1 className="font-extrabold text-xl">Subscribe to our Newsletter</h1>
            <p className="text-lg">Be the first to get exclusive offers and exciting news</p>
            <div className="mb-2">
                <input onChange={(e)=>
                setuserInfo({...userInfo,name: e.target.value})
                }  className="border-2 border-gray-300 rounded-md p-1" type="text"
                value={userInfo.name} />
            </div>
            <div className="mb-4">
                <input onChange={(e)=>
                setuserInfo({...userInfo,email: e.target.value})
                } className="border-2 border-gray-300 rounded-md p-1"
                 type="email" value={userInfo.email}/>
            </div>
            <button onClick={(e)=>{
                e.preventDefault();
                console.log(userInfo);
            }}
             className="border-2 border-blue-700 bg-blue-700 rounded-md p-1">Subscribe Now</button>
        </div>
        <div className="col-span-2"></div>
    </section>
    </>
}