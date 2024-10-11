'use client'

// nie dokońca działa - nie wyświetla i czyta z opóźnieniem +1
import { useState, useEffect } from "react"

export default function Page(){

    const [link, setLink] = useState([])
    const [input, setInput] = useState("")
    const [buton, setButon] = useState(1)
    const [code, setCode] = useState("")

    const zmien = ()=>{
        {buton==1 ? setButon(2) : setButon(1)}
    }

    useEffect(()=>{
        const getData = async()=>{
            try{
                const response = await fetch(input)
                const json = await response.json()
                setLink(json)
                console.log(json)
                {json.length!=0 ? setCode('podano prawidłowy adres URL') : setCode('podano nie właściwy adres URL')}
                setInput("")
            } catch(error){
                console.log(error)
                {error ? setCode('podano nie właściwy adres URL') : setCode('podano prawidłowy adres URL')}
            } finally{
                console.log(link)
                console.log("----------------------------------------------------")

                setInput('')
                // setButon(false)
            }
        }
        getData()
    }, [buton])

    return(
        <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Podaj url'></input>
            <button onClick={zmien}>Wyślij</button>
            <h1>{code}</h1>
        </div>
    )

}