import React, { MouseEventHandler } from 'react'

export default function French(props: { className?: string, onClick?: MouseEventHandler }) {
    return (
        <svg className={props.className} onClick={props.onClick} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64">
            <path d="M2 32c0 13.1 8.4 24.2 20 28.3V3.7C10.4 7.8 2 18.9 2 32z" fill="#428bc1" />
            <path d="M62 32c0-13.1-8.3-24.2-20-28.3v56.6C53.7 56.2 62 45.1 62 32" fill="#ed4c5c" />
            <path d="M22 60.3c3.1 1.1 6.5 1.7 10 1.7s6.9-.6 10-1.7V3.7C38.9 2.6 35.5 2 32 2s-6.9.6-10 1.7v56.6z" fill="#f9f9f9" />
        </svg>
    )
}
