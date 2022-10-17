export type UserType = {
    id?: string
    email: string
    userName?: string
    phoneNumber?: string
    orgName?: string
    accountBalance?: string
    createdAt?: string
    accountNumber?: string
    profile?: {
        firstName?: string
        lastName?: string
        avatar?: string
        gender?: string
        bvn?: string
    }
    education?: {
        level?: string
        employmentStatus?: string
        sector?: string
        duration?: string
        officeEmail?: string
        monthlyIncome?: Array<string>
        loanRepayment?: string
    }
    socials?: {
        facebook?: string
        twitter?: string
        instagram?: string
    }
    guarantor?: {
        firstName: string
        lastName: string
        address: string
        phoneNumber: string
        gender: string
    }
}