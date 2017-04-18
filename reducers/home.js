import { ON_HOME_LOAD_START, ON_HOME_LOAD_SUCCESS, ON_HOME_LOAD_FAILURE } from '../common/constants'

const home = {

}

export default (state = home, action) => {
    switch(action.type) {
        case ON_HOME_LOAD_START:
        return Object.assign({}, state, {})
        case ON_HOME_LOAD_SUCCESS:
        return Object.assign({}, state, {})
        case ON_HOME_LOAD_FAILURE:
        return Object.assign({}, state, {})
        default:
        return state
    }
}