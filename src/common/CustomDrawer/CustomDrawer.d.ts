interface CustomDrawer {
    children?:HTMLElement | React.ReactNode,
    style?:React.CSSProperties,
    className?:string,
    isOpen?:boolean,
    linkData:ListOfLink[]
}