import React from 'react'

const Foot = () => {
  return (
    <footer className="bg-black text-yellow-300 py-6 mt-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div>© {new Date().getFullYear()} Mecatrone</div>
        <div className="text-sm">Built with ❤️ • React + Tailwind</div>
      </div>
    </footer>
  )
}

export default Foot