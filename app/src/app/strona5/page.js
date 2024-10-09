'use client'

// nie dokońca działa - nie wyświetla i czyta z opóźnieniem +1
import { useState, useEffect } from "react"

export default function Page(){

    const [link, setLink] = useState([])
    const [input, setInput] = useState("")
    const [buton, setButon] = useState(1)
    const [code, setCode] = useState("")

    const zmien = ()=>{
        setButon(buton+1)
    }

    useEffect(()=>{
        const getData = async()=>{
            try{
                const response = await fetch(input)
                const json = await response.json()
                setLink(json)
                console.log(json)
                setInput("")
            } catch(error){
                console.log(error)
            } finally{
                console.log(link)
                console.log("----------------------------------------------------")
                {link.length!=0 ? setCode(` ${link[0]}`) : setCode(" podano nie właściwy adres URL")}
                // setButon(false)
            }
        }
        getData()
    }, [buton])

    return(
        <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Podaj url'></input>
            <button onClick={zmien}>Wyślij</button>
            {code}
        </div>
    )

}