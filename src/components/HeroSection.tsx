import { Button } from '@/components/ui/button';
import FloatingAppCards from './FloatingAppCards';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-stretch relative">
          {/* Left Content */}
          <div className="text-center lg:text-left py-16 lg:py-24">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              每天发现{' '}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                好用的
              </span>{' '}
              AI 应用
            </h1>
            <p className="text-base lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              一个聚焦"好用的 AI 应用"社区。<br />
              只关注能解决实际问题的 AI 应用。<br />
              排名由社区决定，拒绝一切造假行为。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start lg:hidden">
              <Button className="hero-button px-8 py-2.5 mx-auto">
                发布应用
              </Button>
            </div>
          </div>

          {/* Right Floating Cards - Only visible on desktop */}
          <div className="hidden lg:block">
            <FloatingAppCards />
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="hidden lg:block absolute top-20 right-20 w-42 h-42 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      <div className="hidden lg:block absolute top-1/2 left-1/2 w-42 h-42 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ transform: 'translate(calc(-50% - 550px), calc(-50%))' }} />
    </section>
  );
};

export default HeroSection;