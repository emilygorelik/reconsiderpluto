import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../../../routes/Root';
import { ErrorPage } from './Error';
import Timeline from '../../../routes/Timeline/timeline';
import { Landing } from '../../../routes/Landing/Landing';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/timeline',
        element: <Timeline />,
      },
    ],
  },
]);
