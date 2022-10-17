import { ReactNode, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Link } from 'react-router-dom'
import { UserType } from '../../helpers/types'
import Button from '../Button'
import { CalendarIcon } from '../Icons/Calendar'
import { FilterIcon } from '../Icons/Filter'
import { LoanIcon } from '../Icons/Loan'
import { MenuVerticalIcon } from '../Icons/Menu'
import { NavigationNextIcon, NavigationPreviousIcon } from '../Icons/Pagination'
import { SavingsIcon } from '../Icons/Savings'
import { UsersEllipseIcon, UsersEllipseIcon2 } from '../Icons/Users'
import Input from '../Input'
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


export default function Dashboard() {
    const [showFilter, setShowFilter] = useState<boolean>()
    const data = useSelector(state => state) as { users: { data: UserType[] } }

    return (
        <div className={styles.dashboardContainer}>
            <p style={{ marginBottom: 50 }}>Users</p>
            <div className={styles.usersInfo}>
                <DashboardInfo className={styles.users} icon={<UsersEllipseIcon className={styles.userellipseIcon} />
                } text={'USERS'} count={data.users.data.length < 999 ? `${data.users.data.length}` : '2,453'} statsstyles={styles.usersStat} countstyles={styles.usersCount} />

                <DashboardInfo className={styles.active} icon={<UsersEllipseIcon2 className={styles.userellipseIcon2} />
                } text={'ACTIVE USERS'} count={data.users.data.length < 999 ? `${data.users.data.length}` : '2,453'} statsstyles={styles.activeStats} countstyles={styles.activeCount} />

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
                                <th onClick={() => { setShowFilter(!showFilter) }}>
                                    ORGANIZATION
                                    <FilterIcon className={styles.filterIcon} />
                                </th>
                                <th onClick={() => { setShowFilter(!showFilter) }}>
                                    USERNAME
                                    <FilterIcon className={styles.filterIcon} />
                                </th>
                                <th onClick={() => { setShowFilter(!showFilter) }}>
                                    EMAIL
                                    <FilterIcon className={styles.filterIcon} />
                                </th>
                                <th onClick={() => { setShowFilter(!showFilter) }}>
                                    PHONE NUMBER
                                    <FilterIcon className={styles.filterIcon} />
                                </th>
                                <th onClick={() => { setShowFilter(!showFilter) }}>
                                    DATE JOINED
                                    <FilterIcon className={styles.filterIcon} />
                                </th>
                                <th onClick={() => { setShowFilter(!showFilter) }}>
                                    STATUS
                                    <FilterIcon className={styles.filterIcon} />
                                </th>
                                <th>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users.data.slice(0, 11).map(user => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.orgName}</td>
                                        <td>{user.userName || ''}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>May 15, 2020 10:00 AM</td>
                                        {Number(user.id) <= 3 ?
                                            <td>
                                                <span className={styles.pending}>Pending</span>
                                            </td>
                                            : Number(user.id) >= 4 && Number(user.id) <= 6 ?
                                                <td>
                                                    <span className={styles.inactive}>Inactive</span>
                                                </td>
                                                :
                                                Number(user.id) % 3 !== 0 ?
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
                            {showFilter && <tr>
                                <td>
                                    <div className={styles.tableFilter}>
                                        <Form method="get">
                                            <div className={styles.organization}>
                                                <p>Organization</p>
                                                <label htmlFor="organization">
                                                    <select name="organization" id="organziation">
                                                        <option value="select">Select</option>
                                                    </select>
                                                </label>
                                            </div>

                                            <label htmlFor="username">
                                                Username
                                                <Input type='text' placeholder='User' handleChange={undefined} className={styles.usernameInput} />
                                            </label>

                                            <label htmlFor="email">
                                                Email
                                                <Input type='email' placeholder='User' handleChange={undefined} className={styles.usernameInput} />
                                            </label>

                                            <label htmlFor="date">
                                                Date
                                                <div style={{ position: 'relative', width: '100%' }}>
                                                    <Input type={"text"} placeholder='Date' handleChange={undefined} className={styles.emailInput} />
                                                    <CalendarIcon className={styles.calendarIcon} />
                                                </div>

                                            </label>

                                            <label htmlFor="Phone Number">
                                                Phone Number
                                                <Input type='tel' placeholder='Phone Number' handleChange={undefined} className={styles.phoneNumberInput} />
                                            </label>

                                            <div className={styles.status}>
                                                <p>Status</p>
                                                <label htmlFor="status">
                                                    <select name="status" id="status">
                                                        <option value="select">Select</option>
                                                    </select>
                                                </label>
                                            </div>

                                            <div className={styles.filterAction}>
                                                <Button btnText={'Reset'} type={'button'} handleClick={undefined} className={styles.resetBtn} />
                                                <Button btnText={'Filter'} type={'button'} handleClick={undefined} className={styles.filterBtn} />
                                            </div>
                                        </Form>
                                    </div>
                                </td>
                            </tr>}
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
    )
}
