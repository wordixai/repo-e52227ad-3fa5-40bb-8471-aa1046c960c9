const FloatingAppCards = () => {
  const apps = [
    { name: "Ai好记", image: "https://static001.geekbang.org/infoq/dc/dc90c5b2e5df6a1fa79a32c5f88f770a.jpeg", gradient: "floating-card-blue-100" },
    { name: "Deep Innovation", image: "https://static001.geekbang.org/infoq/a9/a9c08b02fe1fb391a2dde1eb3160232f.jpeg", gradient: "floating-card-indigo-100" },
    { name: "DeepPath 时踪", image: "https://static001.geekbang.org/infoq/b1/b101116dca1ea984d695c8c3eab50709.png", gradient: "floating-card-blue-50" },
    { name: "呱呱识字", image: "https://static001.geekbang.org/infoq/73/73cc63d849cfe67df4a7535b8cc27b55.png", gradient: "floating-card-blue-100" },
    { name: "5ire AI 助手", image: "https://static001.geekbang.org/infoq/03/0333dfd64c039d8251197bb6d4644c0b.png", gradient: "floating-card-blue-100" },
    { name: "remio", image: "https://static001.geekbang.org/infoq/5e/5e27cd5bd2275be201a1b1db978e1028.png", gradient: "floating-card-blue-50" },
    { name: "AGICamp", image: "https://static001.geekbang.org/infoq/12/12c504fe03bb00ff058b714d6876b242.png", gradient: "floating-card-blue-50" },
    { name: "玉虚宫-AI八字解读", image: "https://static001.geekbang.org/infoq/b1/b19ae50834a8f456debb568ebc73be43.jpeg", gradient: "floating-card-blue-100" },
  ];

  const FloatingCard = ({ app, className }: { app: any; className?: string }) => (
    <div className={`${app.gradient} relative group cursor-pointer transition-transform hover:scale-105 w-full h-30 px-2 py-4 rounded-lg shadow-lg flex flex-col justify-between ${className}`}>
      <div className="flex justify-center">
        <div className="bg-white rounded-full shadow-md flex items-center justify-center w-12 h-12">
          <img 
            src={app.image} 
            alt={app.name} 
            className="object-contain w-8 h-8"
          />
        </div>
      </div>
      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded px-1 py-1">
        <p className="text-xs font-medium text-gray-900 truncate text-center">
          {app.name}
        </p>
      </div>
    </div>
  );

  return (
    <div className="absolute right-0 lg:h-full w-[420px]">
      <div className="absolute inset-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[420px] lg:h-[600px] lg:-rotate-[14deg]">
        {/* Column 1 */}
        <div className="absolute left-0 w-1/4 h-full overflow-hidden px-2">
          <div className="flex flex-col space-y-4 animate-scroll-up">
            {[...apps, ...apps].map((app, index) => (
              <FloatingCard key={`col1-${index}`} app={app} />
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="absolute left-1/4 w-1/4 h-full overflow-hidden px-2">
          <div className="flex flex-col space-y-4 animate-scroll-down">
            {[...apps.slice(2), ...apps.slice(2)].map((app, index) => (
              <FloatingCard key={`col2-${index}`} app={app} />
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className="absolute left-2/4 w-1/4 h-full overflow-hidden px-2">
          <div className="flex flex-col space-y-4 animate-scroll-up">
            {[...apps.slice(4), ...apps.slice(4)].map((app, index) => (
              <FloatingCard key={`col3-${index}`} app={app} />
            ))}
          </div>
        </div>

        {/* Column 4 */}
        <div className="absolute left-3/4 w-1/4 h-full overflow-hidden px-2">
          <div className="flex flex-col space-y-4 animate-scroll-down">
            {[...apps.slice(6), ...apps.slice(6)].map((app, index) => (
              <FloatingCard key={`col4-${index}`} app={app} />
            ))}
          </div>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-blue-50 to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default FloatingAppCards;