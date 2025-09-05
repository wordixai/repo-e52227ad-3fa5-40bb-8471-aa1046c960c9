import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryFilter from '@/components/CategoryFilter';
import AppGrid from '@/components/AppGrid';
import Footer from '@/components/Footer';
import FloatingHelpButton from '@/components/FloatingHelpButton';
import { thisWeekApps, lastWeekApps, historicalApps } from '@/data/mockApps';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <CategoryFilter />
        
        <main id="apps-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AppGrid 
            title="本周发布新榜" 
            apps={thisWeekApps} 
            showViewToggle={true}
            showNoMore={true}
          />
          
          <AppGrid 
            title="上周发布" 
            apps={lastWeekApps} 
            showNoMore={true}
          />
          
          <AppGrid 
            title="历史发布" 
            apps={historicalApps} 
          />
        </main>
      </main>

      <Footer />
      <FloatingHelpButton />
    </div>
  );
};

export default Index;