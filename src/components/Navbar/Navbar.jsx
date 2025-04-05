import { HeartOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center h-[100px]'>
                <div className='flex'>
                    <p className='px-2'>+99 891 101 11 11</p> <p>Store location</p>
                </div>
                <div>
                    <p>Tell  a friend about Drou & get 20% off</p>
                </div>
                <div className='flex'>
                    <select id="">
                        <option value="USD">USD</option>
                        <option value="SUM">SUM</option>
                    </select>
                    <p className='px-2'>Log in / Sign up</p>
                </div>
            </div>
            <div className='relative'>
                <div className='flex justify-between items-center sticky top-0 z-10 bg-white'>
                    <div>
                        <img src="/logo/logo.png" alt="logo" />
                    </div>
                    <div className='flex gap-2'>
                        <p>HOME</p>
                        <select name="" id="">
                            <option value="">ELECTRONICS</option>
                            <option value="">JEWELERY</option>
                        </select>
                        <select name="" id="">
                            <option value="">BLOG</option>
                            <option value="">SECTION</option>
                        </select>
                        <select name="" id="">
                            <option value="">PAGES</option>
                        </select>
                        <p>Contact</p>
                        <Link href={"/Servis"}>
                        <p>Servis</p>
                        </Link>
                    </div>
                    <div className='flex gap-3 text-2xl'>
                        <SearchOutlined />
                        <HeartOutlined />
                        <ShoppingOutlined />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar