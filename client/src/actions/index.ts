import { actionTypes } from './types'

const type = actionTypes;

export function setSignedIn() {
    return {
        type: type.signIn
    }
}