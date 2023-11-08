import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../../../routes/Root';
import { ErrorPage } from './Error';
import Timeline from '../../../routes/timeline';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/timeline',
    element: <Timeline />,
  },
]);
