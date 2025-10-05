'use client';

import React from 'react';
import { Building2, Truck, Car, Shield, Scale } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      id: 'government',
      icon: Building2,
      title: 'Government',
      subtitle: 'Smart Cities on the Path to Vision Zero',
      description: 'Advanced technology solutions that deliver traffic intelligence and build smarter, safer cities. Real-time incident detection supports Vision Zero initiatives.',
      stats: [
        { value: '45%', label: 'Service delivery improvement' },
        { value: '25-50%', label: 'Operational efficiency gain' },
        { value: '35%', label: 'Traffic congestion reduction' }
      ],
      benefits: [
        'Real-time traffic incident detection',
        'Vision Zero pathway support',
        'Smart city infrastructure integration',
        'Multi-agency coordination'
      ],
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'fleet',
      icon: Truck,
      title: 'Fleet/Last Mile',
      subtitle: 'Improving Deliveries & Reducing Costs',
      description: '5-15% more deliveries per hour in urban areas with heavy congestion. Our real-time alerts optimize routing, reduce fuel spend, and improve driver HOS compliance.',
      stats: [
        { value: '5-15%', label: 'More deliveries per hour' },
        { value: '20-30%', label: 'Fuel cost reduction' },
        { value: '98%+', label: 'Delivery success rate' }
      ],
      benefits: [
        'AI-powered route optimization',
        'Real-time traffic avoidance',
        'Reduced fuel consumption',
        'Improved driver HOS'
      ],
      color: 'from-green-600 to-green-700'
    },
    {
      id: 'rideshare',
      icon: Car,
      title: 'Ride Share/Mobility',
      subtitle: 'Intelligent Routing with World\'s Fastest Alerts',
      description: '5-15% more rides per hour in urban areas and heavy congestion. Comprehensive mobility intelligence powered by the fastest real-time traffic alerts available.',
      stats: [
        { value: '5-15%', label: 'More rides per hour' },
        { value: '40%', label: 'Wait time reduction' },
        { value: '35%', label: 'Driver utilization increase' }
      ],
      benefits: [
        'World\'s fastest traffic alerts',
        'Dynamic route optimization',
        'Improved ETAs & reliability',
        'Enhanced driver earnings'
      ],
      color: 'from-purple-600 to-purple-700'
    },
    {
      id: 'insurtech',
      icon: Shield,
      title: 'InsurTech',
      subtitle: 'Risk Assessment Revolutionized by Data',
      description: '30% improvement in fraud detection. Reduce disputed liability and fraud with comprehensive accident archives and AI-powered analysis.',
      stats: [
        { value: '30%', label: 'Fraud detection improvement' },
        { value: '70%', label: 'Faster claim settlements' },
        { value: '50%', label: 'Processing time reduction' }
      ],
      benefits: [
        'AI-powered fraud detection',
        'Accident video archives',
        'Automated evidence retrieval',
        'Reduced disputed liability'
      ],
      color: 'from-red-600 to-red-700'
    },
    {
      id: 'forensics',
      icon: Scale,
      title: 'Forensics',
      subtitle: 'Digital Truth Through Intelligent Investigation',
      description: 'Reduce investigation time by 60% with AI-powered analysis. Process terabytes of evidence automatically, finding critical footage across thousands of cameras.',
      stats: [
        { value: '60%', label: 'Faster investigations' },
        { value: '95%', label: 'Detection accuracy' },
        { value: '70%', label: 'Evidence processing speed' }
      ],
      benefits: [
        'AI-powered evidence analysis',
        'Multi-camera forensic search',
        'Terabyte-scale processing',
        'Chain of custody tracking'
      ],
      color: 'from-indigo-600 to-indigo-700'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#233247] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
              Industries We Serve
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Intelligence for Every Stakeholder
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              One platform delivering real-time alerts and forensic search across transportation, public safety, and commercial operations
            </p>
          </div>

          {/* Industry Quick Links */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <a
                  key={industry.id}
                  href={`#${industry.id}`}
                  className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-200 border border-white/20"
                >
                  <Icon className="w-8 h-8 text-[#C9A23A] mb-2" />
                  <span className="text-sm font-medium text-center">{industry.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      {industries.map((industry, index) => {
        const Icon = industry.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section
            key={industry.id}
            id={industry.id}
            className={`py-20 ${isEven ? 'bg-white' : 'bg-[#F2F5F9]'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-3">
                  {industry.title}
                </h2>
                <p className="text-xl md:text-2xl text-[#C9A23A] font-semibold mb-4">
                  {industry.subtitle}
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {industry.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {industry.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-[#0F172A] to-[#233247] rounded-2xl p-8 text-center text-white shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[#C9A23A] mb-2">
                      {stat.value}
                    </div>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industry.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-[#C9A23A] hover:shadow-lg transition-all duration-200"
                  >
                    <svg
                      className="w-6 h-6 text-[#C9A23A] mr-4 flex-shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-lg text-[#0F172A] font-medium">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#C9A23A] text-white font-semibold rounded-lg hover:bg-[#E7C873] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Schedule a Demo for {industry.title}
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        );
      })}

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#233247] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            See how our proven solutions deliver measurable ROI across every industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-[#C9A23A] hover:bg-[#E7C873] text-white font-semibold rounded-lg transition-all duration-200 shadow-lg"
            >
              Schedule a Demo
            </a>
            <a
              href="/about"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border-2 border-white/20 backdrop-blur-sm transition-all duration-200"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;