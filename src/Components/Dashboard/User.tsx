import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import { BackButtonIcon } from '../Icons/Pagination'
import { RatingFilledIcon, RatingOutlinedIcon } from '../Icons/Rating'
import { UserAvatarSampleIcon } from '../Icons/Users'
import UserInfo from './UserInfo'
import styles from './styles/user.module.scss'

export default function UserInfoComponent() {
    return (
        <main>
            <Link to="#" className={styles.backLink}>
                <BackButtonIcon className={styles.backBtnIcon} />
                Back to users
            </Link>

            <div className={styles.userdetailsContainer}>
                <h3>User Details</h3>
                <div className={styles.userdetailsAction}>
                    <Button btnText={'BLACKLIST USER'} type={'button'} handleClick={undefined} className={styles.blacklistBtn} />
                    <Button btnText={'ACTIVATE USER'} type={'button'} handleClick={undefined} className={styles.activateBtn} />
                </div>

                <div className={styles.userdetailsWrapper}>
                    <div className={styles.userdetails}>
                        <div className={styles.userprofile}>
                            <div className={styles.userprofileImg}>
                                {/* <img src={""} alt="Adeola's avatar" className={styles.userAvatar} /> */}
                                <UserAvatarSampleIcon className={styles.defaultUserIcon} />
                            </div>

                            <div className={styles.userprofileInfo}>
                                <div className={styles.userfullname}>
                                    <h3>Grace Effiom</h3>
                                    <p>LSQFf587g90</p>
                                </div>

                                <div className={styles.userTier}>
                                    <p>User's Tier</p>
                                    <div className={styles.userTierRating}>
                                        <RatingFilledIcon className={styles.ratingFilledIcon} />
                                        <RatingOutlinedIcon className={styles.ratingOutlinedIcon} />
                                        <RatingOutlinedIcon className={styles.ratingOutlinedIcon} />
                                    </div>
                                </div>

                                <div className={styles.userWalletAmount}>
                                    <h3>₦200,000.00</h3>
                                    <p>9912345678/Providus Bank</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.userProfileNav}>
                        <div className={styles.general}>
                            <Link to="#" className={styles.active}>General Details</Link>
                        </div>

                        <div className={styles.documents}>
                            <Link to="#">Documents</Link>
                        </div>

                        <div className={styles.bankdetails}>
                            <Link to="#">Bank Details</Link>
                        </div>

                        <div className={styles.loans}>
                            <Link to="#">Loans</Link>
                        </div>

                        <div className={styles.savings}>
                            <Link to="#">Savings</Link>
                        </div>

                        <div className={styles.appandsystem}>
                            <Link to="#">App and System</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.userExtraInfo}>
                <UserInfo
                    className={styles}
                    personalInformation={{
                        fullname: 'Oluwatobiloba Agunloye',
                        email: 'oluwatobilobagunloye@gmail.com',
                        residenceType: 'Parent’s Apartment',
                        bvn: 0,
                        phoneNumber: 0,
                        maritalStatus: 'Single',
                        children: 0,
                        gender: 'Male',

                    }}
                    educationAndEmployment={{
                        educationLevel: 'B.SC',
                        employmentStatus: 'Employed',
                        employmentSector: 'FinTech',
                        employmentDuration: 0,
                        officeEmail: 'oluwatobilobagunloye@gmail.com',
                        monthlyIncome: '₦200,000.00- ₦400,000.00',
                        loanRepayment: 40000,
                    }}

                    socials={{
                        twitter: '@grace_effiom',
                        facebook: 'Grace Effiom',
                        instagram: '@grace_effiom'
                    }}

                    guarantor={{
                        fullName: 'Debby Ogana',
                        phoneNumber: '07060780922',
                        email: 'debby@gmail.com',
                        relationship: 'Sister'
                    }}
                />
            </div>
        </main>
    )
}
