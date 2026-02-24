"use client";

export default function Header() {
  return (
    <header className="bg-white">
      {/* Main header */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo placeholder - will be replaced with actual logo */}
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7B4B94] to-[#FFD700] flex items-center justify-center">
            <span className="text-white font-bold text-xs">GLACIER</span>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#7B4B94]">GLACIER</div>
            <div className="text-sm text-gray-600">Ice Cream & Gelato</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-700 hover:text-[#7B4B94] font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-[#7B4B94] font-medium">Story</a>
          <a href="#" className="text-gray-700 hover:text-[#7B4B94] font-medium">Flavors</a>
          <a href="#" className="text-gray-700 hover:text-[#7B4B94] font-medium">Dairy Free</a>
          <a href="#catering" className="text-[#7B4B94] hover:text-[#7B4B94]/80 font-bold">Catering</a>
          <a href="#" className="text-gray-700 hover:text-[#7B4B94] font-medium">Wholesale</a>
          <a href="#" className="text-gray-700 hover:text-[#7B4B94] font-medium">Contact</a>
        </nav>
      </div>

      {/* Colorful sprinkle border */}
      <div className="h-3 overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 20">
          {/* Colorful diagonal sprinkles pattern */}
          <g>
            {[...Array(60)].map((_, i) => {
              const colors = ['#FF6B9D', '#FFD700', '#7EC6E8', '#7B4B94', '#90EE90', '#FFA500'];
              const x = (i * 20) % 1200;
              const color = colors[i % colors.length];
              const rotation = (i % 4) * 30 - 45;
              return (
                <rect
                  key={i}
                  x={x}
                  y="5"
                  width="12"
                  height="3"
                  fill={color}
                  transform={`rotate(${rotation} ${x + 6} 6.5)`}
                />
              );
            })}
          </g>
        </svg>
      </div>
    </header>
  );
}
