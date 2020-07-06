import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {openModal, closeModal} from "../../actions/modal_actions"

const mapStateToProps = ({ session, entities: { barbers } }) => {
  return {
    currentBarber: barbers[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);