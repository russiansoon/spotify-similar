import React, { Component } from 'react'

import styles from './Footer.scss'
import Logo from './images/logo.png'

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.block}>
                <div className={styles.info}>
                    <span>Created using API of Spotify. Inspired by</span>
                    <a className={styles.link} href="https://spotify.com/" target="_blank">
                        <img className={styles.logo} src={Logo} alt=""/>
                    </a>
                </div>
            </div>   
        )
    }
}