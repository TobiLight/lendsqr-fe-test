import React from 'react'

// Types for UserInfo component. These can be extended to whatever you want
type PersonalInfoType = {
    fullname: string
    phoneNumber: string
    email: string
    bvn: string
    gender: string
    maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed'
    children: number
    residenceType: string
}

type EducationEmploymentType = {
    educationLevel: string
    employmentStatus: string
    employmentSector: string
    employmentDuration: string
    officeEmail: string
    monthlyIncome: Array<string>
    loanRepayment: string
}

type SocialsType = {
    twitter?: string
    facebook?: string
    instagram?: string
}

type GuarantorType = {
    fullName: string
    phoneNumber: string
    email: string
    relationship: string
}

interface IUserInfo {
    className: { [key: string]: string }
    personalInformation?: PersonalInfoType
    educationAndEmployment?: EducationEmploymentType
    socials?: SocialsType
    guarantor?: GuarantorType
}

const PersonalInformation = ({ fullname, email, bvn, maritalStatus, gender, residenceType, phoneNumber, children, className }: PersonalInfoType &
{
    className: { [key: string]: string }
}): JSX.Element => {
    return (
        <div className={`${className.userPersonalInfo}`}>
            <p style={{ marginTop: 20 }}>Perosnal Information</p>
            <div className={className.userPersonalInfoDetails}>
                <div className={className.fullname}>
                    <p>FULLNAME</p>
                    <h4>{fullname}</h4>
                </div>
                <div className={className.phoneNumber}>
                    <p>PHONE NUMBER</p>
                    <h4>{phoneNumber}</h4>
                </div>
                <div className={className.email}>
                    <p>EMAIL ADDRESS</p>
                    <h4>{email}</h4>
                </div>
                <div className={className.bvn}>
                    <p>BVN</p>
                    <h4>{bvn}</h4>
                </div>
                <div className={className.gender}>
                    <p>GENDER</p>
                    <h4>{gender}</h4>
                </div>

                <div className={className.maritalStatus}>
                    <p>MARITAL STATUS</p>
                    <h4>{maritalStatus}</h4>
                </div>

                <div className={className.children}>
                    <p>CHILDREN</p>
                    <h4>{children}</h4>
                </div>

                <div className={className.residence}>
                    <p>TYPE OF RESIDENCE</p>
                    <h4>{residenceType}</h4>
                </div>
            </div>
        </div>
    )
}

const EducationEmployment = ({ educationLevel, employmentDuration, employmentSector, employmentStatus, officeEmail, monthlyIncome, loanRepayment, className }: EducationEmploymentType &
{
    className: { [key: string]: string }
}): JSX.Element => {
    return (
        <div className={`${className.userEducatiomEmploymentInfo}`}>
            <p>Education and Employment</p>
            <div className={className.userEducationEmploymentDetails}>
                <div className={className.educationLevel}>
                    <p>LEVEL OF EDUCATION</p>
                    <h4>{educationLevel}</h4>
                </div>
                <div className={className.employmentStatus}>
                    <p>EMPLOYMENT STATUS</p>
                    <h4>{employmentStatus}</h4>
                </div>
                <div className={className.emplyomentSector}>
                    <p>SECTOR OF EMPLOYMENT</p>
                    <h4>{employmentSector}</h4>
                </div>
                <div className={className.employmentDuration}>
                    <p>DURATION OF EMPLOYMENT</p>
                    <h4>{employmentDuration}</h4>
                </div>
                <div className={className.officeEmail}>
                    <p>OFFICE EMAIL</p>
                    <h4>{officeEmail}</h4>
                </div>

                <div className={className.monthlyIncome}>
                    <p>MONTHLY INCOME</p>
                    <h4>₦{monthlyIncome[0]} - {monthlyIncome[1]}</h4>
                </div>

                <div className={className.loanRepayment}>
                    <p>LOAN REPAYMENT</p>
                    <h4>{loanRepayment}</h4>
                </div>
            </div>
        </div>
    )
}

const Socials = ({ className, twitter, facebook, instagram }: SocialsType & {
    className: { [key: string]: string }
}): JSX.Element => {
    return (
        <div className={`${className.socialsInfo}`}>
            <p>Socials</p>
            <div className={className.socialsDetails}>
                <div className={className.twitter}>
                    <p>TWITTER</p>
                    <h4>{twitter}</h4>
                </div>
                <div className={className.facebook}>
                    <p>FACEBOOK</p>
                    <h4>{facebook}</h4>
                </div>
                <div className={className.instagram}>
                    <p>INSTAGRAM</p>
                    <h4>{instagram}</h4>
                </div>
            </div>
        </div>
    )
}

const Guarantors = ({ fullName, phoneNumber, email, relationship, className }: GuarantorType & {
    className: { [key: string]: string }
}): JSX.Element => {
    return (
        <div className={`${className.guarantorInfo}`}>
            <p>Guarantor</p>
            <div className={className.guarantorDetails}>
                <div className={className.fullname}>
                    <p>FULLNAME</p>
                    <h4>{fullName}</h4>
                </div>
                <div className={className.phoneNumber}>
                    <p>PHONE NUMBER</p>
                    <h4>{phoneNumber}</h4>
                </div>
                <div className={className.email}>
                    <p>EMAIL</p>
                    <h4>{email}</h4>
                </div>
                <div className={className.relationship}>
                    <p>RELATIONSHIP</p>
                    <h4>{relationship}</h4>
                </div>
            </div>
        </div>
    )
}

// Dynamic User Profile Info component for displaying personal user information
export default function UserInfo({ personalInformation, educationAndEmployment, socials, guarantor, className }: IUserInfo) {
    return (
        <>
            {
                personalInformation &&
                <PersonalInformation
                    fullname={personalInformation.fullname}
                    phoneNumber={personalInformation.phoneNumber}
                    email={personalInformation.email}
                    bvn={personalInformation.bvn}
                    gender={personalInformation.gender}
                    maritalStatus={personalInformation.maritalStatus}
                    children={personalInformation.children}
                    residenceType={personalInformation.residenceType}
                    className={className}
                />
            }
            {
                educationAndEmployment &&
                <EducationEmployment
                    educationLevel={educationAndEmployment.educationLevel}
                    employmentStatus={educationAndEmployment.employmentStatus}
                    employmentSector={educationAndEmployment.employmentSector}
                    employmentDuration={educationAndEmployment.employmentDuration}
                    officeEmail={educationAndEmployment.officeEmail}
                    monthlyIncome={educationAndEmployment.monthlyIncome}
                    loanRepayment={educationAndEmployment.loanRepayment}
                    className={className} />
            }

            {
                socials &&
                <Socials className={className} twitter={socials.twitter} facebook={socials.facebook} instagram={socials.instagram} />
            }

            {
                guarantor && <Guarantors
                    fullName={guarantor.fullName}
                    phoneNumber={guarantor.phoneNumber}
                    email={guarantor.email}
                    relationship={guarantor.relationship}
                    className={className}
                />
            }
        </>

    )
}
