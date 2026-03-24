import React from 'react';
import {
  Target,
  TrendingUp,
  Home,
  Heart,
  Lock,
  Zap,
  Users,
  Folder,
  Bookmark,
  FileText,
  Calendar,
  Bell,
  Inbox,
} from 'lucide-react';
import { motion } from 'framer-motion';

const HowDocklyWorks1 = () => {
  // 🔒 Single source of truth — DO NOT DUPLICATE COLORS
  const itemBase = 'rounded-lg p-4 flex items-center space-x-3 bg-indigo-50';

  const textBase = 'text-sm font-medium text-gray-800';

  const iconBox =
    'w-9 h-9 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0';

  const iconColor = 'text-indigo-600';

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900"
            style={{ fontFamily: "'Urbanist', sans-serif" }}>
            How Dockly <span className="text-indigo-600">Works</span>
          </motion.h2>

          <p
            className="text-lg text-gray-500 max-w-3xl mx-auto mt-4"
            style={{ fontFamily: "'Urbanist', sans-serif" }}>
            Dockly is built around Hubs, Boards, and a smart Dashboard that
            mirrors real family life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* ---------------- Hubs ---------------- */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold">Hubs</h3>
            </div>

            <div className="space-y-4">
              <div className={itemBase}>
                <div className={iconBox}>
                  <Calendar className={`w-5 h-5 ${iconColor}`} />
                </div>
                <span className={textBase}>
                  Plan tasks, schedules, and important life events
                </span>
              </div>

              <div className={itemBase}>
                <div className={iconBox}>
                  <FileText className={`w-5 h-5 ${iconColor}`} />
                </div>
                <span className={textBase}>
                  Capture ideas, memories, and important notes
                </span>
              </div>

              <div className={itemBase}>
                <div className={iconBox}>
                  <Bookmark className={`w-5 h-5 ${iconColor}`} />
                </div>
                <span className={textBase}>
                  Save and organize important links
                </span>
              </div>

              <div className={itemBase}>
                <div className={iconBox}>
                  <Folder className={`w-5 h-5 ${iconColor}`} />
                </div>
                <span className={textBase}>
                  Store documents and digital records securely
                </span>
              </div>
            </div>
          </div>

          {/* ---------------- Dashboard ---------------- */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>

              <h3 className="text-xl font-bold mb-4">Dashboard</h3>

              <p className="text-gray-800 text-lg leading-relaxed max-w-md mx-auto mb-6">
                Your central command center that brings together everything
                happening across Hubs and Boards - tasks, reminders, files,
                emails, and priorities - all in one focused view.
              </p>

              <p className="text-gray-800 text-lg leading-relaxed max-w-md mx-auto">
                Dockly’s Dashboard helps you stay on top of daily life without
                jumping between tools, apps, or tabs.
              </p>
            </div>

            {/* Optional subtle highlight */}
            <div className="mt-8 bg-indigo-50 rounded-xl p-4 text-sm text-indigo-700 font-medium">
              One screen. Zero clutter. Total clarity.
            </div>
          </div>

          {/* ---------------- Boards ---------------- */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold">Boards</h3>
            </div>

            <div className="space-y-4">
              <div className={itemBase}>
                <div className={iconBox}>
                  <Home className={`w-5 h-5 ${iconColor}`} />
                </div>
                <span className={textBase}>
                  Home, property, utilities, and maintenance
                </span>
              </div>

              <div className={itemBase}>
                <div className={iconBox}>
                  <TrendingUp className={`w-5 h-5 ${iconColor}`} />
                </div>
                <span className={textBase}>
                  Finances, savings, investments, and goals
                </span>
              </div>

              <div className={itemBase}>
                <div className={iconBox}>
                  <Users className={`w-5 h-5 ${iconColor}`} />
                </div>
                <span className={textBase}>
                  Family profiles and essential records
                </span>
              </div>

              <div className={itemBase}>
                <div className={iconBox}>
                  <Heart className={`w-5 h-5 ${iconColor}`} />
                </div>
                <span className={textBase}>
                  Health records, history, and wellness tracking
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-10 text-center max-w-8xl mx-auto">
          <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-indigo-700" />
          </div>

          <h3 className="text-2xl font-bold mb-4">
            Privacy-First Architecture
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Dockly is built with privacy-first, zero-knowledge architecture —
            ensuring your information remains secure, private, and always under
            your control.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowDocklyWorks1;
