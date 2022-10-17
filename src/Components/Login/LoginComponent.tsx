import { useEffect, useState } from 'react'
import styles from './styles/login.module.scss'
import logo from '../../Assets/Images/lendsqr-logo.png'
import loginLogo from '../../Assets/Images/signin-image.png'
import { Form, Link, useActionData, useLoaderData, useNavigate } from 'react-router-dom'
import Input from '../Input'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { login } from '../../features/auth/authSlice'
import { setUsers } from '../../features/user/usersSlice'
import { UserType } from '../../helpers/types'
import localforage from 'localforage'

export default function LoginComponent() {
    const [revealPassword, setRevealPassword] = useState<boolean>(false)
    const [user, setUser] = useState<{ email: string, password: string }>({ email: '', password: '' })
    const [error, setError] = useState<string>()
    const action = useActionData() as { error?: string, user: { [key: string]: any } }
    let navigate = useNavigate()
    let dispatch = useDispatch()
    const data = useLoaderData() as { users: UserType[] }

    useEffect(() => {
        localforage.getItem<UserType[]>('users').then(users => {
            if (users !== null)
                return dispatch(setUsers({ data: [...data.users] }))
        }).catch(err => err)


        localforage.getItem<UserType & { isLoggedIn: boolean }>('user').then(user => {
            if (user?.isLoggedIn) {
                return navigate('/dashboard')
            }
        }).catch(err => err)

        if (action && action.error) {
            return setError(action.error)
        }

        if (action && action.user) {
            dispatch(login({ email: action.user.email }))
            dispatch(setUsers({ data: [...data.users] }))
            return navigate('/dashboard')
        }
    }, [dispatch, action])

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <img src={logo} alt="Lendsqr Logo" />
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
                            {error && <p style={{ color: 'red', fontSize: 14, fontWeight: 600, marginBottom: 20 }}>{error}</p>}
                            <div className={styles.inputInfo}>
                                <label htmlFor="email">
                                    <Input autofocus={true} type="email" name='email' id='email' className={styles.input} placeholder='Email' required={true} ariaLabel="Your email" value={user.email} handleChange={(event) => {
                                        setUser({ ...user, email: event.currentTarget.value })
                                        setError(undefined)
                                    }} />
                                </label>

                                <label className={styles.password} htmlFor="password">
                                    <Input type={revealPassword ? "text" : "password"} name='password' id='password' className={styles.input} placeholder='Password' required={true} ariaLabel="Your password" value={user.password} handleChange={(event) => {
                                        setUser({ ...user, password: event.currentTarget.value })
                                        setError(undefined)
                                    }} />
                                    <span onClick={() => setRevealPassword(!revealPassword)} className={styles.showPassword}>{revealPassword ? "hide" : "show"}</span>
                                </label>
                                <Link to="/forgot-password">FORGOT PASSWORD?</Link>
                            </div>
                            <Button btnText={'Login'} type={'submit'} className={styles.button} />
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
