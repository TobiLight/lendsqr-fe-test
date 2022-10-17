import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { UserType } from '../../helpers/types'
import Button from '../Button'
import { BackButtonIcon } from '../Icons/Pagination'
import { RatingFilledIcon, RatingOutlinedIcon } from '../Icons/Rating'
import { UserAvatarSampleIcon } from '../Icons/Users'
import styles from './styles/user.module.scss'
import UserInfo from './UserInfo'

export default function UserInfoComponent() {
    const { user } = useLoaderData() as { user: UserType }
    console.log(user)
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
                                {user.profile?.avatar ? <img src={user.profile?.avatar} alt="Adeola's avatar" className={styles.userAvatar} /> :
                                    <UserAvatarSampleIcon className={styles.defaultUserIcon} />
                                }
                            </div>

                            <div className={styles.userprofileInfo}>
                                <div className={styles.userfullname}>
                                    <h3>{user.profile?.firstName} {user.profile?.lastName}</h3>
                                    <p>{user.accountNumber}</p>
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
                                    <h3>₦{user.accountBalance}</h3>
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
                        fullname: user.profile?.firstName + ' ' + user.profile?.lastName,
                        email: user.email,
                        residenceType: 'Parent’s Apartment',
                        bvn: user.profile?.bvn ?? '0',
                        phoneNumber: user.phoneNumber || '',
                        maritalStatus: 'Single',
                        children: 0,
                        gender: user.profile?.gender || 'Other',

                    }}
                    educationAndEmployment={{
                        educationLevel: user.education?.level || 'B.Sc',
                        employmentStatus: user.education?.employmentStatus || '',
                        employmentSector: user.education?.sector || '',
                        employmentDuration: user.education?.duration || '0',
                        officeEmail: user.education?.officeEmail || '',
                        monthlyIncome: user.education?.monthlyIncome || ['50,000,000', '100,000,000'],
                        loanRepayment: user.education?.loanRepayment || '40000',
                    }}

                    socials={{
                        twitter: user.socials?.twitter,
                        facebook: user.socials?.facebook,
                        instagram: user.socials?.instagram
                    }}

                    guarantor={{
                        fullName: user.guarantor?.firstName + ' ' + user.guarantor?.lastName,
                        phoneNumber: user.guarantor?.phoneNumber || '',
                        email: 'debby@gmail.com',
                        relationship: 'Sister'
                    }}
                />
            </div>
        </main>
    )
}
