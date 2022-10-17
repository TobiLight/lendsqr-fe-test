import localforage from "localforage";
import { createBrowserRouter, json } from "react-router-dom";
import DashboardLayout from "./Components/Dashboard/Layout";
import httprequest from "./helpers/httprequest";
import { UserType } from "./helpers/types";
import DashboardPage from "./Pages/Dashboard";
import UserInfoPage from "./Pages/Dashboard/user";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";
import './Styles/global.scss'

// const LoginErrorBoundary = () => {
//     let error = useRouteError() as { data: string, status: number };
//     console.error(error.data);
//     // Uncaught ReferenceError: path is not defined
//     return (
//         <>
//             <div>Dang! {error.data}</div>;
//             <Link to="/login">Go back</Link>
//         </>
//     )
// }


const AppRouter = createBrowserRouter([
    {
        id: 'homepage',
        path: "/",
        loader: async () => {
            const users = await localforage.getItem('users')
            if (users !== null) {
                return json({ users })
            }

            try {
                console.log('loading users')
                const request = await httprequest.get('/users')
                localforage.setItem('users', request.data)
                console.log('users list retrieved')
                console.log(request.data)
                return json({ users: request.data })
            } catch (err: any) {
                return json({ error: err.message }, { status: 400 })
            }
        },
        element: <Home />,
    },
    {
        path: '/login',
        element: <LoginPage />,
        action: async ({ request }) => {
            let form = await request.formData()
            let email = form.get('email')
            let password = form.get('password') as string

            if (password.toLowerCase() !== 'admin') {
                return json({ error: 'Invalid login details' }, { status: 400 })
            }

            try {
                let users = await localforage.getItem('users') as Array<{ [key: string]: any }>
                let user = users.filter(user => email === user.email)
                if (user === null || !user[0]) {
                    return json({ error: 'Invalid login details' }, { status: 400 })
                }

                return localforage.setItem('user', { ...user[0], isLoggedIn: true }).then(value => {
                    return json({ user: user[0] })
                })

            } catch (err) {
                return json({ error: err }, { status: 400 })
            }
        },
        loader: async ({ request }) => {
            const users = await localforage.getItem('users')

            if (users !== null) {
                return json({ users })
            }

            try {
                console.log('loading users')
                const request = await httprequest.get('/users')
                localforage.setItem('users', request.data)
                console.log('users list retrieved')
                console.log(request.data)
                return json({ users: request.data })
            } catch (err: any) {
                return json({ error: err.message }, { status: 400 })
            }
        }
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        loader: async ({ request }) => {
            try {
                let data = await localforage.getItem('user') as Partial<UserType[]>
                return json({ user: data })
            } catch (err) {
                return json({ error: err }, { status: 400 })
            }
        },
        children: [
            {
                path: '',
                element: <DashboardPage />
            },
            {
                path: 'users',
                element: <DashboardPage />
            },
            {
                path: 'user/:userID',
                element: <UserInfoPage />,
                loader: async ({ request, params }) => {
                    const userID = params['userID']
                    try {
                        let users = await localforage.getItem('users') as UserType[]
                        let user = users.filter(user => userID === user.id)
                        return json({ user: user[0] }, { status: 200 })
                    } catch (err) {
                        return json({ error: err }, { status: 400 })
                    }

                }
            }
        ],
    }
]);

export default AppRouter