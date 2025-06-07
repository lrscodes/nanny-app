import Image from 'next/image';

const stats = [
  { label: 'Verified Nannies', value: '1,000+' },
  { label: 'Successful Bookings', value: '5,000+' },
  { label: 'Average Rating', value: '4.9★' },
  { label: 'Support Available', value: '24/7' },
];

const testimonials = [
  {
    content: "ChildCareMatch has been a lifesaver for our family. We can find trusted childcare at a moment's notice.",
    author: "Sarah Johnson",
    role: "Working Mother",
    image: "/images/testimonial-1.jpg",
  },
  {
    content: "As a nanny, I love the flexibility and the ability to connect with great families in my area.",
    author: "Emily Chen",
    role: "Professional Nanny",
    image: "/images/testimonial-2.jpg",
  },
  {
    content: "The verification process gives us peace of mind, and the booking system is incredibly easy to use.",
    author: "Michael Rodriguez",
    role: "Father of Two",
    image: "/images/testimonial-3.jpg",
  },
];

const SocialProof = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white dark:bg-slate-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics */}
        <div className="grid grid-cols-2 gap-y-10 sm:gap-8 md:grid-cols-4 mb-20 sm:mb-28 lg:mb-32">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-4">
              <div className="text-5xl sm:text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-1 tracking-tight [text-shadow:_0_2px_4px_rgb(0_0_0_/_10%)] dark:[text-shadow:_0_2px_4px_rgb(0_0_0_/_20%)]">
                {stat.value}
              </div>
              <div className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100 tracking-tight mb-16 sm:mb-20"
          >
            What Our Users Say
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="min-h-[320px] p-6 sm:p-8 bg-slate-50 dark:bg-slate-800 rounded-xl shadow-xl dark:shadow-black/25 border border-slate-200 dark:border-slate-700 flex flex-col hover:shadow-2xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/40 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4 sm:mb-5">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-lg ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-800 ring-blue-500 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      sizes="(max-width: 640px) 56px, 64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-100 text-left">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium text-left">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed flex-grow text-left">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof; 