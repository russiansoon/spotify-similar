import React, { Component } from 'react'

import Layout from '../components/UI/Layout/Layout'
import Search from '../components/Search/Search'

export default class PageIndex extends Component {
    render() {
        return (
            <Layout>
                <Search />
            </Layout>
        )
    }
}
