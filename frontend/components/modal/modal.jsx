import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NavModal from "./nav_modal"


function Modal({ modal, closeModal}) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'OPEN_NAV_MODAL':
            component = <NavModal />
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
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);