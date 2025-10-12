import React from 'react'
import { NAV } from '../../helper/data_help';
import MobileMenu from "./MobileMenu";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-black">MH</div>
          <div>
            <div className="font-bold">Mecatrone</div>
            <div className="text-xs text-gray-500">Websites • E‑commerce • Hosting</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          {NAV.map((n) => (
            <Link key={n.id} to={n.id} className="px-3 py-2 rounded hover:bg-gray-100 text-sm font-medium">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">{/* Mobile menu placeholder */}
          <MobileMenu />
        </div>
        <div className="hidden md:flex gap-2">
          <a href="#quote" className="bg-black text-yellow-400 px-4 py-2 rounded-md text-sm font-semibold">Get Quote</a>
        </div>
      </div>
    </header>
  )
}

export default Nav