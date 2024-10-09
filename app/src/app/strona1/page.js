'use client'

import { useState } from "react";

export default function Page(){

    const [numb, setNumb] = useState(0)
    const zmien = ()=>{
        setNumb(numb+1)
    }

    return(
        <div>
            <h1>{numb}</h1>
            <button onClick={zmien}>+1</button>
        </div>
    )

}