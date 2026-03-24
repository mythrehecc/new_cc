import { Link, Sparkles, Brain, Users, Calendar, List } from 'lucide-react';
import { motion } from 'framer-motion';
import { PRIMARY_COLOR } from '@/app/common';
import { useAdmin } from './admin/context';
import EditableText from './admin/editableText';

function FeaturesSection() {
  const { config, saveConfigToServer } = useAdmin();
  const iconMap = {
    Link,
    Brain,
    Users,
  };

  const featuresConfig = (config as any)?.features || {};
  const features = featuresConfig?.items || [];

  return (
    <section
      id="features"
      style={{
        paddingTop: '1rem',
        // paddingBottom: '8rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Urbanist', sans-serif",
      }}>
      {/* Enhanced CSS Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');

        @keyframes floatUp {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(1deg);
          }
          50% {
            transform: translateY(-4px) rotate(0deg);
          }
          75% {
            transform: translateY(-12px) rotate(-1deg);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(99, 102, 241, 0.1),
              0 0 25px rgba(99, 102, 241, 0.2);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .floating-element {
          animation: floatUp 6s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            rgba(99, 102, 241, 0.8) 0%,
            rgba(99, 102, 241, 1) 50%,
            rgba(99, 102, 241, 0.8) 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }

        .gradient-bg {
          background: linear-gradient(45deg, #667eea, #764ba2, #667eea);
          background-size: 300% 300%;
          animation: gradientShift 6s ease-in-out infinite;
        }

        * {
          font-family: 'Urbanist', sans-serif !important;
        }

        .feature-card {
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .feature-image {
          transition: all 0.4s ease;
          transform-origin: center;
        }

        .feature-card:hover .feature-image {
          transform: scale(1.05);
        }

        .feature-glow {
          transition: all 0.4s ease;
        }

        .feature-card:hover .feature-glow {
          opacity: 0.08 !important;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .features-row {
            flex-direction: column !important;
          }

          .feature-card-responsive {
            flex: 1 1 100% !important;
            width: 100% !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1rem',
          position: 'relative',
        }}>
        {/* Enhanced Header Section */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4.5rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          {/* Floating Icon */}
          <motion.div
            style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 2rem',
              marginBottom: '-1rem',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
            className="gradient-bg pulse-glow"
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}>
            <Sparkles
              style={{ width: '32px', height: '32px', color: PRIMARY_COLOR }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '1rem',
              marginTop: 0,
              lineHeight: '1.1',
              fontFamily: "'Urbanist', sans-serif",
            }}
            className="md:text-4xl">
            Everything You Need.{' '}
            <span className="shimmer-text">Beautifully Connected.</span>
          </motion.h2>

          <motion.p
            style={{
              fontSize: '1rem',
              color: '#6b7280',
              maxWidth: '42rem',
              margin: '0 auto',
              lineHeight: '1.6',
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: '400',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}>
            With Dockly you'll have One Place to Connect, Organize, and Manage
            your Life with unprecedented simplicity and elegance.
          </motion.p>
        </motion.div>

        {/* Enhanced Features Grid Section */}
        {/* Top Row - 60/40 Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
          className="md:grid-cols-3">
          {features.map((feature: any, index: number) => {
            const IconComponent =
              iconMap[feature.icon as keyof typeof iconMap] || Link;
            return (
              <motion.div
                key={feature.title}
                style={{
                  textAlign: 'center',
                  padding: '2.5rem 1.5rem',
                  borderRadius: '1.2rem',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  // boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}>
                {/* Background glow effect */}
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: feature?.gradient,
                    borderRadius: '1.2rem',
                    opacity: 0,
                    transition: 'opacity 0.4s',
                  }}
                  whileHover={{ opacity: 0.05 }}
                />

                <motion.div
                  style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    background: feature?.gradient,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                  whileHover={{
                    rotate: [0, -5, 5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 0.6 }}>
                  <IconComponent
                    style={{
                      color: 'white',
                      width: '1.8rem',
                      height: '1.8rem',
                    }}
                  />
                </motion.div>

                <motion.h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: '700',
                    color: '#111827',
                    marginBottom: '0.8rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}>
                  <EditableText
                    value={feature.title}
                    onSave={() => {
                      saveConfigToServer();
                    }}
                    configPath={`features.items.${index}.title`}>
                    {feature.title}
                  </EditableText>
                </motion.h3>

                <motion.p
                  style={{
                    color: '#4b5563',
                    lineHeight: '1.6',
                    fontSize: '0.95rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}>
                  <EditableText
                    value={feature.description}
                    onSave={() => {
                      saveConfigToServer();
                    }}
                    configPath={`features.items.${index}.description`}
                    multiline>
                    {feature.description}
                  </EditableText>
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
// import { Link, Sparkles, Brain, Users, Calendar, List } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { PRIMARY_COLOR } from '@/app/common';
// import { useAdmin } from './admin/context';

// function FeaturesSection() {
//   const { config, saveConfigToServer } = useAdmin();

//   return (
//     <section
//       id="features"
//       style={{
//         paddingTop: '5rem',
//         paddingBottom: '8rem',
//         background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
//         position: 'relative',
//         overflow: 'hidden',
//         fontFamily: "'Urbanist', sans-serif",
//       }}>
//       {/* Enhanced CSS Styles */}
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');

//         @keyframes floatUp {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           25% {
//             transform: translateY(-8px) rotate(1deg);
//           }
//           50% {
//             transform: translateY(-4px) rotate(0deg);
//           }
//           75% {
//             transform: translateY(-12px) rotate(-1deg);
//           }
//         }

//         @keyframes pulseGlow {
//           0%,
//           100% {
//             box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
//           }
//           50% {
//             box-shadow: 0 0 0 8px rgba(99, 102, 241, 0.1),
//               0 0 25px rgba(99, 102, 241, 0.2);
//           }
//         }

//         @keyframes shimmer {
//           0% {
//             background-position: -200% 0;
//           }
//           100% {
//             background-position: 200% 0;
//           }
//         }

//         @keyframes gradientShift {
//           0%,
//           100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         .floating-element {
//           animation: floatUp 6s ease-in-out infinite;
//           animation-delay: var(--delay);
//         }

//         .pulse-glow {
//           animation: pulseGlow 3s ease-in-out infinite;
//         }

//         .shimmer-text {
//           background: linear-gradient(
//             90deg,
//             rgba(99, 102, 241, 0.8) 0%,
//             rgba(99, 102, 241, 1) 50%,
//             rgba(99, 102, 241, 0.8) 100%
//           );
//           background-size: 200% 100%;
//           background-clip: text;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: shimmer 3s ease-in-out infinite;
//         }

//         .gradient-bg {
//           background: linear-gradient(45deg, #667eea, #764ba2, #667eea);
//           background-size: 300% 300%;
//           animation: gradientShift 6s ease-in-out infinite;
//         }

//         * {
//           font-family: 'Urbanist', sans-serif !important;
//         }

//         .feature-card {
//           backdrop-filter: blur(20px);
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .feature-card:hover {
//           transform: translateY(-12px) scale(1.02);
//           box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
//         }

//         .feature-image {
//           transition: all 0.4s ease;
//           transform-origin: center;
//         }

//         .feature-card:hover .feature-image {
//           transform: scale(1.05);
//         }

//         .feature-glow {
//           transition: all 0.4s ease;
//         }

//         .feature-card:hover .feature-glow {
//           opacity: 0.08 !important;
//         }

//         /* Responsive Styles */
//         @media (max-width: 768px) {
//           .features-row {
//             flex-direction: column !important;
//           }

//           .feature-card-responsive {
//             flex: 1 1 100% !important;
//             width: 100% !important;
//           }
//         }
//       `}</style>

//       <div
//         style={{
//           maxWidth: '75rem',
//           margin: '0 auto',
//           marginTop: '-70px',
//           padding: '0 1.5rem',
//           position: 'relative',
//           marginBottom: '-5rem',
//         }}>
//         {/* Enhanced Header Section */}
//         <motion.div
//           style={{ textAlign: 'center', marginBottom: '4.5rem' }}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}>
//           {/* Floating Icon */}
//           <motion.div
//             style={{
//               width: '80px',
//               height: '80px',
//               margin: '0 auto 2rem',
//               marginBottom: '-1rem',
//               borderRadius: '20px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               position: 'relative',
//             }}
//             className="gradient-bg pulse-glow"
//             initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
//             whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
//             transition={{ duration: 1, type: 'spring', stiffness: 100 }}
//             viewport={{ once: true }}>
//             <Sparkles
//               style={{ width: '32px', height: '32px', color: PRIMARY_COLOR }}
//             />
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             style={{
//               fontSize: '2.5rem',
//               fontWeight: '700',
//               color: '#111827',
//               marginBottom: '1rem',
//               marginTop: 0,
//               lineHeight: '1.1',
//               fontFamily: "'Urbanist', sans-serif",
//             }}
//             className="md:text-4xl">
//             Everything You Need.{' '}
//             <span className="shimmer-text">Beautifully Connected.</span>
//           </motion.h2>

//           <motion.p
//             style={{
//               fontSize: '1rem',
//               color: '#6b7280',
//               maxWidth: '42rem',
//               margin: '0 auto',
//               lineHeight: '1.6',
//               fontFamily: "'Urbanist', sans-serif",
//               fontWeight: '400',
//             }}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}>
//             With Dockly you'll have One Place to Connect, Organize, and Manage
//             your Life with unprecedented simplicity and elegance.
//           </motion.p>
//         </motion.div>

//         {/* Enhanced Features Grid Section */}
//         {/* Top Row - 60/40 Split */}
//         <div
//           className="features-row"
//           style={{
//             display: 'flex',
//             gap: '1rem',
//             marginBottom: '1.5rem',
//             marginTop: '-20px',
//           }}>
//           {/* Multiple Board - 60% */}
//           <motion.div
//             className="feature-card-responsive"
//             style={{
//               flex: '0 0 60%',
//               background: '#ebf4ff',
//               borderRadius: '1rem',
//               padding: '1rem',
//               boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
//               border: '1px solid rgba(0, 0, 0, 0.05)',
//               overflow: 'hidden',
//             }}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}>
//             <h3
//               style={{
//                 fontSize: '1.125rem',
//                 fontWeight: '700',
//                 color: '#1f2937',
//                 marginBottom: '0.5rem',
//                 fontFamily: "'Urbanist', sans-serif",
//               }}>
//               Multiple Hubs
//             </h3>
//             <p
//               style={{
//                 fontSize: '0.875rem',
//                 color: '#6b7280',
//                 marginBottom: '1rem',
//                 lineHeight: '1.4',
//                 fontFamily: "'Urbanist', sans-serif",
//               }}>
//               Bring every part of your life together using simple, dedicated
//               hubs.
//             </p>
//             <div
//               style={{
//                 borderRadius: '0.5rem',
//                 padding: '0.5rem',
//                 marginBottom: '-2rem',
//                 height: '320px',
//                 overflow: 'hidden',
//               }}>
//               <img
//                 src="/dockly_planner.jpg"
//                 alt="Multiple Board Interface"
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   borderRadius: '1rem',
//                   overflow: 'hidden',
//                 }}
//               />
//             </div>
//           </motion.div>

//           {/* Collaboration Team - 40% */}
//           <motion.div
//             className="feature-card-responsive"
//             style={{
//               flex: '0 0 38%',
//               background: '#f3f0ff',
//               borderRadius: '1rem',
//               padding: '1rem',
//               boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
//               border: '1px solid rgba(0, 0, 0, 0.05)',
//               overflow: 'hidden',
//             }}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}>
//             <h3
//               style={{
//                 fontSize: '1.125rem',
//                 fontWeight: '700',
//                 color: '#1f2937',
//                 marginBottom: '0.5rem',
//                 fontFamily: "'Urbanist', sans-serif",
//               }}>
//               Smart Inbox
//             </h3>
//             <p
//               style={{
//                 fontSize: '0.875rem',
//                 color: '#6b7280',
//                 marginBottom: '1rem',
//                 lineHeight: '1.4',
//                 fontFamily: "'Urbanist', sans-serif",
//               }}>
//               Let's you forward important emails to your Dockly Inbox, so you
//               can save, organize, and review them later in one place.
//             </p>
//             <div
//               style={{
//                 borderRadius: '0.5rem',
//                 padding: '0.5rem',
//                 height: '300px',
//                 overflow: 'hidden',
//                 marginBottom: '-2rem',
//               }}>
//               <img
//                 src="/dockly_inbox.png"
//                 alt="Collaboration Team Interface"
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   borderRadius: '0.75rem',
//                 }}
//               />
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Row - 40/60 Split */}
//         <div className="features-row" style={{ display: 'flex', gap: '1rem' }}>
//           {/* List View - 40% */}
//           <motion.div
//             className="feature-card-responsive"
//             style={{
//               flex: '0 0 38%',
//               background: '#f3f0ff',
//               borderRadius: '1rem',
//               padding: '1rem',
//               boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
//               border: '1px solid rgba(0, 0, 0, 0.05)',
//               overflow: 'hidden',
//             }}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}>
//             <h3
//               style={{
//                 fontSize: '1.125rem',
//                 fontWeight: '700',
//                 color: '#1f2937',
//                 marginBottom: '0.5rem',
//                 fontFamily: "'Urbanist', sans-serif",
//               }}>
//               Dashboard
//             </h3>
//             <p
//               style={{
//                 fontSize: '0.875rem',
//                 color: '#6b7280',
//                 marginBottom: '1rem',
//                 lineHeight: '1.4',
//                 fontFamily: "'Urbanist', sans-serif",
//               }}>
//               See priorities, progress, and key updates at a glance - all in one
//               dashboard.
//             </p>
//             <div
//               style={{
//                 borderRadius: '0.5rem',
//                 padding: '0.5rem',
//                 height: '250px',
//                 overflow: 'hidden',
//                 marginBottom: '-2rem',
//               }}>
//               <img
//                 src="dockly_goals_tasks.png"
//                 alt="List View Interface"
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   borderRadius: '0.5rem',
//                   marginBottom: '-8rem',
//                 }}
//               />
//             </div>
//           </motion.div>

//           {/* Timeline - 60% */}
//           <motion.div
//             className="feature-card-responsive"
//             style={{
//               flex: '0 0 60%',
//               background: '#ebf4ff',
//               borderRadius: '1rem',
//               padding: '1rem',
//               boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
//               border: '1px solid rgba(0, 0, 0, 0.05)',
//               overflow: 'hidden',
//             }}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}>
//             <h3
//               style={{
//                 fontSize: '1.125rem',
//                 fontWeight: '700',
//                 color: '#1f2937',
//                 marginBottom: '0.5rem',
//                 fontFamily: "'Urbanist', sans-serif",
//               }}>
//               Multiple Boards
//             </h3>
//             <p
//               style={{
//                 fontSize: '0.875rem',
//                 color: '#6b7280',
//                 marginBottom: '1rem',
//                 lineHeight: '1.4',
//                 fontFamily: "'Urbanist', sans-serif",
//               }}>
//               Organize shared responsibilities, schedules, and plans on boards
//               everyone can follow.
//             </p>
//             <div
//               style={{
//                 borderRadius: '0.5rem',
//                 padding: '0.5rem',
//                 height: '280px',
//                 marginBottom: '-2.5rem',
//                 overflow: 'hidden',
//               }}>
//               <img
//                 src="/dockly_family.jpg"
//                 alt="Timeline Interface"
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover',
//                   borderRadius: '0.5rem',
//                 }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturesSection;
