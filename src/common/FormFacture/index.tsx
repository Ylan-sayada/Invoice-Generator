import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import data from './lang.json';
import './FormFacture.scss';
import Button from 'react-bootstrap/Button';
export default function FormFacture() {
    let currentLang = data["FR"]
    return (
        <Container>
            <Form className={`${currentLang.isRtl && "rtl-mode"}`}>
                <h3>{currentLang.docType}</h3>
                <Form.Select >
                    <option value="invoice">{currentLang.docTypeOption.invoice}</option>
                    <option value="estimate">{currentLang.docTypeOption.estimate}</option>
                </Form.Select>
                <br />
                <h3>{currentLang.clientInfo}</h3>
                <Form.Group controlId="formGridFirstName">
                    <Form.Label>{currentLang.clientInfoOption.firstName}</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="formGridName">
                    <Form.Label>{currentLang.clientInfoOption.lastName}</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formGridAddress">
                    <Form.Label>{currentLang.clientInfoOption.Adress}</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group controlId="formGridCountry">
                    <Form.Label>{currentLang.clientInfoOption.Country}</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group controlId="formGridCity">
                    <Form.Label >{currentLang.clientInfoOption.City}</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group controlId="formGridZip">
                    <Form.Label>{currentLang.clientInfoOption.postCode}</Form.Label>
                    <Form.Control />
                </Form.Group>

                <h3>{currentLang.product}</h3>
                <Form.Group controlId="formGridProductName">
                    <Form.Label>{currentLang.productName}</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group controlId="formGridPrice">
                    <Form.Label>{currentLang.price}</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group controlId="formGridQuantity">
                    <Form.Label>{currentLang.quantity}</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Form.Group controlId="formGridVAT">
                    <Form.Label>{currentLang.VAT}</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Button type="submit">{currentLang.submit}</Button>
            </Form>
        </Container>
    )
}
