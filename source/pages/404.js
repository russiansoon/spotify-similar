import React, { Component } from 'react'

import Wrapper from '../components/UI/Wrapper/Wrapper'
import Content from '../components/UI/Content/Content'

import Header from '../components/Header/Header'
import Search from '../components/Search/Search'
import Footer from '../components/Footer/Footer'

export default class Page404 extends Component {
    render() {
        return (
            <Wrapper>
                <Content>
                    <Header />
                    <Search />
                </Content>
                <Footer />
            </Wrapper>
        )
    }
}
