export default function ImageCollage() {
  const screenshots = [
    {
      id: 1,
      title: 'Financial Dashboard',
      color: 'from-green-50 to-blue-50',
      rotation: -6,
      size: 'medium',
      zIndex: 5,
    },
    {
      id: 2,
      title: 'Bookmarks Hub',
      color: 'from-blue-50 to-indigo-50',
      rotation: 4,
      size: 'small',
      zIndex: 3,
    },
    {
      id: 3,
      title: 'Family Guardian',
      color: 'from-pink-50 to-red-50',
      rotation: -3,
      size: 'large',
      zIndex: 4,
    },
    {
      id: 4,
      title: 'Property Assets',
      color: 'from-amber-50 to-orange-50',
      rotation: 5,
      size: 'medium',
      zIndex: 2,
    },
    {
      id: 5,
      title: 'Financial Summary',
      color: 'from-cyan-50 to-blue-50',
      rotation: -4,
      size: 'small',
      zIndex: 1,
    },
    {
      id: 6,
      title: 'Task Manager',
      color: 'from-purple-50 to-pink-50',
      rotation: 3,
      size: 'medium',
      zIndex: 3,
    },
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'w-48 h-60 lg:w-56 lg:h-72';
      case 'medium':
        return 'w-56 h-72 lg:w-64 lg:h-80';
      case 'large':
        return 'w-64 h-80 lg:w-72 lg:h-96';
      default:
        return 'w-56 h-72';
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100">
      <div className="absolute inset-0 opacity-40 bg-gradient-to-t from-blue-200/30 via-transparent to-transparent" />

      <div className="relative min-h-screen w-full flex items-center justify-center px-4 py-16">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 tracking-tight">
              Organize Your Life
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-600">
              With Us
            </h2>
          </div>
        </div>

        <div className="relative w-full h-screen max-w-7xl perspective">
          {screenshots.map((screenshot, index) => {
            const positions = [
              { top: '10%', left: '5%', rotation: screenshot.rotation },
              { top: '5%', right: '8%', rotation: screenshot.rotation },
              { top: '40%', left: '12%', rotation: screenshot.rotation },
              { bottom: '15%', left: '8%', rotation: screenshot.rotation },
              { bottom: '20%', right: '10%', rotation: screenshot.rotation },
              { top: '35%', right: '5%', rotation: screenshot.rotation },
            ];

            const position = positions[index % positions.length];

            return (
              <div
                key={screenshot.id}
                className={`absolute ${getSizeClasses(
                  screenshot.size
                )} transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                style={{
                  top: position.top,
                  left: position.left,
                  right: position.right,
                  bottom: position.bottom,
                  transform: `rotate(${position.rotation}deg)`,
                  zIndex: screenshot.zIndex,
                }}>
                <div
                  className={`w-full h-full rounded-2xl bg-gradient-to-br ${screenshot.color} shadow-xl overflow-hidden border-4 border-white/80 backdrop-blur-sm relative`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg mb-4 shadow-lg" />
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {screenshot.title}
                    </h3>
                    <div className="space-y-2 w-full flex flex-col items-center">
                      <div className="w-3/4 h-2 bg-gray-300 rounded-full" />
                      <div className="w-3/4 h-2 bg-gray-200 rounded-full" />
                      <div className="w-1/2 h-2 bg-gray-200 rounded-full" />
                    </div>
                  </div>

                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end justify-center pb-4">
                    <span className="text-white font-semibold text-sm">
                      Click to view
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl shadow-2xl opacity-30 blur-xl -z-10" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-20 left-0 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl -z-10" />
    </div>
  );
}
