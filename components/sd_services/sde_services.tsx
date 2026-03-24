'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { BarChart3, Code2, Smartphone, Globe, ArrowRight } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

// --- ICON MAPPING ---
const ICON_MAP = {
  BarChart3: <BarChart3 size={48} />,
  Code2: <Code2 size={48} />,
  Smartphone: <Smartphone size={48} />,
  Globe: <Globe size={48} />,
  ArrowRight: <ArrowRight size={48} />,
} as const;

type IconName = keyof typeof ICON_MAP;

// --- STYLING TOKENS ---
const COLORS = {
  primary: '#4A9EFF',
  accent: '#FF5757',
  textMain: '#111827',
  textMuted: '#4B5563',
  bgWhite: '#FFFFFF',
};

export default function ServicesSection() {
  const router = useRouter();
  const { config, saveConfigToServer } = useAdmin();
  const SERVICES_CONTENT = config?.sd_services?.SERVICES_CONTENT;

  const handleSave = () => saveConfigToServer();

  const handleNavigation = (link: string) => {
    router.push(link);
  };

  if (!SERVICES_CONTENT) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            <EditableText
              value={SERVICES_CONTENT.header.title}
              onSave={handleSave}
              configPath="sd_services.SERVICES_CONTENT.header.title"
            >
              {SERVICES_CONTENT.header.title}
            </EditableText>
            {' '}
            <span style={{ color: COLORS.primary }}>
              <EditableText
                value={SERVICES_CONTENT.header.highlight}
                onSave={handleSave}
                configPath="sd_services.SERVICES_CONTENT.header.highlight"
              >
                {SERVICES_CONTENT.header.highlight}
              </EditableText>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <EditableText
              value={SERVICES_CONTENT.header.description}
              onSave={handleSave}
              configPath="sd_services.SERVICES_CONTENT.header.description"
              multiline={true}
            >
              {SERVICES_CONTENT.header.description}
            </EditableText>
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES_CONTENT.services.map((service: any, index: number) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onNavigate={() => handleNavigation(service.link)}
              onSave={handleSave}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENT ---
function ServiceCard({ 
  service, 
  index,
  onNavigate,
  onSave 
}: { 
  service: any, 
  index: number,
  onNavigate: () => void,
  onSave: () => void
}) {
  const iconName = service.iconName as IconName;
  const IconComponent = ICON_MAP[iconName];

  return (
    <div className="group hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50/20 p-8 rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#4A9EFF]/10 hover:border hover:border-[#4A9EFF]/20 border border-transparent">
      <div className="mb-6">
        {IconComponent && React.cloneElement(IconComponent, { 
          size: 48, 
          className: "w-12 h-12",
          style: { color: COLORS.primary } 
        })}
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#4A9EFF] transition-colors duration-300">
        <EditableText
          value={service.title}
          onSave={onSave}
          configPath={`sd_services.SERVICES_CONTENT.services.${index}.title`}
        >
          {service.title}
        </EditableText>
      </h3>
      
      <p className="text-gray-600 leading-relaxed mb-6">
        <EditableText
          value={service.description}
          onSave={onSave}
          configPath={`sd_services.SERVICES_CONTENT.services.${index}.description`}
          multiline={true}
        >
          {service.description}
        </EditableText>
      </p>
      
      <button
        onClick={onNavigate}
        className="inline-flex items-center gap-2 font-medium hover:gap-4 transition-all duration-300"
        style={{ color: COLORS.accent }}
      >
        Learn More
        <ArrowRight className="w-5 h-5 transition-transform duration-300" />
      </button>
    </div>
  );
}