import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE 
    } from '../actions/ActionTypes'
import { API_LOGIN } from '../constants/Api'

import reqWrapper from '../helped/Request'

const initialState = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    key: ''
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                isAuthenticated: false
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                key: action.key
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                key: ''
            }

        default:
            return state
    }
}

export function loginUserRequest() {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false
    }
}

export function loginUser(params) {
    return dispatch => {
        dispatch(loginUserRequest())

        reqWrapper({
            API_LOGIN,
            data: params,
            type: 'post',
            success: (res) => {
                if (res) {
                    if (res.status !== 'success') {
                        dispatch(loginFailure(res))
                    } else {
                        dispatch(loginSuccess(res))
                    }
                }
            }
        })
    }
}

export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        key: data.access_token
    }
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        key: ''
    }
}
