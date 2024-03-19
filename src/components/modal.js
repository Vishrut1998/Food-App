import React from "react";
import "../styles/modal.css";


const Modal = ({setModalOpen}) => {
    return(
        <>
        <div className="darkBG" onClick={() => setModalOpen(false)}>
        <div className="centered">
            <div className="modal">
                <div className="modalHeader">
                    <h1 className="heading">Hello World</h1>
                </div>
                <button className="closeBtn" onClick={() => setModalOpen(false)}>X</button>
                <div className="modalContent">
                    <h2>Loren Ipsum text</h2>
                </div>
                <div className="modalActions">
                <div className="modalFooter">
                    <div className="actionsContainer">
                    <button className="cancelBtn" onClick={() => setModalOpen(false)}>Close Modal</button>
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Modal;