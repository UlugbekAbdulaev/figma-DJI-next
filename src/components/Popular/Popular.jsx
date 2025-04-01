import { StarOutlined } from '@ant-design/icons'
import React from 'react'

function Popular() {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between'>
                <p className='text-2xl font-semibold'>Popular Products</p>
                <div className='flex gap-2 font-medium'>
                    <p className='text-orange-400'>Accessories</p>
                    <p>Iphone</p>
                    <p>Laptop</p>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-5 mt-7'>
                <div className='border border-gray-300 p-5 flex flex-col justify-center items-center rounded-lg'>
                    <img src="/popularFoto/1.png" alt="electronic photo" />
                    <div className='text-orange-200 text-center py-3'>
                        <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
                        <p className='text-black'>Drou safe charger</p>
                        <p className='font-bold text-orange-400'>$90.00 <span className='line-through text-gray-700'>$100.00</span></p>
                    </div>
                </div>
                <div className='border border-gray-300 p-5 flex flex-col justify-center items-center rounded-lg'>
                    <img src="/popularFoto/2.png" alt="electronic photo" />
                    <div className='text-orange-200 text-center py-3'>
                        <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
                        <p className='text-black'>Security smart camera</p>
                        <p className='font-bold text-orange-400'>$90.00 <span className='line-through text-gray-700'>$100.00</span></p>
                    </div>
                </div>
                <div className='border border-gray-300 p-5 flex flex-col justify-center items-center rounded-lg'>
                    <img src="/popularFoto/3.png" alt="electronic photo" />
                    <div className='text-orange-200 text-center py-3'>
                        <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
                        <p className='text-black'>Iphone 15 pro max</p>
                        <p className='font-bold text-orange-400'>$90.00 <span className='line-through text-gray-700'>$100.00</span></p>
                    </div>
                </div>
                <div className='border border-gray-300 p-5 flex flex-col justify-center items-center rounded-lg'>
                    <img src="/popularFoto/4.png" alt="electronic photo" />
                    <div className='text-orange-200 text-center py-3'>
                        <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
                        <p className='text-black'>Latest Smart Watch</p>
                        <p className='font-bold text-orange-400'>$90.00 <span className='line-through text-gray-700'>$100.00</span></p>
                    </div>
                </div>
                <div className='border border-gray-300 p-5 flex flex-col justify-center items-center rounded-lg'>
                    <img src="/popularFoto/5.png" alt="electronic photo" />
                    <div className='text-orange-200 text-center py-3'>
                        <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
                        <p className='text-black'>Iphone 14 pro max</p>
                        <p className='font-bold text-orange-400'>$90.00 <span className='line-through text-gray-700'>$100.00</span></p>
                    </div>
                </div>
                <div className='border border-gray-300 p-5 flex flex-col justify-center items-center rounded-lg'>
                    <img src="/popularFoto/6.png" alt="electronic photo" />
                    <div className='text-orange-200 text-center py-3'>
                        <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
                        <p className='text-black'>Ipad mini Pro</p>
                        <p className='font-bold text-orange-400'>$90.00 <span className='line-through text-gray-700'>$100.00</span></p>
                    </div>
                </div>
                <div className='border border-gray-300 p-5 flex flex-col justify-center items-center rounded-lg'>
                    <img src="/popularFoto/7.png" alt="electronic photo" />
                    <div className='text-orange-200 text-center py-3'>
                        <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
                        <p className='text-black'>Iphone Lighting Cable</p>
                        <p className='font-bold text-orange-400'>$90.00 <span className='line-through text-gray-700'>$100.00</span></p>
                    </div>
                </div>
                <div className='border border-gray-300 p-5 flex flex-col justify-center items-center rounded-lg'>
                    <img src="/popularFoto/8.png" alt="electronic photo" />
                    <div className='text-orange-200 text-center py-3'>
                        <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
                        <p className='text-black'>Homepad mini</p>
                        <p className='font-bold text-orange-400'>$90.00 <span className='line-through text-gray-700'>$100.00</span></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Popular