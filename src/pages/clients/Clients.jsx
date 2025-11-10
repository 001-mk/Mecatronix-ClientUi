import React from 'react'

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "Coca-Cola",
      logo: "https://cdn.worldvectorlogo.com/logos/coca-cola-4.svg",
      website: "https://coca-cola.com",
      color: "red"
    },
    {
      id: 2,
      name: "Nike",
      logo: "https://cdn.worldvectorlogo.com/logos/nike-4.svg",
      website: "https://nike.com",
      color: "black"
    },
    {
      id: 3,
      name: "Amazon",
      logo: "https://cdn.worldvectorlogo.com/logos/amazon-2.svg",
      website: "https://amazon.com",
      color: "orange"
    },
    {
      id: 4,
      name: "Netflix",
      logo: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg",
      website: "https://netflix.com",
      color: "red"
    },
    {
      id: 5,
      name: "Adobe",
      logo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
      website: "https://adobe.com",
      color: "red"
    },
    {
      id: 6,
      name: "Firefox",
      logo: "https://cdn.worldvectorlogo.com/logos/firefox-2.svg",
      website: "https://firefox.com",
      color: "orange"
    },
    {
      id: 7,
      name: "Sony",
      logo: "https://cdn.worldvectorlogo.com/logos/sony-2.svg",
      website: "https://sony.com",
      color: "black"
    },
    {
      id: 8,
      name: "Ferrari",
      logo: "https://cdn.worldvectorlogo.com/logos/ferrari-7.svg",
      website: "https://ferrari.com",
      color: "red"
    },
    {
      id: 9,
      name: "Mastercard",
      logo: "https://cdn.worldvectorlogo.com/logos/mastercard-2.svg",
      website: "https://mastercard.com",
      color: "red"
    },
    {
      id: 10,
      name: "Harley Davidson",
      logo: "https://cdn.worldvectorlogo.com/logos/harley-davidson-1.svg",
      website: "https://harley-davidson.com",
      color: "black"
    },
    {
      id: 11,
      name: "SoundCloud",
      logo: "https://cdn.worldvectorlogo.com/logos/soundcloud-2.svg",
      website: "https://soundcloud.com",
      color: "orange"
    },
    {
      id: 12,
      name: "Canon",
      logo: "https://cdn.worldvectorlogo.com/logos/canon-2.svg",
      website: "https://canon.com",
      color: "black"
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      red: 'bg-red-500 border-red-400 hover:bg-red-600',
      black: 'bg-gray-900 border-gray-800 hover:bg-black',
      orange: 'bg-orange-500 border-orange-400 hover:bg-orange-600'
    }
    return colorMap[color] || 'bg-gray-500'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-red-500">Prestigious</span> Clients
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by industry leaders and innovative brands worldwide. 
            <span className="text-orange-400"> Partnering with excellence.</span>
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-10" />
          
          {/* Main Scrolling Section */}
          <div className="overflow-hidden py-8">
            <div className="flex animate-scroll-horizontal hover:animate-pause space-x-8">
              {/* First Set */}
              {clients.map((client) => (
                <div
                  key={client.id}
                  className={`flex-shrink-0 w-48 h-32 rounded-2xl border-2 ${getColorClasses(client.color)} transition-all duration-500 hover:scale-110 hover:shadow-2xl group`}
                >
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex flex-col items-center justify-center p-4"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-12 w-auto object-contain filter brightness-0 invert group-hover:scale-110 transition-transform duration-300 mb-2"
                    />
                    <span className="text-white font-semibold text-sm text-center group-hover:text-gray-200 transition-colors">
                      {client.name}
                    </span>
                  </a>
                </div>
              ))}
              
              {/* Duplicate Set for Seamless Loop */}
              {clients.map((client) => (
                <div
                  key={`${client.id}-dup`}
                  className={`flex-shrink-0 w-48 h-32 rounded-2xl border-2 ${getColorClasses(client.color)} transition-all duration-500 hover:scale-110 hover:shadow-2xl group`}
                >
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex flex-col items-center justify-center p-4"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-12 w-auto object-contain filter brightness-0 invert group-hover:scale-110 transition-transform duration-300 mb-2"
                    />
                    <span className="text-white font-semibold text-sm text-center group-hover:text-gray-200 transition-colors">
                      {client.name}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-red-500/10 rounded-2xl border border-red-500/20">
            <div className="text-3xl font-bold text-red-400 mb-2">500+</div>
            <div className="text-gray-300">Global Clients</div>
          </div>
          <div className="text-center p-6 bg-orange-500/10 rounded-2xl border border-orange-500/20">
            <div className="text-3xl font-bold text-orange-400 mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-2xl border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-300">Countries Served</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Join Our Client Family
          </button>
          <p className="text-gray-400 mt-4">
            Ready to elevate your brand? Let's work together.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-horizontal {
          animation: scroll-horizontal 40s linear infinite;
        }
        .hover:animate-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default Clients