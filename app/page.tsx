import { LogoRealEstate } from '@/components/icons/logo'
import { Image } from '@nextui-org/react'
import React from 'react'

export default function Home() {
    return (
        <>
            <div className="px-6">
                <div className="grid grid-cols-1 gap-[100px]">

                    <div className="h-[calc(100vh-64px)] w-full overflow-hidden rounded-[14px] col-span-1">
                        <div className="h-full w-full">
                            <Image
                                src='https://images.unsplash.com/photo-1513584684374-8bab748fbf90'
                                alt='Background Real Estate'
                                width="100%"
                                height="100%"
                                loading='lazy'
                            />
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="grid grid-cols-1 gap-12">
                            <div className="grid grid-cols-2 gap-36 items-center">
                                <div className="col-span-1">
                                    <h5 className='text-4xl font-bold leading-[64px]'>We&apos;re Your Dependable Real</h5>
                                    <div className="flex gap-6 items-center">
                                        <Image
                                            src='https://images.unsplash.com/photo-1513584684374-8bab748fbf90'
                                            alt='Background Real Estate'
                                            width={90}
                                            loading='lazy'
                                            radius='sm'
                                        />
                                        <h5 className='text-4xl font-bold leading-[64px]'>Estate Partners</h5>
                                    </div>
                                </div>

                                <div className="col-span-1">
                                    <p className='text-[#5C636F] text-sm font-medium'>Welcome to HomelyHub, your trusted partner in the realm of real estate. At HomelyHub, we believe that finding the perfect home is more than just a transaction; it&apos;s about crafting a space where your aspirations take root and your dreams find a place to flourish.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-5">
                                <div className="col-span-1">
                                    <div className="flex flex-col gap-5">

                                        <div className="bg-gradient-to-r from-[#F1F6FF] to-[#E8EAED00] rounded-2xl py-7 px-5">
                                            <div className="flex justify-between">
                                                <div>
                                                    <h2 className="text-[#2E3137] text-5xl font-semibold leading-[96px]">24K+</h2>
                                                    <span className="mt-1 text-[#454A53] text-base font-medium">Happy Customer</span>
                                                </div>

                                                <LogoRealEstate fill='#1B3E80' />
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-r from-[#F1F6FF] to-[#E8EAED00] rounded-2xl py-7 px-5">
                                            <div className="flex justify-between">
                                                <div>
                                                    <h2 className="text-[#2E3137] text-5xl font-semibold leading-[96px]">170K+</h2>
                                                    <span className="mt-1 text-[#454A53] text-base font-medium">Properties Listed</span>
                                                </div>

                                                <LogoRealEstate fill='#1B3E80' />
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-r from-[#F1F6FF] to-[#E8EAED00] rounded-2xl py-7 px-5">
                                            <div className="flex justify-between">
                                                <div>
                                                    <h2 className="text-[#2E3137] text-5xl font-semibold leading-[96px]">200K+</h2>
                                                    <span className="mt-1 text-[#454A53] text-base font-medium">Award Winning</span>
                                                </div>

                                                <LogoRealEstate fill='#1B3E80' />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-span-1 h-full w-full">
                                    <Image
                                        src='https://images.unsplash.com/photo-1513584684374-8bab748fbf90'
                                        alt='Background Real Estate'
                                        loading='lazy'
                                        radius='lg'
                                    />
                                </div>
                                <div className="col-span-1 h-full w-full">
                                    <Image
                                        src='https://images.unsplash.com/photo-1513584684374-8bab748fbf90'
                                        alt='Background Real Estate'
                                        loading='lazy'
                                        radius='lg'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}
