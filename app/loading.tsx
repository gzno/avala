export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Loading animation */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-16 h-16 border-2 border-gray-700 rounded-full"></div>
          {/* Spinning gradient ring */}
          <div className="absolute inset-0 w-16 h-16 border-2 border-transparent border-t-blue-400 border-r-purple-400 rounded-full animate-spin"></div>
          {/* Inner glow */}
          <div className="absolute inset-2 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-sm"></div>
        </div>
      </div>
    </div>
  )
}