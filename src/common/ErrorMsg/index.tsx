import React from 'react'

export default function ErrorMsg(errMsg: string[]) {
    let printError = (errMsg: string[]) => {
        return errMsg.map((err, index) => <p key={index}>{err + "."}</p>);
    }
    return (
        <span className="error-msg">
            {printError(errMsg)}
        </span>
    )
}
