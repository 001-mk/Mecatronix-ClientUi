import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import Nav from '../nav/Nav';
import Foot from '../foot/Foot';

const UserLayout = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickContact = [
        {
            icon: FaWhatsapp,
            href: 'https://wa.me/919843274321',
            label: 'WhatsApp',
            bgColor: 'bg-green-500',
            hoverColor: 'hover:bg-green-600',
        },
        {
            icon: FaEnvelope,
            href: 'mailto:connect@mecatronixhub.com',
            label: 'Email',
            bgColor: 'bg-red-500',
            hoverColor: 'hover:bg-red-600',
        },
        {
            icon: FaPhone,
            href: 'tel:+919843274321',
            label: 'Call',
            bgColor: 'bg-blue-500',
            hoverColor: 'hover:bg-blue-600',
        },
    ];

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
                                mecatronix
                            </motion.h3>
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

                {/* Quick Contact Buttons */}
                {quickContact.map((contact, index) => (
                    <motion.a
                        key={contact.label}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className={`${contact.bgColor} text-white p-3 rounded-2xl shadow-2xl ${contact.hoverColor} transition-all duration-300 group relative overflow-visible`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={contact.label}
                    >
                        <contact.icon className="text-lg" />

                        {/* Fixed Tooltip - Positioned to the LEFT */}
                        <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                            {contact.label}
                            {/* Tooltip arrow */}
                            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                        </div>
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
                            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
                            y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
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
                </motion.div>
            </div>
        </div>
    );
};

export default UserLayout;