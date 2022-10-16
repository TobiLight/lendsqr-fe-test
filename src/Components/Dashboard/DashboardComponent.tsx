import { Outlet } from 'react-router-dom'
import { Header, MobileHeader, SideNavigation } from '../Header/HeaderComponent'
import styles from './styles/dashboard.module.scss'


export default function DashboardComponent() {
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
