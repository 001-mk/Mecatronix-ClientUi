import toast from 'react-hot-toast';

// Toast configuration options
export const toastConfig = {
    duration: 4000,
    position: "top-center",
    style: {
        fontSize: '16px',
        padding: '16px',
        borderRadius: '12px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
};

// Success toast
export const showSuccessToast = (message, options = {}) => {
    return toast.success(message, {
        ...toastConfig,
        style: {
            ...toastConfig.style,
            background: '#059669',
            color: 'white',
        },
        iconTheme: {
            primary: '#10b981',
            secondary: 'white',
        },
        ...options,
    });
};

// Error toast
export const showErrorToast = (message, options = {}) => {
    return toast.error(message, {
        ...toastConfig,
        style: {
            ...toastConfig.style,
            background: '#dc2626',
            color: 'white',
        },
        iconTheme: {
            primary: '#ef4444',
            secondary: 'white',
        },
        ...options,
    });
};

// Loading toast
export const showLoadingToast = (message, options = {}) => {
    return toast.loading(message, {
        ...toastConfig,
        style: {
            ...toastConfig.style,
            background: '#4b5563',
            color: 'white',
        },
        ...options,
    });
};

// Custom toast
export const showCustomToast = (message, options = {}) => {
    return toast(message, {
        ...toastConfig,
        ...options,
    });
};

// Dismiss toast
export const dismissToast = (toastId) => {
    toast.dismiss(toastId);
};

// Dismiss all toasts
export const dismissAllToasts = () => {
    toast.dismiss();
};