// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Search, ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
// import EditableText from '@/components/admin/editableText';
// import { useAdmin } from '@/components/admin/context';
// import EditableFaqArray from './admin/faqedit';

// export default function FaqSection() {
//   const { config, saveConfigToServer } = useAdmin();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

//   // Get FAQ data from config, with fallback to default structure
//   const faqConfig = config?.faqs;
//   const faqs = faqConfig?.items || [];

//   const filteredFaqs = faqs.filter(
//     (faq: any) =>
//       faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleFaq = (index: number) => {
//     setExpandedFaq(expandedFaq === index ? null : index);
//   };

//   return (
//     <section
//       id="faqs"
//       style={{
//         position: 'relative',
//         minHeight: '80vh',
//         background:
//           'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
//         padding: '3.5rem 0',
//         overflow: 'hidden',
//         fontFamily: "'Urbanist', sans-serif",
//       }}>
//       {/* Import Urbanist font */}
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');

//         * {
//           font-family: 'Urbanist', sans-serif !important;
//         }
//       `}</style>

//       {/* Dynamic Background Grid */}
//       <div
//         style={{
//           position: 'absolute',
//           inset: 0,
//           backgroundImage: `
//                         linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//                         linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
//                     `,
//           backgroundSize: '50px 50px',
//           opacity: 0.3,
//           animation: 'gridPulse 8s ease-in-out infinite',
//         }}
//       />

//       {/* Gradient Orbs */}
//       <div
//         style={{
//           position: 'absolute',
//           top: '20%',
//           left: '10%',
//           width: '300px',
//           height: '300px',
//           background:
//             'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
//           borderRadius: '50%',
//           filter: 'blur(80px)',
//           animation: 'float 20s ease-in-out infinite',
//         }}
//       />

//       <style jsx>{`
//         @keyframes gridPulse {
//           0%,
//           100% {
//             opacity: 0.2;
//           }
//           50% {
//             opacity: 0.4;
//           }
//         }
//         @keyframes float {
//           0%,
//           100% {
//             transform: translate(0px, 0px) rotate(0deg);
//           }
//           33% {
//             transform: translate(30px, -30px) rotate(120deg);
//           }
//           66% {
//             transform: translate(-20px, 20px) rotate(240deg);
//           }
//         }
//       `}</style>

//       <div
//         style={{
//           maxWidth: '1200px',
//           margin: '0 auto',
//           padding: '0 1.5rem',
//           position: 'relative',
//           zIndex: 10,
//         }}>
//         {/* Header Section - Updated to match landing page styling */}
//         <motion.div
//           style={{
//             textAlign: 'center',
//             marginBottom: '3rem',
//             marginTop: '-1rem',
//           }}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}>
//           <motion.div
//             style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: '0.5rem',
//               background: 'rgba(59, 130, 246, 0.1)',
//               border: '1px solid rgba(59, 130, 246, 0.2)',
//               borderRadius: '50px',
//               padding: '0.4rem 1.2rem',
//               marginBottom: '1rem',
//               backdropFilter: 'blur(10px)',
//             }}
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}>
//             <HelpCircle size={14} style={{ color: '#3b82f6' }} />
//             <span
//               style={{
//                 color: '#93c5fd',
//                 fontSize: '0.8rem',
//                 fontWeight: '500',
//                 fontFamily: "'Urbanist', sans-serif",
//               }}>
//               Support Center
//             </span>
//           </motion.div>

//           <motion.h2
//             style={{
//               fontSize: '2.5rem',
//               fontWeight: '700',
//               color: '#ffffff',
//               lineHeight: '1.1',
//               marginBottom: '1rem',
//               letterSpacing: '-0.02em',
//               fontFamily: "'Urbanist', sans-serif",
//             }}
//             className="md:text-4xl lg:text-5xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}>
//             <EditableText
//               value={faqConfig?.title}
//               onSave={() => saveConfigToServer()}
//               configPath="faqs.title">
//               {faqConfig?.title}
//             </EditableText>
//           </motion.h2>

//           <EditableText
//             value={faqConfig?.subtitle}
//             onSave={() => saveConfigToServer()}
//             configPath="faqs.subtitle"
//             multiline>
//             <motion.p
//               style={{
//                 fontSize: window.innerWidth < 640 ? '1rem' : '1.1rem',
//                 color: '#94a3b8',
//                 maxWidth: '42rem',
//                 margin: '0 auto 0.5rem',
//                 lineHeight: '1.6',
//                 fontWeight: '400',
//                 fontFamily: "'Urbanist', sans-serif",
//                 /* Force 2 lines */
//                 display: '-webkit-box',
//                 WebkitLineClamp: 2,
//                 WebkitBoxOrient: 'vertical',
//                 overflow: 'hidden',
//               }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}>
//               {faqConfig?.subtitle}
//             </motion.p>
//           </EditableText>

//           {/* Additional subtext to match pricing section pattern */}
//         </motion.div>

//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: '1fr',
//             gap: '2.5rem',
//             alignItems: 'start',
//           }}
//           className="lg:grid-cols-5">
//           {/* FAQ Content - Takes 3 columns */}
//           <motion.div
//             style={{ gridColumn: '1 / -1' }}
//             className="lg:col-span-3"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}>
//             {/* Enhanced Search Bar - Removed glow effects */}
//             <motion.div
//               style={{
//                 position: 'relative',
//                 marginBottom: '2rem',
//               }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}>
//               <div
//                 style={{
//                   position: 'relative',
//                   background: 'rgba(255, 255, 255, 0.05)',
//                   backdropFilter: 'blur(20px)',
//                   borderRadius: '20px',
//                   border: '1px solid rgba(255, 255, 255, 0.1)',
//                   padding: '3px',
//                   boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//                 }}>
//                 <Search
//                   style={{
//                     position: 'absolute',
//                     left: '1.2rem',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     color: '#64748b',
//                     width: '1.1rem',
//                     height: '1.1rem',
//                     zIndex: 2,
//                   }}
//                 />
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   placeholder="Search your questions..."
//                   style={{
//                     width: '100%',
//                     padding: '1rem 1.2rem 1rem 3rem',
//                     background: 'transparent',
//                     border: 'none',
//                     borderRadius: '17px',
//                     fontSize: '1rem',
//                     color: '#ffffff',
//                     outline: 'none',
//                     fontWeight: '500',
//                     letterSpacing: '0.01em',
//                     fontFamily: "'Urbanist', sans-serif",
//                   }}
//                 />
//                 <div
//                   style={{
//                     position: 'absolute',
//                     right: '1rem',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '0.4rem',
//                     color: '#64748b',
//                     fontSize: '0.8rem',
//                     fontFamily: "'Urbanist', sans-serif",
//                   }}>
//                   <Sparkles size={12} />
//                   <span>AI-powered</span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* FAQ Items - Removed hover effects */}
//             <EditableFaqArray
//               items={faqs}
//               onSave={() => saveConfigToServer()}
//               configPath="faqs.items">
//               <div
//                 style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: '0.8rem',
//                 }}>
//                 {filteredFaqs.map(
//                   (
//                     faq: { question: string; answer: string },
//                     index: number
//                   ) => (
//                     <motion.div
//                       key={index}
//                       style={{
//                         background:
//                           expandedFaq === index
//                             ? 'rgba(59, 130, 246, 0.1)'
//                             : 'rgba(255, 255, 255, 0.03)',
//                         backdropFilter: 'blur(20px)',
//                         borderRadius: '16px',
//                         border:
//                           expandedFaq === index
//                             ? '1px solid rgba(59, 130, 246, 0.3)'
//                             : '1px solid rgba(255, 255, 255, 0.08)',
//                         overflow: 'hidden',
//                         transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//                       }}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}>
//                       <button
//                         onClick={() => toggleFaq(index)}
//                         style={{
//                           width: '100%',
//                           padding: '1.5rem 1.5rem',
//                           display: 'flex',
//                           justifyContent: 'space-between',
//                           alignItems: 'center',
//                           textAlign: 'left',
//                           background: 'transparent',
//                           border: 'none',
//                           cursor: 'pointer',
//                           fontSize: '1.1rem',
//                           fontWeight: '600',
//                           color: '#ffffff',
//                           transition: 'all 0.3s ease',
//                           letterSpacing: '-0.01em',
//                           fontFamily: "'Urbanist', sans-serif",
//                         }}>
//                         <EditableText
//                           value={faq.question}
//                           onSave={() => saveConfigToServer()}
//                           configPath={`faqs.items.${index}.question`}>
//                           <span style={{ paddingRight: '1rem' }}>
//                             {faq.question}
//                           </span>
//                         </EditableText>
//                         <motion.div
//                           animate={{ rotate: expandedFaq === index ? 180 : 0 }}
//                           transition={{ duration: 0.3, ease: 'easeInOut' }}
//                           style={{
//                             minWidth: '22px',
//                             height: '22px',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             background:
//                               expandedFaq === index
//                                 ? 'rgba(59, 130, 246, 0.2)'
//                                 : 'rgba(255, 255, 255, 0.1)',
//                             borderRadius: '50%',
//                             transition: 'all 0.3s ease',
//                           }}>
//                           <ChevronDown
//                             size={14}
//                             style={{
//                               color:
//                                 expandedFaq === index ? '#3b82f6' : '#94a3b8',
//                             }}
//                           />
//                         </motion.div>
//                       </button>

//                       <AnimatePresence>
//                         {expandedFaq === index && (
//                           <motion.div
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: 'auto', opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{ duration: 0.4, ease: 'easeInOut' }}
//                             style={{ overflow: 'hidden' }}>
//                             <div
//                               style={{
//                                 padding: '0 1.5rem 1.5rem 1.5rem',
//                                 borderTop: '1px solid rgba(255, 255, 255, 0.1)',
//                                 marginTop: '0.8rem',
//                                 paddingTop: '1.2rem',
//                               }}>
//                               <EditableText
//                                 value={faq.answer}
//                                 onSave={() => saveConfigToServer()}
//                                 configPath={`faqs.items.${index}.answer`}
//                                 multiline>
//                                 <p
//                                   style={{
//                                     color: '#cbd5e1',
//                                     lineHeight: '1.7',
//                                     fontSize: '1rem',
//                                     margin: 0,
//                                     letterSpacing: '0.01em',
//                                     fontFamily: "'Urbanist', sans-serif",
//                                     fontWeight: '400',
//                                   }}>
//                                   {faq.answer}
//                                 </p>
//                               </EditableText>
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </motion.div>
//                   )
//                 )}
//               </div>
//             </EditableFaqArray>

//             {filteredFaqs.length === 0 && (
//               <motion.div
//                 style={{
//                   textAlign: 'center',
//                   padding: '3rem 1.5rem',
//                   background: 'rgba(255, 255, 255, 0.03)',
//                   borderRadius: '16px',
//                   border: '1px solid rgba(255, 255, 255, 0.1)',
//                   backdropFilter: 'blur(20px)',
//                 }}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}>
//                 <div
//                   style={{
//                     width: '60px',
//                     height: '60px',
//                     background: 'rgba(59, 130, 246, 0.1)',
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     margin: '0 auto 1rem',
//                   }}>
//                   <Search size={24} style={{ color: '#3b82f6' }} />
//                 </div>
//                 <h3
//                   style={{
//                     color: '#ffffff',
//                     fontSize: '1.3rem',
//                     fontWeight: '600',
//                     marginBottom: '0.5rem',
//                     fontFamily: "'Urbanist', sans-serif",
//                   }}>
//                   No Results Found
//                 </h3>
//                 <p
//                   style={{
//                     color: '#94a3b8',
//                     fontSize: '1rem',
//                     fontFamily: "'Urbanist', sans-serif",
//                     fontWeight: '400',
//                   }}>
//                   Try adjusting your search terms or browse our complete FAQ
//                   list.
//                 </p>
//               </motion.div>
//             )}
//           </motion.div>

//           {/* Visual Element - Takes 2 columns - Removed glow effects */}
//           <motion.div
//             style={{ gridColumn: '1 / -1' }}
//             className="lg:col-span-1"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}>
//             <div
//               style={{
//                 position: 'sticky',
//                 top: '2rem',
//                 background: 'rgba(255, 255, 255, 0.03)',
//                 backdropFilter: 'blur(20px)',
//                 borderRadius: '24px',
//                 border: '1px solid rgba(255, 255, 255, 0.1)',
//                 padding: '2rem',
//                 textAlign: 'center',
//                 boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
//               }}>
//               <div
//                 style={{
//                   width: '60px',
//                   height: '60px',
//                   background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   margin: '0 auto 1.5rem',
//                   boxShadow: '0 8px 20px rgba(59, 130, 246, 0.2)',
//                 }}>
//                 <HelpCircle size={28} style={{ color: 'white' }} />
//               </div>
//               <h3
//                 style={{
//                   color: '#ffffff',
//                   fontSize: '1.5rem',
//                   fontWeight: '600',
//                   marginBottom: '0.8rem',
//                   letterSpacing: '-0.01em',
//                   fontFamily: "'Urbanist', sans-serif",
//                 }}>
//                 Still Have Questions?
//               </h3>
//               <p
//                 style={{
//                   color: '#94a3b8',
//                   fontSize: '1rem',
//                   lineHeight: '1.5',
//                   marginBottom: '1.5rem',
//                   fontFamily: "'Urbanist', sans-serif",
//                   fontWeight: '400',
//                 }}>
//                 Our support team is available 24/7 to help you with any
//                 questions or concerns.
//               </p>
//               <motion.button
//                 style={{
//                   background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '50px',
//                   padding: '0.8rem 1.8rem',
//                   fontSize: '1rem',
//                   fontWeight: '500',
//                   cursor: 'pointer',
//                   transition: 'all 0.3s ease',
//                   fontFamily: "'Urbanist', sans-serif",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => {
//                   window.location.href = 'mailto:contact.dockly@gmail.com';
//                 }}>
//                 Contact Support
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import EditableText from '@/components/admin/editableText';
import { useAdmin } from '@/components/admin/context';
import EditableFaqArray from './admin/faqedit';
import { PRIMARY_COLOR } from '@/app/common';

export default function FaqPage() {
  const { config, saveConfigToServer } = useAdmin();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Get FAQ data from config, with fallback to default structure
  const faqConfig = (config as any)?.faqs || {};
  const faqs = faqConfig?.items || [];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Urbanist', sans-serif !important;
        }
        
        @keyframes gridPulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }
        
        @media (max-width: 1024px) {
          .faq-container {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .faq-content {
            order: 1 !important;
          }
          .faq-sidebar {
            order: 2 !important;
            position: static !important;
          }
          .section-title {
            font-size: 2.5rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .section-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .section-title {
            font-size: 2rem !important;
          }
          .faq-question {
            font-size: 1rem !important;
          }
          .faq-answer {
            font-size: 0.9rem !important;
          }
          
          .mobile-header-padding {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            padding-top: 80px !important;
          }
          
          .mobile-section-padding {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          
          .mobile-faq-padding {
            padding: 0.75rem 1rem !important;
          }
          
          .mobile-faq-answer-padding {
            padding: 0 1rem 0.75rem 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 1.75rem !important;
          }
          .faq-question {
            font-size: 0.9rem !important;
          }
          .faq-answer {
            font-size: 0.8rem !important;
          }
          .sidebar-title {
            font-size: 1.25rem !important;
          }
          .sidebar-text {
            font-size: 0.9rem !important;
          }
        }
      `}</style>

      <section
        id="faqs"
        style={{
          fontFamily: "'Urbanist', sans-serif",
          position: 'relative',
          overflow: 'hidden',
          marginTop: '-4.8rem',
        }}>
        {/* Header Section with Colored Background */}
        <div
          className="mobile-header-padding"
          style={{
            background:
              'linear-gradient(135deg, #bfdbfe 0%, #ddd6fe 50%, #bae6fd 100%)',
            paddingTop: '120px',
            paddingBottom: '0.5rem',
            position: 'relative',
          }}>
          {/* Background Effects */}
          <div style={{ position: 'absolute', inset: 0 }}>
            {/* Dynamic Background Grid */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                opacity: 0.3,
                animation: 'gridPulse 8s ease-in-out infinite',
              }}
            />

            {/* Gradient Orbs */}
            <div
              style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '200px',
                height: '200px',
                background:
                  'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(80px)',
                animation: 'float 20s ease-in-out infinite',
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '384px',
                height: '384px',
                background:
                  'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), transparent)',
                borderRadius: '50%',
                filter: 'blur(3rem)',
                animation: 'pulse 2s infinite',
              }}
            />
          </div>

          <div
            className="section-container"
            style={{
              maxWidth: '100rem',
              margin: '0 auto',
              padding: '0 1rem',
              textAlign: 'center',
              position: 'relative',
              marginBottom: '3rem',
            }}>
            {/* Support Center Badge */}
            {/* <motion.div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '50px',
                padding: '0.3rem 1rem',
                marginBottom: '1rem',
                backdropFilter: 'blur(10px)',
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <HelpCircle size={14} style={{ color: 'black' }} />
              <span
                style={{
                  color: 'black',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  fontFamily: "'Urbanist', sans-serif",
                }}>
                Support Center
              </span>
            </motion.div> */}

            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: 'black',
                lineHeight: '1.1',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
                fontFamily: "'Urbanist', sans-serif",
              }}>
              <EditableText
                value={faqConfig?.title}
                onSave={() => saveConfigToServer()}
                configPath="faqs.title">
                {faqConfig?.title}
              </EditableText>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: '1rem',
                color: '#6b7280',
                maxWidth: '42rem',
                margin: '0 auto',
                lineHeight: '1.7',
                fontWeight: '400',
                fontFamily: "'Urbanist', sans-serif",
              }}>
              <EditableText
                value={faqConfig?.subtitle}
                onSave={() => saveConfigToServer()}
                configPath="faqs.subtitle"
                multiline>
                {faqConfig?.subtitle}
              </EditableText>
            </motion.p>
          </div>
        </div>

        {/* Main FAQ Content Section */}
        <div
          className="mobile-section-padding"
          style={{
            background: '#ffffff',
            paddingTop: '4rem',
            paddingBottom: '4rem',
            paddingLeft: '7rem',
            paddingRight: '7rem',
            position: 'relative',
          }}>
          <div
            className="section-container"
            style={{
              maxWidth: '100rem',
              margin: '0 auto',
              padding: '0 1rem',
              position: 'relative',
            }}>
            <div
              className="faq-container"
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gap: '4rem',
                alignItems: 'start',
              }}>
              {/* FAQ Content */}
              <motion.div
                className="faq-content"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                <EditableFaqArray
                  items={faqs}
                  onSave={() => saveConfigToServer()}
                  configPath="faqs.items">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}>
                    {faqs.map(
                      (
                        faq: { question: string; answer: string },
                        index: number
                      ) => (
                        <motion.div
                          key={index}
                          style={{
                            background:
                              expandedFaq === index
                                ? 'rgba(99, 102, 241, 0.05)'
                                : 'rgba(0, 0, 0, 0.02)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '12px',
                            border:
                              expandedFaq === index
                                ? '1px solid rgba(99, 102, 241, 0.2)'
                                : '1px solid rgba(0, 0, 0, 0.08)',
                            overflow: 'hidden',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 * index }}>
                          <button
                            onClick={() => toggleFaq(index)}
                            className="mobile-faq-padding"
                            style={{
                              width: '100%',
                              padding: '1.25rem 1.5rem',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              textAlign: 'left',
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              fontSize: '1.1rem',
                              fontWeight: '600',
                              color: '#1f2937',
                              transition: 'all 0.3s ease',
                              letterSpacing: '-0.01em',
                              fontFamily: "'Urbanist', sans-serif",
                            }}>
                            <EditableText
                              value={faq.question}
                              onSave={() => saveConfigToServer()}
                              configPath={`faqs.items.${index}.question`}>
                              <span
                                className="faq-question"
                                style={{ paddingRight: '1rem' }}>
                                {faq.question}
                              </span>
                            </EditableText>

                            <motion.div
                              animate={{
                                rotate: expandedFaq === index ? 180 : 0,
                              }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              style={{
                                minWidth: '32px',
                                height: '32px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background:
                                  expandedFaq === index
                                    ? 'rgba(99, 102, 241, 0.1)'
                                    : 'rgba(0, 0, 0, 0.05)',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease',
                              }}>
                              <ChevronDown
                                size={16}
                                style={{
                                  color:
                                    expandedFaq === index
                                      ? '#6366f1'
                                      : '#6b7280',
                                }}
                              />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {expandedFaq === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.4,
                                  ease: 'easeInOut',
                                }}
                                style={{ overflow: 'hidden' }}>
                                <div
                                  className="mobile-faq-answer-padding"
                                  style={{
                                    padding: '0 1.5rem 1.25rem 1.5rem',
                                    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                                    marginTop: '0.5rem',
                                    paddingTop: '1rem',
                                  }}>
                                  <EditableText
                                    value={faq.answer}
                                    onSave={() => saveConfigToServer()}
                                    configPath={`faqs.items.${index}.answer`}
                                    multiline>
                                    <p
                                      className="faq-answer"
                                      style={{
                                        color: '#6b7280',
                                        lineHeight: '1.7',
                                        fontSize: '1rem',
                                        margin: 0,
                                        letterSpacing: '0.01em',
                                        fontFamily: "'Urbanist', sans-serif",
                                        fontWeight: '400',
                                      }}>
                                      {faq.answer}
                                    </p>
                                  </EditableText>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    )}
                  </div>
                </EditableFaqArray>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                className="faq-sidebar"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  position: 'sticky',
                  top: '2rem',
                }}>
                <div
                  style={{
                    background:
                      'linear-gradient(135deg, #bfdbfe 0%, #ddd6fe 50%, #bae6fd 100%)',
                    borderRadius: '16px',
                    padding: '2rem',
                    textAlign: 'center',
                    boxShadow:
                      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                  {/* Background Pattern for Sidebar */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px',
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        backdropFilter: 'blur(10px)',
                      }}>
                      <HelpCircle size={28} style={{ color: PRIMARY_COLOR }} />
                    </div>

                    <h3
                      className="sidebar-title"
                      style={{
                        color: 'black',
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        marginBottom: '0.75rem',
                        letterSpacing: '-0.01em',
                        fontFamily: "'Urbanist', sans-serif",
                      }}>
                      Still Have Questions?
                    </h3>

                    <p
                      className="sidebar-text"
                      style={{
                        color: '#6b7280',
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        marginBottom: '1.5rem',
                        fontFamily: "'Urbanist', sans-serif",
                        fontWeight: '400',
                      }}>
                      Our support team is available 24/7 to help you with any
                      questions or concerns.
                    </p>

                    <motion.button
                      style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'black',
                        border: '1px solid black',
                        borderRadius: '8px',
                        padding: '0.75rem 2rem',
                        fontSize: '1rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontFamily: "'Urbanist', sans-serif",
                        backdropFilter: 'blur(10px)',
                        width: '100%',
                      }}
                      whileTap={{ scale: 0.95 }}
                      // onMouseEnter={(e) => {
                      //   const target = e.target as HTMLElement;
                      //   target.style.background = 'black';
                      //   target.style.transform = 'translateY(-1px)';
                      // }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.background = 'rgba(255, 255, 255, 0.2)';
                        target.style.transform = 'translateY(0px)';
                      }}
                      onClick={() => {
                        window.location.href =
                          'mailto:contact.dockly@gmail.com';
                      }}>
                      Contact Support
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
