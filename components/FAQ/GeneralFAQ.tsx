'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

export default function GeneralFAQ() {
  const { config, saveConfigToServer } = useAdmin();
  const faqData = config?.generalfaq?.faqData;
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSave = () => saveConfigToServer();

  if (!faqData) return null;

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        <EditableText 
          value={config?.generalfaq?.title || "General Questions"} 
          onSave={handleSave} 
          configPath="generalfaq.title"
        >
          {config?.generalfaq?.title || "General Questions"}
        </EditableText>
      </h2>

      <div className="space-y-4">
        {faqData.map((faq: any, index: number) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center group"
            >
              <span className="font-medium text-gray-900 pr-4">
                <EditableText 
                  value={faq.question} 
                  onSave={handleSave} 
                  configPath={`generalfaq.faqData.${index}.question`}
                >
                  {faq.question}
                </EditableText>
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-indigo-600 transition-transform" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-transform" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 animate-in slide-in-from-top-1 duration-200">
                <div className="text-gray-700 leading-relaxed">
                  <EditableText 
                    value={faq.answer} 
                    onSave={handleSave} 
                    configPath={`generalfaq.faqData.${index}.answer`}
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