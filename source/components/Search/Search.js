import React, { Component } from 'react'

import styles from './Search.scss'

import reqWrapper from '../../helped/Request'

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            information: {
                name: ''
            }
        }

        this.onChange     = this.onChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    onChange(e) {
        const field = e.target.name
        const information = this.state.information
        information[field] = e.target.value

        return this.setState({
            information: information
        })
    }

    handleSearch(e) {
        e.preventDefault()

        reqWrapper()
    }

    render() {

        return (
            <div className={styles.search}>
                <form action="" className={styles.form}>
                    <input
                        type="text"
                        value={this.state.song}
                        onChange={this.onChange} 
                        name="name"
                        className={styles.input}
                        placeholder="Type a song title"
                    />
                    
                    <input
                        type="submit"
                        onClick={this.handleSearch}
                        className={styles.send}
                        value="Search"
                    />
                </form>
            </div>   
        )
    }
}