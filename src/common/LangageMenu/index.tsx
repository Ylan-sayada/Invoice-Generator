import React, { useState, useRef } from 'react';
import useCloseOnClickOut from '../../utils/customHooks/CloseOnClickOut/useCloseOnClickOut';
import './LanguageMenu.scss';
export default function LanguageMenu({ data, style = {} }: LanguageMenu) {

    const ref = useRef<HTMLDivElement>(null);
    const [current, setCurrent] = useState("He");
    const [isOpen, setIsOpen] = useState(false);
    useCloseOnClickOut([isOpen, setIsOpen], [ref]);
    const currentOption = data.filter(element => element.language === current).map((element) => {
        return {
            language: element.language,
            Flag: element.Flag
        }
    })[0];
    return (
        <div className="language-menu" ref={ref} style={style} >
            <ul>
                <li className="current" onClick={() => setIsOpen(!isOpen)} >
                    <currentOption.Flag />
                    <span>{currentOption.language}</span>
                </li>

                {
                    isOpen && data.map((element: LangAndFlag, index: number) => {
                        let { language, Flag } = element;

                        return (
                            <li value={language} key={index} onClick={() => {
                                setIsOpen(false)
                                setCurrent(language)
                            }}>
                                <Flag />
                                <span>{language}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
