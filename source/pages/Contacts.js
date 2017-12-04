import React, { Component } from 'react'

import Layout from '../components/UI/Layout/Layout'
import Contacts from '../components/Contacts/Contacts'

export default class PageContacts extends Component {
    render() {
        return (
            <Layout>
                <Contacts />
            </Layout>
        )
    }
}
