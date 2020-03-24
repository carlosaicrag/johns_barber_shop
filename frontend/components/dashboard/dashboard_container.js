import {connect} from 'react-redux'
import Dashboard from './dashboard'
import { getChairs } from './../../actions/splash_actions'

const mapStateToProps = (state) => ({

})


const mapDispatchToProps = (dispatch) => ({
    getChairs: () => dispatch(getChairs())
})


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)