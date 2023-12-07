'use client'

import { IconAward } from '@/components/icons/award'
import { IconHome } from '@/components/icons/home'
import { IconUser } from '@/components/icons/user'
import { IconSearch } from '@/components/icons/search'
import { Card, CardHeader, CardBody, Image, Tab, Tabs, Select, SelectItem, Button, Pagination, CardFooter, Input } from '@nextui-org/react'
import { useState, useEffect } from 'react'
import { IconLeftArrow } from '@/components/icons/leftArrow'
import { IconBed } from '@/components/icons/bed'
import { IconShower } from '@/components/icons/shower'
import { IconMaterial } from '@/components/icons/material'
import ReviewPage from '@/components/review'
import { IconEmail } from '@/components/icons/email'

export default function Home() {
    interface Property {
        id: number,
        nama: string,
        alamat: string,
        kota: string,
        gambar: string,
        harga: number,
        luas_tanah: number,
        luas_bangunan: number,
        jumlah_kamar: number,
        jumlah_kamar_mandi: number,
        garasi: boolean
    }

    const [data, setData] = useState<Property[]>([])
    const itemsPerPage = 3
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        document.title = "HomelyHub";

        const getData = async () => {
            try {
                let Datas = '/data/data.json'
                const response = await fetch(Datas)
                const result = await response.json()

                setData(result.properties)
            } catch (e) {
                console.error(e)
            }
        }

        getData()
    }, [])

    const groupedData: { [key: string]: Property[] } = data.reduce((acc, item) => {
        const { kota } = item

        if (!acc[kota]) {
            acc[kota] = [item]
        } else {
            acc[kota].push(item)
        }

        return acc
    }, {} as { [key: string]: Property[] })

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


    return (
        <>
            <div className="px-6 mb-28">
                <div className="grid grid-cols-1 gap-[100px]">

                    <div className="h-[calc(100vh-64px)] w-full overflow-hidden rounded-[14px] col-span-1">
                        <Card className="h-full w-full">
                            <CardHeader className="absolute z-[11] w-full h-full flex flex-col gap-16 justify-center md:justify-normal md:pt-44 px-28 bg-black bg-opacity-60 md:bg-none md:bg-opacity-0">
                                <div className="flex flex-col justify-center items-center gap-6 text-[#F3F3F3]">
                                    <h3 className="text-4xl font-bold text-center">Embark on Your Home&apos;s Journey with Us!</h3>
                                    <p className='text-base font-medium text-center'>Navigate Your Way to the Perfect Property with Our Expertise and Cutting-Edge Tools for a Seamless Journey</p>
                                </div>

                                <div className="hidden md:flex sm:flex-col justify-start w-full">
                                    <div className="flex">
                                        <div className="p-2 backdrop-blur-[24.726133346557617px] rounded-t-lg">
                                            <Tabs aria-label="Options" color='primary' radius='sm' variant='solid' className='font-semibold rounded'>
                                                <Tab key="buy" title="Buy" />
                                                <Tab key="rent" title="Rent" />
                                                <Tab key="sell" title="Sell" />
                                            </Tabs>
                                        </div>
                                    </div>
                                    <div className="p-2 backdrop-blur-[24.726133346557617px] rounded-b-lg h-full">
                                        <div className="bg-[#f4f4f5] py-3 px-4 rounded-xl h-full">
                                            <div className="flex flex-nowrap lg:gap-5 h-full w-full">
                                                <Select
                                                    label="Property Type"
                                                    placeholder="Select Property Type"
                                                    className="w-full shadow-none"
                                                    variant='flat'
                                                >
                                                    {Object.keys(groupedData).map((city, index) => (
                                                        <SelectItem key={index} value={city}>
                                                            {city}
                                                        </SelectItem>
                                                    ))}
                                                </Select>

                                                <div className="h-full flex items-center">
                                                    <div className="h-3/4 bg-[#E8EAED] w-0.5 rounded-full hidden sm:block"></div>
                                                </div>

                                                <Select
                                                    label="Property Type"
                                                    placeholder="Select Property Type"
                                                    className="w-full shadow-none hidden sm:block"
                                                    variant='flat'
                                                >
                                                    {Object.keys(groupedData).map((city, index) => (
                                                        <SelectItem key={index} value={city}>
                                                            {city}
                                                        </SelectItem>
                                                    ))}
                                                </Select>

                                                <div className="h-full flex items-center">
                                                    <div className="h-3/4 bg-[#E8EAED] w-0.5 rounded-full hidden lg:block"></div>
                                                </div>

                                                <Select
                                                    label="Property Type"
                                                    placeholder="Select Property Type"
                                                    className="w-full shadow-none hidden lg:block"
                                                    variant='flat'
                                                >
                                                    {Object.keys(groupedData).map((city, index) => (
                                                        <SelectItem key={index} value={city}>
                                                            {city}
                                                        </SelectItem>
                                                    ))}
                                                </Select>

                                                <button className='bg-primary-700 py-4 px-6 rounded-md h-full text-primary-50 flex gap-2'>
                                                    <IconSearch fill='#D7E5FF' />
                                                    Search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <Image
                                removeWrapper
                                src='https://images.unsplash.com/photo-1600563438938-a9a27216b4f5'
                                alt='Background Real Estate'
                                loading='lazy'
                                className='w-full scale-150 h-full object-cover object-top mt-40'
                            />
                        </Card>
                    </div>

                    <div className="col-span-1">
                        <div className="grid grid-cols-1 gap-12">

                            {/* START */}
                            <div className="grid grid-cols-2 gap-10 md:gap-16 lg:gap-36 items-center">
                                <div className="col-span-2 md:col-span-1">
                                    <h5 className='text-xl sm:text-2xl lg:text-4xl font-bold leading-10 sm:leading-[54px] md:leading-[64px]'>We&apos;re Your Dependable Real</h5>
                                    <div className="flex gap-6 items-center">
                                        <Image
                                            src='https://images.unsplash.com/photo-1513584684374-8bab748fbf90'
                                            alt='Background Real Estate'
                                            loading='lazy'
                                            radius='sm'
                                            className='w-14 sm:w-16 md:w-20 lg:w-24'
                                        />
                                        <h5 className='text-xl sm:text-2xl lg:text-4xl font-bold leading-10 sm:leading-[54px] md:leading-[64px]'>Estate Partners</h5>

                                    </div>
                                </div>

                                <div className="col-span-2 md:col-span-1">
                                    <p className='text-[#5C636F] text-sm font-medium'>Welcome to HomelyHub, your trusted partner in the realm of real estate. At HomelyHub, we believe that finding the perfect home is more than just a transaction; it&apos;s about crafting a space where your aspirations take root and your dreams find a place to flourish.</p>
                                </div>
                            </div>
                            {/* END */}

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                <div className="lg:col-span-1 sm:col-span-2 col-span-1 flex flex-col flex-auto gap-5">

                                    <div className="bg-gradient-to-r from-[#F1F6FF] to-[#E8EAED00] rounded-2xl py-7 px-5 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.04)]">
                                        <div className="flex justify-between">
                                            <div>
                                                <h2 className="text-[#2E3137] text-xl sm:text-3xl lg:text-5xl font-semibold leading-10 sm:leading-[66px] lg:leading-[96px]">24K+</h2>
                                                <span className="mt-1 text-[#454A53] text-base font-medium">Happy Customer</span>
                                            </div>

                                            <IconUser fill='#1B3E80' />
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-[#F1F6FF] to-[#E8EAED00] rounded-2xl py-7 px-5 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.04)]">
                                        <div className="flex justify-between">
                                            <div>
                                                <h2 className="text-[#2E3137] text-xl sm:text-3xl lg:text-5xl font-semibold leading-10 sm:leading-[66px] lg:leading-[96px]">170K+</h2>
                                                <span className="mt-1 text-[#454A53] text-base font-medium">Properties Listed</span>
                                            </div>

                                            <IconHome fill='#1B3E80' />
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-[#F1F6FF] to-[#E8EAED00] rounded-2xl py-7 px-5 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.04)]">
                                        <div className="flex justify-between">
                                            <div>
                                                <h2 className="text-[#2E3137] text-xl sm:text-3xl lg:text-5xl font-semibold leading-10 sm:leading-[66px] lg:leading-[96px]">200K+</h2>
                                                <span className="mt-1 text-[#454A53] text-base font-medium">Award Winning</span>
                                            </div>

                                            <IconAward fill='#1B3E80' />
                                        </div>
                                    </div>

                                </div>

                                <div className="sm:col-span-1 relative sm:h-72 lg:h-full lg:w-full sm:block hidden">
                                    <div className="absolute z-[11] w-full h-full flex items-end p-4">
                                        <div className="bg-primary-800 bg-opacity-60 px-6 py-5 w-full rounded">
                                            <p className='text-center text-white font-bold leading-8 text-base'>Innovative designs for modern living</p>
                                        </div>
                                    </div>
                                    <div className="absolute z-10 h-full w-full">
                                        <Image
                                            removeWrapper
                                            src='https://images.unsplash.com/photo-1479839672679-a46483c0e7c8'
                                            alt='Background Real Estate'
                                            className='h-full w-full object-cover object-center'
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-1 relative sm:h-72 lg:h-full lg:w-full sm:block hidden">
                                    <div className="absolute z-[11] w-full h-full flex items-end p-4">
                                        <div className="bg-primary-800 bg-opacity-60 px-6 py-5 w-full rounded">
                                            <p className='text-center text-white font-bold leading-8 text-base'>Tech-integrated comfort</p>
                                        </div>
                                    </div>
                                    <div className="absolute z-10 h-full w-full">
                                        <Image
                                            removeWrapper
                                            src='https://images.unsplash.com/photo-1617357283269-2bfd2834d8e9'
                                            alt='Background Real Estate'
                                            className='h-full w-full object-cover object-center'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 bg-[#FAFBFB] rounded-2xl px-10 py-20 grid grid-cols-1 w-full h-full gap-8">
                        <div className="text-center w-full">
                            <h5 className='text-[#2E3137] text-xl sm:text-2xl lg:text-4xl font-bold leading-10 w-full'>Discover Our Premium Property Collection</h5>
                            <p className='mt-2 font-medium text-sm leading-6 text-[#5C636F]'>
                                Embrace luxury redefined. Explore our selection of properties—from grand estates to cozy residences—tailored to suit your unique tastes
                            </p>
                        </div>

                        <div className="w-full h-full grid grid-cols-1 gap-12">

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {
                                    currentItems.map((item, index) => (
                                        <Card className='border-none outline-0 px-2 py-3' radius='sm' shadow='sm' key={index}>
                                            <CardBody className='h-[240px] p-0 mb-3'>
                                                <Image
                                                    removeWrapper
                                                    src={item.gambar}
                                                    alt='Background Real Estate'
                                                    className='h-full w-full object-cover object-center'
                                                    radius='sm'
                                                    loading='lazy'
                                                />
                                            </CardBody>

                                            <CardFooter className='flex-col p-0'>
                                                <div className="mb-2 flex justify-between w-full">
                                                    <h6 className='font-semibold text-sm text-[#454A53]'>{item.nama}</h6>
                                                    <span className='font-medium text-sm text-primary-700'>${(item.harga / 15471).toFixed(2)}</span>
                                                </div>

                                                <div className="mb-4 flex justify-between w-full">
                                                    <div className="flex flex-nowrap gap-1 items-center">
                                                        <IconBed fill='#5C636F' />

                                                        <p className='text-[#5C636F] font-normal text-sm'>{item.jumlah_kamar} Bed</p>
                                                    </div>
                                                    <div className="flex flex-nowrap gap-1 items-center">
                                                        <IconShower fill='#5C636F' />

                                                        <p className='text-[#5C636F] font-normal text-sm'>{item.jumlah_kamar_mandi} Bathroom</p>
                                                    </div>
                                                    <div className="flex flex-nowrap gap-1 items-center">
                                                        <IconMaterial fill='#5C636F' />

                                                        <p className='text-[#5C636F] font-normal text-sm'>{item.luas_tanah} Meters Square  </p>
                                                    </div>
                                                </div>

                                                <Button className='w-full' radius='sm' color='primary'>
                                                    Buy
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))
                                }
                            </div>
                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                <Pagination
                                    size='sm'
                                    radius='sm'
                                    variant='light'
                                    isCompact
                                    showControls
                                    total={Math.ceil(data.length / itemsPerPage)}
                                    initialPage={currentPage}
                                    onChange={setCurrentPage}
                                />

                                <Button variant="bordered" radius='sm' size='sm' endContent={<IconLeftArrow size={20} />}>
                                    Explore all available properties
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="grid grid-cols-1 gap-12">

                            {/* START */}
                            <div className="grid grid-cols-2 gap-10 md:gap-16 lg:gap-36 items-center">
                                <div className="col-span-2 md:col-span-1">
                                    <div className="flex gap-6 items-center">
                                        <h5 className='text-xl sm:text-2xl lg:text-4xl font-bold leading-10 sm:leading-[54px] md:leading-[64px]'>Customer Chronicles</h5>
                                        <Image
                                            src='https://images.unsplash.com/photo-1513584684374-8bab748fbf90'
                                            alt='Background Real Estate'
                                            loading='lazy'
                                            radius='sm'
                                            className='w-14 sm:w-16 md:w-20 lg:w-24'
                                        />
                                    </div>
                                    <h5 className='text-xl sm:text-2xl lg:text-4xl font-bold leading-10 sm:leading-[54px] md:leading-[64px]'>Happy Homes, Happier Stories</h5>
                                </div>

                                <div className="col-span-2 md:col-span-1">
                                    <p className='text-[#5C636F] text-sm font-medium'>Real Stories. True Satisfaction. Dive into the experiences that turned houses into homes for our valued customers. Their testimonials speak volumes about our commitment to fulfilling dreams.</p>
                                </div>
                            </div>
                            {/* END */}


                            <ReviewPage />
                        </div>
                    </div>

                    <div className="col-span-1 grid grid-cols-1 md:grid-cols-6 gap-28 items-center w-full">
                        <div className="hidden sm:block sm:col-span-6 md:col-span-2 relative w-full h-full">
                            <div className="pl-11 pr-16 w-full h-full">
                                <Image
                                    src='/images/images.png'
                                    alt='Background'
                                    radius='none'
                                    width={428}
                                    className='w-full h-full'
                                />

                            </div>
                            <div className="absolute bottom-0 w-full h-full ">
                                <div className="bg-white w-full h-2/5 rounded-lg relative overflow-hidden">
                                </div>
                                <div className="bg-primary-700 w-full h-3/5 rounded-lg relative overflow-hidden">
                                    <div className="absolute h-24 w-24 bg-white -right-12 -top-16 rotate-[35deg]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-4 mr-28 w-full lg:w-3/5">
                            <h5 className='text-[#2E3137] text-xl sm:text-2xl lg:text-[40px] font-bold leading-10 sm:leading-[54px] md:leading-[160%]'>Get <span className='text-[#2553AA]'>Exclusive Property</span> Insights & Guidance</h5>

                            <p className='mt-4 font-medium text-base text-[#5C636F]'>Access insider knowledge and personalized advice for your property journey with our exclusive insights. Elevate your search with expert guidance tailored to your unique needs.</p>

                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-6">
                                <Input
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    labelPlacement="outside"
                                    startContent={<IconEmail fill='#5C636F' />}
                                    endContent={
                                        <Button
                                            size="sm"
                                            color='primary'
                                        >Submit</Button>
                                    }
                                    size='lg'
                                    radius='sm'
                                    className='w-full h-full focus:outline-none focus:border-none'
                                    classNames={
                                        {
                                            input: [
                                                "bg-transparent"
                                            ],
                                            innerWrapper: [
                                                "bg-transparent",
                                            ],
                                            inputWrapper: [
                                                'bg-white',
                                                "hover:bg-white-200/70",
                                                'shadow-[0px_8px_8px_-4px_rgba(16,24,40,0.04),0px_20px_24px_-4px_rgba(16,24,40,0.10)]',
                                                'px-3 py-4'
                                            ],

                                        }
                                    }
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}
