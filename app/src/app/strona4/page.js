'use client'

// Wyświetla w konsoli poprawnie ale nie zmienia
import { useState, useEffect } from "react"

export default function Page(){

    const [user, setUser] = useState({
        firstname:'Jan',
        secondname:'Kowalski',
        email: 'jan.kowalski@example.com',
        phone: '123-456-789'
    })

    const [imie, setImie] = useState(user.firstname)
    const [nazw, setNazw] = useState(user.secondname)

    const [zamien, setZamien] = useState(false)

    const zmien = ()=>{
        {zamien==true ? setZamien(false) : setZamien(true)}
    }

    useEffect(()=>{
        const cos =async ()=>{

            try{
                 if(imie=="" && nazw==""){
                    setUser({...user})
                }
                else if(imie=="" || imie==null || imie==" "){
                    setUser({...user, secondname:nazw})
                    setNazw("")
                }
                else if(nazw=="" || nazw==" " || nazw==null){
                    setUser({...user, firstname:imie})
                    setImie("")
                }
                else{
                    setUser({...user, firstname:imie, secondname:nazw})
                    setImie("")
                    setNazw("")
                }

            } catch(error){
                console.log(error)
            } finally{
                console.log({imie, nazw})
            }
        }

        cos()
    }, [zamien])


    return(
        <div className='flex flex-row w-[300px] gap-[7px] mt-4 ml-6'>
            <div className='flex flex-col'>
                <input value={imie} onChange={(e)=>setImie(e.target.value)} placeholder="Zmień imie"></input>
                <input value={nazw} onChange={(e)=>setNazw(e.target.value)} placeholder="Zmień nazwisko"></input>
                <button onClick={zmien}>Zmien</button>
            </div>
            <div className='bg-gradient-to-br from-pink-600 to-indigo-500 flex flex-col'>
                <h1>{user.firstname}</h1>
                <h1>{user.secondname}</h1>
                <h1>{user.email}</h1>
                <h1>{user.phone}</h1>
            </div>
        </div>
    )
}