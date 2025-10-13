// 'use client';

// import Image from 'next/image';
// import { Zap, Search, Users } from 'lucide-react';

// export default function Overview() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
//             The Argus AI Difference
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-8">
//             Real-Time Intelligence Meets Forensic Power
//           </h2>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-16">
//           {/* Text Content */}
//           <div className="space-y-6 lg:col-span-2">
//             <p className="text-lg text-[#0F172A] leading-relaxed">
//               Traffic cameras evolved from passive recorders to intelligent monitoring systems that detect incidents instantly.
//             </p>
            
//             <p className="text-lg text-[#0F172A] leading-relaxed">
//               <span className="font-semibold text-[#C9A23A]">Computer vision detects crashes, stalls, and hazards in under 10 seconds</span>—alerting emergency services, traffic centers, and drivers before 911 calls arrive.
//             </p>
            
//             <p className="text-lg text-[#0F172A] leading-relaxed">
//               Our dual platform delivers real-time detection that saves lives plus instant forensic search across thousands of cameras.
//             </p>
            
//             <p className="text-lg font-semibold text-[#7FB7FF] leading-relaxed">
//               We don't just help you find what happened—we tell you the moment it happens.
//             </p>
//           </div>

//           {/* Dashboard Image */}
//      <div className="relative lg:col-span-3 flex items-center justify-center">
//             <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
//               <Image
//                 src="/images/incidentdashboard.png"
//                 alt="Argus AI Incident Detection Dashboard"
//                 width={800}
//                 height={600}
//                 className="w-full h-auto"
//               />
//             </div>
    
//           </div>
//         </div>

//         {/* Key Value Props */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           <div className="text-center">
//             <div className="w-16 h-16 bg-[#C9A23A] rounded-full flex items-center justify-center mx-auto mb-4">
//               <Zap className="w-8 h-8 text-white" />
//             </div>
//             <h3 className="text-xl font-bold text-[#0F172A] mb-2">Real-Time Detection</h3>
//             <p className="text-gray-600">
//               Incidents detected in under 10 seconds, alerts delivered before 911 calls
//             </p>
//           </div>

//           <div className="text-center">
//             <div className="w-16 h-16 bg-[#7FB7FF] rounded-full flex items-center justify-center mx-auto mb-4">
//               <Search className="w-8 h-8 text-white" />
//             </div>
//             <h3 className="text-xl font-bold text-[#0F172A] mb-2">Instant Forensic Search</h3>
//             <p className="text-gray-600">
//               Find any incident across thousands of cameras in minutes, not weeks
//             </p>
//           </div>

//           <div className="text-center">
//             <div className="w-16 h-16 bg-[#233247] rounded-full flex items-center justify-center mx-auto mb-4">
//               <Users className="w-8 h-8 text-white" />
//             </div>
//             <h3 className="text-xl font-bold text-[#0F172A] mb-2">Multi-Stakeholder Value</h3>
//             <p className="text-gray-600">
//               One platform serving cities, PSAPs, fleets, and investigators
//             </p>
//           </div>
//         </div>

    
//       </div>
//     </section>
//   );
// }


'use client';

import Image from 'next/image';

export default function Overview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-3">
            The Argus AI Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
            Real-Time Intelligence Meets Forensic Power
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Text Content - Reduced and focused */}
          <div className="space-y-5 lg:col-span-2">
            <p className="text-lg text-[#0F172A] leading-relaxed">
              <strong>Computer vision detects crashes, stalls, and hazards in under 10 seconds</strong>—alerting emergency services, traffic centers, and drivers before 911 calls arrive.
            </p>
            
            <p className="text-lg text-[#0F172A] leading-relaxed">
              Our dual platform delivers real-time detection that saves lives plus instant forensic search across thousands of cameras.
            </p>
            
            <p className="text-lg font-semibold text-[#0F172A] leading-relaxed">
              We don't just help you find what happened—we tell you the moment it happens.
            </p>
          </div>

          {/* Dashboard Image */}
          <div className="relative lg:col-span-3 flex items-center justify-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/images/incidentdashboard.png"
                alt="Argus AI Incident Detection Dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}