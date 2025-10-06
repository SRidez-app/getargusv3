'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Linkedin, Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const [activeLeader, setActiveLeader] = useState(0);

const leaders = [
  {
    name: 'Robert Putt',
    title: 'Founder & CEO',
    image: '/images/RobertPutt.png',
    bio: "Robert Putt has a proven track record in scaling startups within the logistics sector and building high-performing data science teams. With deep logistics and data science experience from Amazon, Spreetail and Literati, he's transformed industries with vision and innovation.",
    linkedin: 'https://www.linkedin.com/in/robert-putt-leadership/',
    expertise: ['Logistics', 'Data Science', 'Startup Scaling']
  },
  {
    name: 'Torrey Powell',
    title: 'Founder & Chief Technology Officer',
    image: '/images/TorryPowell.png',
    bio: "Torrey Powell brings deep expertise in government technology as our CTO. He previously served as CTO, leading the development of cutting-edge 911 dispatch software that enhanced emergency response systems nationwide. His visionary leadership culminated in a successful exit, delivering scalable solutions for public safety infrastructure.",
    linkedin: 'https://www.linkedin.com/in/torrey-powell/',
    expertise: ['Government Tech', '911 Systems', 'Public Safety']
  },
  {
    name: 'Ben Cook',
    title: 'Chief Architecture Officer',
    image: '/images/BenCook.png',
    bio: "Ben Cook is the CAO of Argus AI. Previously founded Sparrow Computing, where he specializes in building machine learning systems for entrepreneurs. A Harvard alumnus with advanced training in machine learning, scientific computing, and data science, Ben was the key driving force behind Hudl's computer vision success, pioneering innovative tech solutions that transformed sports analytics.",
    linkedin: 'https://www.linkedin.com/in/jbencook/',
    expertise: ['Machine Learning', 'Computer Vision', 'AI Architecture']
  }
];

  const stats = [
    { icon: Award, value: '50+', label: 'Years Combined Experience' },
    { icon: Users, value: '3', label: 'Industry Veterans' },
    { icon: TrendingUp, value: '2', label: 'Successful Exits' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#C9A23A] font-semibold text-sm uppercase tracking-wider mb-4">
            About Argus AI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
            Leadership Driving Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our leadership team brings over <span className="font-semibold text-[#C9A23A]">50 years of combined experience</span> in developing and deploying industry-leading technology, with deep expertise in AI, computer vision, data science, and government tech solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#C9A23A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#0F172A] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Expertise Statement */}
        <div className="bg-[#0F172A] rounded-2xl p-8 md:p-12 mb-20 text-center">
          <p className="text-xl md:text-2xl text-white leading-relaxed">
            We have a proven track record in <span className="text-[#C9A23A] font-semibold">business executive management</span>, successful acquisitions and exits, operational optimization, and innovations in <span className="text-[#C9A23A] font-semibold">logistics and mobility sectors</span>, driving scalable solutions that transform industries from sports analytics to public safety and supply chain efficiency.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] text-center mb-12">
            Meet the Team
          </h3>

          {/* Team Grid */}
 {/* Team Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {leaders.map((leader, idx) => (
    <div 
      key={idx}
      className="group cursor-pointer h-full"
      onClick={() => setActiveLeader(idx)}
    >
      <div className={`bg-white rounded-xl overflow-hidden border-2 transition-all duration-300 h-full flex flex-col ${
        activeLeader === idx 
          ? 'border-[#C9A23A] shadow-xl transform scale-105' 
          : 'border-gray-200 hover:border-[#C9A23A]/50 hover:shadow-lg'
      }`}>
        {/* Team Photo */}
        <div className="relative h-80 bg-gray-100 flex-shrink-0">
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h4 className="text-xl font-bold text-[#0F172A] mb-1">
            {leader.name}
          </h4>
          <p className="text-[#C9A23A] font-semibold mb-4">
            {leader.title}
          </p>

          {/* Expertise Tags */}
          <div className="flex flex-wrap gap-2 mb-4 flex-1">
            {leader.expertise.map((skill, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-[#F2F5F9] text-[#0F172A] text-xs font-medium rounded-full h-fit"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* LinkedIn */}
          <a 
            href={leader.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-gray-600 hover:text-[#C9A23A] transition-colors mt-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            Connect
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
          {/* Active Leader Bio */}
          <div className="mt-12 bg-[#F2F5F9] rounded-xl p-8 border-l-4 border-[#C9A23A]">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={leaders[activeLeader].image}
                  alt={leaders[activeLeader].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0F172A]">
                  {leaders[activeLeader].name}
                </h4>
                <p className="text-[#C9A23A] font-semibold">
                  {leaders[activeLeader].title}
                </p>
              </div>
            </div>
            <p className="text-gray-800 leading-relaxed">
              {leaders[activeLeader].bio}
            </p>
          </div>
        </div>

        {/* CTA */}
  {/* CTA */}
<div className="text-center mt-16">
  <p className="text-lg text-gray-600 mb-6">
    Want to learn more about how our team can transform your operations?
  </p>
  <a 
    href="https://calendly.com/getargusai/30min?month=2025-08"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-[#C9A23A] hover:bg-[#E7C873] transform hover:scale-105 transition-all duration-200 shadow-lg"
  >
    Schedule a Demo
    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </a>
</div>

      </div>
    </section>
  );
}