import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { 
  FileText, 
  Shirt, 
  Footprints, 
  MonitorSmartphone, 
  HeartPulse, 
  Backpack, 
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  DocumentIcon: FileText,
  ShirtIcon: Shirt,
  ShoeIcon: Footprints,
  DeviceIcon: MonitorSmartphone,
  HeartIcon: HeartPulse,
  BackpackIcon: Backpack,
};

const InteractivePackingChecklist = ({ title, subtitle, categories = [], images = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!categories || !Array.isArray(categories) || categories.length === 0) return null;

  const safeActiveTab = activeTab >= categories.length ? 0 : activeTab;
  const activeCategory = categories[safeActiveTab];
  const activeImage = Array.isArray(images) && images.length > 0 ? images[safeActiveTab % images.length] : null;

  return (
    <section className="py-20 bg-ice-50 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              {title}
            </h2>
            <p className="font-sans text-lg text-navy-600 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Categories List */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {categories.map((category, index) => {
              const iconKey = category.icon || category.iconName;
              const IconComponent = iconMap[iconKey] || FileText;
              const isActive = index === safeActiveTab;
              const categoryLabel = category.label || category.name || category.title || `Category ${index + 1}`;
              const categoryKey = category.id || category.name || category.label || `cat-${index}`;

              return (
                <button
                  key={categoryKey}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center text-left w-full px-6 py-4 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-navy-950 text-white shadow-lg shadow-navy-900/20 translate-x-2' 
                      : 'bg-white text-navy-600 hover:bg-ice-100 hover:text-navy-900'
                  }`}
                >
                  <IconComponent className={`w-6 h-6 mr-4 flex-shrink-0 ${isActive ? 'text-accent-400' : 'text-navy-400'}`} />
                  <span className="font-display text-lg tracking-wide">{categoryLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Content & Image */}
          <div className="lg:col-span-8">
            <FadeIn key={safeActiveTab}>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl shadow-navy-900/5 flex flex-col md:flex-row gap-8 items-center border border-ice-100 h-full">
                
                {/* Content List */}
                <div className={`w-full ${activeImage ? 'md:w-1/2' : 'md:w-full'} flex flex-col justify-center`}>
                  <div className="flex items-center mb-6">
                    {React.createElement(iconMap[activeCategory?.icon || activeCategory?.iconName] || FileText, {
                      className: "w-8 h-8 text-accent-600 mr-4 flex-shrink-0"
                    })}
                    <h3 className="font-display text-2xl md:text-3xl text-navy-950">
                      {activeCategory?.label || activeCategory?.name || activeCategory?.title}
                    </h3>
                  </div>

                  {activeCategory?.description && (
                    <p className="font-sans text-sm text-navy-600 mb-6 italic leading-relaxed">
                      {activeCategory.description}
                    </p>
                  )}
                  
                  <ul className="space-y-4">
                    {Array.isArray(activeCategory?.items) && activeCategory.items.map((item, i) => {
                      const isObject = typeof item === 'object' && item !== null;
                      const itemKey = isObject ? (item.id || item.name || item.title || i) : i;

                      return (
                        <li key={itemKey} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                          {isObject ? (
                            <div className="font-sans leading-relaxed">
                              {(item.name || item.title || item.label || item.item) && (
                                <strong className="text-navy-950 font-semibold block">
                                  {item.name || item.title || item.label || item.item}
                                </strong>
                              )}
                              {(item.desc || item.description || item.note || item.details) && (
                                <span className="text-navy-600 text-sm block mt-0.5">
                                  {item.desc || item.description || item.note || item.details}
                                </span>
                              )}
                            </div>
                          ) : (
                            <span className="font-sans text-navy-700 leading-relaxed">{item}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Optional Image per Category */}
                {activeImage && (
                  <div className="w-full md:w-1/2 h-full min-h-[300px]">
                    <div className="relative w-full h-full rounded-xl overflow-hidden aspect-[4/5] md:aspect-auto">
                      <img 
                        src={activeImage} 
                        alt={activeCategory?.label || activeCategory?.name || activeCategory?.title || 'Packing item'}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                )}
                
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractivePackingChecklist;
