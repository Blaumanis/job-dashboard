# Job dashboard

- Website created by idea from [Jobify](https://www.jobify.live/landing) site, which was created by [John Smilga](https://github.com/john-smilga)

### Links

- [Live Site URL](https://fantastic-babka-6f04f7.netlify.app/)

### Built with

- [SaSS](https://sass-lang.com/) - CSS pre-processor
- [React](https://reactjs.org/) - JS library
- [Redux toolkit](https://redux-toolkit.js.org/) - JS library for managing application state
- [React-router](https://reactrouter.com/en/main) - Standard library for routing in React
- [React-toastify](https://www.npmjs.com/package/react-toastify) - Npm package for notifications
- [uuid](https://www.npmjs.com/package/uuid) - Npm package for generating unique ID's
- [moment](https://www.npmjs.com/package/moment) - JS date library for parsing,validating,manipulating and formatting dates
- [framer-motion](https://www.framer.com/motion/) - React animation library
- [chartjs](https://www.chartjs.org/) - JS charting library
- [react-chartjs-2](https://react-chartjs-2.js.org/) - React components for [chartjs](https://www.chartjs.org/) charting library

### Things user able to do

- Register - have to provide username,email,password
- Login with username and password, which have to meet the stored username and password
- Logout - user will be logged out from dashboard
- Adding a new job to a job list which will be stored in local storage
- Edit existing job
- Search jobs by search query, job status and job type
- Sort jobs by latest and oldest jobs added to the list, and sorting by alphabet from a-z and vice versa
- Delete existing job
- Toggling sidebar menu and mobile menu on smaller screen
- Clear form fields on all existing forms
- Toggling between two charts in Dashboard page

### Things implemented

- Responsive design
- Redux store
- Local storage 
- Protected routes
- Login and register forms
- Forms for adding and editing job
- List of jobs
- Stats for the added jobs
- Profile page with user credentials
- Bar and Area chart for showing how many jobs added in each month

### Things that still need to be implemented

- Profile information which is passed into profile page, has to be saved into the localStorage and pushed to that particular user which was logged in
- Jobs have to be attached to the current user which created them
- Fix animation for exit part for Sidebar component

### Things learned

- Saving an array of objects inside local storage
- Implementing redux store and creating reducers and using the provided state
- First time of using npm package `moment` which was greate for converting static Date.now() method into readable date foramat
- Implementing protected routes. Basically if user is not logged in, he cannot access project dashboard
- Sort by object property. Had to sort jobs list by by job title in alphabetic order
- Working with chartjs for the first time, so picked up couple of things while implementing in the project

### Screenshots

![](/public/images/screenshot-8.png)

![](/public/images/screenshot-7.png)

![](/public/images/screenshot-1.png)

![](/public/images/screenshot-2.png)

![](/public/images/screenshot-3.png)

![](/public/images/screenshot-4.png)

![](/public/images/screenshot-5.png)

![](/public/images/screenshot-6.png)
