import React from 'react'

interface IndexProps {
    fill?: string
    filled?: string
    size?: number
    height?: number
    width?: number
    label?: string
}

export const IconEmail = ({
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
                d="M17 20.665H7C4 20.665 2 19.165 2 15.665V8.66504C2 5.16504 4 3.66504 7 3.66504H17C20 3.66504 22 5.16504 22 8.66504V15.665C22 19.165 20 20.665 17 20.665Z"
                stroke={fill}
                strokeWidth={1.5}
                strokeMiterlimit={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17 9.16504L13.87 11.665C12.84 12.485 11.15 12.485 10.12 11.665L7 9.16504"
                stroke={fill}
                strokeWidth={1.5}
                strokeMiterlimit={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
