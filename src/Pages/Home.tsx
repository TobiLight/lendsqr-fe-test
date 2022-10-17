import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useFetcher, useLoaderData } from 'react-router-dom'
import { UserType } from '../helpers/types'
import { setUsers } from '../features/user/usersSlice'

export default function Home(): JSX.Element {
    const data = useLoaderData() as { users: UserType[] }
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        if (data.users) {
            setLoading(false)
            dispatch(setUsers({ data: [...data.users] }))
        }
    }, [data])

    return !data ? <p>Loading app...</p> : (<div className="homepage">
        <h1>Hello World</h1>
        <span>Below are the designed pages. Navigate through any one of them</span>
        <span>* <Link to="login" className="underline-wavy">Login</Link>
        </span>
        <span>* <Link to="dashboard" className="underline-wavy">Dashboard</Link>
        </span>
        <span>* <Link to="dashboard/users" className="underline-wavy">Users</Link>
        </span>
        <span>* <Link to="dashboard/user/100029287365456" className="underline-wavy">User Details Page</Link>
        </span>
        <p className="">
            This project is developed by Oluwatobiloba 😉
        </p>
    </div>)
}
