import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
    Switch,
    Route,
    browserHistory,
    BrowserRouter as Router
} from 'react-router-dom'

import 'normalize.css'

import PageIndex from '../pages/Index'
import PageAbout from '../pages/About'
import Page404 from '../pages/404'
import PageContacts from '../pages/Contacts'
import PageAlgorithm from '../pages/Algorithm'

const App = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Switch>
                <Route exact path="/" component={PageIndex} store={store}/>
                <Route path="/about" component={PageAbout} />
                <Route path="/contacts" component={PageContacts} />
                <Route path="/algorithm" component={PageAlgorithm} />

                <Route path="*" component={Page404} />
            </Switch>
        </Router>
    </Provider>
)

App.propTypes = {
    store: PropTypes.object.isRequired
}

function mapStateToProps (state) {
    return {
        state: state
    }
}
  
export default connect(mapStateToProps)(App)