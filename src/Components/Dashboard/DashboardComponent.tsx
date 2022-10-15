import React, { ReactNode } from 'react'
import { Form, Link } from 'react-router-dom'
import Button from '../Button'
import { Header, MobileHeader, SideNavigation } from '../Header/HeaderComponent'
import { FilterIcon } from '../Icons/Filter'
import { LoanIcon } from '../Icons/Loan'
import { MenuVerticalIcon } from '../Icons/Menu'
import { NavigationNextIcon, NavigationPreviousIcon } from '../Icons/Pagination'
import { SavingsIcon } from '../Icons/Savings'
import { UsersEllipseIcon, UsersEllipseIcon2 } from '../Icons/Users'
import styles from './styles/dashboard.module.scss'

const DashboardInfo = ({ className, icon, statsstyles, text, countstyles, count }: { className: string, icon: ReactNode, text: string, count: string, statsstyles: string, countstyles: string }) => {
    return (
        <div className={className}>
            {icon}
            <div className={statsstyles}>
                <p>{text}</p>
                <p className={countstyles}>{count}</p>
            </div>
        </div>
    )
}

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
                <div className={styles.dashboardContainer}>
                    <p>Users</p>
                    <div className={styles.usersInfo}>
                        <DashboardInfo className={styles.users} icon={<UsersEllipseIcon className={styles.userellipseIcon} />
                        } text={'USERS'} count={'2,453'} statsstyles={styles.usersStat} countstyles={styles.usersCount} />

                        <DashboardInfo className={styles.active} icon={<UsersEllipseIcon2 className={styles.userellipseIcon2} />
                        } text={'ACTIVE USERS'} count={'2,453'} statsstyles={styles.activeStats} countstyles={styles.activeCount} />

                        <DashboardInfo className={styles.usersloans} icon={<LoanIcon className={styles.loanIcon} />
                        } text={'USERS WITH LOANS'} count={'12,453'} statsstyles={styles.usersloansStats} countstyles={styles.usersloansCount} />

                        <DashboardInfo className={styles.userswithsavings} icon={<SavingsIcon className={styles.savingsIcon} />
                        } text={'USERS WITH SAVINGS'} count={'102,453'} statsstyles={styles.userswithsavingsStats} countstyles={styles.userswithsavingsCount} />
                    </div>

                    <div className={styles.userlistcontainer}>
                        <div className={styles.userlistwrapper}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            ORGANIZATION
                                            <FilterIcon className={styles.filterIcon} />
                                        </th>
                                        <th>
                                            USERNAME
                                            <FilterIcon className={styles.filterIcon} />
                                        </th>
                                        <th>
                                            EMAIL
                                            <FilterIcon className={styles.filterIcon} />
                                        </th>
                                        <th>
                                            PHONE NUMBER
                                            <FilterIcon className={styles.filterIcon} />
                                        </th>
                                        <th>
                                            DATE JOINED
                                            <FilterIcon className={styles.filterIcon} />
                                        </th>
                                        <th>
                                            STATUS
                                            <FilterIcon className={styles.filterIcon} />
                                        </th>
                                        <th>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(user => {
                                        return (
                                            <tr key={user}>
                                                <td>Lendsqr</td>
                                                <td>Adedeji</td>
                                                <td>Adedeji@lendsqr.com</td>
                                                <td>08078903721</td>
                                                <td>May 15, 2020 10:00 AM</td>
                                                {user <= 3 ?
                                                    <td>
                                                        <span className={styles.pending}>Pending</span>
                                                    </td>
                                                    : user >= 4 && user <= 6 ?
                                                        <td>
                                                            <span className={styles.inactive}>Inactive</span>
                                                        </td>
                                                        :
                                                        user % 3 !== 0 ?
                                                            <td>
                                                                <span className={styles.active}>Active</span>
                                                            </td>
                                                            :
                                                            <td>
                                                                <span className={styles.blacklisted}>Blacklisted</span>
                                                            </td>
                                                }
                                                <td><MenuVerticalIcon className={styles.moreIcon} /></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <div className={styles.resultFilter}>
                            <div className={styles.displayResults}>
                                <p>Showing</p>
                                <Form>
                                    <label htmlFor="pages">
                                        <select name="pages" id="pages">
                                            <option value="100">100</option>
                                            <option value="50">50</option>
                                            <option value="25">25</option>
                                        </select>
                                    </label>
                                </Form>
                                <p>out of 100</p>
                            </div>

                            <div className={styles.resultNavigation}>
                                <Button className={styles.btnPrev} type={'button'} handleClick={undefined} btnText={<NavigationPreviousIcon className={styles.prev} />} />
                                <div className={styles.pageNav}>
                                    {
                                        [1, 2, 3].map(nav => {
                                            return (
                                                <Link key={nav} to={`#nav`} className={nav === 1 ? styles.activePageNav : ''}>{nav}</Link>
                                            )
                                        })
                                    }
                                    <Link to={`#nav`}>...</Link>
                                    {
                                        [15, 16].map(nav => {
                                            return (
                                                <Link key={nav} to={`#nav`}>{nav}</Link>
                                            )
                                        })
                                    }
                                </div>
                                <Button className={styles.btnNext} type={'button'} handleClick={undefined} btnText={<NavigationNextIcon className={styles.next} />} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
