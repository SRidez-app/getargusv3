'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A23A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7FB7FF] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="text-center mb-12">
          <div className="inline-block text-[#C9A23A] text-sm font-semibold uppercase tracking-wider mb-4">
            Ready to Transform Your Operations?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See Argus AI in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join leading cities, emergency services, and fleet operators who are already using AI-powered traffic intelligence to save lives and optimize operations.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-[#C9A23A] rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Fast Implementation</h3>
            <p className="text-gray-300 text-sm">
              Deploy in weeks, not months. Integrate seamlessly with your existing infrastructure.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-[#7FB7FF] rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Proven ROI</h3>
            <p className="text-gray-300 text-sm">
              See measurable results in emergency response times, traffic flow, and operational costs.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-[#C9A23A] rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Expert Support</h3>
            <p className="text-gray-300 text-sm">
              Dedicated team to ensure successful deployment and ongoing optimization.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
             href="https://calendly.com/getargusai/30min?month=2025-08"
            className="group inline-flex items-center px-8 py-4 bg-[#C9A23A] hover:bg-[#E7C873] text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Your Demo
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/solutions"
            className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all duration-300 border border-white/20 backdrop-blur-sm"
          >
            Explore Solutions
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Trusted by municipalities, emergency services, and transportation leaders
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="text-white font-semibold">Vision Zero Cities</div>
            <div className="text-white font-semibold">PSAPs & 911 Centers</div>
            <div className="text-white font-semibold">Fleet Operators</div>
            <div className="text-white font-semibold">Law Enforcement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;