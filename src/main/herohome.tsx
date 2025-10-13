// 'use client';

// import { useEffect, useRef } from 'react';

// export default function Hero() {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     // Force video to play
//     if (videoRef.current) {
//       videoRef.current.play().catch(err => console.log('Video error:', err));
//     }
//   }, []);

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
// {/* Background Video */}
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         className="absolute inset-0 w-full h-full object-cover opacity-30"
//       >
//         <source src="/videos/herovideo.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay Video with Reduced Opacity */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         className="absolute inset-0 w-full h-full object-cover opacity-30"
//       >
//         <source src="/videos/herovideo2.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>


//       {/* Hero Content - LEFT ALIGNED */}
//       <div className="relative h-full flex items-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <div className="max-w-3xl">
//             {/* Main Heading */}
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
//               Building Smarter Cities with{' '}
//               <span className="text-[#C9A23A]">AI-Powered</span>{' '}
//               Traffic Intelligence
//             </h1>

//             {/* Subheading */}
//                 <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-[#7FB7FF] mb-8">
//               Argus AI
//             </h2>

//             {/* Description */}
//             <p className="text-lg md:text-xl text-[#F2F5F9] leading-relaxed">
//               World's most advanced computer vision traffic models detect traffic anomalies, 
//               generating traffic alerts instantly for Cities, 911/PSAPS, Mobility and Last Mile Fleets.
//             </p>

//             {/* CTA Button */}
//   <div className="mt-8">
//               <a
//             href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3opt3pRGPQDYnT5IBpyltSRS764eRUP_ptoibtRyObzq1DwIR799VDAlXQucq2AnDlZgrN3vPV"
//                 className="inline-block bg-[#C9A23A] text-white px-8 py-2 rounded-lg text-lg font-semibold hover:bg-[#E7C873] transition-colors duration-200 shadow-lg"
//               >
//                Contact Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force video to play
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Video error:', err));
    }
  }, []);

  return (
    <section className="relative h-[85vh] md:h-screen w-full overflow-hidden">
      {/* Fallback Image - MOBILE ONLY */}
      <div className="md:hidden absolute inset-0">
        <Image
          src="/images/fallback.png"
          alt="Traffic Camera Background"
          fill
          className="object-cover opacity-22"
          priority
        />
      </div>

      {/* Background Video - DESKTOP ONLY */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-22"
      >
        <source src="/videos/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Video with Reduced Opacity - DESKTOP ONLY */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/videos/herovideo2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content - LEFT ALIGNED */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
            {/* Main Heading - Scales up on larger screens */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 lg:mb-6 leading-tight">
              Building Smarter Cities with{' '}
              <span className="text-[#C9A23A]">AI-Powered</span>{' '}
              Traffic Intelligence
            </h1>

            {/* Description - Scales with screen size */}
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#F2F5F9] font-medium leading-relaxed mb-3 lg:mb-4">
              World's most advanced computer vision traffic models detect traffic anomalies, 
              generating traffic alerts instantly.
            </p>

            {/* Target Audience - Scales proportionally */}
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#F2F5F9] mb-8 lg:mb-10">
              For Cities, 911/PSAPS, Mobility and Last Mile Fleets
            </p>

            {/* CTA Button - Scales on larger screens */}
            <div className="mt-8 lg:mt-10">
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3opt3pRGPQDYnT5IBpyltSRS764eRUP_ptoibtRyObzq1DwIR799VDAlXQucq2AnDlZgrN3vPV"
                className="inline-block bg-[#7FB7FF] text-[#0F172A] px-8 py-3 lg:px-10 lg:py-4 xl:px-12 xl:py-5 rounded-lg text-lg lg:text-xl xl:text-2xl font-semibold hover:bg-[#A5CEFF] transition-colors duration-200 shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}