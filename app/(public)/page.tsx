import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import Image from "next/image";
import { CheckCircle, Shield, Heart } from "lucide-react";

const featuredNannies = [
  {
    name: "Eleanor Vance",
    image: "https://placehold.co/400x400/001f3f/FDFBF7?text=Eleanor",
    bio: "A compassionate and experienced caregiver with a background in early childhood education.",
  },
  {
    name: "Sophia Reed",
    image: "https://placehold.co/400x400/001f3f/FDFBF7?text=Sophia",
    bio: "Brings joy and creativity to every interaction, specializing in arts and crafts.",
  },
  {
    name: "Isabella Chen",
    image: "https://placehold.co/400x400/001f3f/FDFBF7?text=Isabella",
    bio: "A multilingual nanny with a passion for cultural exchange and learning.",
  },
  {
    name: "Amelia Rose",
    image: "https://placehold.co/400x400/001f3f/FDFBF7?text=Amelia",
    bio: "Focused on outdoor activities and healthy habits for active children.",
  },
];

const testimonials = [
  {
    quote: "Hotel Nannies was a lifesaver on our trip to London. The nanny was professional, and our kids loved her. The peace of mind was priceless.",
    author: "The Miller Family",
  },
  {
    quote: "The booking process was so simple and intuitive. We found the perfect nanny for our last-minute needs. Highly recommended!",
    author: "James Peterson, CEO",
  },
  {
    quote: "As a busy professional, I rely on services that are both high-quality and reliable. Hotel Nannies delivers on both fronts, every time.",
    author: "Dr. Evelyn Reed",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-a-mother-and-her-daughter-spending-time-together-5847/1080p.mp4"
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
              <a href="#find-a-nanny">Find a Nanny</a>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-serif">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">Three simple steps to finding your ideal nanny.</p>
          <div className="mt-12 grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-primary text-white rounded-full p-6 mb-4">
                <Heart size={40} />
              </div>
              <h3 className="text-2xl font-semibold font-serif">1. Search</h3>
              <p className="mt-2 text-gray-600">
                Browse profiles of our carefully vetted nannies. Filter by availability, skills, and experience to find your perfect match.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-white rounded-full p-6 mb-4">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-semibold font-serif">2. Book</h3>
              <p className="mt-2 text-gray-600">
                Secure your booking in minutes with our seamless and secure payment system. Instant confirmation for your peace of mind.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-white rounded-full p-6 mb-4">
                <Shield size={40} />
              </div>
              <h3 className="text-2xl font-semibold font-serif">3. Relax</h3>
              <p className="mt-2 text-gray-600">
                Enjoy your time knowing your children are in the safe, capable hands of a professional nanny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Nannies Section */}
      <section id="find-a-nanny" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-serif text-center">Featured Nannies</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* TODO: Replace with Supabase call to get featured nannies */}
            {featuredNannies.map((nanny) => (
              <Card key={nanny.name} className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={nanny.image}
                    alt={nanny.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl font-serif">{nanny.name}</CardTitle>
                  <p className="mt-2 text-sm text-gray-600">{nanny.bio}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="w-full">
                    <a href="#">View Profile</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg">Explore All Nannies</Button>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-serif">Your Trust & Safety is Our Priority</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            We are committed to the highest standards of safety. Every nanny on our platform undergoes a rigorous vetting process.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <Shield size={40} className="text-accent mb-4" />
              <h3 className="text-2xl font-semibold font-serif">Enhanced DBS Checks</h3>
              <p className="mt-2 text-gray-300">
                Every nanny holds an enhanced Disclosure and Barring Service (DBS) check, updated annually.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle size={40} className="text-accent mb-4" />
              <h3 className="text-2xl font-semibold font-serif">In-Person Interviews</h3>
              <p className="mt-2 text-gray-300">
                We personally interview every applicant to verify their experience, professionalism, and suitability.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Heart size={40} className="text-accent mb-4" />
              <h3 className="text-2xl font-semibold font-serif">Reference Verification</h3>
              <p className="mt-2 text-gray-300">
                We conduct thorough reference checks to ensure a history of reliable and exceptional care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-serif text-center">What Our Clients Say</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TODO: Replace with Supabase call to get testimonials */}
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="italic text-gray-700">"{testimonial.quote}"</p>
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
