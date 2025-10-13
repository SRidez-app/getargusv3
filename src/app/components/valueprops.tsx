'use client';

import { Zap, Search, Users } from 'lucide-react';

export default function ValueProps() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F2F5F9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            One Platform, Three Game-Changing Capabilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built to serve cities, emergency services, fleets, and investigators
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Real-Time Detection */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#C9A23A] to-[#E7C873] rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Real-Time Detection</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Incidents detected in under 10 seconds, alerts delivered before 911 calls
            </p>
          </div>

          {/* Instant Forensic Search */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#7FB7FF] to-[#A5CEFF] rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Instant Forensic Search</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Find any incident across thousands of cameras in minutes, not weeks
            </p>
          </div>

          {/* Multi-Stakeholder Value */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#233247] to-[#0F172A] rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Multi-Stakeholder Value</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              One platform serving cities, PSAPs, fleets, and investigators
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}