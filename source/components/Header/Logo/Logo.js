import React, { Component } from 'react'

import { 
    BrowserRouter as Router, 
    Route,
    Link,
    NavLink
} from 'react-router-dom'

import styles from './Logo.scss'

import logotype from './images/logo.svg'

export default class Logo extends Component {
    render() {
        return (
            <div className={styles.block}>
                <Link to='/'>
                    <img src={logotype} alt="" className={styles.logo}/>
                </Link>

                <div className={styles.text}>Spotify similar songs</div>
            </div>   
        )
    }
}