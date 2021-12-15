
import React, { MouseEventHandler } from 'react';

const Arrow = React.forwardRef((props: { className?: string, onClick?: MouseEventHandler }, ref?: any) => {
    return (
        <svg ref={ref} onClick={props.onClick} className={props.className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
            <path d="M6 15l5-5l-5-5l1-2l7 7l-7 7z" fill="currentColor" />
        </svg>
    )
})
export default Arrow;