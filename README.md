
## Overview of Lendqr Project
1. Build the 4 pages Login, Dashboard, User page, User details page
2. The user pages should pull data from a mock api with 500 records
3. Use local storage or indexedDB to store and retrieve user details on the user details page.
4. The page must be mobile responsive

### Technologies Used
- React - (UI & Logic)
- Redux - (State Management)
- Axios - (Data Fetching)
- SCSS - (CSS)
- localforage (LocalStorage, IndexDB or WebSQL)

### Install packages using
```npm i```

### Page URLs
- / - landing page
- /dashboard - loads dashboard with list of users
- /users - (same as above)
-/user/:userID - loads a single user information on the dashboard using the query parameter (userID)

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
