'use client'

import { useState, useEffect } from "react";

export default function Page(){

    const [licz, setLicz] = useState(0)
    const [zdanie, setZdanie] = useState('')

    useEffect(()=>{
        const spr = ()=>{
            if(licz%2==0){
                setZdanie("Liczba parzysta")
            }
            else{
                setZdanie("Liczba nieparzysta")
            }
        }
        spr()
    })


    return(
        <div>
            <input onChange={(e)=>setLicz(e.target.value)} placeholder='wpisz liczbę' type='number'></input>
            <h1>{zdanie}</h1>
        </div>
    )
}