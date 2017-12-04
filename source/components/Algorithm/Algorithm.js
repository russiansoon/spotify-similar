import React, { Component } from 'react'

import styles from './Algorithm.scss'

export default class Algorithm extends Component {
    render() {
        return (
            <div className={styles.block}>
                <h1 className={styles.main}>Algorithm Overview</h1>
                <ol className={styles.list}>
                    <li>Given a track extract his popularity</li>
                    <li>Get related artists form that track</li>
                    <li>Get top tracks from each related artist</li>
                    <li>Sort all tracks from popularity (ASC)</li>
                    <li>Alternate by artist</li>
                    <li>Select a batch of 30 tracks most closest to the first track popularity</li>
                    <li>Sort by popularity</li>
                    <li>Alternate by artist</li>
                    <li>Enjoy the playlist</li>
                </ol>
            </div>   
        )
    }
}