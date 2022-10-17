import styles from "./styles/header.module.scss"
import logo from '../../Assets/Images/lendsqr-logo.png'
import { Form, Link, useNavigate } from "react-router-dom"
import Input from "../Input"
import { SearchIcon } from "../Icons/Search"
import Button from "../Button"
import { BellIcon } from "../Icons/Bell"
import avatar from '../../Assets/Images/avatar.png'
import { DropDownIcon, DropdownIconFilled } from "../Icons/Dropdown"
import { MenuIcon } from "../Icons/Menu"
import { BriefcaseIcon, BriefcaseIcon2 } from "../Icons/Briefcase"
import { DashboardIcon } from "../Icons/Dashboard"
import { Guarantors, UserCheckIcon, UserSettingsIcon, UsersIcon, UserTimesIcon } from "../Icons/Users"
import { LoanSackIcon, SackIcon } from "../Icons/Sack"
import { HandshakeIcon } from "../Icons/Handshake"
import { PiggyBankIcon } from "../Icons/PiggyBank"
import { BankIcon } from "../Icons/Bank"
import { CoinsIcon } from "../Icons/Coins"
import { ChartIcon } from "../Icons/Chart"
import { ScrollIcon } from "../Icons/Scroll"
import { TransactionsIcon } from "../Icons/Transactions"
import { ServicesIcon } from "../Icons/Services"
import { SettingsIcon } from "../Icons/Settings"
import { PricingIcon } from "../Icons/Badge"
import { ClipboardIcon } from "../Icons/Clipboard"
import { useEffect, useState } from "react"
import { SignOutIcon } from "../Icons/Signout"
import { TireIcon } from "../Icons/Tire"
import { useDispatch, useSelector } from "react-redux"
import { UserType } from "../../helpers/types"
import { logout } from "../../features/auth/authSlice"
import localforage from "localforage"
import { CloseIcon } from "../Icons/Close"

export const SideNavigation = ({ styles }: { styles: { [key: string]: string } }): JSX.Element => {
    const dispatch = useDispatch()
    const [loggedOut, setLoggedOut] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        if (loggedOut) {
            return navigate('/login')
        }
    }, [loggedOut])

    return (
        <nav className={styles.sideMenu || styles.sideMenuDesktop}>
            <ul>
                <li>
                    <Link to={'/switch-org'}>
                        <BriefcaseIcon className={styles.briefcaseIcon} />
                        <span>
                            Switch Organization
                            <DropDownIcon className={styles.dropdownIcon} />
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to={'/dashboard'}>
                        <DashboardIcon className={styles.dashboardIcon} />
                        Dashboard
                    </Link>
                </li>
            </ul>

            <div className={styles.customersNavLinks}>
                <p>CUSTOMERS</p>
                <ul>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <UsersIcon className={styles.usersIcon} />
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <Guarantors className={styles.guarantorsIcon} />
                            Guarantors
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <SackIcon className={styles.sackIcon} />
                            Loans
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <HandshakeIcon className={styles.handshakeIcon} />
                            Decision Models
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <PiggyBankIcon className={styles.piggybankIcon} />
                            Savings
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <LoanSackIcon className={styles.loansackIcon} />
                            Loan Requests
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <UserCheckIcon className={styles.usercheckIcon} />
                            Whitelist
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <UserTimesIcon className={styles.usertimesIcon} />
                            Karma
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styles.businessesNavLinks}>
                <p>BUSINESSES</p>
                <ul>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <BriefcaseIcon2 className={styles.organizationIcon} />
                            Organization
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <LoanSackIcon className={styles.loansackIcon} />
                            Loan Products
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <BankIcon className={styles.bankIcon} />
                            Savings Products
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <CoinsIcon className={styles.coinsIcon} />
                            Fees and Charges
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <TransactionsIcon className={styles.transactionsIcon} />
                            Transactions
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <ServicesIcon className={styles.servicesIcon} />
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <UserSettingsIcon className={styles.serviceaccountsIcon} />
                            Service Accounts
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <ScrollIcon className={styles.settlementsIcon} />
                            Settlements
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <ChartIcon className={styles.reportsIcon} />
                            Reports
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styles.settingsNavLinks}>
                <p>SETTINGS</p>
                <ul>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <SettingsIcon className={styles.preferencesIcon} />
                            Preferences
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <PricingIcon className={styles.feesandpricingIcon} />
                            Fees and Pricing
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/users'}>
                            <ClipboardIcon className={styles.auditlogsIcon} />
                            Audit Logs
                        </Link>
                    </li>

                    <li>
                        <Link to={'/dashboard/users'}>
                            <TireIcon className={styles.tireIcon} />
                            System Messages
                        </Link>
                    </li>

                    <li onClick={() => {
                        dispatch(logout())
                        localforage.removeItem('user')
                        setLoggedOut(true)
                    }}>
                        <SignOutIcon className={styles.signoutIcon} />
                        Logout
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export const MobileHeader = (): JSX.Element => {
    const [showSideMenu, setShowSideMenu] = useState<boolean>(false)
    const { user } = useSelector<{ auth: UserType }>(state => state.auth) as { user: UserType }


    return (
        <header className={styles.mobileHeaderContainer}>
            <nav className={styles.mobileHeader}>
                <div className={styles.logo}>
                    <img src={logo} alt="Lendsqr Logo" />
                </div>

                <div className={styles.right}>
                    <Link to={`/dashboard/user/${user && user.id}`} className={styles.avatarWrapper}>
                        <div className={styles.avatar}>
                            <img src={user && user.profile?.avatar} alt="User Avatar" />
                        </div>
                        <div className={styles.username}>
                            {user && <p>{user.profile?.firstName || ''}</p>}
                            <DropdownIconFilled className={styles.dropdownIconFilled} />
                        </div>
                    </Link>
                </div>
            </nav>
            <nav className={styles.mobileMenu}>
                <Link to="#">Docs</Link>
                <BellIcon className={styles.bellIcon} />
                {showSideMenu ? <CloseIcon onClick={() => { setShowSideMenu(false) }} className={styles.closeIcon} /> : <MenuIcon onClick={() => { setShowSideMenu(true) }} className={styles.menuIcon} />}
            </nav>

            {showSideMenu && <SideNavigation styles={styles} />}
        </header>
    )
}

export const Header = (): JSX.Element => {
    const { user } = useSelector<{ auth: UserType }>(state => state.auth) as { user: UserType }

    return (
        <header className={styles.headerContainer}>
            <nav className={styles.header}>
                <div className={styles.logo}>
                    <img src={logo} alt="Lendsqr Logo" />
                </div>

                <Form method="post">
                    <div className={styles.searchForm}>
                        <label htmlFor="search">
                            <Input ariaLabel={'Search for anything'} name="search" id="search" className={styles.headerSearch} placeholder="Search for anything" handleChange={undefined} />
                        </label>
                        <Button btnText={<SearchIcon className={styles.searchIcon} />} className={styles.searchBtn} type={undefined} handleClick={undefined} />
                    </div>
                </Form>

                <div className={styles.right}>
                    <Link to="#">Docs</Link>
                    <BellIcon className={styles.bellIcon} />
                    <Link to={`/dashboard/user${user && user.id}`} className={styles.avatarWrapper}>
                        <div className={styles.avatar}>
                            <img src={user && user.profile?.avatar} alt="User Avatar" />
                        </div>
                        <div className={styles.username}>
                            {user && <p>{user.profile?.firstName || ''}</p>}
                            <DropdownIconFilled className={styles.dropdownIconFilled} />
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
    )
}