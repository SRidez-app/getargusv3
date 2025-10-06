'use client';

import React, { useState } from 'react';
import { 
  TrendingUp, 
  Siren, 
  Archive, 
  Network,
  Activity,
  Shield,
  MapPinned,
  ArrowRight,
  ChevronRight,
  Timer,
  Gauge,
  FileCheck,
  Lock
} from 'lucide-react';
import { useEffect } from 'react';
import CallToAction
 from '@/app/components/calltoaction';
const solutions = [
    {
      id: 'mobility',
      icon: TrendingUp,
      title: 'Mobility & Traffic Intelligence',
      shortTitle: 'Mobility',
      subtitle: 'Real-time traffic intelligence that actually works',
      problem: 'Your drivers waste 15-20% of their day stuck in preventable traffic delays because traditional traffic data arrives too late to be useful.',
      solution: 'Computer vision detects incidents in under 10 seconds—your routing systems get alerts before the traffic even forms.',
      stats: [
        { number: '<10s', label: 'Detection time' },
        { number: '5-15%', label: 'More deliveries/rides per hour' },
        { number: '20-30%', label: 'Fuel cost reduction' }
      ],
      how: [
        { title: 'AI watches thousands of cameras', detail: 'Detects congestion, crashes, stalls as they happen' },
        { title: 'Instant severity calculation', detail: 'Impact on routes, estimated clearance time' },
        { title: 'Alert to your systems', detail: 'API pushes to dispatch, driver apps, routing engines' },
        { title: 'Automatic rerouting', detail: 'Avoid the delay before it costs you time' }
      ],
      caseStudy: {
        company: 'Regional delivery company, 200+ vehicles',
        problem: '73% on-time rate, drivers losing 2+ hours daily to traffic',
        result: '96% on-time rate, 28% fuel savings, 12 more deliveries per driver daily'
      }
    },
    {
      id: 'incident-911',
      icon: Siren,
      title: 'Incident Management & 911',
      shortTitle: '911 Intelligence',
      subtitle: 'Emergency alerts before the 911 call',
      problem: 'By the time someone calls 911, the incident has been happening for 2-5 minutes. Secondary crashes occur. Response times suffer.',
      solution: 'AI detects crashes, stalls, wrong-way drivers instantly. Your CAD system gets verified incident data within 10 seconds.',
      stats: [
        { number: '2-5min', label: 'Response time saved' },
        { number: '45%', label: 'Fewer secondary crashes' },
        { number: '67%', label: 'Incidents detected pre-911 call' }
      ],
      how: [
        { title: 'Real-time incident recognition', detail: 'Crash, stall, debris, wrong-way, all incident types' },
        { title: 'Severity & location mapping', detail: 'Lane blockage, coordinates, incident classification' },
        { title: 'Direct CAD integration', detail: 'Pre-verified data to emergency dispatch' },
        { title: 'Multi-agency coordination', detail: 'Traffic, EMS, police, towing—all notified instantly' }
      ],
      caseStudy: {
        company: 'Metropolitan PSAP, 850K population',
        problem: '4.2-minute average delay from incident to 911 call',
        result: '8-second average detection, 3.8 minutes saved per incident, 42% reduction in secondary crashes'
      }
    },
    {
      id: 'public-records',
      icon: Archive,
      title: 'Public Records & Open Data',
      shortTitle: 'Evidence Archive',
      subtitle: 'The footage archive that never deletes',
      problem: 'Traffic cameras delete footage after 30-90 days. Your FOIA request takes 4-6 weeks. The evidence is gone before you get the response.',
      solution: 'We archive everything. When you need footage from 3 months ago, we have it. Search thousands of cameras, get evidence in minutes.',
      stats: [
        { number: '180 days', label: 'Standard retention' },
        { number: '22 min', label: 'Average search to delivery' },
        { number: '100%', label: 'Chain of custody compliance' }
      ],
      how: [
        { title: 'Continuous archival', detail: 'All feeds, all timestamps, full geolocation metadata' },
        { title: 'AI-powered indexing', detail: 'Search by incident type, vehicle, location, date/time' },
        { title: 'Instant search results', detail: 'Query thousands of cameras simultaneously' },
        { title: 'Certified delivery', detail: 'Legal chain of custody, court-ready documentation' }
      ],
      caseStudy: {
        company: 'Personal injury law firm',
        problem: 'Lost 60% of cases due to deleted footage',
        result: '$8.4M recovered in 47 previously impossible cases over 18 months'
      }
    },
    {
      id: 'cctv-distribution',
      icon: Network,
      title: 'CCTV Streaming & Distribution',
      shortTitle: 'Video Platform',
      subtitle: 'Unified camera infrastructure for entire regions',
      problem: 'You have camera systems that don\'t talk to each other. Emergency services can\'t access your feeds. Every agency built their own silo.',
      solution: 'One platform ingests all feeds regardless of vendor. Role-based access for every stakeholder. Sub-100ms streaming with 99.9% uptime.',
      stats: [
        { number: 'Any vendor', label: 'Protocol-agnostic' },
        { number: '<100ms', label: 'Stream latency' },
        { number: '99.9%', label: 'Uptime guarantee' }
      ],
      how: [
        { title: 'Aggregate everything', detail: 'City, state, private cameras—all protocols supported' },
        { title: 'AI enhancement layer', detail: 'Add detection, metadata, alerts to every stream' },
        { title: 'Secure distribution', detail: 'Role-based access, multi-tenant architecture' },
        { title: 'Smart archival', detail: 'Selective recording, intelligent storage management' }
      ],
      caseStudy: {
        company: 'Regional transportation authority, 3 counties',
        problem: 'Fragmented systems across 7 agencies, no emergency services access',
        result: '840 cameras unified, 12 agencies with access, $2.1M annual savings vs separate systems'
      }
    }
  ];

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('mobility');
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  
  

 useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && solutions.some(s => s.id === hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Empty array is fine now since solutions is outside

  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];
  const Icon = activeSolution.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0F172A] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-[#C9A23A] text-sm font-semibold uppercase tracking-wider mb-4">
              Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              From detection to decision in seconds
            </h1>
            <p className="text-xl text-gray-300">
              Four complete workflows solving the biggest problems in traffic intelligence, emergency response, and evidence preservation.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto">
            {solutions.map((solution) => {
              const TabIcon = solution.icon;
              return (
                <button
                  key={solution.id}
                  onClick={() => setActiveTab(solution.id)}
                  className={`flex items-center gap-3 py-5 border-b-2 transition-all whitespace-nowrap ${
                    activeTab === solution.id
                      ? 'border-[#C9A23A] text-[#0F172A]'
                      : 'border-transparent text-gray-500 hover:text-[#0F172A]'
                  }`}
                >
                  <TabIcon className="w-5 h-5" />
                  <span className="font-semibold">{solution.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Solution */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#C9A23A] rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0F172A]">{activeSolution.title}</h2>
                  <p className="text-gray-600">{activeSolution.subtitle}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-sm font-bold text-red-600 mb-2">The Problem</div>
                  <p className="text-gray-800 leading-relaxed">{activeSolution.problem}</p>
                </div>

                <div>
                  <div className="text-sm font-bold text-green-600 mb-2">How We Solve It</div>
                  <p className="text-gray-800 leading-relaxed">{activeSolution.solution}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center">
              <div className="grid grid-cols-1 gap-6 w-full">
                {activeSolution.stats.map((stat, idx) => (
                  <div key={idx} className="bg-[#F2F5F9] rounded-xl p-6 border-l-4 border-[#C9A23A]">
                    <div className="text-3xl font-bold text-[#0F172A] mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-8">How it works</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {activeSolution.how.map((step, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#C9A23A] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#C9A23A] text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-[#0F172A] rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Real results</h3>
              <button
                onClick={() => setExpandedCase(expandedCase === activeTab ? null : activeTab)}
                className="text-[#C9A23A] hover:text-[#E7C873] transition-colors"
              >
                {expandedCase === activeTab ? 'Show less' : 'Read full case study'}
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-xs text-[#C9A23A] font-semibold mb-2">CLIENT</div>
                <div className="text-sm">{activeSolution.caseStudy.company}</div>
              </div>
              <div>
                <div className="text-xs text-[#C9A23A] font-semibold mb-2">CHALLENGE</div>
                <div className="text-sm">{activeSolution.caseStudy.problem}</div>
              </div>
              <div>
                <div className="text-xs text-[#C9A23A] font-semibold mb-2">OUTCOME</div>
                <div className="text-sm">{activeSolution.caseStudy.result}</div>
              </div>
            </div>

            {expandedCase === activeTab && (
              <div className="pt-8 border-t border-gray-700">
                <a
                  href="/contact"
                  className="inline-flex items-center text-[#C9A23A] hover:text-[#E7C873] font-semibold"
                >
                  Request detailed case study
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            )}
          </div>

     
        </div>
      </section>

      {/* Final CTA */}
      <CallToAction />
    </div>
  );
};

export default Solutions;