import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ToastProvider from './components/common/ToastProvider';
import './index.css';
import router from './router/router';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ToastProvider />
    <RouterProvider router={router} />
  </StrictMode>
);
