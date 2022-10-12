import React from 'react'
import Header from '../Header/HeaderComponent'
import styles from './styles/dashboard.module.scss'

export default function DashboardComponent() {
    return (
        <div className={styles.main}>
            <Header />
            <p>Users</p>
        </div>
    )
}
