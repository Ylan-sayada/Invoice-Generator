import React, { MouseEventHandler } from 'react'

const Burger = React.forwardRef((props:{className:string,onClick:MouseEventHandler},ref?:any) => {
    return (
        <svg ref={ref} onClick={props.onClick} className={props.className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512">
            <path fill="currentColor" d="M80 96h352v32H80z"/><path fill="currentColor" d="M80 240h352v32H80z"/><path fill="currentColor" d="M80 384h352v32H80z"/>
        </svg>
    )
})
export default Burger
