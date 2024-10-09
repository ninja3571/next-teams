'use client'

import { useState, useEffect } from "react";

export default function Page(){

    const [input, setInput] = useState("")

    useEffect(()=>{
        console.log(input)
    }, [input])

    return(
        <div>
            <input onChange={(e)=>setInput(e.target.value)} placeholder="Zmien tytul"></input>
            {input!="" ? <title>{input}</title> : <title>Next.js</title>}
            
        </div>
        
    )

}