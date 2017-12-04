import React, { Component} from 'react'
import propTypes from 'prop-types'

import styles from './Layout.scss'

import Wrapper from '../Wrapper/Wrapper'
import Content from '../Content/Content'

import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import ContainerWrap from '../ContainerWrap/ContainerWrap'

export default class Layout extends Component {

    render() {
        return (
            <Wrapper>
                <Content>
                    <Header />

                    <ContainerWrap>
                        {this.props.children}
                    </ContainerWrap>

                </Content>
                <Footer />
            </Wrapper>
        )
    }
}

Layout.propTypes = {
    children: propTypes.any.isRequired
}
