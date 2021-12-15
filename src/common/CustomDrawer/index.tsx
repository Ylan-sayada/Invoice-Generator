import React from 'react'

import './CustomDrawer.scss';
let languageMode = "HE"

const CustomDrawer = React.forwardRef(({style={},className,isOpen=false,children,linkData}:CustomDrawer,ref?:any) => {
   
    return (
        <div ref={ref} className={`drawer ${className?className:""} ${isOpen?"open-drawer":"close-drawer"}`} style={style}>
        <div className="link-nav">
            {linkData?.map((element:ListOfLink,index:number)=>{

                return <a href={element.link} key={index}>{element.desc[languageMode]}</a>
            })}
            
        </div>
        {children}
        </div>
       
    )
})
export default CustomDrawer;
