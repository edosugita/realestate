import React from 'react'
import { LogoRealEstate } from '../icons/logo'
import Link from 'next/link'

export default function FooterComponent() {
    return (
        <footer className='mb-6 px-6 h-full w-full'>
            <div className="px-9 py-20 bg-gradient-to-r from-[#2E3137] to-[#5C636F] rounded-2xl">
                <div className="grid grid-cols-4 gap-12 justify-between items-center">
                    <div className="col-span-4 md:col-span-2">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <LogoRealEstate fill='white' size={50} />
                                <h5 className='text-2xl text-white'>HomelyHub</h5>
                            </div>
                            <p className='text-white text-sm font-medium w-full sm:w-3/4 md:w-1/2'>
                                Where Every Dream Finds its Address, Every Home Finds its Heart. HomelyHub: Guiding Your Journey to Beloved Spaces, Crafting Lives in Every Corner.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-4 md:col-span-2">
                        <div className="grid grid-cols-5 gap-12">

                            <div className="col-span-2 md:col-span-1">
                                <h5 className='font-bold text-sm text-white mb-2'>About</h5>

                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-[#F3F3F3]'>
                                            About Us
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-[#F3F3F3]'>
                                            Blog
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-[#F3F3F3]'>
                                            Career
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <h5 className='font-bold text-sm text-white mb-2'>Service</h5>

                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-[#F3F3F3]'>
                                            Buy Property
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-[#F3F3F3]'>
                                            Rent Property
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-[#F3F3F3]'>
                                            Sell Property
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <h5 className='font-bold text-sm text-white mb-2'>Social Media</h5>

                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-[#F3F3F3]'>
                                            Instagram
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-[#F3F3F3]'>
                                            Facebook
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-[#F3F3F3]'>
                                            Twitter
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <h5 className='font-bold text-sm text-white mb-2'>Security</h5>

                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-[#F3F3F3]'>
                                            Privacy Police
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-[#F3F3F3]'>
                                            User Agreement
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-[#F3F3F3]'>
                                            Copyright
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <h5 className='font-bold text-sm text-white mb-2'>Support</h5>

                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-[#F3F3F3]'>
                                            FAQ
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-[#F3F3F3]'>
                                            Support Center
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-[#F3F3F3]'>
                                            Helo Center
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <div className='h-0.5 w-full bg-clip-inherit bg-gradient-to-r from-[#E2E2E2] from-[-11.51%] to-[#181818] to-[91.93%] rounded-full'></div>
                </div>
            </div>
        </footer>
    )
}
