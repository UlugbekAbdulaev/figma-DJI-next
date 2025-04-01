import { ArrowRightOutlined, StarOutlined } from '@ant-design/icons'
import React from 'react'

function LatesPro() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between py-5 font-bold'>
        <p>Latest Products</p>
        <p>View all products <ArrowRightOutlined /></p>
      </div>
      <div className='flex justify-between'>
        <div className='border border-gray-300 p-5'>
          <img src="/images/watch.png" alt="electronic photo" />
         <div className='text-orange-400 text-center py-3'>
         <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
         <p className='text-black'>Latest Smart Watch</p>
         <p className='font-bold'>$90.00 <span className='line-through text-gray-700'>$100.00</span></p>
         </div>
        </div>
        <div className='border border-gray-300 p-5'>
          <img src="/images/laptop.png" alt="electronic photo" />
          <div className='text-orange-400 text-center py-3'>
         <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
         <p className='text-black'>Apple Mackbook Air M3</p>
         <p className='font-bold'>$90.00 <span className='line-through text-gray-700'>$100.00</span></p>
         </div>
        </div>
        <div className='border border-gray-300 p-5'>
          <img src="/images/speakers.png" alt="electronic photo" />
          <div className='text-orange-400 text-center py-3'>
         <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
         <p className='text-black'>Homepad mini</p>
         <p className='font-bold'>$90.00 <span className='line-through text-gray-700'>$100.00</span></p>
         </div>
        </div>
        <div className='border border-gray-300 p-5'>
          <img src="/images/charger.png" alt="electronic photo" />
          <div className='text-orange-400 text-center py-3'>
         <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
         <p className='text-black'>Drou safe charger</p>
         <p className='font-bold'>$90.00 <span className='line-through text-gray-700'>$100.00</span></p>
         </div>
        </div>
        <div className='border border-gray-300 p-5'>
          <img src="/images/enter.png" alt="electronic photo" />
          <div className='text-orange-400 text-center py-3'>
         <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
         <p className='text-black'>Home Entertainment</p>
         <p className='font-bold'>$90.00 <span className='line-through text-gray-700'>$100.00</span></p>
         </div>
        </div>

      </div>
    </div>
  )
}

export default LatesPro