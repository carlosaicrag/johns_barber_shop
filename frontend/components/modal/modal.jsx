import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NavModal from "./nav_modal"
import {logout, clientLogout} from "../../actions/session_actions";
import ReminderModal from "./reminder_modal";


import {updateBarberWorkingStatus} from './../../actions/barber_actions';

function Modal({ modal, wording, closeModal, session, logout, clientSession, clientLogout, barberInfo, updateBarberWorkingStatus}) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'OPEN_NAV_MODAL':
            component = <NavModal session={session} clientSession={clientSession} logout={logout} clientLogout={clientLogout} barberInfo={barberInfo} updateBarberWorkingStatus={updateBarberWorkingStatus}/>
            break;
        case 'REMINDER_MODAL': 
            component = <ReminderModal wording={wording}/>;
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
    let modal = "null"
    let wording = "null"

    if (state.ui.modal){
        modal = state.ui.modal.type
        wording = state.ui.modal.modalWording
    }
    return {
        modal: modal,
        wording: wording,
        session: state.session.id,
        clientSession: state.session.clientId,
        barberInfo: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout()),
        clientLogout: () => dispatch(clientLogout()),
        updateBarberWorkingStatus: (barber) => dispatch(updateBarberWorkingStatus(barber))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);