import React from "react";
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
            <div className={`ui standard modal visible active ${props.size || ''}`} onClick={e => e.stopPropagation()}>
                <i className="close icon" onClick={props.onDismiss} />
                <div className="header">{props.title}</div>
                {props.children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}

export default Modal;