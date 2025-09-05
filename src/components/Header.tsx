import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Plus } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Desktop Login */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="text-gray-600 hover:text-orange-600">
              登录/注册
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="/" className="flex items-center space-x-2">
              <img 
                src="https://static001.geekbang.org/resource/image/d4/bb/d4a0394e5e35c541feffeee7d5bd76bb.png" 
                alt="logo" 
                className="h-10 object-contain"
              />
            </a>
          </div>

          {/* Publish Button */}
          <div className="flex items-center">
            <Button className="hero-button">
              <Plus className="w-4 h-4 mr-2" />
              发布 AI 应用
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div className="absolute top-full left-0 right-0 md:hidden border-t border-gray-200 bg-white shadow-lg z-50">
            <div className="px-4 py-2">
              <div className="py-2">
                <Button variant="ghost" className="w-full text-gray-600 hover:text-orange-600 text-sm">
                  登录/注册
                </Button>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40" onClick={() => setMobileMenuOpen(false)} />
        </>
      )}
    </header>
  );
};

export default Header;