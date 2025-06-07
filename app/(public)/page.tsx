import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import Image from "next/image";
import { CheckCircle, Shield, Heart, Star, Building, Users } from "lucide-react";

const testimonials = [
  {
    quote: "Hotel Nannies was a lifesaver on our trip to London. The nanny was professional, and our kids loved her. The peace of mind was priceless.",
    author: "The Miller Family",
    rating: 5,
  },
  {
    quote: "The booking process was so simple and intuitive. We found the perfect nanny for our last-minute needs. Highly recommended!",
    author: "James Peterson, CEO",
    rating: 5,
  },
  {
    quote: "As a busy professional, I rely on services that are both high-quality and reliable. Hotel Nannies delivers on both fronts, every time.",
    author: "Dr. Evelyn Reed",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <Image
          src="/images/hero-hotel.png"
          alt="Parents waving goodbye to their child and a caring nanny in a hotel room"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight">
            Exceptional childcare,
            <br />
            effortlessly arranged.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Connect with London's most trusted, vetted, and self-employed nannies for your peace of mind.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <a href="/booking">Find a Nanny</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <Building className="w-10 h-10 text-accent mb-2" />
                    <p className="text-2xl font-bold">5-Star</p>
                    <p className="text-sm text-gray-300">Hotel Partners</p>
                </div>
                <div className="flex flex-col items-center">
                    <Users className="w-10 h-10 text-accent mb-2" />
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-sm text-gray-300">Vetted Professionals</p>
                </div>
                <div className="flex flex-col items-center col-span-2 md:col-span-1">
                    <Heart className="w-10 h-10 text-accent mb-2" />
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-sm text-gray-300">Concierge Support</p>
                </div>
            </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-serif">Find childcare in 3 simple steps</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-6 mb-4 shadow-md">
                <Shield size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold font-serif">1. Post your job</h3>
              <p className="mt-2 text-gray-600 max-w-xs">
                Create your booking request and alert incredible local sitters.
              </p>
            </div>
            <div className="flex flex-col items-center">
               <div className="bg-white rounded-full p-6 mb-4 shadow-md">
                <Users size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold font-serif">2. Choose your sitter</h3>
              <p className="mt-2 text-gray-600 max-w-xs">
                You get to review all the applicants and pick the one you like best.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-6 mb-4 shadow-md">
                <CheckCircle size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold font-serif">3. Pay in a tap</h3>
              <p className="mt-2 text-gray-600 max-w-xs">
                All your sits are tracked, insured and you pay seamlessly in a tap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <Image src="/images/eleanor.jpg" alt="A professional and friendly nanny" width={500} height={500} className="rounded-lg shadow-xl"/>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold font-serif text-primary">Trust is everything</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Our Trust Pillars outline the checks we do and tools we offer to help ensure that only the best nannies thrive on Hotel Nannies.
                    </p>
                    <ul className="mt-6 space-y-4">
                        <li className="flex items-center gap-4">
                            <CheckCircle className="w-8 h-8 text-accent"/>
                            <span className="text-xl font-semibold">Background checks and verification</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <Star className="w-8 h-8 text-accent"/>
                            <span className="text-xl font-semibold">References and reviews</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <Users className="w-8 h-8 text-accent"/>
                            <span className="text-xl font-semibold">Meet-ups and interviews</span>
                        </li>
                    </ul>
                    <Button variant="link" className="mt-4 text-accent p-0">Learn more about our trust pillars &rarr;</Button>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-serif text-center">Don't just take our word for it...</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-current" />
                      ))}
                  </div>
                  <p className="italic text-center text-gray-700">"{testimonial.quote}"</p>
                  <p className="mt-4 font-semibold text-right text-primary">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
