import React from 'react'

const Hero = () => {
    return (
        <section id="Portal" className="min-h-screen flex items-center bg-gradient-to-r from-yellow-50 to-white">
            <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-black">Mecatrone</h1>
                    <p className="mt-4 text-lg text-gray-700">We build fast, modern, and responsive websites — single page, multi-page, dynamic, and e-commerce. Tailored to grow your business.</p>
                    <div className="mt-6 flex gap-3">
                        <a href="#quote" className="bg-black text-yellow-400 px-5 py-3 rounded-md font-semibold">Get a Free Quote</a>
                        <a href="#portfolio" className="px-5 py-3 rounded-md border border-gray-300">See Portfolio</a>
                    </div>
                    <div className="mt-6 text-sm text-gray-600">Also offering: Hosting • SEO • Maintenance • Payment Integration</div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg border">
                        <div className="text-center text-2xl font-bold">Start Your Project</div>
                        <p className="text-sm text-gray-500 mt-2">Quick details — we’ll get back in 24 hours</p>
                        <form className="mt-4 grid gap-3">
                            <input className="px-3 py-2 border rounded" placeholder="Your name" />
                            <input className="px-3 py-2 border rounded" placeholder="Email or WhatsApp" />
                            <select className="px-3 py-2 border rounded">
                                <option>Type of website</option>
                                <option>Single Page</option>
                                <option>Multi Page</option>
                                <option>E-commerce</option>
                                <option>Dynamic / CMS</option>
                            </select>
                            <button className="bg-yellow-400 text-black px-3 py-2 rounded font-medium">Quick Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero