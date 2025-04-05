import { StarOutlined } from '@ant-design/icons'
import Image from 'next/image'
import React from 'react'


const getproducts = async () => {
    try {
        const res = await fetch({
            url: 'https://dummyjson.com/products',
            method: "GET"
        })
        return res.json()
    } catch (error) {
        console.log(error.message);

    }
}

async function Popular() {

    const product_list = await getproducts()
    console.log(product_list);



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
            <div className='grid grid-cols-5 gap-5 mt-7'>
                {
                    product_list?.products?.map((item) => {
                        return <div key={item.id} >
                            <div className='col-span-1 border border-gray-300 p-5 flex flex-col justify-center items-center rounded-lg'>
                                <Image src={item?.thumbnail} alt={item.title} width={200} height={200} />
                                <div className='text-orange-200 text-center py-3'>
                                    <StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined /><StarOutlined />
                                    <p className='text-black text-xl font-medium'>{item?.title}</p>
                                    <p className='font-bold text-green-400'>${item?.price} </p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Popular