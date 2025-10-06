'use client';

import { Shield, Lock, Eye, FileText, Mail, AlertCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 'information-collect',
      icon: FileText,
      title: '1. Information We Collect',
      content: (
        <>
          <p className="mb-4">
            Argus AI collects certain types of information to improve our services, enhance user experience, and maintain security. This includes:
          </p>
          
          <h4 className="font-semibold text-[#0F172A] mb-3 mt-6">1.1. Automatically Collected Data</h4>
          <p className="mb-3">When you visit trafficdatagroup.com, we may automatically collect:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Log Data:</strong> IP address, browser type, device information, and timestamps.</li>
            <li><strong>Usage Data:</strong> Page visits, interactions, preferences, and navigation patterns.</li>
            <li><strong>Cookies & Tracking Technologies:</strong> Small data files stored on your device to enhance user experience and enable faster access to features.</li>
          </ul>

          <h4 className="font-semibold text-[#0F172A] mb-3 mt-6">1.2. User-Provided Information</h4>
          <p className="mb-3">When you register for an account, subscribe, or request information, we may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and company details.</li>
            <li><strong>Payment Information:</strong> For transactions, we collect billing details, though payment processing is securely handled by third-party providers.</li>
            <li><strong>Communication Records:</strong> If you contact us, we may store emails or messages for service improvements.</li>
          </ul>
        </>
      )
    },
    {
      id: 'how-we-use',
      icon: Eye,
      title: '2. How We Use Your Information',
      content: (
        <>
          <p className="mb-3">Argus AI uses collected information to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Improve service quality, website functionality, and user experience.</li>
            <li>Provide customer support and respond to inquiries.</li>
            <li>Manage and process transactions or service requests.</li>
            <li>Conduct security monitoring and prevent fraudulent activity.</li>
            <li>Enhance marketing, analytics, and targeted advertising efforts (when applicable).</li>
            <li>Comply with legal obligations and protect company rights.</li>
          </ul>
          <p className="font-semibold text-[#C9A23A]">We do not sell or rent personal information to third parties.</p>
        </>
      )
    },
    {
      id: 'data-sharing',
      icon: Shield,
      title: '3. Data Sharing & Disclosure',
      content: (
        <>
          <p className="mb-4">
            Argus AI takes your privacy seriously and does not share personal data except under the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>With Service Providers:</strong> Trusted vendors may process data on our behalf (e.g., cloud hosting, payment processing), subject to strict confidentiality agreements.</li>
            <li><strong>For Legal Compliance:</strong> We may disclose user data when required by law, such as in response to court orders, legal requests, or regulatory requirements.</li>
            <li><strong>In Business Transactions:</strong> If Argus AI undergoes a merger, acquisition, or asset sale, user information may be transferred as part of the business operation.</li>
          </ul>
          <p>We ensure all data shared with third parties is handled securely and in compliance with applicable privacy laws.</p>
        </>
      )
    },
    {
      id: 'cookies',
      icon: FileText,
      title: '4. Cookies & Tracking Technologies',
      content: (
        <>
          <p className="mb-4">
            Argus AI uses cookies, pixels, and other tracking technologies to enhance user experience and gather insights. These may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Essential Cookies:</strong> Required for website functionality (e.g., login sessions).</li>
            <li><strong>Performance Cookies:</strong> Track user behavior to optimize website performance.</li>
            <li><strong>Targeting Cookies:</strong> Used for personalized ads and marketing campaigns.</li>
          </ul>
          <p>You may adjust browser settings to block cookies; however, doing so may limit certain website functionalities.</p>
        </>
      )
    },
    {
      id: 'third-party',
      icon: Eye,
      title: '5. Third-Party Advertising & Analytics',
      content: (
        <>
          <p className="mb-4">
            Argus AI partners with third-party advertisers and analytics providers who may collect non-personally identifiable data to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Display relevant ads based on browsing behavior.</li>
            <li>Analyze website traffic patterns and engagement metrics.</li>
          </ul>
          <p className="mb-4">
            These third parties do not have access to personal identifiers such as your name, email, or payment details.
          </p>
          <p>
            If you wish to opt out of interest-based advertising, you may use online opt-out tools provided by the Network Advertising Initiative (NAI) or the Digital Advertising Alliance (DAA).
          </p>
        </>
      )
    },
    {
      id: 'security',
      icon: Lock,
      title: '6. Data Security & Protection',
      content: (
        <>
          <p className="mb-4">
            We implement industry-standard security measures to protect user data from unauthorized access, loss, or misuse. These include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Encryption:</strong> Secure encryption protocols for data transmission.</li>
            <li><strong>Access Controls:</strong> Limited access to personal data, granted only to authorized personnel.</li>
            <li><strong>Secure Storage:</strong> Use of firewall-protected servers and encrypted databases.</li>
          </ul>
          <p>
            Despite our efforts, no system is 100% secure. Users are encouraged to use strong passwords and enable multi-factor authentication where applicable.
          </p>
        </>
      )
    },
    {
      id: 'redistribution',
      icon: AlertCircle,
      title: '7. Redistribution & Third-Party Use Restrictions',
      content: (
        <>
          <p className="mb-4">
            Argus AI strictly prohibits the unauthorized redistribution of its data, video feeds, and content.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>No content from trafficdatagroup.com may be rebroadcasted, embedded, or resold without prior written consent.</li>
            <li>You may not use AAI's content in any commercial application, software, or third-party platform without authorization.</li>
            <li>Any approved redistribution must retain author attributions, copyright notices, and trademarks.</li>
            <li>Unauthorized use may result in legal action, including account termination, civil liability, and criminal prosecution.</li>
          </ul>
        </>
      )
    },
    {
      id: 'external-links',
      icon: FileText,
      title: '8. Links to External Websites',
      content: (
        <>
          <p className="mb-4">
            Argus AI may provide links to third-party websites for reference or partner integrations. However, we are not responsible for the privacy practices or content of these external sites.
          </p>
          <p>
            We encourage users to review the privacy policies of any third-party services they engage with.
          </p>
        </>
      )
    },
    {
      id: 'your-rights',
      icon: Shield,
      title: '9. Your Rights & Choices',
      content: (
        <>
          <p className="mb-4">
            Depending on your location, you may have rights under applicable privacy laws, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Access & Correction:</strong> Request a copy of your data or correct inaccuracies.</li>
            <li><strong>Data Deletion:</strong> Request deletion of personal information (subject to legal and operational requirements).</li>
            <li><strong>Marketing Preferences:</strong> Opt out of promotional emails or targeted advertising.</li>
            <li><strong>Do Not Track (DNT):</strong> While AAI respects browser DNT signals, third-party services may not respond to them consistently.</li>
          </ul>
    <p>
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:hello@getargus.ai" className="text-[#C9A23A] hover:underline">
              hello@getargus.ai
            </a>.
          </p>
        </>
      )
    },
    {
      id: 'changes',
      icon: FileText,
      title: '10. Changes to This Privacy Policy',
      content: (
        <>
          <p className="mb-4">
            Argus AI reserves the right to update or modify this Privacy Policy at any time. Changes will be reflected on this page, and where required, we will provide notice to users.
          </p>
          <p>
            Your continued use of trafficdatagroup.com after policy updates constitutes acceptance of the revised terms.
          </p>
        </>
      )
    },
    {
      id: 'contact',
      icon: Mail,
      title: '11. Contact Information',
      content: (
        <>
          <p className="mb-4">For questions about this Privacy Policy, you can contact us at:</p>
          <div className="bg-[#F2F5F9] rounded-lg p-6 border-l-4 border-[#C9A23A]">
            <p className="font-semibold text-[#0F172A] mb-2">Argus AI</p>
            <p className="text-gray-700 mb-1">
              Email:{' '}
              <a href="mailto:hello@getargus.ai" className="text-[#C9A23A] hover:underline">
                hello@getargus.ai
              </a>
            </p>
            <p className="text-gray-700">
              Website:{' '}
              <a href="https://www.getargus.ai" target="_blank" rel="noopener noreferrer" className="text-[#C9A23A] hover:underline">
                www.getargus.ai
              </a>
            </p>
          </div>
        </>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A23A] rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Effective Date: March 1, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-[#F2F5F9] rounded-xl p-8 mb-12 border-l-4 border-[#C9A23A]">
          <p className="text-gray-800 leading-relaxed">
            Argus AI ("AAI," "we," "us," or "our") is committed to protecting the privacy and security of our users. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to safeguard your data.
          </p>
          <p className="text-gray-800 leading-relaxed mt-4">
            By using trafficdatagroup.com or any associated services, you consent to the practices outlined in this Privacy Policy.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={idx} id={section.id} className="scroll-mt-20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#C9A23A] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
                      {section.title}
                    </h2>
                    <div className="text-gray-700 leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
                {idx < sections.length - 1 && (
                  <hr className="mt-8 border-gray-200" />
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <Lock className="w-4 h-4" />
            <span>Your privacy is protected by industry-standard security measures</span>
          </div>
        </div>

      </div>
    </section>
  );
}