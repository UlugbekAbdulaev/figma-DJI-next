import { Button } from 'antd'
import React from 'react'
import { Carousel } from "antd";

function Header() {
  return (
    <div className='grid grid-cols-2 py-10 px-27 bg-[#F9F9F9] mt-5'>
        <div className=' col-span-1 flex flex-col gap-8 mt-10'>
            <p className='text-orange-500 text-xl'>SALE UP TO 30% OFF</p>
            <p className='text-6xl font-bold'>Apple Watch Series</p>
            <p>Featured packed  at a batter value than over pawerful sensors <br /> to manitor your fitness</p>
            <Button className='w-[150px]' color='orange' variant='solid' size='large' >Shop Now  </Button>
        </div>
        <div>
            <Carousel autoplay>
                <div><img src="/images/Apple.png" alt="apple foto" /></div>
                <div><img src="/images/Applee.png" alt="apple foto" /></div>
            </Carousel>
            
        </div>
    </div>
  )
}

export default Header