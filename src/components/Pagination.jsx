import { useState } from "react"


export default function Pagination(totalPages){

    
        const [currentPage, setCurrentPage] = useState(1);
    

    const goToNextPage = ()=>{
        if(currentPage <totalPages){
            setCurrentPage(currentPage+1);
        }
    }

    const goToPrevPage = ()=>{
        if(currentPage > 1){
            setCurrentPage(currentPage-1);
        }
    }

    const setPage = (pageNumber)=>{
        
            setCurrentPage(pageNumber);
        
    }


    return <>
    <div className="">
        {/* prev button */}
        <button onClick={goToPrevPage} className="px-3 py-1 rounded-md bg-gray-100 text-gray-400 hover:bg-gray-200
        disabled:opacity-50"
        disabled={currentPage===1}>
            Prev
        </button>

        {/* page number */}
        <button onClick={()=> setPage(1)}
        className={`px-3 py-1 riunded-md ${currentPage===1?'bg-blue-500 text-white':'bg-gray-100 text-gray-600 hover:bg-gray-400'}`}>
            1
        </button>

        <button onClick={()=> setPage(2)}
        className={`px-3 py-1 riunded-md ${currentPage===2?'bg-blue-500 text-white':'bg-gray-100 text-gray-600 hover:bg-gray-400'}`}>
            2
        </button>

        {/* ellipsis */}
        <span className="px-3 py-1">...</span>

        {/* next page */}
        <button onClick={goToNextPage} className="px-3 py-1 rounded-md bg-gray-100 text-gray-400 hover:bg-gray-200
        disabled:opacity-50"
        disabled={currentPage===totalPages}>
            Next Page
        </button>
    </div>
    </>
}