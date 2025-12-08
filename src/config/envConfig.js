// src/config/env.js

export const mecatronixConfig = {
  // Application
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Mecatronix',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
    description: import.meta.env.VITE_APP_DESCRIPTION || 'Industrial Automation & Control Systems',
    companyName: import.meta.env.VITE_COMPANY_NAME || 'Mecatronix Industries',
    slogan: import.meta.env.VITE_APP_SLOGAN || 'Engineering the Future of Automation',
    environment: import.meta.env.VITE_ENVIRONMENT || 'production',
  },

  // API
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/mec-api',
    wsUrl: import.meta.env.VITE_WS_URL || 'http://localhost:5000',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 30000,
  },

  // Industrial Features
  industrial: {
    refreshRate: parseInt(import.meta.env.VITE_DEFAULT_REFRESH_RATE) || 1000,
    maxMachines: parseInt(import.meta.env.VITE_MAX_CONCURRENT_MACHINES) || 50,
    pollingInterval: parseInt(import.meta.env.VITE_MACHINE_STATUS_POLLING) || 5000,
  },

  // Features
  features: {
    realTimeMonitoring: import.meta.env.VITE_ENABLE_REAL_TIME_MONITORING === 'true',
    machineControls: import.meta.env.VITE_ENABLE_MACHINE_CONTROLS === 'true',
    analytics: import.meta.env.VITE_ENABLE_DATA_ANALYTICS === 'true',
  },

  // Debug
  debug: {
    enabled: import.meta.env.VITE_DEBUG_MODE === 'true',
    mockData: import.meta.env.VITE_ENABLE_MOCK_DATA === 'true',
  },

  // Contact Information
  contact: {
    companyEmail: import.meta.env.VITE_COMPANY_EMAIL || 'connect@mecatronixhub.com',
    supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || 'support@mecatronixhub.com',
    salesEmail: import.meta.env.VITE_SALES_EMAIL || 'sales@mecatronixhub.com',
    primaryPhone: import.meta.env.VITE_PRIMARY_PHONE || '+919843274320',
    secondaryPhone: import.meta.env.VITE_SECONDARY_PHONE || '+914422334455',
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '+919843274321',
    emergencyContact: import.meta.env.VITE_EMERGENCY_CONTACT || '+919876543210',
  },

  // Social Media
  social: {
    facebook: import.meta.env.VITE_FACEBOOK_URL,
    instagram: import.meta.env.VITE_INSTAGRAM_URL,
    linkedin: import.meta.env.VITE_LINKEDIN_URL,
    twitter: import.meta.env.VITE_TWITTER_URL,
    youtube: import.meta.env.VITE_YOUTUBE_URL,
    github: import.meta.env.VITE_GITHUB_URL,
  },

  // Company Location
  location: {
    address: import.meta.env.VITE_COMPANY_ADDRESS || '123 Industrial Park, Tech Zone',
    city: import.meta.env.VITE_COMPANY_CITY || 'Chennai',
    state: import.meta.env.VITE_COMPANY_STATE || 'Tamil Nadu',
    country: import.meta.env.VITE_COMPANY_COUNTRY || 'India',
    pincode: import.meta.env.VITE_COMPANY_PINCODE || '600001',
    googleMapsLink: import.meta.env.VITE_GOOGLE_MAPS_LINK || 'https://maps.google.com',
    latitude: parseFloat(import.meta.env.VITE_LATITUDE) || 13.0827,
    longitude: parseFloat(import.meta.env.VITE_LONGITUDE) || 80.2707,
  },

  // Business Hours
  business: {
    hoursStart: import.meta.env.VITE_BUSINESS_HOURS_START || '09:00',
    hoursEnd: import.meta.env.VITE_BUSINESS_HOURS_END || '18:00',
    days: import.meta.env.VITE_BUSINESS_DAYS || 'Mon-Fri',
    emergencySupport24x7: import.meta.env.VITE_EMERGENCY_SUPPORT_24x7 === 'true',
  },

  // Localization
  localization: {
    defaultLanguage: import.meta.env.VITE_DEFAULT_LANGUAGE || 'en',
    supportedLanguages: (import.meta.env.VITE_SUPPORTED_LANGUAGES || 'en,hi,ta').split(','),
    timezone: import.meta.env.VITE_TIMEZONE || 'Asia/Kolkata',
    currency: import.meta.env.VITE_CURRENCY || 'INR',
    dateFormat: import.meta.env.VITE_DATE_FORMAT || 'DD/MM/YYYY',
  }
};

// Helper function to check if all required env vars are present
export const validateEnvironment = () => {
  const required = [
    'VITE_APP_NAME',
    'VITE_API_BASE_URL',
    'VITE_COMPANY_EMAIL',
    'VITE_PRIMARY_PHONE'
  ];

  const missing = required.filter(key => !import.meta.env[key]);

  if (missing.length > 0) {
    console.warn('Missing environment variables:', missing);
    return false;
  }

  return true;
};

// Export default for convenience
export default mecatronixConfig;