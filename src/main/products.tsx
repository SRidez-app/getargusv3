"use client"
import React from 'react';
import Link from 'next/link';
import { TriangleAlert, MapPin, FileVideo } from 'lucide-react';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Title Section */}
      <div className="w-full px-4 sm:px-6 lg:px-12 pt-12 pb-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
            One Platform
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            Three Powerful Capabilities
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Every customer gets access to our complete AI-powered platform with real-time detection, emergency intelligence, and forensic search.
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            One unified solution. No modules to buy separately. Just choose the features your team needs.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Products - Left Side */}
          <div className="space-y-8">
            
            {/* AI Traffic Alerts */}
            <div className="bg-[#F2F5F9] rounded-xl p-6 border-l-4 border-[#C9A23A] hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0F172A] rounded-lg flex items-center justify-center flex-shrink-0">
                  <TriangleAlert className="w-6 h-6 text-[#C9A23A]" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">Real-Time Traffic Detection</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Computer vision detects crashes, stalls, and hazards in under 10 seconds. Instant alerts to traffic centers, emergency services, and fleets.
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Intelligence */}
            <div className="bg-[#F2F5F9] rounded-xl p-6 border-l-4 border-[#C9A23A] hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0F172A] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#C9A23A]" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">911/Emergency Intelligence</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Coordinated alerts to dispatch, EMS, police, and fire. Automated incident reporting that arrives before 911 calls.
                  </p>
                </div>
              </div>
            </div>

            {/* Archives */}
            <div className="bg-[#F2F5F9] rounded-xl p-6 border-l-4 border-[#C9A23A] hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0F172A] rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileVideo className="w-6 h-6 text-[#C9A23A]" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">Forensic Search & Archives</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    AI-powered search across thousands of cameras. Find any incident in minutes. Long-term archival of footage that others delete.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Image - Right Side */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <img 
                src="/images/productitem.png" 
                alt="Argus AI Platform Dashboard" 
             
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-br from-[#F2F5F9] to-white rounded-2xl p-10 border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
            Ready to see it in action?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how our platform can transform your traffic operations, emergency response, and investigations.
          </p>
          <Link
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3opt3pRGPQDYnT5IBpyltSRS764eRUP_ptoibtRyObzq1DwIR799VDAlXQucq2AnDlZgrN3vPV"
            className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg text-[#0F172A] bg-[#7FB7FF] hover:bg-[#A5CEFF] transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Schedule a Demo
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;