'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Smartphone } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

export default function MobileServicesFAQ() {
  const { config, saveConfigToServer } = useAdmin();
  const faqData = config?.mobilefaq?.faqData;
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSave = () => saveConfigToServer();

  if (!faqData) return null;

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="flex justify-center mb-4">
        <div className="bg-sky-100 p-3 rounded-2xl">
          <Smartphone className="w-6 h-6 text-sky-600" />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        <EditableText 
          value={config?.mobilefaq?.title || "Mobile App Development Services"} 
          onSave={handleSave} 
          configPath="mobilefaq.title"
        >
          {config?.mobilefaq?.title || "Mobile App Development Services"}
        </EditableText>
      </h2>

      <div className="space-y-4">
        {faqData.map((faq: any, index: number) => (
          <div 
            key={index} 
            className={`border rounded-xl transition-all duration-300 ${
              openIndex === index 
                ? 'border-sky-300 shadow-md ring-1 ring-sky-50' 
                : 'border-gray-200 hover:border-sky-200 shadow-sm'
            } overflow-hidden`}
          >
            <button
              onClick={() => toggleQuestion(index)}
              className={`w-full px-6 py-5 text-left flex justify-between items-center transition-colors ${
                openIndex === index ? 'bg-sky-50/40' : 'bg-white'
              }`}
            >
              <span className={`font-semibold transition-colors ${
                openIndex === index ? 'text-sky-900' : 'text-gray-900'
              }`}>
                <EditableText 
                  value={faq.question} 
                  onSave={handleSave} 
                  configPath={`mobilefaq.faqData.${index}.question`}
                >
                  {faq.question}
                </EditableText>
              </span>
              <div className={`p-1 rounded-lg transition-all duration-300 ${
                openIndex === index ? 'bg-sky-100 text-sky-600 rotate-180' : 'bg-gray-50 text-gray-400'
              }`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            
            {openIndex === index && (
              <div className="px-6 py-5 bg-white border-t border-sky-100 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="text-gray-700 leading-relaxed">
                  <EditableText 
                    value={faq.answer} 
                    onSave={handleSave} 
                    configPath={`mobilefaq.faqData.${index}.answer`}
                    multiline={true}
                  >
                    {faq.answer}
                  </EditableText>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}