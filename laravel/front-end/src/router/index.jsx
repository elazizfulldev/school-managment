import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <p>login page</p> },
  { path: '/signup', element: <p>signup page</p> },
  { path: '/users', element: <p>users page</p> }
]);


