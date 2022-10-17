export type UserType = {
    id?: string
    email: string
    username?: string
    phoneNumber?: string
    profile?: {
        firstName?: string
        lastName?: string
        avatar?: string
        gender?: string
        bvn: string
    }
}