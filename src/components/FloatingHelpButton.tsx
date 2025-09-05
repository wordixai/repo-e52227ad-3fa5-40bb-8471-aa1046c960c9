import { HelpCircle } from 'lucide-react';

const FloatingHelpButton = () => {
  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      <div className="relative group cursor-pointer">
        <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:bg-orange-50 transition-all">
          <HelpCircle className="w-5 h-5 text-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default FloatingHelpButton;