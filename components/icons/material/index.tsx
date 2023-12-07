import React from 'react'

interface IndexProps {
    fill?: string
    filled?: string
    size?: number
    height?: number
    width?: number
    label?: string
}

export const IconMaterial = ({
    fill = '#000000',
    filled,
    size,
    height,
    width,
    label,
    ...props
}: IndexProps) => {
    return (
        <svg
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            fill={filled ? fill : 'none'}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M5.5 21.5H1.5L1.5 17.5H2.5V20.5H5.5V21.5ZM5.5 3.5H2.5V6.5H1.5L1.5 2.5H5.5V3.5ZM22.5 21.5H18.5V20.5H21.5V17.5H22.5V21.5ZM22.5 6.5H21.5V3.5H18.5V2.5H22.5V6.5Z"
                fill={fill}
            />
        </svg>
    )
}
