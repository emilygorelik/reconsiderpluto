import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'react-toastify/dist/ReactToastify.css';
import { router } from './shared/components/Navigation/BrowserRouter';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider router={router} />
      </DndProvider>
      <ToastContainer
        position="bottom-right"
        newestOnTop
        autoClose={3000}
        toastClassName="text-onBackground rounded-lg"
        closeButton={true}
      />
    </QueryClientProvider>
  </React.StrictMode>,
);
