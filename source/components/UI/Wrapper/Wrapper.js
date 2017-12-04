import React, { Component } from 'react'

import styles from './Wrapper.scss'

export default class Wrapper extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                {this.props.children}
            </div>
        )
    }
}