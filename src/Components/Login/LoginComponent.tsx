import React, { useState } from 'react'
import styles from './styles/login.module.scss'
import logo from '../../Assets/Images/lendsqr-logo.png'
import loginLogo from '../../Assets/Images/signin-image.png'
import { Form, Link } from 'react-router-dom'
import Input from '../Input'
import Button from '../Button'


export default function LoginComponent() {
    const [revealPassword, setRevealPassword] = useState<boolean>(false)

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <img src={logo} alt="Lendsqr Logo" className='' />
                </div>
                <div className={styles.main}>
                    <div className={styles.loginLeft}>
                        <img src={loginLogo} alt="Lendsqr Login Logo" />
                    </div>

                    <div className={styles.loginRight}>
                        <div className={styles.heading}>
                            <h1>
                                Welcome!
                            </h1>
                            <p>Enter details to login.</p>
                        </div>
                        <Form method="post">
                            <div className={styles.inputInfo}>
                                <label htmlFor="email">
                                    <Input autofocus type="email" name='email' id='email' className={styles.input} placeholder='Email' />
                                </label>

                                <label className={styles.password} htmlFor="password">
                                    <Input type={revealPassword ? "text" : "password"} name='password' id='password' className={styles.input} placeholder='Password' />
                                    <span onClick={() => setRevealPassword(!revealPassword)} className={styles.showPassword}>{revealPassword ? "hide" : "show"}</span>
                                </label>
                                <Link to="/forgot-password">FORGOT PASSWORD?</Link>
                            </div>
                            <Button btnText={'Login'} type={'button'} className={styles.button} />
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
