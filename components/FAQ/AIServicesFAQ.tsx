'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { useAdmin } from '../admin/context';
import EditableText from '@/components/admin/editableText';

export default function AIServicesFAQ() {
  const { config, saveConfigToServer } = useAdmin();
  const faqData = config?.aifaq?.faqData;
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSave = () => saveConfigToServer();

  if (!faqData) return null;

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Sparkles className="w-6 h-6 text-indigo-500" />
        <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase">Expertise</span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">
        <EditableText 
          value={config?.aifaq?.title || "AI & Machine Learning Services"} 
          onSave={handleSave} 
          configPath="aifaq.title"
        >
          {config?.aifaq?.title || "AI & Machine Learning Services"}
        </EditableText>
      </h2>

      <div className="space-y-4">
        {faqData.map((faq: any, index: number) => (
          <div 
            key={index} 
            className={`border rounded-xl overflow-hidden transition-all duration-300 ${
              openIndex === index 
                ? 'border-indigo-200 shadow-md ring-1 ring-indigo-50' 
                : 'border-gray-200 hover:border-indigo-100 shadow-sm'
            }`}
          >
            <button
              onClick={() => toggleQuestion(index)}
              className={`w-full px-6 py-5 text-left transition-colors flex justify-between items-center group ${
                openIndex === index ? 'bg-indigo-50/30' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <span className={`font-semibold text-lg transition-colors ${
                openIndex === index ? 'text-indigo-900' : 'text-gray-900'
              }`}>
                <EditableText 
                  value={faq.question} 
                  onSave={handleSave} 
                  configPath={`aifaq.faqData.${index}.question`}
                >
                  {faq.question}
                </EditableText>
              </span>
              <div className={`p-1 rounded-full transition-colors ${
                openIndex === index ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
              }`}>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>
            
            {openIndex === index && (
              <div className="px-6 py-5 bg-white border-t border-indigo-50 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="text-gray-600 leading-relaxed text-base">
                  <EditableText 
                    value={faq.answer} 
                    onSave={handleSave} 
                    configPath={`aifaq.faqData.${index}.answer`}
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