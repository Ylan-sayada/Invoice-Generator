import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './QuickForm.scss'
import Button from 'react-bootstrap/Button';
import CheckForm from '../../utils/CheckForm/CheckForm';
import { getFormData } from '../../utils/utils';
export default function QuickForm({ handleSubmit, style = {}, cancel }: QuickForm) {

    const [errorForm, setErrorForm] = useState<CheckFormType['modelErrorStructure']>({});
    //TODO save them to boilerplate :live form handle content
    // const [formData, setFormData] = useState<SubmitData>(initialData);
    /*let handleChangeInput = (e: SyntheticEvent) => {
        let target = e.target as HTMLInputElement;
        let data: PartialUserData = {
            [target.name as keyof SubmitData]: target.value as string
        };
        setFormData({
            ...formData,
            ...data,
        })
    }*/
    let handleSubmitData: React.FormEventHandler<HTMLFormElement> = (e) => {
        let formData: object;
        e.preventDefault();
        formData = getFormData(e) as SubmitData;
        let checkForm = new CheckForm(formData,
            [
                { key: ["*"], perform: [['hasSpecialChars', 'isEmptyString'], 'reverse'] },
                { key: ["phoneNumber"], perform: ["isValidPhoneNumber"] },
                { key: ["postCode"], perform: ["isOnlyNumber"] }
            ]
        );
        checkForm.enhanceCheckData();
        if (checkForm.isInvalidForm) {
            setErrorForm(checkForm.getModelErrorStructure());
        }

        handleSubmit(formData, checkForm.isInvalidForm);
    }
    let printError = (errMsg: string[]) => {
        return errMsg.map((err, index) => <p key={index}>{err + "."}</p>);
    }

    return (
        <div className="quick-form" style={{ ...style }}>
            <Form onSubmit={handleSubmitData}>
                <Form.Group controlId="formGridFirstName">
                    <Form.Label >First Name</Form.Label>
                    <Form.Control name="firstName" type="text" />
                    <span className="error-msg">
                        {errorForm.firstName && printError(errorForm.firstName.errMsg)}
                    </span>
                </Form.Group>

                <Form.Group controlId="formGridName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" type="text" />
                    <span className="error-msg">
                        {errorForm.lastName && printError(errorForm.lastName.errMsg)}
                    </span>
                </Form.Group>

                <Form.Group controlId="formGridGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select name="gender" >
                        <option value="" defaultValue=""></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Form.Select>
                    <span className="error-msg">
                        {errorForm.gender && errorForm.gender.hasError && "Please submit a gender."}
                    </span>
                </Form.Group>

                <Form.Group controlId="formGridCompany">
                    <Form.Label>Company</Form.Label>
                    <Form.Control name="companyName" type="text" />
                    <span className="error-msg">
                        {errorForm.companyName && printError(errorForm.companyName.errMsg)}
                    </span>
                </Form.Group>

                <Form.Group controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name="address" type="text" />
                    <span className="error-msg">
                        {errorForm.address && printError(errorForm.address.errMsg)}
                    </span>
                </Form.Group>
                <Form.Group controlId="formGridCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control name="country" type="text" />
                    <span className="error-msg">
                        {errorForm.country && printError(errorForm.country.errMsg)}
                    </span>
                </Form.Group>

                <Form.Group controlId="formGridCity">
                    <Form.Label >City</Form.Label>
                    <Form.Control name="city" type="text" />
                    <span className="error-msg">
                        {errorForm.city && printError(errorForm.city.errMsg)}
                    </span>
                </Form.Group>

                <Form.Group controlId="formGridpostCode">
                    <Form.Label>Postcode</Form.Label>
                    <Form.Control name="postCode" type="text" />
                    <span className="error-msg">
                        {errorForm.postCode && printError(errorForm.postCode.errMsg)}
                    </span>
                </Form.Group>

                <Form.Group controlId="formGridPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control name="phoneNumber" type="phone" />
                    <span className="error-msg">
                        {errorForm.phoneNumber && printError(errorForm.phoneNumber.errMsg)}
                    </span>
                </Form.Group>
                <div style={{ display: "flex", justifyContent: "space-evenly", margin: "10px 0" }}>
                    <Button variant="success" type="submit">Submit</Button>
                    <Button variant="danger" onClick={cancel}>Cancel</Button>
                </div>

            </Form>
        </div >
    )
}
