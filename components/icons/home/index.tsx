import React from 'react'

interface IndexProps {
    fill?: string
    filled?: string
    size?: number
    height?: number
    width?: number
    label?: string
}

export const IconHome = ({
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
                d="M2 22H22"
                stroke={fill}
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap='round'
                strokeLinejoin='round' />
            <path
                d="M2.9502 22L3.0002 9.96999C3.0002 9.35999 3.2902 8.78004 3.7702 8.40004L10.7702 2.95003C11.4902 2.39003 12.5002 2.39003 13.2302 2.95003L20.2302 8.39003C20.7202 8.77003 21.0002 9.34999 21.0002 9.96999V22"
                stroke={fill}
                strokeWidth={1.5}
                strokeMiterlimit={10}

                strokeLinejoin='round' />
            <path
                d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z"
                stroke={fill}
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap='round'
                strokeLinejoin='round' />
            <path
                d="M10 16.25V17.75"
                stroke={fill}
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap='round'
                strokeLinejoin='round' />
            <path
                d="M10.5 7.5H13.5"
                stroke={fill}
                strokeWidth={1.5}
                strokeMiterlimit={10}
                strokeLinecap='round'
                strokeLinejoin='round' />
        </svg>
    )
}
