import { API_URL } from '../constants/Api'
import 'whatwg-fetch'
import _ from 'lodash'

/**
 * @param {*} params
 * Wrapper for request 
 */
export default function reqWRAPPER (params) {

    params.headers = {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    };

    if (_.isString(params.method)) {
        params.method = params.method.toUpperCase()
    } else {
        params.method = 'GET'
    }

    let config = {
        method: params.method,
        headers: params.headers
    }

    const storage = window.localStorage.getItem('token');
    
    if (storage && storage !== '') {
        const token = JSON.parse(JSON.stringify(storage) || '{}')

        if (!params.headers) {
            params.headers = {}
        }

        config.headers.authorization = `Bearer ${token}`
    }

    originalRequest(params, config, params.success)
}


/**
 * Call function
 * @param {*} options 
 * @param {*} config 
 */
function originalRequest(options, config, success) {
    return fetch(API_URL + options.url, config)
    .then(resp => {
        if (resp.ok) {
            return resp.json()
        } else {
            console.log(resp)
        }
    })
    .then(respJSON => {
        if (respJSON && respJSON.status) {
            if (respJSON.status == 'error') {
                console.log('ALERT')
            }
        }
        success(respJSON)
    })
}