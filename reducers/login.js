import { ON_LOGIN_LOAD_START, ON_LOGIN_LOAD_SUCCESS, ON_LOGIN_LOAD_FAILURE } from '../common/constants'

const login = {

}

export default (state = login, action) => {
    switch(action.type) {
        case ON_LOGIN_LOAD_START:
        return Object.assign({}, state, {})
        case ON_LOGIN_LOAD_SUCCESS:
        return Object.assign({}, state, {})
        case ON_LOGIN_LOAD_FAILURE:
        return Object.assign({}, state, {})
        default:
        return state
    }
}