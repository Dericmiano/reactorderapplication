import React,{Fragment} from "react";
import ReactDOM from "react-dom";
import './Modal.css'
const BackDrop = (props) => {
    return(
        <div className="backdrop" onClick={props.onClose}>

        </div>
    )
  
}
const ModalOverlay = (props) => {
    return(
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    )
  
}
const portalElement = document.getElementById('overlays')
const Modal = (props) => {
    return(
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    )


}
export default Modal;