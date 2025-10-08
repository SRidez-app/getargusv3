'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  
  const pathname = usePathname();
  const isOnSolutionsPage = pathname === '/solutions';
  const isOnIndustriesPage = pathname === '/industries';
  
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    }
    setIsSolutionsOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 300);
  };

  const handleIndustriesMouseEnter = () => {
    if (industriesTimeoutRef.current) {
      clearTimeout(industriesTimeoutRef.current);
    }
    setIsIndustriesOpen(true);
  };

  const handleIndustriesMouseLeave = () => {
    industriesTimeoutRef.current = setTimeout(() => {
      setIsIndustriesOpen(false);
    }, 300);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Far Left */}
          <div className="flex-shrink-0 w-1/4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Argus Logo"
                width={120}
                height={60}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center Aligned */}
          <div className="hidden md:flex md:items-center md:justify-center md:space-x-8 flex-1">
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={!isOnSolutionsPage ? handleSolutionsMouseEnter : undefined}
              onMouseLeave={!isOnSolutionsPage ? handleSolutionsMouseLeave : undefined}
            >
              <Link
                href="/solutions"
                className={`transition-colors duration-200 font-medium ${
                  isOnSolutionsPage 
                    ? 'text-[#C9A23A] border-b-2 border-[#C9A23A] pb-1' 
                    : 'text-[#0F172A] hover:text-[#C9A23A]'
                }`}
              >
                Solutions
              </Link>
              
              {isSolutionsOpen && !isOnSolutionsPage && (
                <div className="fixed left-1/2 transform -translate-x-1/2 top-20 w-[528px] bg-white shadow-xl rounded-b-lg overflow-hidden border border-gray-100">
                  <div className="flex">
                    {/* Left side - Menu items */}
                    <div className="flex-1 p-6">
                      <Link
                        href="/solutions#mobility"
                        onClick={() => setIsSolutionsOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        Mobility & Traffic Intelligence
                      </Link>
                      <Link
                        href="/solutions#incident-911"
                        onClick={() => setIsSolutionsOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        Incident Management & 911
                      </Link>
                      <Link
                        href="/solutions#public-records"
                        onClick={() => setIsSolutionsOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        Public Records & Open Data
                      </Link>
                      <Link
                        href="/solutions#cctv-distribution"
                        onClick={() => setIsSolutionsOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        CCTV Streaming & Distribution
                      </Link>
                    </div>
                    
                    {/* Right side - Image */}
                    <div className="w-50 relative overflow-hidden">
                      <Image
                        src="/images/solutions.png"
                        alt="Solutions"
                        width={160}
                        height={140}
                        className="w-full h-60"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={!isOnIndustriesPage ? handleIndustriesMouseEnter : undefined}
              onMouseLeave={!isOnIndustriesPage ? handleIndustriesMouseLeave : undefined}
            >
              <Link
                href="/industries"
                className={`transition-colors duration-200 font-medium ${
                  isOnIndustriesPage 
                    ? 'text-[#C9A23A] border-b-2 border-[#C9A23A] pb-1' 
                    : 'text-[#0F172A] hover:text-[#C9A23A]'
                }`}
              >
                Industries
              </Link>
              
              {isIndustriesOpen && !isOnIndustriesPage && (
                <div className="fixed left-1/2 transform -translate-x-1/2 top-20 w-[528px] bg-white shadow-xl rounded-b-lg overflow-hidden border border-gray-100">
                  <div className="flex">
                    {/* Left side - Menu items */}
                    <div className="flex-1 p-6">
                      <Link
                        href="/industries#government"
                        onClick={() => setIsIndustriesOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        Government
                      </Link>
                      <Link
                        href="/industries#fleet"
                        onClick={() => setIsIndustriesOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        Fleet/Last Mile
                      </Link>
                      <Link
                        href="/industries#rideshare"
                        onClick={() => setIsIndustriesOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        Ride Share/Mobility
                      </Link>
                      <Link
                        href="/industries#insurtech"
                        onClick={() => setIsIndustriesOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        InsurTech
                      </Link>
                      <Link
                        href="/industries#forensics"
                        onClick={() => setIsIndustriesOpen(false)}
                        className="block py-2.5 px-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium text-sm"
                      >
                        Forensics
                      </Link>
                    </div>
                    
                    {/* Right side - Image */}
                    <div className="w-50 relative overflow-hidden">
                      <Image
                        src="/images/Industries.png"
                        alt="Industries"
                     width={160}
                        height={140}
                        className="w-full h-60"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-[#0F172A] hover:text-[#C9A23A] transition-colors duration-200 font-medium"
            >
              About
            </Link>
          </div>

     {/* Contact Button - Far Right */}
          <div className="hidden md:flex md:items-center md:justify-end w-1/4">
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3opt3pRGPQDYnT5IBpyltSRS764eRUP_ptoibtRyObzq1DwIR799VDAlXQucq2AnDlZgrN3vPV"
              className="bg-[#C9A23A] text-white px-6 py-2.5 rounded-md hover:bg-[#E7C873] transition-colors duration-200 font-semibold"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#0F172A] hover:text-[#C9A23A] focus:outline-none focus:ring-2 focus:ring-[#C9A23A] rounded-md p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/solutions"
              className="block px-4 py-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/industries"
              className="block px-4 py-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-[#0F172A] hover:bg-[#F2F5F9] hover:text-[#C9A23A] transition-colors duration-200 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 bg-[#C9A23A] text-white hover:bg-[#E7C873] transition-colors duration-200 rounded-md font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}