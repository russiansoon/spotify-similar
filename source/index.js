import React, { Component } from 'react';
import { hydrate } from 'react-dom'

import store from './store/mainStore'

import App from './containers/App'

import styles from './static/styles/Global.scss'

let rootElement = document.getElementById('root')

let persistedState = {}

hydrate (
    <App store={store(persistedState)} />,
    rootElement
)
