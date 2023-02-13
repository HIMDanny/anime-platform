import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import ErrorPage from './pages/error';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
