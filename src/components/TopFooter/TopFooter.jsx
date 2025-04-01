import { CodeSandboxOutlined } from '@ant-design/icons'
import React from 'react'

function TopFooter() {
    return (
        <div className='bg-[#F5F5F5] mt-14 py-15'>
            <div className='container mx-auto grid grid-cols-3'>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src="images/c.png" alt="" />
                    <p className='font-bold pb-3'>Free Delivery</p>
                    <p>And free returns. Checkout <br />  for delivery date.</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src="images/d.png" alt="" />
                    <p className='font-bold pb-3'>Pay monthly at 0% APR</p>
                    <p>And free returns. Checkout <br />  for delivery date.</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src="images/p.png" alt="" />
                    <p className='font-bold pb-3'>Personalize it</p>
                    <p>And free returns. Checkout <br />  for delivery date.</p>
                </div>
            </div>
        </div>
    )
}

export default TopFooter