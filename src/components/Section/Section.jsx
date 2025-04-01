import { Button } from 'antd'
import React from 'react'

function Section() {
    return (
        <div className='container mx-auto mt-10 grid grid-cols-2 gap-10'>

            <div className='col-span-1 flex flex-col items-center py-10 relative bg-[#EDEDED] h-[350px]'>
                <p className='mt-2'>SECURTY SMART CAMERA</p>
                <p className='mt-2 text-2xl font-medium'>JUST STARTING AT $850</p>
                <Button className='w-[100px] rounded-2xl mt-4' color='orange' variant='solid' size='small' >Shop Now  </Button>
                <div className='absolute top-15'>
                <img src="/images/Camera.png" alt=""  className='w-[400px]'/>
                </div>
            </div>
            <div className='col-span-1 flex flex-col justify-center items-center py-10 bg-[#EDEDED] h-[350px]'>
                <p className=''>Entertainment & Games</p>
                <p className='mt-2 text-2xl font-medium'>Just starting at $450</p>
                <Button className='w-[100px] rounded-2xl mt-4' color='orange' variant='solid' size='small' >Shop Now  </Button>
                <img src="/images/Games.png" alt="" className='w-[170px] mt-4' />
            </div>

        </div>

    )
}

export default Section