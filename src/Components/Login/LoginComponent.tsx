import React from 'react'
import { useLoaderData } from 'react-router-dom'
import styles from './styles/login.module.scss'


export default function LoginComponent() {
    const data = useLoaderData() as { some: string }
    return (
        <div className={styles.loginContainer}>
            <div className={styles.logo}>

            </div>
        </div>
    )
}
