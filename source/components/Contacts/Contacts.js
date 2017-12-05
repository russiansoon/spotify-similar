import React, { Component } from 'react'

import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'

import styles from './Contacts.scss'

export default class Contacts extends Component {
    render() {
        return (
            <div className={styles.block}>
                <div className={styles.info}>Contacts</div>

                <div className={styles.text}>
                    This project is open source and open for your pull requests.
                    The project was created for personal use but I decided to release it for community.
                    Will all questions and suggestions, please follow the links below:
                </div>

                <div className={styles.links}>
                    <a className={styles.link} href="https://www.facebook.com/russiansoon" target="_blank">
                        <FontAwesome
                            name='facebook'
                            cssModule={faStyles}
                            size='2x'
                        />  
                    </a>
                    <a className={styles.link} href="mailto:russiansoon@gmail.com">
                        <FontAwesome
                            name='envelope-o'
                            cssModule={faStyles}
                            size='2x'
                        />  
                    </a>
                    <a className={styles.link} href="https://github.com/russiansoon" target="_blank">
                        <FontAwesome
                            name='github'
                            cssModule={faStyles}
                            size='2x'
                        /> 
                    </a>
                </div>  
            </div>   
        )
    }
}