import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NavModal from "./nav_modal"
import {logout, clientLogout} from "../../actions/session_actions"


function Modal({ modal, closeModal, session, logout, clientSession, clientLogout}) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'OPEN_NAV_MODAL':
            component = <NavModal session={session} clientSession={clientSession} logout={logout} clientLogout={clientLogout}/>
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-cover">
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {

    return {
        modal: state.ui.modal,
        session: state.session.id,
        clientSession: state.session.clientId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout()),
        clientLogout: () => dispatch(clientLogout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);