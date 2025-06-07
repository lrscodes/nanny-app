import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-secondary">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[300px]">
        <Image
          src="https://placehold.co/1200x600/001f3f/FDFBF7?text=Our+Story" // Placeholder image
          alt="A caring nanny playing with a happy child"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif text-white text-center">
            Our Story
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg -mt-24 relative z-10">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-4">
                Founded on Trust, Built for Families
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hotel Nannies was born from a simple observation: finding exceptional, reliable childcare in a new city, especially on short notice, was a significant challenge for busy parents. Whether for a crucial business meeting, a well-deserved evening out, or a spontaneous need, parents required a service they could trust implicitly.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Our founder, a former hotel concierge and a parent herself, experienced this gap firsthand. She envisioned a platform that would bridge this divide, connecting discerning parents with professional, vetted, and passionate nannies. A service that offered not just convenience, but complete peace of mind.
              </p>
            </div>
            
            <div className="border-t pt-8">
              <h2 className="text-3xl font-bold font-serif text-primary mb-4">
                Our Mission & Values
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to empower parents to live their lives to the fullest, knowing their children are in the safest, most capable hands. We are guided by three core principles:
              </p>
              <ul className="mt-6 space-y-4 list-disc list-inside text-lg text-gray-700">
                <li>
                  <span className="font-semibold">Uncompromising Safety:</span> Our rigorous vetting process is the bedrock of our platform. We never compromise on safety.
                </li>
                <li>
                  <span className="font-semibold">Exceptional Quality:</span> We partner with experienced, passionate childcare professionals who are dedicated to their craft.
                </li>
                <li>
                  <span className="font-semibold">Effortless Experience:</span> From booking to payment, we&apos;ve designed every aspect of our service to be seamless, intuitive, and stress-free.
                </li>
              </ul>
            </div>

            <div className="border-t pt-8 text-center">
                <h2 className="text-3xl font-bold font-serif text-primary mb-4">
                    Join Our Community
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Whether you are a family seeking exceptional care or a professional nanny looking to connect with great families, we invite you to join the Hotel Nannies community. Together, we are setting a new standard for childcare in London.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 