import {createBrowserRouter } from 'react-router-dom';
import Browser from '../Components/Browser';
import Login from '../Components/Login';


const  appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browser",
      element:<Browser/>
    }
  ])

  export {appRouter}