'use client';

import { useState } from 'react';
import GeneralFAQ from './GeneralFAQ';
import WebServicesFAQ from './WebServicesFAQ';
import MobileServicesFAQ from './MobileServicesFAQ';
import AIServicesFAQ from './AIServicesFAQ';
import SoftwareDevelopmentFAQ from './SoftwareDevelopmentFAQ';
import HackathonFAQ from './HackathonFAQ';

const categories = [
  { id: 'general', name: 'General', component: GeneralFAQ },
  { id: 'web', name: 'Web Development', component: WebServicesFAQ },
  { id: 'mobile', name: 'Mobile Development', component: MobileServicesFAQ },
  { id: 'ai', name: 'AI & ML Services', component: AIServicesFAQ },
  { id: 'software', name: 'Software Development', component: SoftwareDevelopmentFAQ },
  { id: 'hackathon', name: 'Hackathon', component: HackathonFAQ },
];

export default function FAQContainer() {
  const [activeCategory, setActiveCategory] = useState('general');

  const ActiveComponent = categories.find(cat => cat.id === activeCategory)?.component || GeneralFAQ;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <ActiveComponent />
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help. 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
