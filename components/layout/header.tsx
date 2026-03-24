import React from 'react';
import {
  LayoutDashboard,
  FolderOpen,
  Activity,
  Bell,
  Settings,
  Search,
  MoreHorizontal,
  Users,
  Calendar,
  ArrowRight,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm transform rotate-12"></div>
          </div>
          <span className="text-white text-xl font-semibold">Evotask</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-indigo-300 transition-colors">
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-indigo-300 transition-colors">
            App
          </a>
          <a
            href="#"
            className="text-white hover:text-indigo-300 transition-colors">
            Pricing
          </a>
          <a
            href="#"
            className="text-white hover:text-indigo-300 transition-colors">
            Partners
          </a>
          <a
            href="#"
            className="text-white hover:text-indigo-300 transition-colors">
            About Us
          </a>
        </nav>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
          Create Account
        </button>
      </header>

      <div className="px-6 py-16 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Optimize Your
            <br />
            Daily Routine
          </h1>

          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Evotask can create collaborated between teams and see each other's
            progress in the sense of being able manage tasks to match the
            target.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
              Try For Free
            </button>
            <button className="border-2 border-slate-400 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-white hover:text-slate-900">
              Watch Demo
            </button>
          </div>
        </div>

        {/* App Mockup */}
        <div className="lg:w-1/2 relative">
          {/* User Profile Card */}
          <div className="absolute -top-4 right-8 bg-white rounded-xl p-4 shadow-2xl z-20 flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">FS</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Good Morning</p>
              <p className="font-semibold">Fab Studio</p>
            </div>
          </div>

          {/* Main Dashboard */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* App Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm transform rotate-12"></div>
                  </div>
                  <span className="text-indigo-600 text-lg font-semibold">
                    Evotask
                  </span>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search project"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-64"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  All My Task
                </h2>
                <p className="text-sm text-gray-500">
                  You can edit as you wish
                </p>
              </div>

              <div className="flex space-x-6 mt-4">
                <button className="text-gray-600 hover:text-gray-900">
                  List
                </button>
                <button className="text-indigo-600 border-b-2 border-indigo-600 pb-1 font-medium">
                  Board
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  Timeline
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex">
              <div className="w-64 bg-gray-50 p-4 space-y-2">
                <div className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-200 rounded-lg cursor-pointer">
                  <LayoutDashboard className="h-5 w-5" />
                  <span>Dashboard</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-indigo-100 text-indigo-700 rounded-lg">
                  <FolderOpen className="h-5 w-5" />
                  <span>Project</span>
                </div>
                <div className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-200 rounded-lg cursor-pointer">
                  <Activity className="h-5 w-5" />
                  <span>Activity</span>
                </div>
                <div className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-200 rounded-lg cursor-pointer">
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </div>
                <div className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-200 rounded-lg cursor-pointer">
                  <Settings className="h-5 w-5" />
                  <span>Setting</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Ongoing Column */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">Ongoing</h3>
                      <span className="text-sm text-gray-500">8 Task</span>
                    </div>

                    <div className="space-y-4">
                      {/* UI Design Card */}
                      <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-medium">
                            Medium
                          </span>
                          <MoreHorizontal className="h-4 w-4 text-gray-400" />
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          UI Design
                        </h4>
                        <img
                          src="/image.png"
                          alt="Design mockup"
                          className="w-full h-20 object-cover rounded-lg mb-3"
                        />
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            E Learning Dashboard Design
                          </span>
                          <div className="flex -space-x-1">
                            <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                            <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-sm text-gray-500">8 Task</span>
                          <span className="text-sm font-medium">0%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interview Column */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">Interview</h3>
                      <span className="text-sm text-gray-500">2 Task</span>
                    </div>

                    <div className="space-y-4">
                      {/* Usability Testing Card */}
                      <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs font-medium">
                            Medium
                          </span>
                          <MoreHorizontal className="h-4 w-4 text-gray-400" />
                        </div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          Usability Testing
                        </h4>
                        <p className="text-sm text-gray-500 mb-3">7 Day ago</p>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-500">8 Task</span>
                          <span className="text-lg font-bold text-gray-900">
                            50%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: '50%' }}></div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex -space-x-1">
                            <div className="w-6 h-6 bg-purple-400 rounded-full border-2 border-white"></div>
                            <div className="w-6 h-6 bg-pink-400 rounded-full border-2 border-white"></div>
                            <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                              <span className="text-xs">+1</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-400">10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats Card */}
            <div className="absolute -bottom-8 left-4 bg-white rounded-xl p-4 shadow-2xl">
              <h4 className="font-semibold text-gray-900 mb-2">
                Project Overview
              </h4>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <svg
                    className="w-16 h-16 transform -rotate-90"
                    viewBox="0 0 36 36">
                    <path
                      d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                    />
                    <path
                      d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                      fill="none"
                      stroke="#6366F1"
                      strokeWidth="3"
                      strokeDasharray="50, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-900">36</span>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <span className="text-gray-600">50%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-600">30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
