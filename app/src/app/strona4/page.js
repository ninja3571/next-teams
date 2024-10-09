'use client'

// Wyświetla w konsoli poprawnie ale nie zmienia
import { useState, useEffect } from "react"

export default function Page(){

    const [imie, setImie] = useState('')
    const [nazw, setNazw] = useState('')
    const [zamien, setZamien] = useState(false)

    const [user, setUser] = useState({
        firstname:'Jan',
        secondname:'Kowalski',
        email: 'jan.kowalski@example.com',
        phone: '123-456-789'
    })

    const zmien = ()=>{
        setUser({...user})
            
        console.log(user)
    }

    useEffect(()=>{



    }, [zamien])


    return(
        <div className='flex flex-col w-[300px] gap-[7px] mt-4 ml-4'>
            <input onChange={(e)=>setImie(e.target.value)} placeholder={user.firstname}></input>
            <input onChange={(e)=>setNazw(e.target.value)} placeholder={user.secondname}></input>
            <button onClick={zmien}>Zmien</button>
        </div>
    )
}