import { initialState } from '../common/consts'
import { actionsT } from '../actions/types'

export default (state = initialState.user, action: actionsT) => {
    return state;
}