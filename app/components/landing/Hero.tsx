import { Button } from "@/components/ui/Button";
import Link from "next/link";
// Button import is not used, can be removed if no other buttons are added here.
// import Button from '../ui/Button'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-gray-800 dark:to-sky-900">
      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div
          className="space-y-8 md:space-y-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white tracking-tight">
            Find Trusted Childcare in{' '}
            <span className="text-blue-600 dark:text-blue-400">Minutes</span>, Not Days
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-xl mx-auto">
            Connect with verified, professional nannies in your area. Book instantly, message directly, pay securely.
          </p>

          {/* Enhanced Button Container */}
          <div className="w-full max-w-xs sm:max-w-sm mx-auto border border-blue-300 dark:border-blue-700 rounded-full overflow-hidden my-10 md:my-12 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <a 
              href="#" // Replace with actual link
              className="block text-center py-4 sm:py-4 text-lg sm:text-xl font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-800 dark:hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-200 ease-in-out"
            >
              Find a Nanny
            </a>
            <div className="border-t border-blue-300 dark:border-blue-700"></div>
            <a 
              href="#" // Replace with actual link
              className="block text-center py-4 sm:py-4 text-lg sm:text-xl font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-800 dark:hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-200 ease-in-out"
            >
              Become a Nanny
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-lg">Verified Nannies</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg">Instant Booking</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-lg">Secure Payments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 