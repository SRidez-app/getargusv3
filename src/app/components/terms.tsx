'use client';

import { Scale, FileText, AlertTriangle, Shield, DollarSign, Lock, Users, Gavel, Mail } from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      id: 'acceptance',
      icon: FileText,
      title: '1. Acceptance of Terms',
      content: (
        <>
          <p>
            By using getargus.ai and its associated platforms, you confirm that you have read, understood, and accepted these Terms. Argus AI ("AAI") reserves the right to modify these Terms at any time. Changes take effect upon posting, and your continued use constitutes acceptance of the revised Terms.
          </p>
        </>
      )
    },
    {
      id: 'description',
      icon: FileText,
      title: '2. Description of Services',
      content: (
        <>
          <p>
            Argus AI provides real-time and historical traffic data, video feeds, analytics, and related services to businesses, government agencies, and individuals. Use of these services is subject to compliance with these Terms and applicable laws.
          </p>
        </>
      )
    },
    {
      id: 'authorized-use',
      icon: Shield,
      title: '3. Authorized Use',
      content: (
        <>
          <p className="mb-4">
            You agree to use our Services solely for lawful and intended purposes. Prohibited activities include, but are not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Unauthorized distribution, reproduction, or modification of AAI's data, video feeds, or other content.</li>
            <li>Using automated tools (such as bots or scrapers) to extract or collect AAI content.</li>
            <li>Attempting to bypass security features or disrupt AAI services.</li>
            <li>Using AAI's content or services in any way that violates privacy laws, intellectual property laws, or other legal statutes.</li>
          </ul>
          <p>
            AAI reserves the right to suspend or terminate accounts found in violation of these Terms.
          </p>
        </>
      )
    },
    {
      id: 'data-ownership',
      icon: Lock,
      title: '4. Data Ownership & Intellectual Property',
      content: (
        <>
          <p className="mb-4">
            All content, including video feeds, metadata, software, and analytics, is owned or licensed by Argus AI. Users acknowledge that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>No ownership rights are granted by using AAI services.</li>
            <li>Any modifications or derivative works based on AAI's data remain the exclusive property of AAI.</li>
            <li>Unauthorized use of AAI's intellectual property, trademarks, or copyrighted materials is strictly prohibited.</li>
          </ul>
        </>
      )
    },
    {
      id: 'subscription-fees',
      icon: DollarSign,
      title: '5. Subscription, Fees, and Payments',
      content: (
        <>
          <p className="mb-4">
            Certain services require payment. By subscribing or purchasing, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Pay all applicable fees as outlined in AAI's pricing structure.</li>
            <li>Authorize automatic billing for recurring services, if applicable.</li>
            <li>Acknowledge that all fees are non-refundable unless otherwise stated.</li>
          </ul>
          <p>
            Failure to make payments may result in service suspension or termination.
          </p>
        </>
      )
    },
    {
      id: 'privacy-security',
      icon: Lock,
      title: '6. Privacy & Data Security',
      content: (
        <>
          <p className="mb-4">
            Use of AAI's services is also governed by our Privacy Policy, which outlines how we collect, use, and protect personal information.
          </p>
          <p className="mb-4">
            While AAI implements security measures, users acknowledge that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>No online service is 100% secure, and unauthorized access is always a risk.</li>
            <li>Users are responsible for maintaining the confidentiality of their login credentials.</li>
            <li>AAI is not liable for security breaches caused by user negligence.</li>
          </ul>
          <p>
            If unauthorized account activity is suspected, notify AAI immediately.
          </p>
        </>
      )
    },
    {
      id: 'redistribution',
      icon: AlertTriangle,
      title: '7. Redistribution',
      content: (
        <>
          <p className="mb-4">
            No part of getargus.ai or any content provided by Argus AI—including, but not limited to, video feeds, data, partner sites, and applications—may be:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Rebroadcast on television, cable, streaming services, or any other media platform without express written consent from AAI.</li>
            <li>Embedded within another website or used in a "framing" technique to give the appearance that it is part of another website without written permission.</li>
            <li>Republished, resold, or used in any commercial application without explicit authorization.</li>
            <li>Utilized for any purpose other than private, non-commercial viewing without prior approval.</li>
          </ul>
          <p className="mb-4">
            In cases where redistribution is permitted, all author attributions, copyright notices, and trademarks must remain intact. Users acknowledge that they do not acquire any ownership rights over AAI's content by using, downloading, or otherwise interacting with AAI's Services.
          </p>
          <p className="font-semibold text-[#C9A23A]">
            Unauthorized redistribution or use will result in legal action, including but not limited to termination of service access, civil liability, and potential criminal prosecution.
          </p>
        </>
      )
    },
    {
      id: 'third-party',
      icon: FileText,
      title: '8. Third-Party Content & External Links',
      content: (
        <>
          <p>
            AAI may include links to third-party websites or integrate third-party content. We do not endorse, control, or assume responsibility for external content, services, or practices. Users access third-party sites at their own risk.
          </p>
        </>
      )
    },
    {
      id: 'disclaimer-warranty',
      icon: AlertTriangle,
      title: '9. Disclaimer of Warranty; Limitation of Liability',
      content: (
        <>
          <p className="mb-4">
            AAI strives to provide reliable and accurate services; however, users acknowledge that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>All information is provided "as is," "with all faults," and "as available" without warranties of any kind, either express or implied.</li>
            <li>AAI makes no guarantees regarding the availability, accuracy, timeliness, uninterrupted use, or reliability of the data, video feeds, or analytics.</li>
            <li>The accuracy of traffic conditions, weather reports, and related data may be affected by external factors beyond AAI's control, such as network issues, environmental conditions, or hardware malfunctions.</li>
            <li>Users rely on AAI's data and services at their own risk. AAI, its employees, partners, and affiliates shall not be liable for decisions made based on the information provided.</li>
          </ul>

          <h4 className="font-semibold text-[#0F172A] mb-3 mt-6">Liability Limitations</h4>
          <p className="mb-3">
            To the fullest extent permitted by law, AAI, its officers, employees, and affiliates shall not be liable for:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Direct, indirect, incidental, special, consequential, or punitive damages resulting from the use of or inability to use AAI's services.</li>
            <li>Loss of data, revenue, business opportunities, or personal injury resulting from reliance on AAI's data or service interruptions.</li>
            <li>Any damage, including damage caused by viruses, cyberattacks, hacking, or technical failures, that affects users' devices, systems, or networks as a result of accessing getargus.ai.</li>
            <li>Any failure, interruption, or delay of service due to acts of nature, government actions, cyberattacks, or unforeseen circumstances beyond AAI's control.</li>
          </ul>
          <p className="mb-4">
            AAI does not guarantee that our services will be free from security breaches, hacking, data loss, or system failures, and we expressly disclaim liability for any such incidents.
          </p>
          <p className="font-semibold">
            If you are dissatisfied with any part of AAI's services or these Terms, your sole and exclusive remedy is to discontinue use of our website and services.
          </p>
        </>
      )
    },
    {
      id: 'indemnification',
      icon: Shield,
      title: '10. Indemnification',
      content: (
        <>
          <p className="mb-4">
            Users agree to indemnify and hold harmless Argus AI, its affiliates, officers, directors, employees, and partners from any claims, damages, liabilities, costs, or expenses (including legal fees) arising from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any violation of these Terms.</li>
            <li>Unauthorized use of AAI's content, data, or intellectual property.</li>
            <li>Third-party claims related to users' actions or reliance on AAI's services.</li>
          </ul>
        </>
      )
    },
    {
      id: 'termination',
      icon: Users,
      title: '11. Termination & Account Suspension',
      content: (
        <>
          <p className="mb-4">
            AAI reserves the right to suspend, restrict, or terminate access to its services at any time, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Violation of these Terms.</li>
            <li>Failure to comply with payment obligations.</li>
            <li>Fraudulent, abusive, or harmful activities.</li>
          </ul>
          <p>
            Termination does not absolve users of outstanding obligations or liabilities incurred before account suspension.
          </p>
        </>
      )
    },
    {
      id: 'governing-law',
      icon: Gavel,
      title: '12. Governing Law & Dispute Resolution',
      content: (
        <>
          <p className="mb-4">
            These Terms shall be governed by the laws of the State of Delaware, without regard to conflict of law principles.
          </p>
          <p>
            Disputes shall first attempt to be resolved through informal negotiation. If unresolved, disputes shall be submitted to binding arbitration in Nebraska, except where prohibited by law.
          </p>
        </>
      )
    },
    {
      id: 'changes',
      icon: FileText,
      title: '13. Changes to These Terms',
      content: (
        <>
          <p>
            AAI reserves the right to modify these Terms at any time. Significant changes will be communicated via email or posted on getargus.ai. Continued use of the Services after modifications constitutes acceptance of the revised Terms.
          </p>
        </>
      )
    },
    {
      id: 'contact',
      icon: Mail,
      title: '14. Contact Information',
      content: (
        <>
          <p className="mb-4">For inquiries regarding these Terms, contact:</p>
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
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Effective Date: February 10, 2024
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-[#F2F5F9] rounded-xl p-8 mb-12 border-l-4 border-[#C9A23A]">
          <p className="text-gray-800 leading-relaxed">
            Welcome to Argus AI. These Terms of Service ("Terms") govern your use of our services, website, and applications (collectively, the "Services"). By accessing or using our Services, you agree to these Terms. If you do not agree, you may not use our Services.
          </p>
        </div>

        {/* Terms Sections */}
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

        {/* Footer Warning */}
        <div className="mt-16 bg-[#0F172A] rounded-xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C9A23A] rounded-full mb-4">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <p className="text-white text-lg">
            By continuing to use Argus AI services, you acknowledge that you have read and agree to these Terms of Service.
          </p>
        </div>

      </div>
    </section>
  );
}