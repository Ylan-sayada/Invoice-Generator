import React, { useState, useRef } from 'react';
import useCloseOnClickOut from '../../utils/customHooks/CloseOnClickOut/useCloseOnClickOut';
import FineSep from '../FineSep';
import Edit from '../Jsx_Svg/Edit';
import ProductSection from '../ProductSection';
import "./DashboardSection.scss";
function DashboardSection(props: { sectionTitle: string, title?: keyof DataUser, data: DataUser[] }) {

    const [onEdit, setOnEdit] = useState(false);
    let ref = useRef(null);
    let iconeRef = useRef(null);

    useCloseOnClickOut([onEdit, setOnEdit], [ref]);
    return (
        <section className="section-dashboard" ref={ref}>
            <h4>{props.sectionTitle}<span title="Edit mode" onClick={
                () => {
                    setOnEdit(!onEdit)
                }
            }><Edit ref={iconeRef} /></span></h4>
            <FineSep />
            {props.data.length !== 0 ?
                props.data.map((element: DataUser, index) => {
                    return (
                        <React.Fragment key={index}>
                            <ProductSection editMode={onEdit} outsideRef={iconeRef} title={props.title} data={element} />
                            {(index !== props.data.length - 1) && <FineSep />}
                        </React.Fragment>
                    )
                })
                :
                <div className="empty">Empty Sections</div>}

        </section>
    )
}
export default DashboardSection;