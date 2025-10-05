"use client"
import React from 'react';
import { TriangleAlert, MapPin, FileVideo } from 'lucide-react';

const animations = `
  @keyframes spinY {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ProductsPage = () => {
  return (
    <>
      <style>{animations}</style>
      <div className="min-h-screen bg-white">
        {/* Title Section - Full Width */}
        <div className="w-full px-4 sm:px-6 lg:px-12 pt-8 pb-6" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <div className="max-w-7xl mx-auto text-center">
             <span className="inline-block text-[#0F172A] font-semibold text-sm uppercase tracking-wider mb-4">
            Our Products
          </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4" style={{ color: '#C9A23A' }}>
              AI-Powered Solution for Smarter Cities
            </h2>
            <p className="text-x1 text-xl text-gray-600 max-w-4xl mx-auto">
                
              Tailored intelligence solutions designed to meet the unique challenges of your industry and operational needs
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch relative">
          {/* Products - Left Side */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-8 lg:px-12 py-8 relative">
            <div className="max-w-2xl w-full space-y-8 sm:space-y-10 lg:space-y-12">
              
              {/* AI Traffic Alerts */}
              <div className="flex items-start gap-4 sm:gap-6" style={{ animation: 'fadeInUp 1s ease-out 0.2s backwards' }}>
                <div style={{ animation: 'spinY 3s linear infinite', transformStyle: 'preserve-3d' }}>
                  <TriangleAlert className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500 flex-shrink-0" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Argus AI Traffic Detection</h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    Real time traffic incident, congestion, first responder, wrong way driving monitoring.
                  </p>
                </div>
              </div>

              {/* Argus 911 */}
              <div className="flex items-start gap-4 sm:gap-6" style={{ animation: 'fadeInUp 1s ease-out 0.4s backwards' }}>
                <div style={{ animation: 'spinY 3s linear infinite', transformStyle: 'preserve-3d' }}>
                  <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-red-500 flex-shrink-0" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">911/Emergency Intelligence</h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    Critical emergency response and computer-aided dispatch solutions.
                  </p>
                </div>
              </div>

              {/* Argus Archives */}
              <div className="flex items-start gap-4 sm:gap-6" style={{ animation: 'fadeInUp 1s ease-out 0.6s backwards' }}>
                <div style={{ animation: 'spinY 3s linear infinite', transformStyle: 'preserve-3d' }}>
                  <FileVideo className="w-10 h-10 sm:w-12 sm:h-12 text-green-500 flex-shrink-0" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Argus Archives & Open Records</h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    Comprehensive records management and public information access.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Image - Right Side */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-8 lg:px-12 py-8" style={{ animation: 'slideInLeft 1s ease-out 0.3s backwards' }}>
            <div className="max-w-md w-full">
              <img 
                src="/images/productitem.png" 
                alt="AI Traffic Monitoring" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;