// 'use client';
// import React from 'react';
// import {
//   Heart,
//   Target,
//   Eye,
//   Home,
//   FileText,
//   CreditCard,
//   Activity,
//   Lightbulb,
//   Zap,
//   Globe,
//   Sparkles,
//   CheckCircle,
//   Inbox,
//   Star,
//   Shield,
//   Search,
//   Grid3x3 as Grid3X3,
// } from 'lucide-react';

// const AboutPage: React.FC = () => {
//   const PRIMARY_COLOR = '#6366F1';

//   const founders = [
//     {
//       name: 'Adam Braasch',
//       role: 'Co-Founder & CEO',
//       image: '/adam.jpg',
//       background: 'Former Amazon, PayPal, Visa',
//       description:
//         '20+ years in technology, passionate about family-first solutions',
//       familyPhoto: '/adam-family.png',
//     },
//     {
//       name: 'Asfarul Huda',
//       role: 'Co-Founder & CTO',
//       image: '/asfar.jpg',
//       background: 'Former PayPal, Marqeta, Visa',
//       description: 'Technology leader focused on solving real-world problems',
//       familyPhoto: '/asfar-family.png',
//     },
//   ];

//   const storySteps = [
//     {
//       icon: <Lightbulb className="w-4 h-4 text-amber-500" />,
//       title: 'The Frustration',
//       description:
//         "Managing life had become a full-time job. While businesses transformed with software and AI, personal life management hadn't evolved.",
//     },
//     {
//       icon: <Heart className="w-4 h-4 text-red-500" />,
//       title: 'The Reality',
//       description:
//         "If something happened to us tomorrow, our families wouldn't know how to access or manage the day-to-day aspects of our family's life.",
//     },
//     {
//       icon: <Zap className="w-4 h-4" style={{ color: PRIMARY_COLOR }} />,
//       title: 'The Solution',
//       description:
//         'Build the first Household Life Platform - secure, organized, and effortless to manage everything that matters.',
//     },
//   ];

//   const platformFeatures = [
//     {
//       icon: <CreditCard className="w-5 h-5" style={{ color: PRIMARY_COLOR }} />,
//       title: 'Financial Management',
//       description: 'Budgets, bills, and financial planning in one secure place',
//       stats: '100% Encrypted',
//       color: 'bg-indigo-50 border-indigo-200',
//       iconBg: 'bg-indigo-100',
//     },
//     {
//       icon: <Home className="w-5 h-5 text-emerald-600" />,
//       title: 'Home & Property',
//       description: 'Maintenance, projects, and property management',
//       stats: 'Smart Tracking',
//       color: 'bg-emerald-50 border-emerald-200',
//       iconBg: 'bg-emerald-100',
//     },
//     {
//       icon: <Activity className="w-5 h-5 text-rose-600" />,
//       title: 'Health & Family',
//       description: 'Medical records, appointments, and family coordination',
//       stats: 'HIPAA Compliant',
//       color: 'bg-rose-50 border-rose-200',
//       iconBg: 'bg-rose-100',
//     },
//     {
//       icon: <FileText className="w-5 h-5 text-orange-600" />,
//       title: 'Digital Assets',
//       description: 'Passwords, important documents, and digital footprint',
//       stats: 'Zero-Knowledge',
//       color: 'bg-orange-50 border-orange-200',
//       iconBg: 'bg-orange-100',
//     },
//   ];

//   const howItWorksFeatures = [
//     {
//       icon: <Globe className="w-5 h-5 text-white" />,
//       title: 'Smart Hubs',
//       description:
//         'Connect everything with powerful utilities, linking all your essential information across files, bookmarks, accounts, passwords, notes, and events.',
//       gradient: 'from-violet-600 to-purple-600',
//     },
//     {
//       icon: <Target className="w-5 h-5 text-white" />,
//       title: 'Organized Boards',
//       description:
//         'Organize everything into contextual key areas: Family, Home, Finance, and Health with smart AI to help automate organization and suggestions.',
//       gradient: 'from-cyan-500 to-blue-500',
//     },
//     // {
//     //   icon: <Inbox className="w-5 h-5 text-white" />,
//     //   title: 'Unified Dashboard',
//     //   description:
//     //     'Brings it all together with reminders and suggestions along with an Inbox allowing you to share, send, or drop anything into Dockly.',
//     //   gradient: 'from-emerald-500 to-teal-500',
//     // },
//     {
//       icon: <Shield className="w-5 h-5 text-white" />,
//       title: 'Military-Grade Security',
//       description:
//         'Zero-knowledge encryption ensures your data is completely private. Even we cannot see your information - only you have access.',
//       gradient: 'from-purple-600 to-indigo-600',
//     },
//   ];

//   const stats = [
//     { number: '20+', label: 'Years Combined Experience' },
//     { number: '100%', label: 'Privacy Focused' },
//     { number: '24/7', label: 'Secure Access' },
//     { number: '∞', label: 'Peace of Mind' },
//   ];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');

//         * {
//           font-family: 'Urbanist', sans-serif !important;
//         }

//         @media (max-width: 1024px) {
//           .about-section {
//             padding-left: 1rem !important;
//             padding-right: 1rem !important;
//           }
//           .section-title {
//             font-size: 2rem !important;
//           }
//           .board-title {
//             font-size: 1.5rem !important;
//           }
//         }

//         @media (max-width: 768px) {
//           .section-container {
//             padding-left: 1rem !important;
//             padding-right: 1rem !important;
//           }
//           .section-title {
//             font-size: 1.75rem !important;
//           }
//           .board-title {
//             font-size: 1.25rem !important;
//           }
//           .board-description {
//             font-size: 1rem !important;
//           }
//         }
//       `}</style>

//       <div
//         style={{ fontFamily: "'Urbanist', sans-serif", marginTop: '-4.7rem' }}>
//         {/* Hero Section */}
//         <section
//           className="about-section"
//           style={{
//             background: '#6366F1',
//             overflow: 'hidden',
//             paddingTop: '2.5rem',
//             paddingBottom: '2.5rem',
//             paddingLeft: '7rem',
//             paddingRight: '7rem',
//             position: 'relative',
//           }}>
//           {/* Background Effects */}
//           <div style={{ position: 'absolute', inset: 0 }}>
//             <div
//               style={{
//                 position: 'absolute',
//                 inset: 0,
//                 backgroundImage: `
//                   linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
//                   linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
//                 `,
//                 backgroundSize: '24px 24px',
//               }}
//             />
//             <div
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 right: 0,
//                 width: '384px',
//                 height: '384px',
//                 background:
//                   'linear-gradient(to bottom right, rgba(255, 255, 255, 0.3), transparent)',
//                 borderRadius: '50%',
//                 filter: 'blur(3rem)',
//                 animation: 'pulse 2s infinite',
//               }}
//             />
//           </div>

//           <div
//             className="section-container"
//             style={{
//               maxWidth: '100rem',
//               margin: '0 auto',
//               padding: '0 1rem',
//               position: 'relative',
//               paddingTop: '3rem',
//               paddingBottom: '2rem',
//             }}>
//             {/* Heading */}
// <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
//   <div
//     style={{
//       display: 'inline-flex',
//       alignItems: 'center',
//       padding: '0.75rem 1rem',
//       borderRadius: '9999px',
//       background: 'rgba(0, 0, 0, 0.1)',
//       backdropFilter: 'blur(10px)',
//       border: '1px solid rgba(0, 0, 0, 0.2)',
//       marginBottom: '1rem',
//     }}>
//     <Sparkles
//       style={{
//         width: '12px',
//         height: '12px',
//         color: 'white',
//         marginRight: '0.5rem',
//       }}
//     />
//     <span
//       style={{
//         fontSize: '0.75rem',
//         fontWeight: '500',
//         color: 'white',
//       }}>
//       Built for Families. By Families.
//     </span>
//   </div>

//               <h1
//                 className="section-title"
//                 style={{
//                   fontSize: '2.5rem',
//                   fontWeight: '700',
//                   color: '#ffffff',
//                   marginBottom: '1rem',
//                   lineHeight: '1.1',
//                 }}>
//                 Meet the{' '}
//                 <span
//                   style={{
//                     background:
//                       'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(224, 231, 255, 1), rgba(255, 255, 255, 1))',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                   }}>
//                   Founders
//                 </span>
//               </h1>

//               <p
//                 style={{
//                   fontSize: '1rem',
//                   color: 'rgba(255, 255, 255, 0.9)',
//                   maxWidth: '42rem',
//                   margin: '0 auto',
//                   lineHeight: '1.7',
//                   fontWeight: '400',
//                 }}>
//                 Two technology veterans on a mission to revolutionize how
//                 families manage their lives
//               </p>
//             </div>

//             {/* Founders Cards */}
//             <div
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//                 gap: '1rem',
//                 maxWidth: '64rem',
//                 margin: '0 auto',
//                 marginBottom: '1.5rem',
//               }}>
//               {founders.map((founder, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     position: 'relative',
//                     background: 'rgba(0, 0, 0, 0.25)',
//                     backdropFilter: 'blur(12px)',
//                     borderRadius: '12px',
//                     border: '1px solid rgba(0, 0, 0, 0.3)',
//                     padding: '1rem',
//                     transition: 'all 0.3s ease',
//                     cursor: 'pointer',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = 'rgba(0, 0, 0, 0.35)';
//                     e.currentTarget.style.transform = 'scale(1.02)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = 'rgba(0, 0, 0, 0.25)';
//                     e.currentTarget.style.transform = 'scale(1)';
//                   }}>
//                   <div
//                     style={{
//                       display: 'flex',
//                       alignItems: 'flex-start',
//                       gap: '0.75rem',
//                       marginBottom: '0.75rem',
//                     }}>
//                     <div style={{ position: 'relative' }}>
//                       <img
//                         src={founder.image}
//                         alt={founder.name}
//                         style={{
//                           width: '48px',
//                           height: '48px',
//                           borderRadius: '12px',
//                           objectFit: 'cover',
//                           border: '2px solid rgba(255, 255, 255, 0.2)',
//                         }}
//                       />
//                       <div
//                         style={{
//                           position: 'absolute',
//                           bottom: '-2px',
//                           right: '-2px',
//                           width: '12px',
//                           height: '12px',
//                           background: '#10b981',
//                           borderRadius: '50%',
//                           border: '2px solid white',
//                         }}
//                       />
//                     </div>

//                     <div style={{ flex: 1 }}>
//                       <h3
//                         style={{
//                           fontSize: '1.125rem',
//                           fontWeight: '700',
//                           color: 'white',
//                           marginBottom: '0.125rem',
//                           lineHeight: '1.1',
//                         }}>
//                         {founder.name}
//                       </h3>
//                       <p
//                         style={{
//                           color: '#c7d2fe',
//                           fontWeight: '500',
//                           fontSize: '0.875rem',
//                           marginBottom: '0.125rem',
//                         }}>
//                         {founder.role}
//                       </p>
//                       <p
//                         style={{
//                           fontSize: '0.75rem',
//                           color: 'rgba(255, 255, 255, 0.8)',
//                         }}>
//                         {founder.background}
//                       </p>
//                     </div>
//                   </div>

//                   <div
//                     style={{
//                       display: 'flex',
//                       flexDirection: 'column',
//                       gap: '0.75rem',
//                     }}>
//                     <p
//                       style={{
//                         color: 'rgba(255, 255, 255, 0.9)',
//                         fontSize: '0.875rem',
//                         minHeight: '2.5rem',
//                         lineHeight: '1.4',
//                       }}>
//                       {founder.description}
//                     </p>

//                     <div
//                       style={{
//                         position: 'relative',
//                         overflow: 'hidden',
//                         borderRadius: '8px',
//                       }}>
//                       <img
//                         src={founder.familyPhoto}
//                         alt={`${founder.name}'s family`}
//                         style={{
//                           width: '100%',
//                           height: '254px',
//                           objectFit: 'cover',
//                           transition: 'transform 0.3s ease',
//                         }}
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.transform = 'scale(1.1)';
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.transform = 'scale(1)';
//                         }}
//                       />

//                       <div
//                         style={{
//                           position: 'absolute',
//                           inset: 0,
//                           background:
//                             'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent, transparent)',
//                         }}
//                       />

//                       <div
//                         style={{
//                           position: 'absolute',
//                           bottom: '8px',
//                           left: '8px',
//                           color: 'white',
//                         }}>
//                         <p style={{ fontSize: '0.75rem', fontWeight: '500' }}>
//                           Family First
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Stats */}
//             <div
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(2, 1fr)',
//                 gap: '1rem',
//                 maxWidth: '48rem',
//                 margin: '0 auto',
//               }}>
//               {stats.map((stat, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     textAlign: 'center',
//                     transition: 'transform 0.3s ease',
//                     cursor: 'pointer',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'scale(1.05)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'scale(1)';
//                   }}>
//                   <div
//                     style={{
//                       fontSize: '1.5rem',
//                       fontWeight: '700',
//                       color: 'white',
//                       marginBottom: '0.25rem',
//                       lineHeight: '1.1',
//                     }}>
//                     {stat.number}
//                   </div>
//                   <div
//                     style={{
//                       fontSize: '0.75rem',
//                       color: 'rgba(255, 255, 255, 0.7)',
//                     }}>
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Story Section */}
//         <section
//           className="about-section"
//           style={{
//             paddingTop: '2.5rem',
//             paddingBottom: '2.5rem',
//             paddingLeft: '7rem',
//             paddingRight: '7rem',
//             background:
//               'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
//           }}>
//           <div
//             className="section-container"
//             style={{
//               maxWidth: '100rem',
//               margin: '0 auto',
//               padding: '0 1rem',
//               paddingTop: '3rem',
//               paddingBottom: '2rem',
//             }}>
//             <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
//               <h2
//                 className="section-title"
//                 style={{
//                   fontSize: '2.5rem',
//                   fontWeight: '700',
//                   color: '#111827',
//                   marginBottom: '1rem',
//                   lineHeight: '1.1',
//                 }}>
//                 Our{' '}
//                 <span
//                   style={{
//                     background: 'linear-gradient(to right, #9333ea, #4f46e5)',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                   }}>
//                   Journey
//                 </span>
//               </h2>
//               <p
//                 style={{
//                   fontSize: '1rem',
//                   color: '#6b7280',
//                   maxWidth: '42rem',
//                   margin: '0 auto',
//                   lineHeight: '1.7',
//                   fontWeight: '400',
//                 }}>
//                 From frustration to solution - how two tech veterans decided to
//                 solve the household management crisis
//               </p>
//             </div>

//             <div
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//                 gap: '1rem',
//                 marginBottom: '1.5rem',
//               }}>
//               {storySteps.map((step, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     position: 'relative',
//                     transition: 'transform 0.3s ease',
//                     cursor: 'pointer',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'scale(1.02)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'scale(1)';
//                   }}>
//                   <div
//                     style={{
//                       background: 'white',
//                       borderRadius: '12px',
//                       padding: '1rem',
//                       boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
//                       border: '1px solid #f3f4f6',
//                       height: '100%',
//                       transition: 'all 0.3s ease',
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.boxShadow =
//                         '0 10px 25px rgba(0, 0, 0, 0.15)';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.boxShadow =
//                         '0 1px 3px rgba(0, 0, 0, 0.1)';
//                     }}>
//                     <div
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                         marginBottom: '0.75rem',
//                       }}>
//                       <div
//                         style={{
//                           width: '32px',
//                           height: '32px',
//                           borderRadius: '8px',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                         }}>
//                         {step.icon}
//                       </div>
//                       <span
//                         style={{
//                           fontSize: '0.75rem',
//                           fontWeight: '700',
//                           color: '#9ca3af',
//                         }}>
//                         0{index + 1}
//                       </span>
//                     </div>
//                     <h3
//                       style={{
//                         fontSize: '1.125rem',
//                         fontWeight: '700',
//                         color: '#111827',
//                         marginBottom: '0.5rem',
//                         lineHeight: '1.1',
//                       }}>
//                       {step.title}
//                     </h3>
//                     <p
//                       style={{
//                         color: '#6b7280',
//                         fontSize: '0.875rem',
//                         lineHeight: '1.6',
//                       }}>
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Story Content */}
//             <div
//               style={{
//                 background:
//                   'linear-gradient(to right, #eef2ff, #ffffff, #faf5ff)',
//                 borderRadius: '12px',
//                 padding: '1.5rem',
//               }}>
//               <div
//                 style={{
//                   maxWidth: '64rem',
//                   margin: '0 auto',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: '1rem',
//                   color: '#374151',
//                 }}>
//                 <p style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
//                   Dockly Founders, Adam Braasch and Asfarul Huda, spent over 20
//                   years in Technology including at Amazon, PayPal, Visa, and
//                   Marqeta. Ever since working together at PayPal, they aspired
//                   to build a product together rooted in their shared passion for
//                   using technology to solve real problems.
//                 </p>

//                 <div
//                   style={{
//                     background: 'white',
//                     borderRadius: '12px',
//                     padding: '1rem',
//                     border: '1px solid #e5e7eb',
//                     transition: 'transform 0.3s ease',
//                     cursor: 'pointer',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'scale(1.02)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'scale(1)';
//                   }}>
//                   <p
//                     style={{
//                       fontWeight: '600',
//                       color: '#111827',
//                       marginBottom: '0.5rem',
//                       fontSize: '0.875rem',
//                     }}>
//                     The Breaking Point
//                   </p>
//                   <p style={{ fontSize: '0.875rem' }}>
//                     Like many families, we were juggling endless apps,
//                     spreadsheets, and logins just to keep our household running.
//                     Beyond the daily struggle, we had a scary thought: If
//                     something were to happen to us tomorrow, our families
//                     wouldn't know how to access or manage the day-to-day aspects
//                     of our family's life.
//                   </p>
//                 </div>

//                 <p style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
//                   Traditional solutions like a will or trust only cover part of
//                   the picture - they don't provide a living, practical way to
//                   manage and pass on life's critical information. That's when we
//                   knew we had to build Dockly.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Platform Features */}
//         <section
//           className="about-section"
//           style={{
//             paddingTop: '2.5rem',
//             paddingBottom: '2.5rem',
//             paddingLeft: '7rem',
//             paddingRight: '7rem',
//             background: 'white',
//           }}>
//           <div
//             className="section-container"
//             style={{
//               maxWidth: '100rem',
//               margin: '0 auto',
//               padding: '0 1rem',
//               paddingTop: '3rem',
//               paddingBottom: '2rem',
//             }}>
//             <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
//               <h2
//                 className="section-title"
//                 style={{
//                   fontSize: '2.5rem',
//                   fontWeight: '700',
//                   color: '#111827',
//                   marginBottom: '1rem',
//                   lineHeight: '1.1',
//                 }}>
//                 The First{' '}
//                 <span
//                   style={{
//                     background: 'linear-gradient(to right, #4f46e5, #9333ea)',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                   }}>
//                   Household Life Platform
//                 </span>
//               </h2>
//               <p
//                 style={{
//                   fontSize: '1rem',
//                   color: '#6b7280',
//                   maxWidth: '42rem',
//                   margin: '0 auto',
//                   lineHeight: '1.7',
//                   fontWeight: '400',
//                 }}>
//                 Everything your family needs to stay organized, secure, and
//                 connected in one beautiful platform
//               </p>
//             </div>

//             <div
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//                 gap: '1rem',
//               }}>
//               {platformFeatures.map((feature, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     position: 'relative',
//                     background: feature.color.includes('indigo')
//                       ? '#eef2ff'
//                       : feature.color.includes('emerald')
//                       ? '#ecfdf5'
//                       : feature.color.includes('rose')
//                       ? '#fdf2f8'
//                       : '#fff7ed',
//                     borderRadius: '12px',
//                     padding: '1rem',
//                     border: feature.color.includes('indigo')
//                       ? '1px solid #c7d2fe'
//                       : feature.color.includes('emerald')
//                       ? '1px solid #a7f3d0'
//                       : feature.color.includes('rose')
//                       ? '1px solid #fbb6ce'
//                       : '1px solid #fed7aa',
//                     transition: 'all 0.3s ease',
//                     cursor: 'pointer',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'scale(1.02)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'scale(1)';
//                   }}>
//                   <div
//                     style={{
//                       width: '40px',
//                       height: '40px',
//                       background: feature.iconBg.includes('indigo')
//                         ? '#ddd6fe'
//                         : feature.iconBg.includes('emerald')
//                         ? '#bbf7d0'
//                         : feature.iconBg.includes('rose')
//                         ? '#f9a8d4'
//                         : '#fed7aa',
//                       borderRadius: '8px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       marginBottom: '0.75rem',
//                     }}>
//                     {feature.icon}
//                   </div>

//                   <div
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'space-between',
//                       marginBottom: '0.5rem',
//                     }}>
//                     <h3
//                       style={{
//                         fontWeight: '700',
//                         color: '#111827',
//                         fontSize: '0.875rem',
//                       }}>
//                       {feature.title}
//                     </h3>
//                     <span
//                       style={{
//                         fontSize: '0.75rem',
//                         fontWeight: '700',
//                         color: '#059669',
//                         background: '#d1fae5',
//                         padding: '0.125rem 0.5rem',
//                         borderRadius: '9999px',
//                       }}>
//                       {feature.stats}
//                     </span>
//                   </div>

//                   <p style={{ color: '#6b7280', fontSize: '0.75rem' }}>
//                     {feature.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* How Dockly Works */}
//         <section
//           className="about-section"
//           style={{
//             paddingTop: '2.5rem',
//             paddingBottom: '2.5rem',
//             paddingLeft: '7rem',
//             paddingRight: '7rem',
//             background:
//               'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
//             position: 'relative',
//           }}>
//           {/* Background Effects */}
//           <div style={{ position: 'absolute', inset: 0 }}>
//             <div
//               style={{
//                 position: 'absolute',
//                 inset: 0,
//                 backgroundImage: `
//                   linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
//                   linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
//                 `,
//                 backgroundSize: '24px 24px',
//               }}
//             />
//           </div>

//           <div
//             className="section-container"
//             style={{
//               maxWidth: '100rem',
//               margin: '0 auto',
//               padding: '0 1rem',
//               paddingTop: '3rem',
//               paddingBottom: '2rem',
//               position: 'relative',
//             }}>
//             <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
//               <h2
//                 className="section-title"
//                 style={{
//                   fontSize: '2.5rem',
//                   fontWeight: '700',
//                   color: 'white',
//                   marginBottom: '1rem',
//                   lineHeight: '1.1',
//                 }}>
//                 How{' '}
//                 <span
//                   style={{
//                     background: '#6366F1',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                   }}>
//                   Dockly
//                 </span>{' '}
//                 Works
//               </h2>
//               <p
//                 style={{
//                   fontSize: '1rem',
//                   color: 'rgba(255, 255, 255, 0.9)',
//                   maxWidth: '42rem',
//                   margin: '0 auto',
//                   lineHeight: '1.7',
//                   fontWeight: '400',
//                 }}>
//                 Four powerful components working together to transform how your
//                 household operates
//               </p>
//             </div>

//             <div
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//                 gap: '1.5rem',
//               }}>
//               {howItWorksFeatures.map((feature, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     background: 'rgba(255, 255, 255, 0.05)',
//                     backdropFilter: 'blur(12px)',
//                     borderRadius: '12px',
//                     padding: '1rem',
//                     border: '1px solid rgba(255, 255, 255, 0.1)',
//                     transition: 'all 0.3s ease',
//                     cursor: 'pointer',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background =
//                       'rgba(255, 255, 255, 0.1)';
//                     e.currentTarget.style.transform = 'scale(1.02)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background =
//                       'rgba(255, 255, 255, 0.05)';
//                     e.currentTarget.style.transform = 'scale(1)';
//                   }}>
//                   <div
//                     style={{
//                       display: 'flex',
//                       alignItems: 'flex-start',
//                       gap: '0.75rem',
//                     }}>
//                     <div
//                       style={{
//                         width: '40px',
//                         height: '40px',
//                         background: `linear-gradient(135deg, ${
//                           feature.gradient.split(' ')[1]
//                         }, ${feature.gradient.split(' ')[3]})`,
//                         borderRadius: '8px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         flexShrink: 0,
//                       }}>
//                       {feature.icon}
//                     </div>
//                     <div>
//                       <h3
//                         style={{
//                           fontSize: '1.125rem',
//                           fontWeight: '700',
//                           color: 'white',
//                           marginBottom: '0.5rem',
//                           lineHeight: '1.1',
//                         }}>
//                         {feature.title}
//                       </h3>
//                       <p
//                         style={{
//                           color: 'rgba(255, 255, 255, 0.9)',
//                           fontSize: '0.875rem',
//                           lineHeight: '1.6',
//                         }}>
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Mission & Vision */}
//         <section
//           className="about-section"
//           style={{
//             paddingTop: '2.5rem',
//             paddingBottom: '2.5rem',
//             paddingLeft: '7rem',
//             paddingRight: '7rem',
//             background: 'white',
//           }}>
//           <div
//             className="section-container"
//             style={{
//               maxWidth: '100rem',
//               margin: '0 auto',
//               padding: '0 1rem',
//               paddingTop: '3rem',
//               paddingBottom: '2rem',
//             }}>
//             <div
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
//                 gap: '1.5rem',
//                 alignItems: 'center',
//               }}>
//               <div
//                 style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: '1rem',
//                 }}>
//                 <div
//                   style={{
//                     background: 'linear-gradient(135deg, #4f46e5, #9333ea)',
//                     borderRadius: '12px',
//                     padding: '1rem',
//                     color: 'white',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     transition: 'transform 0.3s ease',
//                     cursor: 'pointer',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'scale(1.02)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'scale(1)';
//                   }}>
//                   <div
//                     style={{
//                       position: 'absolute',
//                       top: 0,
//                       right: 0,
//                       width: '64px',
//                       height: '64px',
//                       background: 'rgba(255, 255, 255, 0.1)',
//                       borderRadius: '50%',
//                       marginRight: '-32px',
//                       marginTop: '-32px',
//                     }}
//                   />
//                   <div style={{ position: 'relative' }}>
//                     <div
//                       style={{
//                         width: '32px',
//                         height: '32px',
//                         background: 'rgba(255, 255, 255, 0.2)',
//                         borderRadius: '8px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         marginBottom: '0.75rem',
//                       }}>
//                       <Target
//                         style={{
//                           width: '16px',
//                           height: '16px',
//                           color: 'white',
//                         }}
//                       />
//                     </div>
//                     <h3
//                       style={{
//                         fontSize: '1.125rem',
//                         fontWeight: '700',
//                         marginBottom: '0.5rem',
//                         lineHeight: '1.1',
//                       }}>
//                       Our Mission
//                     </h3>
//                     <p
//                       style={{
//                         color: 'rgba(255, 255, 255, 0.95)',
//                         lineHeight: '1.6',
//                         fontSize: '0.875rem',
//                       }}>
//                       To help families and households take back control of their
//                       time, information, and energy - by making life management
//                       effortless.
//                     </p>
//                   </div>
//                 </div>

//                 <div
//                   style={{
//                     background: 'linear-gradient(135deg, #06b6d4, #2563eb)',
//                     borderRadius: '12px',
//                     padding: '1rem',
//                     color: 'white',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     transition: 'transform 0.3s ease',
//                     cursor: 'pointer',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'scale(1.02)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'scale(1)';
//                   }}>
//                   <div
//                     style={{
//                       position: 'absolute',
//                       top: 0,
//                       right: 0,
//                       width: '64px',
//                       height: '64px',
//                       background: 'rgba(255, 255, 255, 0.1)',
//                       borderRadius: '50%',
//                       marginRight: '-32px',
//                       marginTop: '-32px',
//                     }}
//                   />
//                   <div style={{ position: 'relative' }}>
//                     <div
//                       style={{
//                         width: '32px',
//                         height: '32px',
//                         background: 'rgba(255, 255, 255, 0.2)',
//                         borderRadius: '8px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         marginBottom: '0.75rem',
//                       }}>
//                       <Eye
//                         style={{
//                           width: '16px',
//                           height: '16px',
//                           color: 'white',
//                         }}
//                       />
//                     </div>
//                     <h3
//                       style={{
//                         fontSize: '1.125rem',
//                         fontWeight: '700',
//                         marginBottom: '0.5rem',
//                         lineHeight: '1.1',
//                       }}>
//                       Our Vision
//                     </h3>
//                     <p
//                       style={{
//                         color: 'rgba(255, 255, 255, 0.95)',
//                         lineHeight: '1.6',
//                         fontSize: '0.875rem',
//                       }}>
//                       A world where every household runs smoothly, confidently,
//                       and connected - with one platform that makes life feel
//                       lighter.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div style={{ position: 'relative' }}>
//                 <div
//                   style={{
//                     background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
//                     borderRadius: '12px',
//                     padding: '1.5rem',
//                   }}>
//                   <div
//                     style={{
//                       display: 'flex',
//                       flexDirection: 'column',
//                       gap: '1rem',
//                     }}>
//                     <h3
//                       style={{
//                         fontSize: '1.25rem',
//                         fontWeight: '700',
//                         color: '#111827',
//                       }}>
//                       Why We're Different
//                     </h3>

//                     <div
//                       style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         gap: '0.75rem',
//                       }}>
//                       {[
//                         'Built by families who understand the daily struggles',
//                         'Privacy-first approach with zero-knowledge architecture',
//                         '20+ years of experience at top tech companies',
//                         'Focus on real problems, not just features',
//                       ].map((item, index) => (
//                         <div
//                           key={index}
//                           style={{
//                             display: 'flex',
//                             alignItems: 'flex-start',
//                             gap: '0.5rem',
//                           }}>
//                           <CheckCircle
//                             style={{
//                               width: '16px',
//                               height: '16px',
//                               color: '#10b981',
//                               marginTop: '2px',
//                               flexShrink: 0,
//                             }}
//                           />
//                           <p style={{ color: '#374151', fontSize: '0.875rem' }}>
//                             {item}
//                           </p>
//                         </div>
//                       ))}
//                     </div>

//                     <div style={{ paddingTop: '0.75rem' }}>
//                       <p
//                         style={{
//                           color: '#6b7280',
//                           fontStyle: 'italic',
//                           fontSize: '0.875rem',
//                         }}>
//                         "We're not just building software. We're building the
//                         future of how families live, work, and thrive together."
//                       </p>
//                       <p
//                         style={{
//                           fontSize: '0.75rem',
//                           fontWeight: '500',
//                           color: '#111827',
//                           marginTop: '0.5rem',
//                         }}>
//                         — Adam & Asfarul, Co-Founders
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default AboutPage;
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Home,
  TrendingUp,
  Activity,
  Shield,
  Users,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Zap,
  Lock,
  Sparkles,
} from 'lucide-react';
import { PRIMARY_COLOR } from '../common';

const AboutPage = () => {
  // Helper functions for section styling (matching your existing component)
  const isColoredSection = (index: number) => {
    return index % 2 === 1;
  };

  const getSectionBackground = (index: number) => {
    return isColoredSection(index)
      ? 'linear-gradient(135deg, #bfdbfe 0%, #ddd6fe 50%, #bae6fd 100%)'
      : '#ffffff';
  };

  const getTextColor = (index: number) => {
    return isColoredSection(index) ? 'black' : '#1f2937';
  };

  const getSubTextColor = (index: number) => {
    return isColoredSection(index) ? '#6b7280' : '#6b7280';
  };

  const platformFeatures = [
    {
      icon: TrendingUp,
      title: 'Your finances and goals',
      description:
        'Track budgets, investments, and financial objectives in one secure place',
    },
    {
      icon: Home,
      title: 'Your home and property',
      description:
        'Manage maintenance, documents, and home-related tasks effortlessly',
    },
    {
      icon: Heart,
      title: 'Your family records and health',
      description:
        'Organize medical records, appointments, and family information securely',
    },
    {
      icon: Shield,
      title: 'Your accounts and digital footprint',
      description:
        'Safely store passwords, documents, and digital assets with zero-knowledge architecture',
    },
  ];

  const coreValues = [
    {
      title: 'Family First',
      description:
        'Everything we build is designed with families in mind, helping you spend more time together and less time managing life.',
      icon: Heart,
    },
    {
      title: 'Privacy & Security',
      description:
        "Your family's information is sacred. We use zero-knowledge architecture to ensure your data remains private.",
      icon: Lock,
    },
    {
      title: 'Simplicity',
      description:
        'Complex problems deserve simple solutions. We believe in making life management effortless and intuitive.',
      icon: Target,
    },
    {
      title: 'Innovation',
      description:
        'We continuously evolve our platform to meet the changing needs of modern families through thoughtful innovation.',
      icon: Lightbulb,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Urbanist', sans-serif !important;
        }
        
        @media (max-width: 1024px) {
          .about-section {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          .about-content, .about-image {
            width: 100% !important;
          }
          .about-image {
            height: 250px !important;
          }
          .section-title {
            font-size: 2rem !important;
          }
          .about-title {
            font-size: 1.5rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .section-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .section-title {
            font-size: 1.75rem !important;
          }
          .about-title {
            font-size: 1.25rem !important;
          }
          .about-description {
            font-size: 1rem !important;
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
          
          .mobile-feature-grid {
            grid-template-columns: 1fr !important;
          }
          
          .mobile-values-grid {
            grid-template-columns: 1fr !important;
          }
          
          .mobile-founder-container {
            flex-direction: column !important;
            text-align: center !important;
          }
          
          .mobile-founder-photo {
            width: 100% !important;
            height: 300px !important;
            margin-bottom: 2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 1.5rem !important;
          }
          .about-title {
            font-size: 1.125rem !important;
          }
          .about-description {
            font-size: 0.875rem !important;
          }
        }
      `}</style>

      <div
        style={{ fontFamily: "'Urbanist', sans-serif", marginTop: '-4.8rem' }}>
        {/* Hero Section */}
        <section
          className="mobile-header-padding"
          style={{
            background:
              'linear-gradient(135deg, #bfdbfe 0%, #ddd6fe 50%, #bae6fd 100%)',
            paddingTop: '120px',
            paddingBottom: '4rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
          {/* Background Grid Pattern */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px',
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
            }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 0, 0, 0.2)',
                marginBottom: '1rem',
              }}>
              <Sparkles
                style={{
                  width: '12px',
                  height: '12px',
                  color: 'black',
                  marginRight: '0.5rem',
                }}
              />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  color: 'black',
                }}>
                Built for Families. By Families.
              </span>
            </div>

            <motion.h1
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: 'black',
                marginBottom: '1.5rem',
                lineHeight: '1.1',
              }}>
              Building the First Household Life Platform
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: '1rem',
                color: '#6b7280',
                maxWidth: '42rem',
                margin: '0 auto 3rem',
                lineHeight: '1.7',
                fontWeight: '400',
              }}>
              A single, secure space to organize everything that matters in your
              daily life. Dockly helps you see your entire life in one clear
              view, so you can focus on what truly matters.
            </motion.p>

            {/* Platform Features Grid */}
            <motion.div
              className="mobile-feature-grid"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginTop: '3rem',
              }}>
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    textAlign: 'left',
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '1rem',
                    }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        background: PRIMARY_COLOR,
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <feature.icon
                        style={{
                          color: '#ffffff',
                          width: '20px',
                          height: '20px',
                        }}
                      />
                    </div>
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'black',
                        margin: 0,
                      }}>
                      {feature.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      color: '#6b7280',
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      margin: 0,
                    }}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section
          className="mobile-section-padding"
          style={{
            background: getSectionBackground(0),
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: getTextColor(0),
                  marginBottom: '1rem',
                  lineHeight: '1.1',
                }}>
                Our Story
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: getSubTextColor(0),
                  maxWidth: '42rem',
                  margin: '0 auto',
                  lineHeight: '1.7',
                }}>
                Built for Families. By Families.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                maxWidth: '56rem',
                margin: '0 auto',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: getSubTextColor(0),
                textAlign: 'left',
              }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Dockly started with a simple frustration. The feeling that
                managing life had become a full-time job. In our work lives,
                software and now AI have transformed how businesses operate. But
                in our personal lives, we haven't seen the same evolution.
                Family is everything, and managing it still feels scattered and
                overwhelming.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                Like many families, we were juggling endless apps, spreadsheets,
                and logins just to keep our household running. Finances in one
                place. Medical info in another. Passwords, projects, and
                reminders scattered everywhere.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                Beyond the daily struggle, we had a scary thought. If something
                were to happen to us tomorrow, our families wouldn't know how to
                access or manage the day-to-day aspects of our family's life.
                Traditional solutions like a will or trust only cover part of
                the picture - they don't provide a living, practical way to
                manage and pass on life's critical information.
              </p>

              <div
                style={{
                  background: PRIMARY_COLOR,
                  color: '#ffffff',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                  marginTop: '2rem',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                }}>
                Life is busy. We built Dockly to make it manageable.
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section
          className="mobile-section-padding"
          style={{
            background: getSectionBackground(1),
            paddingTop: '4rem',
            paddingBottom: '4rem',
            paddingLeft: '7rem',
            paddingRight: '7rem',
            position: 'relative',
          }}>
          {/* Grid pattern for colored section */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          <div
            className="section-container"
            style={{
              maxWidth: '100rem',
              margin: '0 auto',
              padding: '0 1rem',
              position: 'relative',
            }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '3rem',
              }}>
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(0, 0, 0, 0.05)',
                  borderRadius: '16px',
                  padding: '2.5rem',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: PRIMARY_COLOR,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}>
                  <Target
                    style={{ color: '#ffffff', width: '24px', height: '24px' }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: getTextColor(1),
                    marginBottom: '1rem',
                  }}>
                  Our Mission
                </h3>
                <p
                  style={{
                    fontSize: '1.1rem',
                    color: getSubTextColor(1),
                    lineHeight: '1.7',
                  }}>
                  To help families and households take back control of their
                  time, information, and energy - by making life management
                  effortless.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{
                  background: 'rgba(0, 0, 0, 0.05)',
                  borderRadius: '16px',
                  padding: '2.5rem',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: PRIMARY_COLOR,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}>
                  <Lightbulb
                    style={{ color: '#ffffff', width: '24px', height: '24px' }}
                  />
                </div>

                <h3
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: getTextColor(1),
                    marginBottom: '1rem',
                  }}>
                  Our Vision
                </h3>

                <p
                  style={{
                    fontSize: '1.1rem',
                    color: getSubTextColor(1),
                    lineHeight: '1.7',
                  }}>
                  A world where every household runs smoothly, confidently, and
                  connected — with one platform that makes life feel lighter.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section
          className="mobile-section-padding"
          style={{
            background: getSectionBackground(2),
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: getTextColor(2),
                  marginBottom: '1rem',
                  lineHeight: '1.1',
                }}>
                Our Values
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: getSubTextColor(2),
                  maxWidth: '42rem',
                  margin: '0 auto',
                  lineHeight: '1.7',
                }}>
                The principles that guide everything we build and every decision
                we make.
              </p>
            </motion.div>

            <motion.div
              className="mobile-values-grid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
              }}>
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '2rem',
                    textAlign: 'center',
                  }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      background: PRIMARY_COLOR,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                    }}>
                    <value.icon
                      style={{
                        color: '#ffffff',
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: getTextColor(2),
                      marginBottom: '1rem',
                    }}>
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '1rem',
                      color: getSubTextColor(2),
                      lineHeight: '1.6',
                    }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Founders Section */}
        <section
          className="mobile-section-padding"
          style={{
            background: getSectionBackground(3),
            paddingTop: '4rem',
            paddingBottom: '4rem',
            paddingLeft: '7rem',
            paddingRight: '7rem',
            position: 'relative',
          }}>
          {/* Grid pattern for colored section */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          <div
            className="section-container"
            style={{
              maxWidth: '100rem',
              margin: '0 auto',
              padding: '0 1rem',
              position: 'relative',
            }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: getTextColor(3),
                  marginBottom: '1rem',
                  lineHeight: '1.1',
                }}>
                Meet Our Founders
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: getSubTextColor(3),
                  maxWidth: '42rem',
                  margin: '0 auto',
                  lineHeight: '1.7',
                }}>
                Adam Braasch and Asfarul Huda spent over 20 years in Technology
                including at Amazon, PayPal, Visa, and Marqeta. And outside of
                work, both have busy, beautiful families.
              </p>
            </motion.div>

            {/* Adam Braasch Section */}
            <motion.div
              className="mobile-founder-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4rem',
                marginBottom: '4rem',
              }}>
              {/* Photo Space */}
              <div
                className="mobile-founder-photo"
                style={{
                  flex: '0 0 400px',
                  height: '400px',
                  background: 'rgba(0, 0, 0, 0.05)',
                  borderRadius: '16px',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  color: getSubTextColor(3),
                  textAlign: 'center',
                  padding: '2rem',
                  lineHeight: '1.5',
                }}>
                <img
                  src="/adam-family.png" // replace with actual path
                  alt="Adam family photo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: getTextColor(3),
                    marginBottom: '1rem',
                  }}>
                  Adam Braasch
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: getSubTextColor(3),
                    lineHeight: '1.7',
                    marginBottom: '1.5rem',
                  }}>
                  Co-Founder with extensive experience at Amazon, PayPal, and
                  other leading tech companies. A dedicated family man
                  passionate about solving real-world problems through
                  technology.
                </p>
                <p
                  style={{
                    fontSize: '1rem',
                    color: getSubTextColor(3),
                    lineHeight: '1.7',
                  }}>
                  When he's not building Dockly, Adam enjoys spending time with
                  his family, coaching his kids' sports teams, and finding new
                  ways to make everyday family life more organized and
                  enjoyable.
                </p>
              </div>
            </motion.div>

            {/* Asfarul Huda Section */}
            <motion.div
              className="mobile-founder-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4rem',
                flexDirection: 'row-reverse',
                marginBottom: '3rem',
              }}>
              {/* Photo Space */}
              <div
                className="mobile-founder-photo"
                style={{
                  flex: '0 0 400px',
                  height: '400px',
                  background: 'rgba(0, 0, 0, 0.05)',
                  borderRadius: '16px',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  color: getSubTextColor(3),
                  textAlign: 'center',
                  padding: '2rem',
                  lineHeight: '1.5',
                }}>
                <img
                  src="/asfar-family.png" // replace with actual path
                  alt="Asfarul family photo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: getTextColor(3),
                    marginBottom: '1rem',
                  }}>
                  Asfarul Huda
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: getSubTextColor(3),
                    lineHeight: '1.7',
                    marginBottom: '1.5rem',
                  }}>
                  Co-Founder with deep expertise at Visa, Marqeta, and PayPal.
                  Committed to building technology that improves families' daily
                  lives and brings them closer together.
                </p>
                <p
                  style={{
                    fontSize: '1rem',
                    color: getSubTextColor(3),
                    lineHeight: '1.7',
                  }}>
                  Outside of work, Asfarul is devoted to his family and believes
                  that the best technology solutions come from understanding
                  real family needs and daily challenges.
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              style={{
                fontSize: '1.1rem',
                color: getSubTextColor(3),
                textAlign: 'center',
                lineHeight: '1.7',
                maxWidth: '48rem',
                margin: '0 auto',
                marginTop: '2rem',
              }}>
              Ever since working together at PayPal, they aspired to build a
              product together. Something rooted in their shared passion for
              using technology to solve real problems and improve people's
              lives.
            </motion.p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
