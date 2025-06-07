import { Shield, CheckCircle, FileText } from "lucide-react";

export default function CompliancePage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-6 py-20 pt-32">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold font-serif">Compliance & Vetting</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to your family's safety is absolute. Learn about the rigorous standards every nanny on our platform must meet.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-4">
                Our Vetting Philosophy
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Trust is the cornerstone of our service. We believe that peace of mind comes from knowing your child is in the care of a true professional who has been thoroughly and thoughtfully vetted. Our multi-layered process is designed to be one of the most comprehensive in the industry, ensuring that only the most qualified, reliable, and trustworthy individuals join the Hotel Nannies platform.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                The Vetting Process: A Step-by-Step Guide
              </h2>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Shield className="w-10 h-10 text-accent mr-6 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">1. Enhanced DBS Check</h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      Every nanny is required to possess an Enhanced Disclosure and Barring Service (DBS) certificate. This is the most detailed level of criminal record check available in the UK. We verify that the certificate is recent (issued within the last 12 months) or that the nanny is subscribed to the DBS Update Service, allowing for real-time status checks.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-10 h-10 text-accent mr-6 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">2. In-Depth Personal Interview</h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      We conduct a face-to-face or video interview with every candidate. This allows us to assess their professionalism, communication skills, and passion for childcare. We delve into their experience, asking scenario-based questions to understand their approach to common childcare situations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FileText className="w-10 h-10 text-accent mr-6 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">3. Professional Reference Checks</h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      We require a minimum of two professional childcare-related references. Our team personally contacts these referees to verify the candidate's work history, reliability, and character. We ask detailed questions about their performance and suitability for working with children in private settings.
                    </p>
                  </div>
                </li>
                 <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FileText className="w-10 h-10 text-accent mr-6 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">4. Identity & Right-to-Work Verification</h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      We meticulously check each nanny's identity documents (e.g., passport, driving license) and verify their legal right to work as self-employed in the UK. This is crucial for compliance and your security.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="border-t pt-8 text-center">
                <h2 className="text-3xl font-bold font-serif text-primary mb-4">
                    Our Unwavering Commitment
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Safety is not a feature; it is the foundation of our platform. We continuously review and enhance our processes to ensure we are always exceeding industry standards. If you have any questions about our compliance and vetting procedures, please do not hesitate to contact us.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 