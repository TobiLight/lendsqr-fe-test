import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import UserInfoComponent from '../../Components/Dashboard/User'
import { UserType } from '../../helpers/types'

export default function UserInfoPage() {
    return (
        <UserInfoComponent />
    )
}
