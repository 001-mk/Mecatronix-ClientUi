import React from 'react'

const Ourworld = () => {
  return (
    <section id="ourworld" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Mecatrone</h2>
        <p className="mt-4 text-gray-700">Mecatrone is a small, agile web development studio focused on delivering clean and functional websites. We build everything from fast brochure sites to complex e-commerce solutions.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h3 className="font-semibold">Fast Delivery</h3>
            <p className="text-sm text-gray-600 mt-2">Small teams, quick iterations, and a focus on essential features.</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-semibold">SEO Friendly</h3>
            <p className="text-sm text-gray-600 mt-2">Basic SEO setup included: meta tags, sitemaps, and performance tuning.</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-semibold">Maintenance</h3>
            <p className="text-sm text-gray-600 mt-2">Hosting, updates, and support plans to keep your site secure and fast.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ourworld