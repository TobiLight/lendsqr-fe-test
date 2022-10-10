import { createBrowserRouter, Link } from "react-router-dom";


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
]);

export default AppRouter