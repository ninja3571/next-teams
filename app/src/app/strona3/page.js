'use client'

import { useState, useEffect } from "react";

export default function Page(){

    const [licz, setLicz] = useState(0)
    const [parzy, setParzy] = useState(true)
    const [zdanie, setZdanie] = useState('')

    const spr = ()=>{
        {licz/2==0 ? setParzy(true) : setParzy(false)}
        {parzy==true ? setZdanie('Liczba nieparzysta') : setZdanie('Liczba parzysta')}
        console.log(licz)
    }

    return(
        <div>
            <input onChange={(e)=>setLicz(e.target.value)} placeholder='wpisz liczbę'></input>
            <button onClick={spr}>Sprawdź</button>
            <h1>{zdanie}</h1>
        </div>
    )
}