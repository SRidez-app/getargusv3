'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, Truck, Car, Scale, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Solutions() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const solutions = [
    {
      icon: Building2,
      title: 'Government',
      subtitle: 'Smart Cities on the Path to Vision Zero',
      description: 'Advanced technology solutions that deliver traffic intelligence and build smarter, safer cities. Real-time incident detection supports Vision Zero initiatives by identifying and responding to hazards before they escalate.',
      features: [
        'Traffic intelligence & monitoring',
        'Vision Zero pathway support',
        'Smart city infrastructure',
        'Real-time incident response'
      ],
      image: '/images/government1.png',
      link: '/industries/government',
      color: 'bg-blue-600'
    },
    {
      icon: Truck,
      title: 'Fleet/Last Mile',
      subtitle: 'Improving Deliveries & Reducing Costs',
      description: '5-15% more deliveries per hour in urban areas with heavy congestion. Our real-time alerts optimize routing, reduce fuel spend, improve driver Hours of Service compliance, and increase delivery efficiency.',
      features: [
        '5-15% more deliveries/hour',
        'Reduce fuel spend',
        'Improve driver HOS',
        'Safer, less congested routing'
      ],
      image: '/images/lastmile1.png',
      link: '/industries/fleet-last-mile',
      color: 'bg-green-600'
    },
    {
      icon: Car,
      title: 'Ride Share/Mobility',
      subtitle: 'Intelligent Routing with World\'s Fastest Alerts',
      description: '5-15% more rides per hour in urban areas and heavy congestion. Comprehensive mobility intelligence for rideshare and transportation platforms powered by the fastest real-time traffic alerts available.',
      features: [
        '5-15% more rides/hour',
        'World\'s fastest traffic alerts',
        'Dynamic route optimization',
        'Improved ETAs & reliability'
      ],
      image: '/images/rideshare1.png',
      link: '/industries/rideshare-mobility',
      color: 'bg-purple-600'
    },
    {
      icon: Shield,
      title: 'InsurTech',
      subtitle: 'Risk Assessment Revolutionized by Data',
      description: '30% improvement in fraud detection. Reduce disputed liability and fraud with comprehensive accident archives. AI-powered analysis of traffic incidents provides insurers with objective evidence for faster, more accurate claims processing.',
      features: [
        '30% fraud detection improvement',
        'Reduce disputed liability',
        'Accident video archives',
        'Faster claims processing'
      ],
      image: '/images/insurtech.png',
      link: '/industries/insurtech',
      color: 'bg-red-500'
    },
    {
      icon: Scale,
      title: 'Forensics',
      subtitle: 'Digital Truth Through Intelligent Investigation',
      description: 'Reduce investigation time by 60% with AI-powered analysis. Digital forensics and investigative intelligence tools that process terabytes of evidence automatically, finding critical footage across thousands of cameras in minutes.',
      features: [
        '60% faster investigations',
        'AI-powered evidence analysis',
        'Terabyte-scale processing',
        'Multi-camera search'
      ],
      image: '/images/forensics1.png',
      link: '/industries/forensics',
      color: 'bg-indigo-600'
    }
  ];

  // Auto-rotate carousel with pause capability
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % solutions.length);
    }, 8000); // Slowed down to 8 seconds
    
    return () => clearInterval(timer);
  }, [isPaused, solutions.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % solutions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  return (
    <section className="py-20 bg-[#233247]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Intelligence for Every Stakeholder
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            One platform delivering real-time alerts and forensic search across transportation, public safety, and commercial operations
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Wrapper */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div 
                    key={index}
                    className="min-w-full"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 mx-2">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Image Side */}
                        <div className="relative h-80 lg:h-auto">
                          <Image
                            src={solution.image}
                            alt={solution.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className={`absolute bottom-4 left-4 ${solution.color} px-4 py-2 rounded-lg`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Content Side */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                            {solution.title}
                          </h3>
                          <p className="text-lg text-[#C9A23A] font-semibold mb-4">
                            {solution.subtitle}
                          </p>
                          <p className="text-gray-300 mb-6 leading-relaxed">
                            {solution.description}
                          </p>

                          {/* Features */}
                          <ul className="space-y-3 mb-8">
                            {solution.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <svg className="w-5 h-5 text-[#C9A23A] mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* CTA */}
                          <Link 
                            href={solution.link}
                            className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-lg text-white bg-[#C9A23A] hover:bg-[#E7C873] transition-all duration-200 w-fit"
                          >
                            Learn More
                            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 border border-white/20"
            aria-label="Previous solution"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 border border-white/20"
            aria-label="Next solution"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[#C9A23A] w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link 
           href="https://calendly.com/getargusai/30min?month=2025-08"
            className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg text-[#233247] bg-[#C9A23A] hover:bg-[#E7C873] transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Schedule a Demo
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}