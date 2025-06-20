export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-amber-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

        {/* Artistic Construction Graphic */}
        <div className="mb-12 relative">
          {/* Construction crane and site illustration */}
          <div className="relative w-80 h-64 mx-auto">
            {/* Ground/base */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-neutral-600 to-neutral-500 rounded-lg"></div>

            {/* Construction blocks/building */}
            <div className="absolute bottom-4 left-12 w-16 h-20 bg-gradient-to-b from-neutral-600 to-neutral-700 rounded-t-lg border-2 border-neutral-500"></div>
            <div className="absolute bottom-4 left-32 w-16 h-16 bg-gradient-to-b from-neutral-600 to-neutral-700 rounded-t-lg border-2 border-neutral-500"></div>
            <div className="absolute bottom-4 left-52 w-16 h-12 bg-gradient-to-b from-neutral-600 to-neutral-700 rounded-t-lg border-2 border-neutral-500"></div>

            {/* Crane base */}
            <div className="absolute bottom-4 right-16 w-8 h-32 bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-t-lg"></div>

            {/* Crane arm */}
            <div className="absolute bottom-28 right-4 w-24 h-3 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full transform rotate-12 origin-left"></div>

            {/* Crane hook and cable */}
            <div className="absolute bottom-20 right-0 w-0.5 h-8 bg-yellow-300"></div>
            <div className="absolute bottom-12 right-0 w-3 h-3 bg-yellow-400 rounded-full"></div>

            {/* Construction helmet */}
            <div className="absolute bottom-32 left-20 w-8 h-6 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-t-full border-2 border-yellow-300"></div>

            {/* Tools scattered around */}
            <div className="absolute bottom-6 left-6 w-6 h-2 bg-amber-600 rounded transform rotate-45"></div>
            <div className="absolute bottom-8 right-28 w-4 h-4 bg-gray-500 rounded-full"></div>

            {/* Floating particles/dust */}
            <div className="absolute top-12 left-16 w-1 h-1 bg-amber-300 rounded-full animate-bounce"></div>
            <div className="absolute top-20 right-12 w-1 h-1 bg-yellow-300 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-8 left-32 w-1 h-1 bg-orange-300 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>

            {/* Progress bars/blueprints */}
            <div className="absolute top-4 left-4 right-4">
              <div className="w-full h-2 bg-neutral-700 rounded-full mb-2">
                <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full animate-pulse"></div>
              </div>
              <div className="w-full h-2 bg-neutral-700 rounded-full mb-2">
                <div className="w-1/2 h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="w-full h-2 bg-neutral-700 rounded-full">
                <div className="w-1/3 h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* DocumentDB Banner */}
        {/* Main heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white via-yellow-100 to-amber-200 bg-clip-text text-transparent">
          Under Construction
        </h2>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          We're building something amazing! Our website is currently under development and will be launching soon.
        </p>

        {/* Construction status */}
        <div className="bg-neutral-800/80 backdrop-blur-sm rounded-lg p-6 border border-neutral-700/50 mb-8 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm">Progress</span>
            <span className="text-yellow-400 text-sm font-semibold">67%</span>
          </div>
          <div className="w-full bg-neutral-700 rounded-full h-3 mb-4">
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 h-3 rounded-full animate-pulse" style={{width: '67%'}}></div>
          </div>
          <div className="flex items-center justify-center text-gray-400 text-sm">
            <svg className="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Building in progress...
          </div>
        </div>


      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 border-t border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-sm text-gray-400">
            <p>© 2025 DocumentDB. Site launching soon!</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
