import React, { useEffect, useState } from 'react'

export const Testing = () => {
    const [status,setStatus]=useState(false)
    const [characters,setCharacters]=useState(null)

    const fetchData = () => {
        fetch('https://hp-api.onrender.com/api/characters',{
            method: 'GET'
        })
        .then(res=>res.json())
        .then(data=>{
            setCharacters(data)
        })
        .catch(err=>{
            console.log("Error in Feteching anonther api",err)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    console.log("characters",characters)

  
if(!characters){
    return (
        <div>
            Loading
        </div>
    )
}
    
  return (
    <div>
        {characters && characters.length > 0 ? 
        (<div className='flex flex-wrap gap-3 justify-center'>
           {characters?.map((item,index)=>(
            <div key={index} className="text-blue-500 text-sm bg-blue-50 p-4 w-[300px]">
                <h2 className='text-xl font-semibold text-blue-500'>{item?.id || "-"}</h2>
                 <p>{item?.name || "-"}</p>
                 <p>{item?.ancestry || "-"}</p>
                 <p>{item?.dateOfBirth || "-"}</p>
                 <p>{item?.eyeColour || "-"}</p>
                {}
            </div>
           ))}
        </div>) : (
            <div></div>
        )}
       

         <button className='bg-blue-500 text-white font-semibold px-3 py-2 rounded-xl' onClick={()=>setStatus(true)}>Click</button>
    </div>
  )
}
