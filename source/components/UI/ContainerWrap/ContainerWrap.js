import React, { Component} from 'react'
import propTypes from 'prop-types'

import Footer from '../../Footer/Footer'

import styles from './ContainerWrap.scss'

export default class ContainerWrap extends Component {
    render() {
        return (
            <div className={styles.container}>
                {this.props.children}
            </div>
        )
    }
}

ContainerWrap.propTypes = {
    children: propTypes.any.isRequired
}
