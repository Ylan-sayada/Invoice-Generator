import React, { MouseEventHandler } from 'react';

let Edit = React.forwardRef((props: { className?: string, onClick?: MouseEventHandler }, ref?: any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" ref={ref} onClick={props.onClick} className={props.className} xmlnsXlink="http://www.w3.org/1999/xlink" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <g fill="none">
                <path d="M16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    )
});
export default Edit;
