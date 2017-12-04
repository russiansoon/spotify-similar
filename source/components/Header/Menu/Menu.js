import React, { Component } from 'react'

import { 
    BrowserRouter as Router, 
    Route,
    Link,
    NavLink
} from 'react-router-dom'

import _ from 'lodash'

import styles from './Menu.scss'

export default class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menu: [
                {
                    link: '/algorithm',
                    name: 'Algorithm'
                },

                {
                    link: '/about',
                    name: 'About'
                },

                {
                    link: '/contacts',
                    name: 'Contacts'
                }
            ]
        }
    }
    render() {
        let menu = []

        _.each(this.state.menu, (item, iter) => {
            let addClass = '';

            menu.push(
                <li className={styles.item} key={'menuItem_' + iter}>
                    <NavLink
                        exact
                        to={item.link}
                        className={styles.link + ' ' + addClass}
                        activeClassName={styles.selected}
                        >{item.name}
                    </NavLink>
                </li>
            )
        })

        return (
            <ul className={styles.block}>
                {menu}
            </ul>
        )
    }
}