import React, { Component } from 'react'

import styles from './Contacts.scss'

export default class Contacts extends Component {
    render() {
        return (
            <div className={styles.block}>
                <div className={styles.info}>Contacts</div>

                <div className={styles.item}>
                    <span>Email:</span> 
                    <a className={styles.link} href="mailto:russiansoon@gmail.com">russiansoon@gmail.com</a>
                </div>
                <div className={styles.item}>
                    <span>Github:</span> 
                    <a className={styles.link} href="https://github.com/russiansoon">https://github.com/russiansoon</a>
                </div>
            </div>   
        )
    }
}