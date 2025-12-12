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
    FaIndustry,
    FaStar,
    FaGlobe,
    FaRocket,
    FaSatellite,
    FaMeteor,
    FaFire
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

    const subtitles = ["Innovation", "Automation", "Future", "Excellence", "Technology", "Cosmic", "Orbital"];
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

    // Space particles state
    const [spaceParticles, setSpaceParticles] = useState([]);
    const [cometPositions, setCometPositions] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % subtitles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [subtitles.length]);

    // Initialize space effects
    useEffect(() => {
        // Generate space particles
        const particles = [];
        for (let i = 0; i < 100; i++) {
            particles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.1,
                speed: Math.random() * 0.5 + 0.1
            });
        }
        setSpaceParticles(particles);

        // Generate comets
        const comets = [];
        for (let i = 0; i < 3; i++) {
            comets.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                angle: Math.random() * 360,
                size: Math.random() * 40 + 20,
                speed: Math.random() * 0.3 + 0.1
            });
        }
        setCometPositions(comets);

        // Update comets periodically
        const cometInterval = setInterval(() => {
            setCometPositions(prev => prev.map(comet => ({
                ...comet,
                x: (comet.x + comet.speed) % 100,
                y: (comet.y + comet.speed * Math.sin(comet.angle * Math.PI / 180)) % 100
            })));
        }, 50);

        return () => clearInterval(cometInterval);
    }, []);

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
        <div className="flex flex-col min-h-screen bg-black relative overflow-hidden">
            {/* 🔸 Cosmic Background with Red/Orange Theme */}
            <div className="fixed inset-0 -z-50 pointer-events-none">
                {/* Deep Space Gradient - Red/Orange Theme */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-red-950"></div>

                {/* Nebula Effect - Red/Orange */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-10"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
                    <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-10"></div>
                </div>

                {/* Stars - Orange/Red Tint */}
                <div className="absolute inset-0">
                    {spaceParticles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute bg-orange-200 rounded-full"
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                opacity: particle.opacity
                            }}
                            animate={{
                                opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 2 + particle.speed,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                    ))}
                </div>

                {/* Comets - Red/Orange */}
                <div className="absolute inset-0">
                    {cometPositions.map((comet) => (
                        <motion.div
                            key={comet.id}
                            className="absolute"
                            style={{
                                left: `${comet.x}%`,
                                top: `${comet.y}%`,
                                width: `${comet.size}px`,
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent, #f97316, #ef4444, transparent)'
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                scaleX: [0.1, 1, 0.1]
                            }}
                            transition={{
                                duration: 3 + comet.speed * 10,
                                repeat: Infinity,
                                repeatDelay: Math.random() * 10
                            }}
                        />
                    ))}
                </div>

                {/* Orbiting Planets - Red/Orange Theme */}
                <div className="absolute inset-0">
                    {/* Planet 1 - Red */}
                    <motion.div
                        className="absolute top-1/4 left-1/4"
                        animate={{
                            rotate: 360,
                            x: [0, 100, 0],
                            y: [0, 50, 0]
                        }}
                        transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <div className="w-12 h-12 bg-gradient-to-b from-red-500 to-red-700 rounded-full shadow-2xl shadow-red-500/40">
                            <div className="absolute inset-2 bg-red-400/30 rounded-full blur-sm"></div>
                        </div>
                    </motion.div>

                    {/* Planet 2 - Orange */}
                    <motion.div
                        className="absolute bottom-1/3 right-1/3"
                        animate={{
                            rotate: -360,
                            x: [0, -80, 0],
                            y: [0, -30, 0]
                        }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <div className="w-8 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full shadow-2xl shadow-orange-500/40">
                            <div className="absolute inset-1 bg-orange-300/30 rounded-full blur-sm"></div>
                        </div>
                    </motion.div>

                    {/* Satellite - Red */}
                    <motion.div
                        className="absolute top-1/2 left-1/2"
                        animate={{
                            rotate: 360,
                            x: [0, 200, 0],
                            y: [0, 100, 0]
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <FaSatellite className="text-red-400 text-xl opacity-70" />
                        <div className="absolute -inset-1 bg-red-400/20 rounded-full blur-sm"></div>
                    </motion.div>
                </div>

                {/* Grid Lines (Space Grid) - Red Tint */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>
            </div>

            {/* 🔸 Loading Screen with Red/Orange Theme */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-gradient-to-b from-gray-900 via-black to-red-950 z-50 flex items-center justify-center"
                    >
                        <div className="absolute inset-0">
                            {/* Shooting stars during loading - Red/Orange */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 via-red-500 to-transparent"
                                    initial={{
                                        x: -100,
                                        y: Math.random() * window.innerHeight,
                                        rotate: Math.random() * 45
                                    }}
                                    animate={{
                                        x: window.innerWidth + 100,
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        delay: i * 0.5,
                                        repeat: Infinity,
                                        repeatDelay: Math.random() * 3
                                    }}
                                />
                            ))}
                        </div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.2, opacity: 0 }}
                            className="text-center relative z-10"
                        >
                            {/* Orbiting dots - Red/Orange */}
                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                    className="absolute inset-0"
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                    className="absolute inset-0"
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                    className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full mx-auto"
                                />
                            </div>

                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-rose-600 bg-clip-text text-transparent"
                            >
                                {APP_NAME}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.7 }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-400 text-sm mt-2"
                            >
                                <FaRocket className="inline mr-2 text-orange-400" />
                                {APP_SLOGAN}
                            </motion.p>
                            {/* Environment Badge */}
                            {ENVIRONMENT !== 'production' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className={`mt-4 px-3 py-1 rounded-full text-xs font-medium ${ENVIRONMENT === 'development'
                                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                                        }`}
                                >
                                    <FaGlobe className="inline mr-1" />
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

            {/* 🔸 Mobile Menu Button - Red/Orange Gradient */}
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
                        {/* Backdrop with Space Effect - Red/Orange */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
                        >
                            {/* Mini stars in backdrop - Orange/Red */}
                            {[...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-1 bg-orange-300 rounded-full"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        opacity: Math.random() * 0.5 + 0.1
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Mobile Menu Panel with Red/Orange Theme */}
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900/95 via-black/95 to-red-950/95 border-l border-red-500/20 z-50 lg:hidden overflow-y-auto backdrop-blur-xl"
                        >
                            {/* Header with Red/Orange Theme */}
                            <div className="p-6 border-b border-red-500/20 bg-gradient-to-r from-gray-900/50 to-black/50">
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
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-lg bg-white/10 hover:bg-red-500/20 transition-all duration-300 border border-red-500/30"
                                    >
                                        <FaTimes className="text-white text-lg" />
                                    </motion.button>
                                </div>

                                {/* System Version & Environment with Red/Orange Icons */}
                                <div className="mt-3 flex justify-between items-center text-xs">
                                    <span className="text-gray-400 flex items-center gap-1">
                                        <FaRocket className="text-red-400" />
                                        v{APP_VERSION}
                                    </span>
                                    {ENVIRONMENT !== 'production' && (
                                        <span className={`px-2 py-1 rounded-full flex items-center gap-1 ${ENVIRONMENT === 'development'
                                                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                                : 'bg-red-500/20 text-red-400 border border-red-500/30'
                                            }`}>
                                            <FaGlobe />
                                            {ENVIRONMENT}
                                        </span>
                                    )}
                                    {debug?.enabled && (
                                        <span className="px-2 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center gap-1">
                                            <FaSatellite />
                                            Debug
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Navigation Links with Red/Orange Theme */}
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
                                            className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 group cursor-pointer backdrop-blur-sm ${location.pathname === item.id
                                                    ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-red-500/30 text-red-400 shadow-lg shadow-red-500/10'
                                                    : 'bg-gray-800/20 hover:bg-gray-700/30 text-gray-300 hover:text-white border border-gray-700/50 hover:border-red-500/30'
                                                }`}
                                        >
                                            <span className="font-semibold flex items-center gap-2">
                                                {index === 0 && <FaGlobe className="text-red-400" />}
                                                {index === 1 && <FaRocket className="text-orange-400" />}
                                                {index === 2 && <FaSatellite className="text-red-500" />}
                                                {index === 3 && <FaStar className="text-yellow-400" />}
                                                {index === 4 && <FaFire className="text-orange-500" />}
                                                {item.label}
                                            </span>
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                className={`p-2 rounded-lg ${location.pathname === item.id
                                                        ? 'bg-red-500/20'
                                                        : 'bg-gray-700/20 group-hover:bg-red-500/10'
                                                    }`}
                                            >
                                                <motion.div
                                                    className={`w-1.5 h-1.5 rounded-full ${location.pathname === item.id
                                                            ? 'bg-red-400'
                                                            : 'bg-gray-400 group-hover:bg-red-300'
                                                        }`}
                                                    animate={location.pathname === item.id ? {
                                                        scale: [1, 1.5, 1],
                                                        opacity: [1, 0.5, 1]
                                                    } : {}}
                                                    transition={location.pathname === item.id ? {
                                                        duration: 2,
                                                        repeat: Infinity
                                                    } : {}}
                                                />
                                            </motion.div>
                                        </motion.a>
                                    ))}
                                </div>
                            </nav>

                            {/* System Features Status with Red/Orange Theme */}
                            <div className="p-6 border-t border-red-500/20">
                                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                    <FaSatellite className="text-red-400" />
                                    Orbital Systems
                                </h4>
                                <div className="space-y-2">
                                    {featureStatus.map((feature, index) => (
                                        <motion.div
                                            key={feature.label}
                                            initial="closed"
                                            animate="open"
                                            variants={itemVariants}
                                            transition={{ delay: 0.2 + index * 0.1 }}
                                            className="flex items-center justify-between p-3 rounded-lg bg-gray-800/20 border border-gray-700/30 backdrop-blur-sm"
                                        >
                                            <div className="flex items-center gap-3">
                                                <motion.div
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <feature.icon className={`text-lg ${feature.color}`} />
                                                </motion.div>
                                                <div>
                                                    <div className="text-sm text-gray-300">{feature.label}</div>
                                                    <div className="text-xs text-gray-500">{feature.description}</div>
                                                </div>
                                            </div>
                                            <motion.div
                                                className={`w-3 h-3 rounded-full ${feature.enabled ? 'bg-green-500' : 'bg-red-500'}`}
                                                animate={feature.enabled ? {
                                                    scale: [1, 1.5, 1],
                                                    boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.7)', '0 0 0 10px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)']
                                                } : {}}
                                                transition={feature.enabled ? {
                                                    duration: 2,
                                                    repeat: Infinity
                                                } : {}}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Actions with Red/Orange Theme */}
                            <div className="p-6 border-t border-red-500/20">
                                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                                    <FaRocket className="text-orange-400" />
                                    Launch Controls
                                </h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <motion.a
                                        href={`tel:${PRIMARY_PHONE}`}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setMobileMenuOpen(false);
                                        }}
                                        className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-xl p-3 text-center transition-all duration-300 group cursor-pointer backdrop-blur-sm"
                                    >
                                        <FaPhone className="text-red-400 text-lg mx-auto mb-2" />
                                        <span className="text-white text-xs font-semibold">Mission Control</span>
                                    </motion.a>
                                    <motion.a
                                        href={`https://wa.me/${WHATSAPP_NUMBER ? WHATSAPP_NUMBER.replace('+', '') : ''}`}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setMobileMenuOpen(false);
                                        }}
                                        className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-xl p-3 text-center transition-all duration-300 group cursor-pointer backdrop-blur-sm"
                                    >
                                        <FaWhatsapp className="text-green-400 text-lg mx-auto mb-2" />
                                        <span className="text-white text-xs font-semibold">Signal Boost</span>
                                    </motion.a>
                                </div>
                            </div>

                            {/* Contact Info with Red/Orange Theme */}
                            <div className="p-6 border-t border-red-500/20">
                                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                    <FaSatellite className="text-red-400" />
                                    Communication Array
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-400 hover:text-red-300 transition-colors">
                                        <FaPhone className="text-red-400" />
                                        <span className="text-sm">{PRIMARY_PHONE}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400 hover:text-red-300 transition-colors">
                                        <FaEnvelope className="text-orange-400" />
                                        <span className="text-sm">{COMPANY_EMAIL}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400 hover:text-red-300 transition-colors">
                                        <FaWhatsapp className="text-green-400" />
                                        <span className="text-sm">Quantum Link</span>
                                    </div>
                                    {business?.emergencySupport24x7 && (
                                        <div className="flex items-center gap-3 text-orange-400 bg-orange-500/10 p-2 rounded-lg border border-orange-500/20">
                                            <FaClock className="text-orange-400" />
                                            <span className="text-sm font-semibold">24/7 Emergency Beam</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Business Hours with Red/Orange Theme */}
                            <div className="p-6 border-t border-red-500/20">
                                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                    <FaGlobe className="text-green-400" />
                                    Orbital Schedule
                                </h4>
                                <div className="space-y-2 text-gray-400">
                                    <div className="flex justify-between">
                                        <span>{business?.days || 'Mon-Fri'}:</span>
                                        <span>{business?.hoursStart || '09:00'} - {business?.hoursEnd || '18:00'}</span>
                                    </div>
                                    {business?.emergencySupport24x7 && (
                                        <div className="flex justify-between text-orange-400">
                                            <span>Emergency Beam:</span>
                                            <span>24/7</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Social Media with Red/Orange Theme */}
                            {socialLinks.length > 0 && (
                                <div className="p-6 border-t border-red-500/20">
                                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                        <FaStar className="text-yellow-400" />
                                        Stellar Network
                                    </h4>
                                    <div className="flex gap-3 flex-wrap">
                                        {socialLinks.map((social, index) => (
                                            <motion.a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, y: -2, rotate: 360 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ duration: 0.3 }}
                                                className={`p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 ${social.color} cursor-pointer border border-gray-700/50 hover:border-${social.color.split('-')[1]}-500/30 backdrop-blur-sm`}
                                                title={social.label}
                                            >
                                                <social.icon className="text-xl" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Footer with Red/Orange Theme */}
                            <div className="p-6 border-t border-red-500/20">
                                <p className="text-gray-500 text-xs text-center">
                                    <FaGlobe className="inline mr-1 text-red-400" />
                                    © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
                                    <br />
                                    <span className="text-gray-600">Exploring the cosmos of automation</span>
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* 🔸 Floating Buttons with Red/Orange Theme */}
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
                            className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-2xl shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 group cursor-pointer border border-red-500/30"
                            whileHover={{ scale: 1.1, y: -2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaRocket className="text-lg group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Meteor Shower Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gradient-to-tr from-red-600 to-yellow-600 text-white p-4 rounded-full shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 border border-red-500/30"
                    onClick={() => {
                        [...Array(12)].forEach((_, i) => {
                            const meteor = document.createElement("div");

                            meteor.className =
                                "fixed w-24 h-1 bg-gradient-to-r from-white to-transparent rounded-full z-40 pointer-events-none";

                            // Start slightly OUTSIDE the top-right corner
                            meteor.style.top = `${Math.random() * 100}%`;   // full page height
                            meteor.style.left = `100%`;                     // just outside right side
                            meteor.style.opacity = "0";

                            // Correct rotation for top-right → bottom-left
                            meteor.style.transform = "rotate(-45deg)";

                            const animation = meteor.animate(
                                [
                                    { transform: "translate(0, 0) rotate(-45deg)", opacity: 0 },
                                    { transform: "translate(-300px, 300px) rotate(-45deg)", opacity: 1 },
                                    { transform: "translate(-600px, 600px) rotate(-45deg)", opacity: 0 }
                                ],
                                {
                                    duration: 1500,
                                    delay: i * 120,
                                    easing: "ease-out"
                                }
                            );

                            animation.onfinish = () => meteor.remove();
                            document.body.appendChild(meteor);
                        });
                    }}
                >
                    <FaMeteor className="text-lg" />
                </motion.button>

            </div>

            {/* 🔸 Progress Bar with Red/Orange Theme */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-900/50 z-40">
                <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-rose-600"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                    key={location.pathname}
                    style={{
                        boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)'
                    }}
                />
            </div>

            {/* 🔸 Floating Space Elements - Red/Orange */}
            <div className="fixed inset-0 -z-40 pointer-events-none overflow-hidden">
                {/* Animated Nebula Clouds - Red/Orange */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full blur-3xl"
                        style={{
                            background: i % 3 === 0
                                ? 'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)'
                                : i % 3 === 1
                                    ? 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%)'
                                    : 'radial-gradient(circle, rgba(251, 146, 60, 0.1) 0%, transparent 70%)',
                            width: `${Math.random() * 300 + 100}px`,
                            height: `${Math.random() * 300 + 100}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                        animate={{
                            x: [0, Math.random() * 100 - 50, 0],
                            y: [0, Math.random() * 100 - 50, 0],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: Math.random() * 20 + 10,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                ))}

                {/* Twinkling Stars - Orange/Red */}
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={`star-${i}`}
                        className="absolute bg-orange-200 rounded-full"
                        style={{
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.8 + 0.2
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 1,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: Math.random() * 2
                        }}
                    />
                ))}

                {/* Orbiting Space Debris - Red/Orange */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`debris-${i}`}
                        className="absolute bg-red-500/30 rounded-full"
                        style={{
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            left: `${50 + Math.sin(i * 45) * 30}%`,
                            top: `${50 + Math.cos(i * 45) * 30}%`
                        }}
                        animate={{
                            rotate: 360,
                            x: [0, Math.sin(i * 45) * 100, 0],
                            y: [0, Math.cos(i * 45) * 100, 0]
                        }}
                        transition={{
                            duration: Math.random() * 30 + 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* 🔸 Network Status with Red/Orange Theme */}
            <div className="fixed top-4 left-4 z-30">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-lg border border-red-500/20 px-3 py-1 rounded-full"
                >
                    <motion.div
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{
                            scale: [1, 1.5, 1],
                            boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.7)', '0 0 0 5px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)']
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity
                        }}
                    />
                    <span className="text-xs text-gray-300">Quantum Link Active</span>
                    {/* Debug Mode Indicator */}
                    {debug?.enabled && (
                        <motion.div
                            className="w-2 h-2 bg-yellow-500 rounded-full"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.5, 1]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity
                            }}
                            title="Debug Mode Enabled"
                        />
                    )}
                    {/* Mock Data Indicator */}
                    {debug?.mockData && (
                        <motion.div
                            className="w-2 h-2 bg-purple-500 rounded-full"
                            animate={{
                                rotate: 360
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            title="Using Holographic Data"
                        />
                    )}
                </motion.div>
            </div>

            {/* 🔸 Real-time Meteor Shower - Red/Orange */}
            <div className="fixed inset-0 -z-30 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`meteor-${i}`}
                        className="absolute w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 via-red-500 to-transparent rounded-full"
                        initial={{
                            x: -100,
                            y: Math.random() * window.innerHeight,
                            rotate: Math.random() * 30 - 15,
                            opacity: 0
                        }}
                        animate={{
                            x: window.innerWidth + 100,
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            delay: Math.random() * 10,
                            repeat: Infinity,
                            repeatDelay: Math.random() * 15
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default UserLayout;