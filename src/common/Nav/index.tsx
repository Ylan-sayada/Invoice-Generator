import React, { useState, useRef } from 'react'
import CustomDrawer from '../CustomDrawer';
import { NavLink } from 'react-router-dom';
import Burger from '../Jsx_Svg/Burger';
import Israel from '../Jsx_Svg/Israel';
import French from '../Jsx_Svg/French';
import America from '../Jsx_Svg/America';
import LanguageMenu from '../LangageMenu';
import './Nav.scss'
import useCloseOnClickOut from '../../utils/customHooks/CloseOnClickOut/useCloseOnClickOut';

export default function Nav({ link, style = {} }: Nav) {
    const ref = useRef(null);
    const buttonRef = useRef(null)
    const [drawerIsOpen, setdrawerIsOpen] = useState(false)
    useCloseOnClickOut([drawerIsOpen, setdrawerIsOpen], [ref, buttonRef])
    return (
        <nav className="nav" style={style}>
            <div className="main-content">
                <h6><NavLink to="/">Invoice/Estimate Generator</NavLink></h6>
                <div className="right-side">
                    <LanguageMenu data={[{ language: "En", Flag: America }, { language: "Fr", Flag: French }, { language: "He", Flag: Israel }]} />
                    <Burger ref={buttonRef} className="burger-nav" onClick={() => setdrawerIsOpen(!drawerIsOpen)} />
                </div>
            </div>
            <CustomDrawer ref={ref} isOpen={drawerIsOpen} linkData={link} />
        </nav>
    )
}
