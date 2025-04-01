import React from 'react'

function Footer() {
    return (
        <div className='container mx-auto'>
            <div className=' grid grid-cols-5 text-gray-600 mt-20 gap-30'>
                <div className='col-span-1'>
                    <p className='text-black text-lg font-bold'>Contact Us</p>
                    <p>Uzbekistan</p>
                    <p>+998 91 101 01 01</p>
                    <p>demo@exampledemo.com</p>
                    <p>Dji Demo Store</p>
                    <p>No, 12345 Freedom Tashkent</p>
                </div>
                <div className='col-span-1'>
                    <p className='text-black text-lg font-bold'>Information</p>
                    <p>Product Support</p>
                    <p>Checkout</p>
                    <p>License Policy</p>
                    <p>Affiliate</p>
                </div>
                <div className='col-span-1'>
                    <p className='text-black text-lg font-bold'>Customer Service</p>
                    <p>Help Centre</p>
                    <p>Raddem  Vaucher</p>
                    <p>Contact Us</p>
                    <p>Policies & Rules</p>
                </div>
                <div className='col-span-2'>
                    <p className='text-black text-lg font-bold'>Download Our App</p>
                    <p>Download our App & get  extra 20% Discount on your <br /> first Order...! </p>
                    <div className='flex gap-5 pt-9'>
                        <img src="/images/google.png" alt="" />
                        <img src="/images/store.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center mt-18 py-4'>
                <div className='flex'>
                    <img src="/images/flogo.png" alt="" />
                    <p className='pt-3 text-gray-500'>Copyright
                        Team90Degree | Built with Dji by Team90Degree.</p>
                </div>
                <div className='flex'>
                    <img src="/logo/Visa.png" alt="" />
                    <img src="/logo/Master.png" alt="" />
                    <img src="/logo/Paypal.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer