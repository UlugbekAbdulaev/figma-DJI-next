import { Button } from 'antd'
import React from 'react'


function Discount() {
  return (
    <div className='bg-[#F1F6FF] my-16'>
      <div className='container mx-auto grid grid-cols-2'>
        <div className='col-span-1 text-center flex flex-col justify-center items-center'>
          <Button color='orange' variant='solid'>Hurry up</Button><br />
          <h1 className='text-4xl font-bold'>Up To 20 % Discount <br />
            Check it Out</h1><br />
          <div className='flex gap-3'>
            <div className='border px-5 py-2 text-center border-gray-300 rounded-lg bg-gray-200'>310 <p className='text-gray-500'>days</p></div>
            <div className='border px-5 py-2 text-center border-gray-300 rounded-lg bg-gray-200'>06 <p className='text-gray-500'>heys</p></div>
            <div className='border px-5 py-2 text-center border-gray-300 rounded-lg bg-gray-200'>34 <p className='text-gray-500'>mins</p></div>
            <div className='border px-5 py-2 text-center border-gray-300 rounded-lg bg-gray-200'>08 <p className='text-gray-500'>sec</p></div>
          </div>
          <p className='pt-5 font-medium'>shop now</p>
        </div>
        <div className='col-span-1 flex pt-10'>
        <img className='h-[250px] mt-40' src="/images/Small.png" alt="small iphone" />
        <img src="/images/Big.png" alt="small iphone" />
        </div>
        
       
      </div>
    </div>
  )
}

export default Discount