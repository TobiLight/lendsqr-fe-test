import axios from "axios";
import { createBrowserRouter, json, Link } from "react-router-dom";
import DashboardComponent from "./Components/Dashboard/DashboardComponent";
import DashboardPage from "./Pages/Dashboard";
import UserInfoPage from "./Pages/Dashboard/user";
import LoginPage from "./Pages/Login";
import './Styles/global.scss'

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="homepage">
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
                    This project is designed by Oluwatobiloba 😉
                </p>
            </div>
        ),
    },
    {
        path: '/login',
        element: <LoginPage />,
        action: async ({ request }) => {
            console.log(localStorage.getItem('deletedID'))
            let form = await request.formData()
            let email = form.get('email')
            console.log(email)
        },
        loader: async ({ request }) => {
            const usersFromLS = JSON.parse(JSON.stringify(localStorage.getItem('users'))) as [{ id: string | number }]

            if (usersFromLS.length > 0) {
                localStorage.removeItem('users')
            }

            let users = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
            localStorage.setItem('users', { ...users.data })
            return json({ users: users.data })
        }
    },
    {
        path: '/dashboard',
        element: <DashboardComponent />,
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
                element: <UserInfoPage />
            }
        ]
    }
]);

export default AppRouter