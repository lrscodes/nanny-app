"use client";

import { useState } from 'react';

const faqs = [
  {
    question: 'How are nannies verified?',
    answer: 'All nannies undergo a thorough verification process including identity checks, background screening, and reference verification. We also verify their certifications and qualifications to ensure they meet our high standards.',
  },
  {
    question: 'What if I need to cancel?',
    answer: 'We understand that plans can change. You can cancel your booking up to 24 hours before the scheduled time without any charge. For cancellations within 24 hours, a small fee may apply.',
  },
  {
    question: 'How does payment work?',
    answer: 'All payments are processed securely through our platform. You can pay using credit/debit cards or other digital payment methods. The payment is only released to the nanny after the service is completed.',
  },
  {
    question: 'Is there customer support?',
    answer: 'Yes, our customer support team is available 24/7 to assist you with any questions or concerns. You can reach us through the app, email, or phone.',
  },
  {
    question: 'How far in advance can I book?',
    answer: 'You can book a nanny up to 30 days in advance. For last-minute bookings, we have nannies available on short notice, subject to availability.',
  },
  {
    question: "What if the nanny doesn't show up?",
    answer: "In the rare event that a nanny doesn't show up, we have a backup system in place. We'll immediately try to find a replacement nanny, and if we can't, you'll receive a full refund.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-slate-50 dark:bg-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100 tracking-tight"
          >
            Frequently Asked Questions
          </h2>
          
          <p
            className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Everything you need to know about ChildCareMatch
          </p>
        </div>

        <div className="mt-16 sm:mt-20 max-w-3xl mx-auto space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg transition-all duration-300 ease-in-out ${
                openIndex === index ? 'shadow-xl dark:shadow-slate-700/50 ring-1 ring-blue-500/50 dark:ring-blue-500/30' : ''
              }`}
            >
              <button
                className="group p-5 sm:p-6 w-full flex justify-between items-center text-left cursor-pointer"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-md sm:text-lg font-semibold text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transform transition-transform duration-300 ease-in-out ${
                    openIndex === index ? 'text-blue-600 dark:text-blue-400 rotate-180' : 'text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 