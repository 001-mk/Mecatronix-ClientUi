import { useCallback } from 'react';
import {
    showSuccessToast,
    showErrorToast,
    showLoadingToast,
    showCustomToast,
    dismissToast,
    dismissAllToasts,
} from '../config/toastConfig.js';

export const useToast = () => {
    const success = useCallback((message, options) => {
        return showSuccessToast(message, options);
    }, []);

    const error = useCallback((message, options) => {
        return showErrorToast(message, options);
    }, []);

    const loading = useCallback((message, options) => {
        return showLoadingToast(message, options);
    }, []);

    const custom = useCallback((message, options) => {
        return showCustomToast(message, options);
    }, []);

    const dismiss = useCallback((toastId) => {
        dismissToast(toastId);
    }, []);

    const dismissAll = useCallback(() => {
        dismissAllToasts();
    }, []);

    return {
        success,
        error,
        loading,
        custom,
        dismiss,
        dismissAll,
    };
};