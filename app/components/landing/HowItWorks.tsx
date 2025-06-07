const parentSteps = [
  {
    title: 'Search & Filter',
    description: 'Find nannies by location, availability, and skills',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Book Instantly',
    description: 'Choose time slots and pay securely online',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Stay Connected',
    description: 'Message your nanny and track the session',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const nannySteps = [
  {
    title: 'Create Profile',
    description: 'Upload certifications and set your schedule',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Receive Requests',
    description: 'Get matched with families in your area',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: 'Earn & Grow',
    description: 'Build reputation and increase your earnings',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white dark:bg-slate-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100 tracking-tight"
          >
            How It Works
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Simple steps to get started, whether you&apos;re looking for care or offering your skills.
          </p>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {/* Parents Section */}
          <div>
            <h3
              className="text-3xl font-semibold text-slate-700 dark:text-slate-200 text-center mb-16"
            >
              For Parents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 sm:gap-y-20 place-items-start items-stretch">
              {parentSteps.map((step, index) => (
                <div key={step.title} className="relative group text-center w-full flex flex-col items-center">
                  <div className="absolute -top-8 w-16 h-16 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/40 group-hover:scale-110 transition-transform duration-300 ease-in-out mb-4">
                    <span className="font-bold text-xl">{index + 1}</span>
                  </div>
                  <div className="p-8 pt-12 bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-black/20 border border-slate-100 dark:border-slate-700 hover:shadow-blue-100 dark:hover:shadow-blue-900/30 transition-all duration-300 ease-in-out flex flex-col flex-grow w-full min-h-[280px]">
                    <div className="mx-auto mb-4">
                      {step.icon}
                    </div>
                    <h4 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nannies Section */}
          <div>
            <h3
              className="text-3xl font-semibold text-slate-700 dark:text-slate-200 text-center mb-16"
            >
              For Nannies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 sm:gap-y-20 place-items-start items-stretch">
              {nannySteps.map((step, index) => (
                <div key={step.title} className="relative group text-center w-full flex flex-col items-center">
                  <div className="absolute -top-8 w-16 h-16 bg-gradient-to-tr from-emerald-500 to-emerald-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/40 group-hover:scale-110 transition-transform duration-300 ease-in-out mb-4">
                    <span className="font-bold text-xl">{index + 1}</span>
                  </div>
                  <div className="p-8 pt-12 bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-black/20 border border-slate-100 dark:border-slate-700 hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30 transition-all duration-300 ease-in-out flex flex-col flex-grow w-full min-h-[280px]">
                    <div className="mx-auto mb-4">
                      {step.icon}
                    </div>
                    <h4 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 