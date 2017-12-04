import { API_URL, API_TRACKS } from '../constants/Api'
import 'whatwg-fetch'
import _ from 'lodash'

export default function reqWrapper(options) {
    return fetch(API_URL + API_TRACKS, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json()
        }
    })
    .then(res => {
        console.log(res)
    })
}