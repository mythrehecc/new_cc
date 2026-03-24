'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Trophy } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

export default function HackathonFAQ() {
  const { config, saveConfigToServer } = useAdmin();
  const faqData = config?.hackathonfaq?.faqData;
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSave = () => saveConfigToServer();

  if (!faqData) return null;

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="flex justify-center mb-4">
        <div className="bg-yellow-100 p-3 rounded-full">
          <Trophy className="w-6 h-6 text-yellow-600" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        <EditableText 
          value={config?.hackathonfaq?.title || "Hackathon FAQ"} 
          onSave={handleSave} 
          configPath="hackathonfaq.title"
        >
          {config?.hackathonfaq?.title || "Hackathon FAQ"}
        </EditableText>
      </h2>

      <div className="space-y-4">
        {faqData.map((faq: any, index: number) => (
          <div 
            key={index} 
            className={`border rounded-xl transition-all duration-200 ${
              openIndex === index 
                ? 'border-yellow-400 shadow-md ring-1 ring-yellow-50' 
                : 'border-gray-200 hover:border-yellow-200'
            } overflow-hidden`}
          >
            <button
              onClick={() => toggleQuestion(index)}
              className={`w-full px-6 py-5 text-left flex justify-between items-center transition-colors ${
                openIndex === index ? 'bg-yellow-50/50' : 'bg-white'
              }`}
            >
              <span className="font-semibold text-gray-900">
                <EditableText 
                  value={faq.question} 
                  onSave={handleSave} 
                  configPath={`hackathonfaq.faqData.${index}.question`}
                >
                  {faq.question}
                </EditableText>
              </span>
              <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-yellow-600' : 'text-gray-400'}`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            
            {openIndex === index && (
              <div className="px-6 py-5 bg-white border-t border-yellow-100 animate-in fade-in duration-300">
                <div className="text-gray-700 leading-relaxed">
                  <EditableText 
                    value={faq.answer} 
                    onSave={handleSave} 
                    configPath={`hackathonfaq.faqData.${index}.answer`}
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