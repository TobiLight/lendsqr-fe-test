import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import { BackButtonIcon } from '../Icons/Pagination'
import { RatingFilledIcon, RatingOutlinedIcon } from '../Icons/Rating'
import { UserAvatarSampleIcon } from '../Icons/Users'
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
                <div className={styles.userPersonalInfo}>
                    <p>Personal Information</p>
                    <div className={styles.userPersonalInfoDetails}>
                        <div className={styles.fullname}>
                            <p>FULLNAME</p>
                            <h4>Grace Effiom</h4>
                        </div>
                        <div className={styles.phoneNumber}>
                            <p>PHONE NUMBER</p>
                            <h4>07060780922</h4>
                        </div>
                        <div className={styles.email}>
                            <p>EMAIL ADDRESS</p>
                            <h4>grace@gmail.com</h4>
                        </div>
                        <div className={styles.bvn}>
                            <p>BVN</p>
                            <h4>07060780922</h4>
                        </div>
                        <div className={styles.gender}>
                            <p>GENDER</p>
                            <h4>Female</h4>
                        </div>

                        <div className={styles.maritalStatus}>
                            <p>MARITAL STATUS</p>
                            <h4>Single</h4>
                        </div>

                        <div className={styles.children}>
                            <p>CHILDREN</p>
                            <h4>None</h4>
                        </div>

                        <div className={styles.residence}>
                            <p>TYPE OF RESIDENCE</p>
                            <h4>Parent’s Apartment</h4>
                        </div>
                    </div>
                </div>

                <div className={styles.userPersonalInfo}>
                    <p>Personal Information</p>
                    <div className={styles.userPersonalInfoDetails}>
                        <div className={styles.fullname}>
                            <p>FULLNAME</p>
                            <h4>Grace Effiom</h4>
                        </div>
                        <div className={styles.phoneNumber}>
                            <p>PHONE NUMBER</p>
                            <h4>07060780922</h4>
                        </div>
                        <div className={styles.email}>
                            <p>EMAIL ADDRESS</p>
                            <h4>grace@gmail.com</h4>
                        </div>
                        <div className={styles.bvn}>
                            <p>BVN</p>
                            <h4>07060780922</h4>
                        </div>
                        <div className={styles.gender}>
                            <p>GENDER</p>
                            <h4>Female</h4>
                        </div>

                        <div className={styles.maritalStatus}>
                            <p>MARITAL STATUS</p>
                            <h4>Single</h4>
                        </div>

                        <div className={styles.children}>
                            <p>CHILDREN</p>
                            <h4>None</h4>
                        </div>

                        <div className={styles.residence}>
                            <p>TYPE OF RESIDENCE</p>
                            <h4>Parent’s Apartment</h4>
                        </div>
                    </div>
                </div>

                <div className={styles.userPersonalInfo}>
                    <p>Personal Information</p>
                    <div className={styles.userPersonalInfoDetails}>
                        <div className={styles.fullname}>
                            <p>FULLNAME</p>
                            <h4>Grace Effiom</h4>
                        </div>
                        <div className={styles.phoneNumber}>
                            <p>PHONE NUMBER</p>
                            <h4>07060780922</h4>
                        </div>
                        <div className={styles.email}>
                            <p>EMAIL ADDRESS</p>
                            <h4>grace@gmail.com</h4>
                        </div>
                        <div className={styles.bvn}>
                            <p>BVN</p>
                            <h4>07060780922</h4>
                        </div>
                        <div className={styles.gender}>
                            <p>GENDER</p>
                            <h4>Female</h4>
                        </div>

                        <div className={styles.maritalStatus}>
                            <p>MARITAL STATUS</p>
                            <h4>Single</h4>
                        </div>

                        <div className={styles.children}>
                            <p>CHILDREN</p>
                            <h4>None</h4>
                        </div>

                        <div className={styles.residence}>
                            <p>TYPE OF RESIDENCE</p>
                            <h4>Parent’s Apartment</h4>
                        </div>
                    </div>
                </div>

                <div className={styles.userPersonalInfo}>
                    <p>Personal Information</p>
                    <div className={styles.userPersonalInfoDetails}>
                        <div className={styles.fullname}>
                            <p>FULLNAME</p>
                            <h4>Grace Effiom</h4>
                        </div>
                        <div className={styles.phoneNumber}>
                            <p>PHONE NUMBER</p>
                            <h4>07060780922</h4>
                        </div>
                        <div className={styles.email}>
                            <p>EMAIL ADDRESS</p>
                            <h4>grace@gmail.com</h4>
                        </div>
                        <div className={styles.bvn}>
                            <p>BVN</p>
                            <h4>07060780922</h4>
                        </div>
                        <div className={styles.gender}>
                            <p>GENDER</p>
                            <h4>Female</h4>
                        </div>

                        <div className={styles.maritalStatus}>
                            <p>MARITAL STATUS</p>
                            <h4>Single</h4>
                        </div>

                        <div className={styles.children}>
                            <p>CHILDREN</p>
                            <h4>None</h4>
                        </div>

                        <div className={styles.residence}>
                            <p>TYPE OF RESIDENCE</p>
                            <h4>Parent’s Apartment</h4>
                        </div>
                    </div>
                </div>

                <div className={styles.userPersonalInfo}>
                    <p>Personal Information</p>
                    <div className={styles.userPersonalInfoDetails}>
                        <div className={styles.fullname}>
                            <p>FULLNAME</p>
                            <h4>Grace Effiom</h4>
                        </div>
                        <div className={styles.phoneNumber}>
                            <p>PHONE NUMBER</p>
                            <h4>07060780922</h4>
                        </div>
                        <div className={styles.email}>
                            <p>EMAIL ADDRESS</p>
                            <h4>grace@gmail.com</h4>
                        </div>
                        <div className={styles.bvn}>
                            <p>BVN</p>
                            <h4>07060780922</h4>
                        </div>
                        <div className={styles.gender}>
                            <p>GENDER</p>
                            <h4>Female</h4>
                        </div>

                        <div className={styles.maritalStatus}>
                            <p>MARITAL STATUS</p>
                            <h4>Single</h4>
                        </div>

                        <div className={styles.children}>
                            <p>CHILDREN</p>
                            <h4>None</h4>
                        </div>

                        <div className={styles.residence}>
                            <p>TYPE OF RESIDENCE</p>
                            <h4>Parent’s Apartment</h4>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
