import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import "./Modal.scss";
let Modal = ({ handleClose, style, title, IllustrationImg, className, children }: Modal) => {
    useEffect(() => {
        document.body.classList.add("no-scroll");
        return () => {
            document.body.classList.remove("no-scroll");
        }
    })

    let handleClick = (e: React.BaseSyntheticEvent) => {
        let { className } = e.currentTarget;
        if (className.includes("ymodal")) {
            handleClose()
        }
    }
    return createPortal(
        <div className="ymodal" style={{ ...style }} onClick={(e: React.BaseSyntheticEvent) => handleClick(e)}>

            <div className={`content ${className ? className : ""}`} onClick={(e: React.BaseSyntheticEvent) => {
                e.stopPropagation();
                handleClick(e)
            }}>

                <h3>{IllustrationImg && <IllustrationImg className="img-illustration" />}{title}</h3>
                {children}
            </div>
        </div>
        , document.body
    );
}
export default Modal;
