import React from 'react'
import { SERVICES } from '../../helper/data_help'

const Transformations = () => {
  return (
    <section id="transformations" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Transformations</h2>
        <p className="mt-2 text-gray-600">We offer end-to-end transformations for websites of all sizes.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="p-5 bg-white border rounded-lg shadow-sm">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
              <div className="mt-4">
                <a href="#quote" className="text-sm font-semibold">Request Quote →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Transformations