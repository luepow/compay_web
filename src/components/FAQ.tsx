import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What are the requirements to open an account?',
    answer: 'You need to be 18+ years old, provide valid government-issued ID, proof of address, and complete our KYC verification process. Business accounts require additional documentation.'
  },
  {
    question: 'What are the sending and receiving limits?',
    answer: 'Personal accounts start with $5,000/day and $25,000/month limits. Business accounts have higher limits based on verification level and transaction history.'
  },
  {
    question: 'How long do international transfers take?',
    answer: 'Most transfers complete within 1-6 hours depending on the destination country and local banking hours. Some regions may take up to 24 hours.'
  },
  {
    question: 'What are your fees and exchange rates?',
    answer: 'We offer competitive rates with transparent pricing. Fees vary by transfer amount and destination. Check our fee schedule in the secure portal for current rates.'
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can reach us at support@compay.net or through the secure portal. Our support team is available Monday-Friday, 9 AM to 6 PM EST.'
  },
  {
    question: 'Is my money safe with ComPay?',
    answer: 'Yes. We are a licensed MSB in Florida, follow strict AML/KYC policies, use bank-level encryption, and segregate customer funds in regulated financial institutions.'
  },
  {
    question: 'Which countries do you serve?',
    answer: 'We serve most countries worldwide with varying service levels. Some restricted countries apply due to regulatory requirements. Check availability during account setup.'
  },
  {
    question: 'Do you offer business API integration?',
    answer: 'Yes, we provide comprehensive REST APIs, webhooks, and integration support for businesses. Contact our sales team for technical documentation and pricing.'
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B1B1B] dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about ComPay
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F7F9FB] dark:bg-gray-700 rounded-2xl border border-gray-100 dark:border-gray-600 overflow-hidden hover:shadow-lg transition-all duration-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#1B1B1B] dark:text-white pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-[#2BB3E4] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#2BB3E4] flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;