import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Home.scss";
export default function Home() {
    return (
        <div className="home">
            <div className="presentation-content">
                <h2>Generate your invoice/estimate quickly and easily!</h2>
                <p>Choose a template,submit the customer information and send/print to the relevant person.</p>
                <h2>Have more than one society? Regular customers? Not a problem!</h2>
                <p>You can save your society information / customer information and add them in one click to you form</p>
                <small><b>We are not register your information</b></small>
                <Button href="/dashboard">Get started!</Button>
            </div>
        </div>
    )
}
