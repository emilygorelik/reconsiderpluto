import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../../../routes/Root';
import { Home } from '../../../routes/Home/Home';
import { Chat } from '../../../routes/Chat/Chat';
import { ErrorPage } from './Error';
import { LearningCenter } from '../../../routes/LearningCenter/LearningCenter';
import { Collection } from '../../../routes/Collection/Collection';
import { Approvals } from '../../../routes/Approvals/Approvals';
import { Analytics } from '../../../routes/Collection/Analytics/Analytics';
import { StyleStatus } from '../../../routes/Collection/StyleStatus/StyleStatus';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
      {
        path: 'approvals',
        element: <Approvals />,
      },
      {
        path: 'collection',
        element: <Collection />,
        children: [
          {
            path: 'analytics',
            element: <Analytics />,
          },
          {
            path: 'style-status',
            element: <StyleStatus />,
          },
        ],
      },
      {
        path: 'learning-center',
        element: <LearningCenter />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
