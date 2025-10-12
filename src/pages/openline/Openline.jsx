import React from 'react'

const Openline = () => {
  return (
    <section id="openline" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Open Line</h2>
        <p className="mt-2 text-gray-600">Reach out for a free consultation.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <form className="p-6 bg-white border rounded-lg">
            <input className="w-full px-3 py-2 border rounded" placeholder="Your name" />
            <input className="w-full px-3 py-2 border rounded mt-3" placeholder="Email or WhatsApp" />
            <textarea className="w-full px-3 py-2 border rounded mt-3" rows={5} placeholder="Tell us about your project" />
            <button className="mt-3 bg-black text-yellow-400 px-4 py-2 rounded">Send Message</button>
          </form>
          <div className="p-6">
            <h3 className="font-semibold">Get in touch</h3>
            <p className="text-sm text-gray-600 mt-2">Email: hello@Mecatronehub.com</p>
            <p className="text-sm text-gray-600">Phone / WhatsApp: +91 98765 43210</p>
            <div className="mt-4">
              <h4 className="font-semibold">Office</h4>
              <p className="text-sm text-gray-600">Chennai, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Openline