import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState('全部');

  const categories = [
    '全部', '工作效率', '软件开发', '数据分析', '设计创意', '市场营销',
    '人力资源', '硬件实体', '电子商务', '金融科技', '项目管理', '社交社区',
    '产品插件', '元宇宙', '教育学习', '生活服务', '其他'
  ];

  const visibleCategories = categories.slice(0, 10);

  return (
    <>
      {/* Desktop Categories */}
      <div className="hidden md:block">
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex gap-3 overflow-hidden flex-nowrap">
                  {visibleCategories.map((category) => (
                    <div
                      key={category}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 cursor-pointer ${
                        activeCategory === category ? 'category-active' : 'category-inactive'
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 ml-4">
                <Button variant="ghost" className="py-1 text-gray-600">
                  <ChevronDown className="w-4 h-4 mr-1" />
                  更多
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Categories */}
      <div className="block md:hidden">
        <section className="bg-white border-b border-gray-200">
          <div className="py-4">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4">
              {categories.map((category) => (
                <span
                  key={category}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 cursor-pointer ${
                    activeCategory === category 
                      ? 'bg-orange-500 text-white' 
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CategoryFilter;