import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, MessageCircle, Share2 } from 'lucide-react';

interface AppCardProps {
  app: {
    id: string;
    name: string;
    description: string;
    image: string;
    categories: string[];
    likes: number;
    comments: number;
    publishTime: string;
    url?: string;
  };
}

const AppCard = ({ app }: AppCardProps) => {
  return (
    <div className="app-card">
      <div className="p-5">
        {/* App Header */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="flex-shrink-0">
            <img 
              src={app.image} 
              alt={app.name} 
              className="w-12 h-12 rounded-lg object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 truncate">
                {app.name}
              </h3>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-gray-400 hover:text-orange-600 transition-colors p-1 min-w-0 w-6 h-6 flex-shrink-0"
                title={`访问 ${app.name}`}
              >
                <ExternalLink className="w-3 h-3" />
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {app.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-3">
              {app.categories.map((category) => (
                <span 
                  key={category}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* App Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="sm" className="text-gray-400 p-1">
                <Heart className="w-3 h-3" />
              </Button>
              <span>{app.likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-3 h-3 text-gray-400" />
              <span>{app.comments}</span>
            </div>
            <div className="relative inline-block">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-gray-500 hover:text-orange-600 p-1 hidden md:inline-flex"
              >
                <Share2 className="w-3 h-3" />
              </Button>
            </div>
          </div>
          <div className="text-xs text-gray-400">
            {app.publishTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;