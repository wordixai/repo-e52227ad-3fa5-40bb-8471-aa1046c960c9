import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Grid3x3, List } from 'lucide-react';
import AppCard from './AppCard';

interface AppGridProps {
  title: string;
  apps: any[];
  showViewToggle?: boolean;
  showNoMore?: boolean;
}

const AppGrid = ({ title, apps, showViewToggle = false, showNoMore = false }: AppGridProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
        {showViewToggle && (
          <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
            <Button
              variant="ghost"
              size="sm"
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'view-toggle-active' : 'view-toggle-inactive'
              }`}
              onClick={() => setViewMode('grid')}
            >
              <Grid3x3 className="w-4 h-4 mr-1" />
              网格
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                viewMode === 'list' ? 'view-toggle-active' : 'view-toggle-inactive'
              }`}
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4 mr-1" />
              列表
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      {showNoMore && (
        <div className="text-center mt-8">
          <div className="text-gray-500 text-sm">没有更多了</div>
        </div>
      )}
    </section>
  );
};

export default AppGrid;