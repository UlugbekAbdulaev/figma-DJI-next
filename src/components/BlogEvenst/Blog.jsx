import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

function Blog() {
    return (
        <div className='container mx-auto mt-10'>
            <div className='flex justify-between py-5 font-bold'>
                <p>Blog & Events</p>
                <p>View all products <ArrowRightOutlined /></p>
            </div>

            <div className='grid grid-cols-3'>
                <div><img src="/images/11.png" alt="photo" />
                    <p className='text-gray-600'><CalendarOutlined /> March 15 2025</p>
                    <p>Music magnate headphone</p>
                </div>
                <div><img src="/images/12.png" alt="photo" />
                    <p className='text-gray-600'><CalendarOutlined /> March 15 2025</p>
                    <p>Macbook air labore at dolore</p>
                </div>
                <div><img src="/images/13.png" alt="photo" />
                    <p className='text-gray-600'><CalendarOutlined /> March 15 2025</p>
                    <p>Ipsum available but the majority</p>
                </div>
            </div>


            <div className='bg-[#F5F5F5] mt-10'>
                <div className='grid grid-cols-2 pt-30'>
                    <div>
                        <img src="/images/Applee.png" alt="" />
                    </div>
                    <div className='text-center'>
                        <p className='text-2xl'>Big discount</p>
                        <p className='text-4xl pt-5'>Must buying apple devices</p>
                        <p className='font-bold text-orange-500 text-xl pt-4'>$450.00</p>
                        <Button className='w-[100px] rounded-2xl mt-10 p-5' color='orange' variant='solid' size='small' >Shop Now  </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog