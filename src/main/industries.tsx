// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Building2, Truck, Car, Shield, Scale, ArrowRight, CheckCircle } from 'lucide-react';
// import CallToAction from '@/app/components/calltoaction';
// const Industries = () => {
//   const [activeIndustry, setActiveIndustry] = useState('government');

//   const industries = [
//     {
//       id: 'government',
//       icon: Building2,
//       title: 'Government',
//       tagline: 'Smart cities on the path to Vision Zero',
//       description: 'Your city has outdated traffic systems. Disconnected emergency services. Citizens demanding better. Our platform unifies it all—AI traffic management, coordinated emergency response, and the data infrastructure cities need to actually achieve Vision Zero.',
//       keyStats: [
//         { stat: '35%', label: 'Traffic congestion reduction' },
//         { stat: '28%', label: 'Faster emergency response' },
//         { stat: '25%', label: 'Lower operational costs' }
//       ],
//       capabilities: [
//         'Real-time incident detection across your entire camera network',
//         'Coordinated alerts to traffic management, EMS, police, and fire',
//         'Traffic flow optimization that adapts to actual conditions',
//         'Unified platform for multi-agency collaboration'
//       ],
//       challenge: 'Mid-sized city struggling with outdated traffic systems and 4+ minute emergency response delays',
//       outcome: '35% congestion reduction, 28% faster emergency response, 58% citizen satisfaction increase'
//     },
//     {
//       id: 'fleet',
//       icon: Truck,
//       title: 'Fleet/Last Mile',
//       tagline: '5-15% more deliveries per hour in congested areas',
//       description: 'Your drivers waste 2+ hours daily stuck in avoidable traffic. Traditional traffic data arrives too late. Our sub-10-second incident detection means your routing system gets alerts before the congestion even forms. More deliveries, less fuel, happier drivers.',
//       keyStats: [
//         { stat: '5-15%', label: 'More deliveries per hour' },
//         { stat: '28%', label: 'Fuel cost reduction' },
//         { stat: '96%', label: 'On-time delivery rate' }
//       ],
//       capabilities: [
//         'Real-time traffic alerts to your dispatch and routing systems',
//         'Automatic rerouting around incidents and congestion',
//         'Driver HOS compliance monitoring',
//         'Predictive traffic analysis for better planning'
//       ],
//       challenge: 'Regional delivery company with 73% on-time rate, drivers losing 2+ hours daily to traffic',
//       outcome: '96% on-time rate achieved, 28% fuel savings, 12 additional deliveries per driver daily'
//     },
//     {
//       id: 'rideshare',
//       icon: Car,
//       title: 'Ride Share/Mobility',
//       tagline: 'World\'s fastest traffic intelligence',
//       description: 'Passengers wait 8 minutes. Drivers sit idle 35% of their shift. You need faster alerts than everyone else has. Our computer vision detects incidents in under 10 seconds—your drivers avoid delays while competitors are still stuck in them.',
//       keyStats: [
//         { stat: '40%', label: 'Wait time reduction' },
//         { stat: '38%', label: 'Driver utilization increase' },
//         { stat: '27%', label: 'Driver earnings boost' }
//       ],
//       capabilities: [
//         'Sub-10-second incident detection and routing updates',
//         'AI demand prediction for intelligent driver positioning',
//         'Route safety scoring and hazard avoidance',
//         'Integration with your existing dispatch systems'
//       ],
//       challenge: 'Urban ride-share operator with 8-minute wait times and 35% driver idle time',
//       outcome: 'Wait times down to 4.5 minutes, driver utilization up 38%, customer satisfaction up 42%'
//     },
//     {
//       id: 'insurtech',
//       icon: Shield,
//       title: 'InsurTech',
//       tagline: 'Stop paying for fraud you can prevent',
//       description: 'Insurance fraud costs you $308.6B annually. Claims take 45 days to settle because you don\'t have the evidence. We archive traffic camera footage that governments delete after 30-90 days. When you need proof, we have it. Fraud drops. Disputes disappear.',
//       keyStats: [
//         { stat: '91.82%', label: 'Fraud detection accuracy' },
//         { stat: '70%', label: 'Faster claim resolution' },
//         { stat: '32%', label: 'Claims cost reduction' }
//       ],
//       capabilities: [
//         'AI fraud detection with 91.82% accuracy',
//         'Instant access to archived traffic camera footage',
//         'Evidence retrieval for disputed liability claims',
//         'Complete chain of custody for legal proceedings'
//       ],
//       challenge: 'Regional insurer with 15% fraud rate and 45-day average settlement time',
//       outcome: '91.82% fraud detection, 22-day settlements, 32% lower claims costs, 48% customer satisfaction boost'
//     },
//     {
//       id: 'forensics',
//       icon: Scale,
//       title: 'Forensics',
//       tagline: 'Find the evidence in minutes, not weeks',
//       description: 'Your investigators spend 40+ hours manually reviewing footage per case. Evidence gets deleted before you know you need it. Our AI searches thousands of cameras simultaneously. Natural language queries. Instant results. The footage that was "gone" is actually in our archive.',
//       keyStats: [
//         { stat: '60%', label: 'Faster investigations' },
//         { stat: '95%', label: 'Evidence detection accuracy' },
//         { stat: '35%', label: 'Higher case closure rate' }
//       ],
//       capabilities: [
//         'AI-powered search across thousands of cameras',
//         'Natural language queries ("silver sedan, westbound, Tuesday 3pm")',
//         'Multi-camera tracking and pattern recognition',
//         'Long-term archival of footage that others delete'
//       ],
//       challenge: 'Major city PD with 50+ hour investigation times and evidence backlogs',
//       outcome: 'Investigation time down to 20 hours, 70% faster processing, 35% more cases closed'
//     }
//   ];

//   const active = industries.find(i => i.id === activeIndustry) || industries[0];
//   const Icon = active.icon;

//   useEffect(() => {
//   const handleHashChange = () => {
//     const hash = window.location.hash.replace('#', '');
//     if (hash && industries.some(i => i.id === hash)) {
//       setActiveIndustry(hash);
//       setTimeout(() => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }, 100);
//     }
//   };

//   handleHashChange();
//   window.addEventListener('hashchange', handleHashChange);

//   return () => {
//     window.removeEventListener('hashchange', handleHashChange);
//   };
// }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero */}
//       <section className="bg-[#0F172A] text-white py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="max-w-3xl">
//             <div className="text-[#C9A23A] text-sm font-semibold uppercase tracking-wider mb-4">
//               Industries
//             </div>
//             <h1 className="text-5xl font-bold mb-6">
//               One platform. Every stakeholder.
//             </h1>
//             <p className="text-xl text-gray-300">
//               Real-time traffic intelligence and forensic search built for government, transportation, and public safety.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Industry Tabs */}
//       <section className="border-b border-gray-200 bg-white sticky top-0 z-40">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="flex gap-8 overflow-x-auto">
//             {industries.map((industry) => {
//               const TabIcon = industry.icon;
//               return (
//                 <button
//                   key={industry.id}
//                   onClick={() => setActiveIndustry(industry.id)}
//                   className={`flex items-center gap-3 py-5 border-b-2 transition-colors whitespace-nowrap ${
//                     activeIndustry === industry.id
//                       ? 'border-[#C9A23A] text-[#0F172A]'
//                       : 'border-transparent text-gray-500 hover:text-[#0F172A]'
//                   }`}
//                 >
//                   <TabIcon className="w-5 h-5" />
//                   <span className="font-semibold">{industry.title}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Active Industry Content */}
//       <section className="py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           {/* Header */}
//           <div className="mb-16">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-14 h-14 bg-[#C9A23A] rounded-xl flex items-center justify-center">
//                 <Icon className="w-7 h-7 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-4xl font-bold text-[#0F172A]">{active.title}</h2>
//                 <p className="text-lg text-gray-600">{active.tagline}</p>
//               </div>
//             </div>
//             <p className="text-xl text-gray-800 leading-relaxed max-w-4xl">
//               {active.description}
//             </p>
//           </div>

//           {/* Stats */}
//           <div className="grid md:grid-cols-3 gap-6 mb-16">
//             {active.keyStats.map((item, idx) => (
//               <div key={idx} className="bg-[#F2F5F9] rounded-xl p-6 border-l-4 border-[#C9A23A]">
//                 <div className="text-4xl font-bold text-[#0F172A] mb-2">{item.stat}</div>
//                 <div className="text-sm text-gray-600">{item.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* Capabilities */}
//           <div className="mb-16">
//             <h3 className="text-2xl font-bold text-[#0F172A] mb-6">What you get</h3>
//             <div className="grid md:grid-cols-2 gap-4">
//               {active.capabilities.map((capability, idx) => (
//                 <div key={idx} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
//                   <CheckCircle className="w-5 h-5 text-[#C9A23A] flex-shrink-0 mt-0.5" />
//                   <span className="text-gray-800">{capability}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Case Study */}
//           <div className="bg-[#0F172A] rounded-2xl p-10 text-white">
//             <div className="text-xs text-[#C9A23A] font-semibold uppercase tracking-wider mb-4">
//               Real Results
//             </div>
//             <div className="grid md:grid-cols-2 gap-8">
//               <div>
//                 <div className="text-sm text-gray-400 mb-2">The Challenge</div>
//                 <p className="text-white">{active.challenge}</p>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-400 mb-2">The Outcome</div>
//                 <p className="text-white">{active.outcome}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <CallToAction />
//     </div>
//   );
// };

// export default Industries;





'use client';

import React, { useState, useEffect } from 'react';
import { Building2, Truck, Car, Shield, Scale, CheckCircle } from 'lucide-react';
import CallToAction from '@/app/components/calltoaction';

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState('government');

  const industries = [
    {
      id: 'government',
      icon: Building2,
      title: 'Government',
      tagline: 'Smart cities on the path to Vision Zero',
      description: 'Your city has outdated traffic systems. Disconnected emergency services. Citizens demanding better. Our platform unifies it all—AI traffic management, coordinated emergency response, and the data infrastructure cities need to actually achieve Vision Zero.',
      keyStats: [
        { stat: '35%', label: 'Traffic congestion reduction' },
        { stat: '28%', label: 'Faster emergency response' },
        { stat: '25%', label: 'Lower operational costs' }
      ],
      capabilities: [
        'Real-time incident detection across your entire camera network',
        'Coordinated alerts to traffic management, EMS, police, and fire',
        'Traffic flow optimization that adapts to actual conditions',
        'Unified platform for multi-agency collaboration'
      ],
      challenge: 'Mid-sized city struggling with outdated traffic systems and 4+ minute emergency response delays',
      outcome: '35% congestion reduction, 28% faster emergency response, 58% citizen satisfaction increase'
    },
    {
      id: 'fleet',
      icon: Truck,
      title: 'Fleet/Last Mile',
      tagline: '5-15% more deliveries per hour in congested areas',
      description: 'Your drivers waste 2+ hours daily stuck in avoidable traffic. Traditional traffic data arrives too late. Our sub-10-second incident detection means your routing system gets alerts before the congestion even forms. More deliveries, less fuel, happier drivers.',
      keyStats: [
        { stat: '5-15%', label: 'More deliveries per hour' },
        { stat: '28%', label: 'Fuel cost reduction' },
        { stat: '96%', label: 'On-time delivery rate' }
      ],
      capabilities: [
        'Real-time traffic alerts to your dispatch and routing systems',
        'Automatic rerouting around incidents and congestion',
        'Driver HOS compliance monitoring',
        'Predictive traffic analysis for better planning'
      ],
      challenge: 'Regional delivery company with 73% on-time rate, drivers losing 2+ hours daily to traffic',
      outcome: '96% on-time rate achieved, 28% fuel savings, 12 additional deliveries per driver daily'
    },
    {
      id: 'rideshare',
      icon: Car,
      title: 'Ride Share/Mobility',
      tagline: 'World\'s fastest traffic intelligence',
      description: 'Passengers wait 8 minutes. Drivers sit idle 35% of their shift. You need faster alerts than everyone else has. Our computer vision detects incidents in under 10 seconds—your drivers avoid delays while competitors are still stuck in them.',
      keyStats: [
        { stat: '40%', label: 'Wait time reduction' },
        { stat: '38%', label: 'Driver utilization increase' },
        { stat: '27%', label: 'Driver earnings boost' }
      ],
      capabilities: [
        'Sub-10-second incident detection and routing updates',
        'AI demand prediction for intelligent driver positioning',
        'Route safety scoring and hazard avoidance',
        'Integration with your existing dispatch systems'
      ],
      challenge: 'Urban ride-share operator with 8-minute wait times and 35% driver idle time',
      outcome: 'Wait times down to 4.5 minutes, driver utilization up 38%, customer satisfaction up 42%'
    },
    {
      id: 'insurtech',
      icon: Shield,
      title: 'InsurTech',
      tagline: 'Stop paying for fraud you can prevent',
      description: 'Insurance fraud costs you $308.6B annually. Claims take 45 days to settle because you don\'t have the evidence. We archive traffic camera footage that governments delete after 30-90 days. When you need proof, we have it. Fraud drops. Disputes disappear.',
      keyStats: [
        { stat: '91.82%', label: 'Fraud detection accuracy' },
        { stat: '70%', label: 'Faster claim resolution' },
        { stat: '32%', label: 'Claims cost reduction' }
      ],
      capabilities: [
        'AI fraud detection with 91.82% accuracy',
        'Instant access to archived traffic camera footage',
        'Evidence retrieval for disputed liability claims',
        'Complete chain of custody for legal proceedings'
      ],
      challenge: 'Regional insurer with 15% fraud rate and 45-day average settlement time',
      outcome: '91.82% fraud detection, 22-day settlements, 32% lower claims costs, 48% customer satisfaction boost'
    },
    {
      id: 'forensics',
      icon: Scale,
      title: 'Forensics',
      tagline: 'Find the evidence in minutes, not weeks',
      description: 'Your investigators spend 40+ hours manually reviewing footage per case. Evidence gets deleted before you know you need it. Our AI searches thousands of cameras simultaneously. Natural language queries. Instant results. The footage that was "gone" is actually in our archive.',
      keyStats: [
        { stat: '60%', label: 'Faster investigations' },
        { stat: '95%', label: 'Evidence detection accuracy' },
        { stat: '35%', label: 'Higher case closure rate' }
      ],
      capabilities: [
        'AI-powered search across thousands of cameras',
        'Natural language queries ("silver sedan, westbound, Tuesday 3pm")',
        'Multi-camera tracking and pattern recognition',
        'Long-term archival of footage that others delete'
      ],
      challenge: 'Major city PD with 50+ hour investigation times and evidence backlogs',
      outcome: 'Investigation time down to 20 hours, 70% faster processing, 35% more cases closed'
    }
  ];

  const active = industries.find(i => i.id === activeIndustry) || industries[0];
  const Icon = active.icon;

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && industries.some(i => i.id === hash)) {
        setActiveIndustry(hash);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - More compact on mobile */}
      <section className="bg-[#0F172A] text-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-[#C9A23A] text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4">
              Industries
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              One platform. Every stakeholder.
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Real-time traffic intelligence and forensic search built for government, transportation, and public safety.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Tabs - Branded colors for icons */}
      <section className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-4 md:gap-8 overflow-x-auto">
            {industries.map((industry) => {
              const TabIcon = industry.icon;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`flex items-center gap-2 md:gap-3 py-4 md:py-5 border-b-2 transition-colors whitespace-nowrap ${
                    activeIndustry === industry.id
                      ? 'border-[#C9A23A] text-[#0F172A]'
                      : 'border-transparent text-gray-500 hover:text-[#0F172A]'
                  }`}
                >
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${
                    activeIndustry === industry.id
                      ? 'bg-[#0F172A]'
                      : 'bg-gray-100'
                  }`}>
                    <TabIcon className={`w-4 h-4 md:w-5 md:h-5 ${
                      activeIndustry === industry.id
                        ? 'text-[#C9A23A]'
                        : 'text-gray-400'
                    }`} />
                  </div>
                  <span className="font-semibold text-sm md:text-base">{industry.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Industry Content - More compact on mobile */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header - Reduced spacing on mobile */}
          <div className="mb-10 md:mb-16">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0F172A] rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#C9A23A]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-[#0F172A]">{active.title}</h2>
                <p className="text-base md:text-lg text-gray-600">{active.tagline}</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-4xl">
              {active.description}
            </p>
          </div>

          {/* Stats - More compact on mobile */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
            {active.keyStats.map((item, idx) => (
              <div key={idx} className="bg-[#F2F5F9] rounded-xl p-5 md:p-6 border-l-4 border-[#C9A23A]">
                <div className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-2">{item.stat}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Capabilities - More compact on mobile */}
          <div className="mb-10 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-4 md:mb-6">What you get</h3>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              {active.capabilities.map((capability, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-3 md:p-4">
                  <CheckCircle className="w-5 h-5 text-[#C9A23A] flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-800">{capability}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study - More compact on mobile */}
          <div className="bg-[#0F172A] rounded-2xl p-6 md:p-10 text-white">
            <div className="text-xs text-[#C9A23A] font-semibold uppercase tracking-wider mb-3 md:mb-4">
              Real Results
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <div className="text-sm text-gray-400 mb-2">The Challenge</div>
                <p className="text-white text-sm md:text-base">{active.challenge}</p>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">The Outcome</div>
                <p className="text-white text-sm md:text-base">{active.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallToAction />
    </div>
  );
};

export default Industries;