import Link from "next/link";

export default function NavBar(){
    return(
        <div className='flex justify-center bg-indigo-400 gap-[15px] text-slate-900'>
            <Link href='/'>Main</Link>
            <Link href='/strona1'>Zadanie 1</Link>
            <Link href='/strona2'>Zadanie 2</Link>
            <Link href='/strona3'>Zadanie 3</Link>
            <Link href='/strona4'>Zadanie 4</Link>
            <Link href='/strona5'>Zadanie 5</Link>
        </div>
    )
}