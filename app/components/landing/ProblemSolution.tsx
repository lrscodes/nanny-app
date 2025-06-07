const problems = [
  {
    title: 'Last-minute work meetings',
    description: 'Unexpected work commitments leaving you scrambling for childcare',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Travel emergencies',
    description: 'Family trips or business travel with no childcare plan',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Date night planning',
    description: 'Finding reliable childcare for your much-needed couple time',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'School holiday coverage',
    description: 'Managing childcare during school breaks and holidays',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const ProblemSolution = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-slate-50 dark:bg-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100 tracking-tight"
          >
            The Childcare Challenge Every Parent Faces
          </h2>
          
          <p
            className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            ChildCareMatch connects you with vetted nannies who are available when you need them most.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="relative p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl shadow-slate-200/70 dark:shadow-black/30 border border-slate-200 dark:border-slate-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 transition-all duration-300 ease-in-out group"
            >
              <div className="absolute -top-7 -left-7 w-14 h-14 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/40 group-hover:scale-105 transition-transform duration-300 ease-in-out">
                {problem.icon}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-800 dark:text-slate-100">
                {problem.title}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution; 