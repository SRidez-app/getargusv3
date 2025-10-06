'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);



  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and Description - Left Side */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Argus Logo"
                width={80}
                height={80}
                className="mb-6"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              AI-powered intelligence solutions for modern enterprises.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-semibold">
              Contact us to see how we can reduce your operational overhead today.
            </p>
          </div>

          {/* Solutions Column - Desktop */}
    {/* Solutions Column - Desktop */}
<div className="hidden lg:block">
  <h3 className="font-semibold text-base mb-4 text-[#C9A23A]">Solutions</h3>
  <ul className="space-y-2.5">
    <li>
      <Link href="/solutions" className="text-gray-300 hover:text-[#C9A23A] transition-colors duration-200 text-sm font-semibold">
        All Solutions
      </Link>
    </li>
    <li>
      <Link href="/solutions#mobility" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
        DOTs / ITS
      </Link>
    </li>
    <li>
      <Link href="/solutions#incident-911" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
        911/PSAPs
      </Link>
    </li>
    <li>
      <Link href="/solutions#public-records" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
        Public Records & Open Data
      </Link>
    </li>
    <li>
      <Link href="/solutions#cctv-distribution" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
        CCTV Streaming & Distribution
      </Link>
    </li>
  </ul>
</div>

          {/* Products Column - Desktop */}
          {/* <div className="hidden lg:block">
            <h3 className="font-semibold text-base mb-4 text-[#C9A23A]">Products</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/products/traffic-intelligence" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
                  Argus AI Traffic Detection
                </Link>
              </li>
              <li>
                <Link href="/products/911-emergency" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
                 911/Emergency Intelligence
                </Link>
              </li>
              <li>
                <Link href="/products/archives" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
                 Argus Archives & Open Records
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Industries Column - Desktop */}
       {/* Industries Column - Desktop */}
<div className="hidden lg:block">
  <h3 className="font-semibold text-base mb-4 text-[#C9A23A]">Industries</h3>
  <ul className="space-y-2.5">
    <li>
      <Link href="/industries" className="text-gray-300 hover:text-[#C9A23A] transition-colors duration-200 text-sm font-semibold">
        All Industries
      </Link>
    </li>
    <li>
      <Link href="/industries#fleet-last-mile" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
        Fleet / Last Mile
      </Link>
    </li>
    <li>
      <Link href="/industries#ride-share" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
        Ride Share / Mobility
      </Link>
    </li>
    <li>
      <Link href="/industries#insurtech" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
        InsurTech
      </Link>
    </li>
    <li>
      <Link href="/industries#forensics" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
        Forensics
      </Link>
    </li>
    <li>
      <Link href="/industries#government" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
        Government
      </Link>
    </li>
  </ul>
</div>

          {/* Company Column - Desktop */}
          <div className="hidden lg:block">
            <h3 className="font-semibold text-base mb-4 text-[#C9A23A]">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
                  About
                </Link>
              </li>
              {/* <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/archives" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
                  Archives
                </Link>
              </li> */}
            </ul>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#C9A23A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@getargus.ai" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
                  info@getargus.ai
                </a>
              </div>
              <p className="text-gray-400 text-sm">www.getargus.ai</p>
            </div>
          </div>

          {/* Mobile Navigation - Accordion Style */}
          <div className="lg:hidden w-full space-y-4">
            {/* Solutions Dropdown */}
            <div className="border-b border-gray-700">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="w-full flex justify-between items-center py-3 text-[#C9A23A] font-semibold"
              >
                Solutions
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
             {isSolutionsOpen && (
  <ul className="pb-4 space-y-2">
    <li>
      <Link href="/solutions" className="block text-gray-300 hover:text-[#C9A23A] transition-colors duration-200 py-2 font-semibold">
        All Solutions
      </Link>
    </li>
    <li>
      <Link href="/solutions#mobility" className="block text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 py-2">
        DOTs / ITS
      </Link>
    </li>
    <li>
      <Link href="/solutions#incident-911" className="block text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 py-2">
        911/PSAPs
      </Link>
    </li>
    <li>
      <Link href="/solutions#public-records" className="block text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 py-2">
        Public Records & Open Data
      </Link>
    </li>
    <li>
      <Link href="/solutions#cctv-distribution" className="block text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 py-2">
        CCTV Streaming & Distribution
      </Link>
    </li>
  </ul>
)}
            </div>

            {/* Products Dropdown */}
            {/* <div className="border-b border-gray-700">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="w-full flex justify-between items-center py-3 text-[#C9A23A] font-semibold"
              >
                Products
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProductsOpen && (
                <ul className="pb-4 space-y-2">
                  <li>
                    <Link href="/products/traffic-intelligence" className="block text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 py-2">
                      Traffic Intelligence
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/911-emergency" className="block text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 py-2">
                      911/Emergency Intelligence
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/archives" className="block text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 py-2">
                      Archives & Open Records
                    </Link>
                  </li>
                </ul>
              )}
            </div> */}

            {/* Industries Dropdown */}
            <div className="border-b border-gray-700">
              <button
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className="w-full flex justify-between items-center py-3 text-[#C9A23A] font-semibold"
              >
                Industries
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${isIndustriesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
      {isIndustriesOpen && (
  <ul className="pb-4 space-y-2">
    <li>
      <Link href="/industries" className="block text-gray-300 hover:text-[#C9A23A] transition-colors duration-200 py-2 font-semibold">
        All Industries
      </Link>
    </li>
    <li>
      <Link href="/industries#fleet-last-mile" className="block text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 py-2">
        Fleet / Last Mile
      </Link>
    </li>
    <li>
      <Link href="/industries#ride-share" className="block text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 py-2">
        Ride Share / Mobility
      </Link>
    </li>
    <li>
      <Link href="/industries#insurtech" className="block text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 py-2">
        InsurTech
      </Link>
    </li>
    <li>
      <Link href="/industries#forensics" className="block text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 py-2">
        Forensics
      </Link>
    </li>
    <li>
      <Link href="/industries#government" className="block text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 py-2">
        Government
      </Link>
    </li>
  </ul>
)}
            </div>

            {/* Company Dropdown */}
            <div className="border-b border-gray-700">
              <button
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                className="w-full flex justify-between items-center py-3 text-[#C9A23A] font-semibold"
              >
                Company
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${isCompanyOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCompanyOpen && (
                <ul className="pb-4 space-y-2">
                  <li>
                    <Link href="/about" className="block text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 py-2">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="block text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 py-2">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/archives" className="block text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 py-2">
                      Archives
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Mobile Contact Info */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#C9A23A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@getargus.ai" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200 text-sm">
                  info@getargus.ai
                </a>
              </div>
              <p className="text-gray-400 text-sm">www.getargus.ai</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright and Legal Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Argus AI. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-[#C9A23A] transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}