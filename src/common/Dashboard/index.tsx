import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addCustomer } from '../../redux/customer/actions';
import { addCompany } from '../../redux/company/actions';
import DashboardSection from '../DashboardSection';
import FineSep from '../FineSep';
import { ReactComponent as AddCompany } from '../Jsx_Svg/AddCompany.svg';
import { ReactComponent as AddCustomer } from '../Jsx_Svg/AddCustomer.svg';
import Modal from '../Modal';
import Warning from '../Jsx_Svg/Warning';
import QuickForm from '../QuickForm';
import "./Dashboard.scss";
import LocalStorageManager from "../../utils/LocalStorageManager";
export default function Dashboard() {
    let companyData = useSelector((state: { company: DataUser[] }) => state.company);
    let customersData = useSelector((state: { customers: DataUser[] }) => state.customers);
    let dispatch = useDispatch();
    const [modalState, setModalState] = useState({
        contentMode: 'customer',
        isOpen: false
    });
    const [warningModalState, setWarningModalState] = useState({ currentData: {} as SubmitData, isOpen: false });
    let closeModal = () => {
        setModalState({ ...modalState, isOpen: false });
    }
    let closeWarningModal = () => {
        setWarningModalState({ ...warningModalState, isOpen: false });
    }
    let handleSubmitQuickForm = (data: SubmitData, isInvalid: boolean) => {
        let myStorage = new LocalStorageManager(modalState.contentMode);
        if (isInvalid) {
            setWarningModalState({ currentData: data, isOpen: true })
        } else {
            let fullData: DataUser = {
                ...data,
                ID: uuidv4(),
                gender: (data.gender === "") ? "male" : data.gender,
                prefix: data.gender === "male" ? "Mr" : "Mrs",
                generatedAt: new Date().toJSON(),
            };
            modalState.contentMode === 'customer' ? dispatch(addCustomer(fullData)) : dispatch(addCompany(fullData));
            myStorage.appendDataToStorage(fullData);
            myStorage.submitDataToLocalStorage();
            closeModal();
        }

    }
    return (
        <div id="dashboard">
            <div style={{ display: "flex", maxWidth: "420px", flexDirection: "column", margin: "0 auto" }}>
                <Button style={{ borderRadius: "0 0 5px 5px", marginBottom: "10px", backgroundColor: "#8e8e80", border: "none" }}><span>Generate Form</span></Button>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Button size="sm" onClick={() => setModalState({ contentMode: 'customer', isOpen: true })}>
                        <AddCustomer />
                        <span>Add Customer</span>
                    </Button>
                    <Button size="sm" onClick={() => setModalState({ contentMode: 'company', isOpen: true })}>
                        <AddCompany />
                        <span>Add Company</span>
                    </Button>
                </div>
            </div>
            {modalState.isOpen && (
                <Modal handleClose={closeModal} title={`Add ${modalState.contentMode}`} IllustrationImg={modalState.contentMode === 'company' ? AddCompany : AddCustomer} >
                    <div className="add-data-container" >
                        <FineSep />
                        <QuickForm handleSubmit={handleSubmitQuickForm} cancel={closeModal} />
                        {warningModalState.isOpen && (<Modal handleClose={closeWarningModal} title="Some problem there..." IllustrationImg={Warning}>
                            <div style={{ padding: "10px 5px" }}>
                                <p>The information you submited could not correspond well to an invoice/estimate form.<br />
                                    However,do you want to submit it?</p>
                                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <Button onClick={() => {
                                        closeWarningModal();
                                        handleSubmitQuickForm(warningModalState.currentData, false);
                                    }}>
                                        Yes
                                    </Button>
                                    <Button variant="danger" onClick={closeWarningModal}>
                                        No
                                    </Button>
                                </div>

                            </div>
                        </Modal>)
                        }
                    </div>
                </Modal >
            )
            }
            <DashboardSection sectionTitle="Company Information" title={`companyName`} data={companyData} />
            <DashboardSection sectionTitle="Customers informations" title={`firstName`} data={customersData} />
            <DashboardSection sectionTitle="Generated forms" data={[]} />

        </div >
    )
}
