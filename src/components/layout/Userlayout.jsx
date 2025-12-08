import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaArrowUp,
    FaWhatsapp,
    FaEnvelope,
    FaPhone,
    FaBars,
    FaTimes,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
    FaGithub,
    FaClock,
    FaCog,
    FaChartLine,
    FaIndustry
} from 'react-icons/fa';
import Nav from '../nav/Nav';
import Foot from '../foot/Foot';
import { NAV } from '../../helper/data_help';
import Img_Helper from '../../helper/img_help';

// Import the centralized configuration
import { mecatronixConfig } from '../../config/envConfig';

const UserLayout = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Use centralized configuration with safe destructuring
    const {
        app = {},
        contact = {},
        social = {},
        business = {},
        features = {},
        debug = {},
        industrial = {}
    } = mecatronixConfig || {};

    // Destructure with safe fallbacks
    const APP_NAME = app?.name || 'Mecatronix';
    const COMPANY_NAME = app?.companyName || 'Mecatronix Industries';
    const APP_SLOGAN = app?.slogan || 'Engineering the Future of Automation';
    const APP_VERSION = app?.version || '1.0.0';
    const ENVIRONMENT = app?.environment || 'production';

    const PRIMARY_PHONE = contact?.primaryPhone || '+919843274321';
    const WHATSAPP_NUMBER = contact?.whatsappNumber || '+919843274321';
    const COMPANY_EMAIL = contact?.companyEmail || 'connect@mecatronixhub.com';
    const SUPPORT_EMAIL = contact?.supportEmail || 'support@mecatronixhub.com';
    const EMERGENCY_CONTACT = contact?.emergencyContact || '+919876543210';

    const subtitles = ["Innovation", "Automation", "Future", "Excellence", "Technology"];
    const [currentIndex, setCurrentIndex] = useState(0);

    // System status from config with safe fallbacks
    const [systemStatus] = useState({
        realTimeMonitoring: features?.realTimeMonitoring || false,
        machineControls: features?.machineControls || false,
        analytics: features?.analytics || false,
        debugMode: debug?.enabled || false,
        mockData: debug?.mockData || false,
        refreshRate: industrial?.refreshRate || 1000,
        maxMachines: industrial?.maxMachines || 50
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % subtitles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [subtitles.length]);

    // Scroll to top button visibility
    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Loading transition when route changes
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, [location]);

    // Lock body scroll when mobile menu open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Quick Contact with centralized configuration
    const quickContact = [
        {
            icon: FaWhatsapp,
            href: `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`,
            label: 'WhatsApp',
            bgColor: 'bg-green-500',
            hoverColor: 'hover:bg-green-600',
        },
        {
            icon: FaEnvelope,
            href: `mailto:${COMPANY_EMAIL}`,
            label: 'Email',
            bgColor: 'bg-red-500',
            hoverColor: 'hover:bg-red-600',
        },
        {
            icon: FaPhone,
            href: `tel:${PRIMARY_PHONE}`,
            label: 'Call',
            bgColor: 'bg-blue-500',
            hoverColor: 'hover:bg-blue-600',
        },
    ];

    // Social Media Links from centralized config with safe access
    const socialLinks = [
        { icon: FaFacebook, href: social?.facebook, color: 'text-blue-500', label: 'Facebook' },
        { icon: FaInstagram, href: social?.instagram, color: 'text-pink-500', label: 'Instagram' },
        { icon: FaLinkedin, href: social?.linkedin, color: 'text-blue-400', label: 'LinkedIn' },
        { icon: FaTwitter, href: social?.twitter, color: 'text-sky-400', label: 'Twitter' },
        { icon: FaYoutube, href: social?.youtube, color: 'text-red-500', label: 'YouTube' },
        { icon: FaGithub, href: social?.github, color: 'text-gray-400', label: 'GitHub' },
    ].filter(link => link.href);

    // Industrial Features Status with safe fallbacks
    const featureStatus = [
        {
            enabled: systemStatus.realTimeMonitoring,
            icon: FaChartLine,
            label: 'Real-time Monitoring',
            color: 'text-green-400',
            description: `Refresh: ${systemStatus.refreshRate}ms`
        },
        {
            enabled: systemStatus.machineControls,
            icon: FaIndustry,
            label: 'Machine Controls',
            color: 'text-blue-400',
            description: `Max: ${systemStatus.maxMachines} machines`
        },
        {
            enabled: systemStatus.analytics,
            icon: FaCog,
            label: 'Data Analytics',
            color: 'text-purple-400',
            description: 'Advanced analytics'
        }
    ];

    // Mobile menu variants
    const mobileMenuVariants = {
        closed: {
            x: '100%',
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        },
        open: {
            x: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <div className="flex flex-col min-h-screen bg-black relative">
            {/* 🔸 Global Background Effects */}
            <div className="fixed inset-0 -z-50 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,75,0,0.03),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(220,38,38,0.02),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_0%,transparent_50%)]"></div>
            </div>

            {/* 🔸 Loading Screen */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.2, opacity: 0 }}
                            className="text-center"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"
                            />
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
                            >
                                {APP_NAME.toLowerCase()}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.7 }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-400 text-sm mt-2"
                            >
                                {APP_SLOGAN}
                            </motion.p>
                            {/* Environment Badge */}
                            {ENVIRONMENT !== 'production' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className={`mt-3 px-2 py-1 rounded-full text-xs font-medium ${
                                        ENVIRONMENT === 'development' 
                                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                    }`}
                                >
                                    {ENVIRONMENT.toUpperCase()} v{APP_VERSION}
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 🔸 Navigation */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-40"
            >
                <Nav />
            </motion.div>

            {/* 🔸 Page Transition */}
            <main className="flex-1 relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* 🔸 Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <Foot />
            </motion.div>

            {/* 🔸 Mobile Menu Button */}
            <motion.button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden fixed bottom-6 left-6 z-30 bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-2xl shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
            >
                <FaBars className="text-lg" />
            </motion.button>

            {/* 🔸 Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black border-l border-gray-800 z-50 lg:hidden overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-gray-800">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            className="flex items-center gap-3 cursor-pointer group relative"
                                            onClick={() => navigate("/")}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className="relative h-14 w-auto flex items-center justify-center">
                                                <motion.img
                                                    src={Img_Helper.mainlogo}
                                                    alt={`${COMPANY_NAME} Logo`}
                                                    className="w-full h-full object-contain transition-all duration-300"
                                                    whileHover={{
                                                        scale: 1.1,
                                                        rotate: [0, -3, 3, 0]
                                                    }}
                                                    transition={{ duration: 0.6 }}
                                                />
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-sm opacity-0 group-hover:opacity-40 -z-10"
                                                    animate={{
                                                        scale: [1, 1.1, 1],
                                                        opacity: [0, 0.1, 0]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        repeatDelay: 1
                                                    }}
                                                />
                                            </div>
                                            <div className="absolute bottom-0 left-[51px] overflow-hidden w-[130px]">
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={currentIndex}
                                                        initial={{ x: -100, opacity: 0, scale: 0.8 }}
                                                        animate={{
                                                            x: 0,
                                                            opacity: 1,
                                                            scale: 1,
                                                            textShadow: [
                                                                "0 0 0px rgba(255,255,255,0)",
                                                                "0 0 15px rgba(255,165,0,0.7)",
                                                                "0 0 0px rgba(255,255,255,0)"
                                                            ]
                                                        }}
                                                        exit={{ x: 100, opacity: 0, scale: 1.2 }}
                                                        transition={{
                                                            duration: 1.0,
                                                            ease: [0.4, 0, 0.2, 1],
                                                        }}
                                                        className="text-xs text-transparent bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text uppercase font-black tracking-widest"
                                                    >
                                                        {subtitles[currentIndex]}
                                                    </motion.div>
                                                </AnimatePresence>
                                            </div>
                                        </motion.div>
                                    </div>
                                    <motion.button
                                        onClick={() => setMobileMenuOpen(false)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                                    >
                                        <FaTimes className="text-white text-lg" />
                                    </motion.button>
                                </div>

                                {/* System Version & Environment */}
                                <div className="mt-3 flex justify-between items-center text-xs">
                                    <span className="text-gray-500">v{APP_VERSION}</span>
                                    {ENVIRONMENT !== 'production' && (
                                        <span className={`px-2 py-1 rounded-full ${
                                            ENVIRONMENT === 'development'
                                                ? 'bg-yellow-500/20 text-yellow-400'
                                                : 'bg-blue-500/20 text-blue-400'
                                        }`}>
                                            {ENVIRONMENT}
                                        </span>
                                    )}
                                    {debug?.enabled && (
                                        <span className="px-2 py-1 rounded-full bg-red-500/20 text-red-400">
                                            Debug
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Navigation Links */}
                            <nav className="p-6">
                                <div className="space-y-2">
                                    {NAV.map((item, index) => (
                                        <motion.a
                                            key={item.id}
                                            href={item.id}
                                            variants={itemVariants}
                                            initial="closed"
                                            animate="open"
                                            transition={{ delay: index * 0.1 }}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate(item.id);
                                                setMobileMenuOpen(false);
                                            }}
                                            className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 group cursor-pointer ${
                                                location.pathname === item.id
                                                    ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400'
                                                    : 'bg-gray-800/30 hover:bg-gray-700/50 text-gray-300 hover:text-white border border-transparent'
                                            }`}
                                        >
                                            <span className="font-semibold">{item.label}</span>
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                className={`p-2 rounded-lg ${
                                                    location.pathname === item.id
                                                        ? 'bg-orange-500/20'
                                                        : 'bg-gray-700/50 group-hover:bg-gray-600/50'
                                                }`}
                                            >
                                                <div className={`w-1.5 h-1.5 rounded-full ${
                                                    location.pathname === item.id
                                                        ? 'bg-orange-400'
                                                        : 'bg-gray-400 group-hover:bg-gray-300'
                                                }`} />
                                            </motion.div>
                                        </motion.a>
                                    ))}
                                </div>
                            </nav>

                            {/* System Features Status */}
                            <div className="p-6 border-t border-gray-800">
                                <h4 className="text-white font-semibold mb-3">System Features</h4>
                                <div className="space-y-2">
                                    {featureStatus.map((feature, index) => (
                                        <motion.div
                                            key={feature.label}
                                            initial="closed"
                                            animate="open"
                                            variants={itemVariants}
                                            transition={{ delay: 0.2 + index * 0.1 }}
                                            className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30"
                                        >
                                            <div className="flex items-center gap-3">
                                                <feature.icon className={`text-lg ${feature.color}`} />
                                                <div>
                                                    <div className="text-sm text-gray-300">{feature.label}</div>
                                                    <div className="text-xs text-gray-500">{feature.description}</div>
                                                </div>
                                            </div>
                                            <div className={`w-3 h-3 rounded-full ${
                                                feature.enabled ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                                            }`} />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="p-6 border-t border-gray-800">
                                <h4 className="text-white font-semibold mb-4">Quick Connect</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <motion.a
                                        href={`tel:${PRIMARY_PHONE}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-xl p-3 text-center transition-all duration-300 group"
                                    >
                                        <FaPhone className="text-blue-400 text-lg mx-auto mb-2" />
                                        <span className="text-white text-xs font-semibold">Call Now</span>
                                    </motion.a>
                                    <motion.a
                                        href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-xl p-3 text-center transition-all duration-300 group"
                                    >
                                        <FaWhatsapp className="text-green-400 text-lg mx-auto mb-2" />
                                        <span className="text-white text-xs font-semibold">WhatsApp</span>
                                    </motion.a>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="p-6 border-t border-gray-800">
                                <h4 className="text-white font-semibold mb-3">Contact Info</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <FaPhone className="text-blue-400" />
                                        <span className="text-sm">{PRIMARY_PHONE}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <FaEnvelope className="text-red-400" />
                                        <span className="text-sm">{COMPANY_EMAIL}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <FaWhatsapp className="text-green-400" />
                                        <span className="text-sm">WhatsApp Available</span>
                                    </div>
                                    {business?.emergencySupport24x7 && (
                                        <div className="flex items-center gap-3 text-orange-400 bg-orange-500/10 p-2 rounded-lg">
                                            <FaClock className="text-orange-400" />
                                            <span className="text-sm font-semibold">24/7 Emergency Support</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="p-6 border-t border-gray-800">
                                <h4 className="text-white font-semibold mb-3">Business Hours</h4>
                                <div className="space-y-2 text-gray-400">
                                    <div className="flex justify-between">
                                        <span>{business?.days || 'Mon-Fri'}:</span>
                                        <span>{business?.hoursStart || '09:00'} - {business?.hoursEnd || '18:00'}</span>
                                    </div>
                                    {business?.emergencySupport24x7 && (
                                        <div className="flex justify-between text-orange-400">
                                            <span>Emergency:</span>
                                            <span>24/7</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Social Media */}
                            {socialLinks.length > 0 && (
                                <div className="p-6 border-t border-gray-800">
                                    <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                                    <div className="flex gap-3">
                                        {socialLinks.map((social, index) => (
                                            <motion.a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={`p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 ${social.color}`}
                                                title={social.label}
                                            >
                                                <social.icon className="text-lg" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Footer */}
                            <div className="p-6 border-t border-gray-800">
                                <p className="text-gray-500 text-xs text-center">
                                    © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* 🔸 Floating Buttons */}
            <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-30 flex flex-col gap-3">
                {/* Scroll to Top */}
                <AnimatePresence>
                    {showScrollTop && (
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            onClick={scrollToTop}
                            aria-label="Scroll to top"
                            className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-2xl shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 group"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaArrowUp className="text-lg group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Premium Quick Contact Buttons */}
                {quickContact.map((contact, index) => (
                    <motion.a
                        key={contact.label}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, opacity: 0, y: 20, rotate: -180 }}
                        animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
                        transition={{
                            delay: 0.8 + index * 0.15,
                            type: "spring",
                            stiffness: 120,
                            damping: 12
                        }}
                        className={`${contact.bgColor} text-white p-4 rounded-2xl shadow-2xl ${contact.hoverColor} transition-all duration-500 group relative overflow-hidden backdrop-blur-sm border border-white/10`}
                        whileHover={{
                            scale: 1.15,
                            y: -4,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.5 }
                        }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={contact.label}
                    >
                        {/* Animated Background Shine */}
                        <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                        {/* Floating Particles Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute bg-white rounded-full"
                                    animate={{
                                        y: [0, -12, 0],
                                        opacity: [0, 0.8, 0],
                                        scale: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.6,
                                    }}
                                    style={{
                                        width: 2,
                                        height: 2,
                                        left: `${25 + i * 25}%`,
                                        bottom: 8,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Main Icon */}
                        <motion.div
                            className="relative z-10"
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: index * 0.5
                            }}
                        >
                            <contact.icon className="text-xl drop-shadow-lg" />
                        </motion.div>

                        {/* Pulsing Outer Glow */}
                        <motion.div
                            className={`absolute -inset-2 ${contact.bgColor} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10`}
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0, 0.3, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.3
                            }}
                        />

                        {/* Premium Tooltip */}
                        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-900 to-black backdrop-blur-xl text-white px-4 py-3 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 border border-gray-700/50 shadow-2xl transform group-hover:scale-105">
                            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                {contact.label}
                            </span>
                            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-xl" />
                        </div>

                        {/* Click Indicator Ring */}
                        <motion.div
                            className="absolute inset-0 border-2 border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}
                        />

                        {/* Status Dot */}
                        <motion.div
                            className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-lg"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.7, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.4
                            }}
                        />
                    </motion.a>
                ))}
            </div>

            {/* 🔸 Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-40">
                <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-red-600"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                    key={location.pathname}
                />
            </div>

            {/* 🔸 Floating Background Particles */}
            <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-orange-500/10 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: Math.random() * 0.3 + 0.1,
                        }}
                        animate={{
                            y: [null, -30, 0],
                            opacity: [0.1, 0.4, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 6 + 4,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                        style={{
                            width: Math.random() * 10 + 5,
                            height: Math.random() * 10 + 5,
                        }}
                    />
                ))}
            </div>

            {/* 🔸 Network Status */}
            <div className="fixed top-4 left-4 z-30">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 px-3 py-1 rounded-full"
                >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-gray-400">Online</span>
                    {/* Debug Mode Indicator */}
                    {debug?.enabled && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"
                            title="Debug Mode Enabled"
                        />
                    )}
                    {/* Mock Data Indicator */}
                    {debug?.mockData && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                            title="Using Mock Data"
                        />
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default UserLayout;