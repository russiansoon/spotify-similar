import React, { Component } from 'react'

import styles from './Header.scss'

import ContainerWrap from '../UI/ContainerWrap/ContainerWrap'
import Logo from './Logo/Logo'

import Menu from './Menu/Menu'

export default class Header extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <ContainerWrap>
                    <div className={styles.block}>
                        <Logo />
                        <Menu />
                    </div>
                </ContainerWrap>
            </div>   
        )
    }
}