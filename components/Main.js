import React from 'react'
import Image from 'next/image'
import x from '../assets/hero.jpg'
export default function Main() {
    return (
        <div className='  font-sexy ' >
            <div className='flex  '>
                <div className='w-1/2  sm:w-1/3 m-5 sm:m-20   '>
                    <Image src={x} className='hover:scale-125 overflow-hidden duration-700 r rounded-2xl ' />
                </div>
                <div className='  m-5  my-auto text-center bg w-1/2 font-serif   text-green-900   sm:text-right'>
                    <p className=' text-4xl sm:text-7xl hover:text-green-400' >
                        ساعد غيرك
                    </p>
                    <p className='sm:text-5xl'>
                        صدقتك قد تسعد بها شخص آخر
                    </p>
                </div>
            </div>
            <ul className='flex w-11/12  justify-between px-5  m-2  border-2 border-green-900  bg-green-200 sm:w-9/12 mx-auto   '>
                <li className=' border-2 m-2 p-2  border-green-600 w-32  text-center'>ملابس</li>
                <li className=' border-2 m-2 p-2 border-green-600 w-32  text-center'>العاب</li>
                <li className=' border-2 m-2 p-2 border-green-600 w-32  text-center'>اغراض منزلية</li>
                <li className=' border-2 m-2 p-2 border-green-600 w-32  text-center'>اجهزة كهربائية</li>
            </ul>

        </div >
    )
}
