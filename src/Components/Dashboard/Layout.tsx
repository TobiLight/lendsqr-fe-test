import localforage from 'localforage'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserType } from '../../helpers/types'
import { Header, MobileHeader, SideNavigation } from '../Header/HeaderComponent'
import styles from './styles/dashboard.module.scss'
import { setUsers } from '../../features/user/usersSlice'


export default function DashboardLayout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const checkStorage = async () => {
            const user = await localforage.getItem('user') as UserType
            const users = await localforage.getItem('users') as UserType[]
            if (user === null) {
                return navigate('/login', { replace: true })
            }
            dispatch(setUsers({ data: [...users] }))
            return
        }
        checkStorage()
        return
    }, [dispatch])

    return (
        <div className={styles.main}>
            <div className={styles.mobile}>
                <MobileHeader />
            </div>

            <div className={styles.desktopHeader}>
                <Header />
            </div>

            <div className={styles.dashboard}>
                <SideNavigation styles={styles} />
                <Outlet />
            </div>
        </div>
    )
}
