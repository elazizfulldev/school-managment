import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import User from '../pages/User.jsx';
import Notfound from '../pages/Notfound.jsx';
import Layout from '../layouts/layout.jsx';

export const router = createBrowserRouter([
  {element : <Layout/> , 
    children:[

          { path: '/', element: <Home /> },
          { path: '/login', element: <Login/> },
          { path: '/signup', element: <Signup/>},
          { path: '/users', element: <User/> },
          { path: '*', element: <Notfound/> }

    ]},
 
]);


