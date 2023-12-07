import { Image } from '@nextui-org/react'
import React from 'react'
import { IconStar } from '../icons/star'
import { IconStarTwo } from '../icons/startwo'

export default function ReviewPage() {
    interface Properties {
        id: number,
        name: string,
        rating: number,
        picture: string,
        desc: string
    }

    const [data, setData] = React.useState<Properties[]>([])

    React.useEffect(() => {
        const getData = async () => {
            try {
                const review = "/data/review.json"
                const response = await fetch(review);
                const datas = await response.json()

                setData(datas.review)
            } catch (e) {
                console.log(e)
            }
        }

        getData()
    })

    return (
        <div className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {
                data.map((item, index) => (
                    <div key={index} className='h-full w-full relative'>
                        <div className="h-14 w-14 mb-4">
                            <Image
                                radius='full'
                                src={item.picture}
                                alt={`Image Review From ${item.name}`}
                                className='h-full w-full'
                            />
                        </div>

                        <p className='text-[#5C636F] font-medium text-sm leading-5'>&quot;{item.desc}&quot;</p>

                        <div className="mt-5 scale-0">
                            <p>{item.name}</p>
                        </div>

                        <div className="flex justify-between items-center absolute bottom-0 w-full">
                            <h6 className='text-[#454A53] font-semibold text-base'>{item.name}</h6>

                            <div className="grid grid-cols-5 justify-end">
                                {[...Array(5)].map((_, starIndex) => (
                                    <React.Fragment key={starIndex}>
                                        {starIndex + 1 <= item.rating ? (
                                            <IconStar fill='#FFBE0B' size={16} />
                                        ) : starIndex < item.rating ? (
                                            <IconStarTwo fill='#FFBE0B' size={16} />
                                        ) : (
                                            <IconStar fill='#D9D9D9' size={16} />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
