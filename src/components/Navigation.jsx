import { useState } from "react"
import Brand from "./Brands";

export default function Navigation (){

    // const [isOpen, setisOpen] = useState(false);
    const [openMenu, setopenMenu] = useState(null);
    const [openLink, setOpenLink] = useState(null);

    function handleLink(){
        setOpenLink(<Brand />);
        setopenMenu(null);
    }

    return <>
    
    {/* Navigation Links */}
    <nav className="grid grid-cols-4 bg-dark-blue mb-10 p-2">
        <div></div>
        <ul className=" grid grid-cols-6 col-span-2 z-10 text-white text-lg text-center">
            {/* Home */}
            <li  className="relative">
                <a className="hover:border-b-2 hover:border-blue-500 transition duration-200" href="#">Home
                </a>
            </li>
           

            {/* News */}
            <li onClick={()=>{
                setopenMenu(prev => (prev==="news"?null:"news"))
            }} className=" relative">
            <a className="hover:border-b-2 hover:border-blue-500 transition duration-200 " href="#">News
            {openMenu === 'news'?(<i className="ri-arrow-drop-down-fill font-bold"></i>)
            :(<i className="ri-arrow-drop-up-fill font-bold"></i>)}
            </a>
            {openMenu === "news" && 
            <ul className="absolute left-0 bg-dark-blue whitespace-nowrap text-base mt-1">
            <li onClick={handleLink} className="p-1  hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Politics</a>
            </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">
                    Corporate
                </a>
            </li>
            <li className="p-1 hover:bg-blue-900">
            <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Banking & Insurance</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">IT & Telecom</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Consumer Durables</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">FMCG</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Automobiles</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Entertainment</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Travels</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Construction</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Education</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Misc</a>
                </li>
    </ul>
            }
            
            
            </li>

            {/* Articles */}
            <li onClick={()=>{
                setopenMenu(prev=>(prev==="articles"?null:"articles"))
            }} className="relative">
            <a className="hover:border-b-2 hover:border-blue-500 transition duration-200" href="#">Articles
            {openMenu === "articles"?(<i class="ri-arrow-drop-down-fill font-bold"></i>):
            <i class="ri-arrow-drop-up-fill font-bold"></i>}
            
            </a>
            {
                openMenu === "articles" &&
                <ul className="absolute left-0  bg-dark-blue whitespace-nowrap text-base mt-1">
                    <li className="p-1  hover:bg-blue-900">
                        <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Politics</a>
                    </li>
                    <li className="p-1 hover:bg-blue-900">
                        <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">
                            Corporate
                        </a>
                    </li>
                    <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Banking & Insurance</a>
                        </li>
                    <li className="p-1 hover:bg-blue-900">
                        <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">IT & Telecom</a>
                        </li>
                    <li className="p-1 hover:bg-blue-900">
                        <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Consumer Durables</a>
                        </li>
                    <li className="p-1 hover:bg-blue-900">
                        <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">FMCG</a>
                        </li>
                    <li className="p-1 hover:bg-blue-900">
                        <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Automobiles</a>
                        </li>
                    <li className="p-1 hover:bg-blue-900">
                        <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Entertainment</a>
                        </li>
                    <li className="p-1 hover:bg-blue-900">
                        <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Travels</a>
                        </li>
                    <li className="p-1 hover:bg-blue-900">
                        <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Construction</a>
                        </li>
                    <li className="p-1 hover:bg-blue-900">
                        <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Education</a>
                        </li>
                    <li className="p-1 hover:bg-blue-900">
                        <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Misc</a>
                        </li>
            </ul>
            }
            
            </li>

            {/* Voices */}
            <li onClick={()=>{
                setopenMenu(prev=>(prev==="voices"?null:"voices"))
            }} className="relative">
            <a className="hover:border-b-2 hover:border-blue-500 transition duration-200" href="#">Voices
            {openMenu === "voices"?(<i className="ri-arrow-drop-down-fill font-bold"></i>):
            <i className="ri-arrow-drop-up-fill font-bold"></i>}
            </a>

            {openMenu==="voices" &&
            <ul className="absolute left-0 bg-dark-blue whitespace-nowrap text-base mt-1">
            <li className="p-1  hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Politics</a>
            </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">
                    Corporate
                </a>
            </li>
            <li className="p-1 hover:bg-blue-900">
            <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Banking & Insurance</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">IT & Telecom</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Consumer Durables</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">FMCG</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Automobiles</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Entertainment</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Travels</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Construction</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Education</a>
                </li>
            <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Misc</a>
                </li>
    </ul>
            }
            
            </li>

            {/* PR */}
            <li onClick={()=>{
                setopenMenu(prev=>(prev==='pr'?null:"pr"))
            }} className="relative">
                <a className="hover:border-b-2 hover:border-blue-500 transition duration-200" href="">PR
                {openMenu === "pr"?(<i className="ri-arrow-drop-down-fill font-bold"></i>):
            <i className="ri-arrow-drop-up-fill font-bold"></i>}
                </a>
                {openMenu === "pr" &&
                <ul className="absolute left-0 bg-dark-blue whitespace-nowrap text-base mt-1">
                <li className="p-1  hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Politics</a>
                </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">
                        Corporate
                    </a>
                </li>
                <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Banking & Insurance</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">IT & Telecom</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Consumer Durables</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">FMCG</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Automobiles</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Entertainment</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Travels</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Construction</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Education</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Misc</a>
                    </li>
        </ul>
                }
                
            </li>

            {/* Advertising */}
            <li onClick={()=>{
                setopenMenu(prev=>(prev==="advertising"?null:"advertising"))
            }} className="relative">
                <a className="hover:border-b-2 hover:border-blue-500 transition duration-200" href="#">Advertising
                {openMenu === "advertising"?(<i className="ri-arrow-drop-down-fill font-bold"></i>):
            <i className="ri-arrow-drop-up-fill font-bold"></i>}
                </a>
                {openMenu === "advertising" &&
                <ul className="absolute left-0 bg-dark-blue whitespace-nowrap text-base mt-1">
                <li className="p-1  hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Politics</a>
                </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">
                        Corporate
                    </a>
                </li>
                <li className="p-1 hover:bg-blue-900">
                <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Banking & Insurance</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">IT & Telecom</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Consumer Durables</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">FMCG</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Automobiles</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Entertainment</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Travels</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Construction</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Education</a>
                    </li>
                <li className="p-1 hover:bg-blue-900">
                    <a className="hover:border-b-2 hover:border-blue-700 transition duration-200" href="#">Misc</a>
                    </li>
        </ul>
                }
                
            </li>

        </ul>
    </nav>
    
    </>
}