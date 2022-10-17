This project is bootstrapped using create-react-app (cra)


## Overview of Lendqr Project
1. Build the 4 pages Login, Dashboard, User page, User details page
2. The user pages should pull data from a mock api with 500 records
3. Use local storage or indexedDB to store and retrieve user details on the user details page.
4. The page must be mobile responsive



### Technologies Used
- React - (UI & Logic)
- React Router DOM (URL Routing)
- Redux - (State Management)
- Axios - (Data Fetching)
- SCSS - (CSS)
- localforage (LocalStorage, IndexDB or WebSQL)




### Install packages using
```npm i```




### Page URLs
- / - Landing page
- /login Login page [NOTE: Use 'admin' as password to login. For e.g, email: 'Maverick.Hyatt83@gmail.com', password: 'admin']
- /dashboard - Loads dashboard with list of users
- /users - (same as above)
- /user/:userID - loads a single user information on the dashboard using the query parameter (userID)




### Project Structure
- src
    - app (contains redux store file)
    - Components (contains reusable components, and styles)
    - features (contains redux slices [actions and reducers])
    - helpers (contains axios base)
    - Pages (contains active pages for this project)
    - Styles (contains global styles for the project)
    - Routers.tsx (contains all the app routes)

- ![Project Structure](projstructure.PNG?raw=true "Project Structure")




### NOTE
If you want to run the project on your local machine, you need to create a .env file and it should contain REACT_APP_APP_URL. For e.g. REACT_APP_API_URL = 'apiurlshouldbehere'


## TODOS
Although, the todos are minor but they are:
- cleanup css file for user (i.e, dashboard.module.scss). it has some duplicated code in it
- write different tests for the app (honestly, i did not have enough time to do this as i quickly tried to finish this app within a short timeframe)