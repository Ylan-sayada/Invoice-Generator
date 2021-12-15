import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useCloseOnClickOut from '../../utils/customHooks/CloseOnClickOut/useCloseOnClickOut';
import { useDispatch } from 'react-redux';
import { getFormData } from '../../utils/utils';
import CheckForm from '../../utils/CheckForm/CheckForm';
import { removeCustomer, updateCustomer } from '../../redux/customer/actions';
import { removeCompany, updateCompany } from '../../redux/company/actions';
import Arrow from '../Jsx_Svg/Arrow'
import Delete from '../Jsx_Svg/Delete';
import Edit from '../Jsx_Svg/Edit';
import "./ProductSection.scss";
export default function ProductSection({ editMode, title, data, outsideRef }: ProductSection) {

    let dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [dataForm, setDataForm] = useState(data)
    const [editIsOpen, setEditIsOpen] = useState(false);
    let ref = useRef<HTMLDivElement>(null);
    let contentRef = useRef<HTMLDivElement>(null);
    let titleProduct;
    let { firstName, lastName, postCode, country, address, phoneNumber, prefix, gender, companyName, ID } = dataForm;

    useCloseOnClickOut([isOpen, setIsOpen], [ref, contentRef, outsideRef]);

    const handleModify: React.FormEventHandler<HTMLFormElement> = (event) => {
        let data: PartialUserData = {};
        event.preventDefault();
        data = getFormData(event) as SubmitData;
        let checkForm = new CheckForm(data,
            [
                { key: ["*"], perform: [['hasSpecialChars', 'isEmptyString'], 'reverse'] },
                { key: ["phoneNumber"], perform: ["isValidPhoneNumber"] },
                { key: ["postCode"], perform: ["isOnlyNumber"] }
            ]);
        checkForm.enhanceCheckData();
        console.log(checkForm.getModelErrorStructure());

    }

    switch (title) {
        case "firstName":
        case "lastName":
        case undefined:
            titleProduct = `${prefix} ${firstName} ${lastName} `;
            break;
        case "companyName":
            titleProduct = data["companyName"];
            break;
        default:
            titleProduct = data[title];
    }
    return (
        <div className="product-info" >

            <div className="desc"
                onClick={() => {
                    if (!editMode)
                        setIsOpen(!isOpen)
                }} ref={ref}>
                <span className="title-product">{titleProduct}</span>
                {
                    editMode ?
                        <div className="to-left">
                            <Button size="sm" onClick={() => {
                                setEditIsOpen(!editIsOpen)
                                setIsOpen(!isOpen);
                            }}>
                                <Edit />
                            </Button>
                            <Button size="sm" variant="danger" onClick={() => dispatch(title === 'companyName' ? removeCompany(ID) : removeCustomer(ID))}><Delete /></Button>
                        </div>
                        :
                        <Arrow className={`arrow ${isOpen ? "turn-down" : ""}`} />
                }
            </div>


            <div ref={contentRef} className={`full-information ${isOpen ? "open" : "close"}`}>
                <form onSubmit={handleModify}>
                    <Form.Label >First Name:</Form.Label> <Form.Control type="text" name="firstName" readOnly={!editMode} defaultValue={firstName} />
                    <Form.Label >Last Name:</Form.Label> <Form.Control type="text" name="lastName" readOnly={!editMode} defaultValue={lastName} />
                    <Form.Label >Address:</Form.Label> <Form.Control type="text" name="address" readOnly={!editMode} defaultValue={address} />
                    <Form.Label >Country:</Form.Label> <Form.Control type="text" name="country" readOnly={!editMode} defaultValue={country} />
                    <Form.Label>Gender</Form.Label>
                    <Form.Select disabled={!editMode} name="gender"   >
                        <option value={gender} defaultValue={gender}>{gender}</option>
                        <option value={gender === "male" ? "female" : "male"}>{gender === "male" ? "female" : "male"}</option>
                    </Form.Select>
                    <Form.Label >Post Code:</Form.Label> <Form.Control readOnly={!editMode} type="text" name="postCode" defaultValue={postCode} />
                    <Form.Label >Company:</Form.Label><Form.Control readOnly={!editMode} type="text" name="company" defaultValue={companyName} />
                    <Form.Label >Phone:</Form.Label><Form.Control readOnly={!editMode} type="text" name="phoneNumber" defaultValue={phoneNumber} />

                    {editMode && <div className="submit-buttons">
                        <Button type="submit">Modify</Button>
                        <Button variant="danger" type="reset" onClick={() => setIsOpen(false)}>Cancel</Button>
                    </div>}
                </form>

            </div>

        </div>
    )
}

