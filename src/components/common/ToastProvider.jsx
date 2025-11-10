import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToastProvider = () => {
  return (
    <Toaster
      toastOptions={{
        duration: 4000,
        position: "top-center",
        // Default styles
        style: {
          background: '#363636',
          color: '#fff',
          fontSize: '16px',
          padding: '16px',
          borderRadius: '12px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          maxWidth: '500px',
          wordBreak: 'break-word',
        },
        // Success type styles
        success: {
          style: {
            background: '#059669',
            color: 'white',
          },
          iconTheme: {
            primary: '#10b981',
            secondary: 'white',
          },
        },
        // Error type styles
        error: {
          style: {
            background: '#dc2626',
            color: 'white',
          },
          iconTheme: {
            primary: '#ef4444',
            secondary: 'white',
          },
        },
        // Loading type styles
        loading: {
          style: {
            background: '#4b5563',
            color: 'white',
          },
        },
      }}
    />
  );
};

export default ToastProvider;