import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Daytime Rate",
    price: "£25",
    period: "/ hour",
    description: "Standard care from 7am to 7pm.",
    features: [
      "Standard childcare activities",
      "Meal preparation for children",
      "Light tidying of play areas",
    ],
    cta: "Book Now",
    primary: true,
  },
  {
    name: "Evening & Weekend Rate",
    price: "£30",
    period: "/ hour",
    description: "For care outside of standard daytime hours.",
    features: [
      "All features of Daytime Rate",
      "Flexible evening hours",
      "Weekend availability",
    ],
    cta: "Book Now",
  },
  {
    name: "Overnight Care",
    price: "£250",
    period: "/ night",
    description: "Comprehensive overnight care for full peace of mind.",
    features: [
      "24-hour on-call nanny",
      "Morning routine assistance",
      "Includes all meals and activities",
    ],
    cta: "Contact Us for Details",
  },
];

const supplementaryFees = [
  {
    name: "Additional Child",
    fee: "+£5 / hour",
    description: "For families requiring care for more than two children.",
  },
  {
    name: "Public Holidays",
    fee: "1.5x Standard Rate",
    description: "Special rates apply for UK public holidays.",
  },
  {
    name: "Emergency Booking",
    fee: "+£10 / booking",
    description: "For bookings made with less than 24 hours' notice.",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-6 py-20 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif">Transparent Pricing</h1>
          <p className="mt-4 text-lg text-gray-600">
            Simple, upfront pricing with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col ${
                tier.primary ? "border-primary border-2" : ""
              }`}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-serif">{tier.name}</CardTitle>
                <p className="text-4xl font-bold mt-4">
                  {tier.price}
                  <span className="text-lg font-normal text-gray-500">{tier.period}</span>
                </p>
                <p className="mt-2 text-gray-600">{tier.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6">
                <Button
                  variant={tier.primary ? "primary" : "secondary"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold font-serif text-center">
            Supplementary Fees
          </h2>
          <div className="mt-8 max-w-2xl mx-auto">
            <ul className="space-y-4">
              {supplementaryFees.map((fee) => (
                <li
                  key={fee.name}
                  className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm"
                >
                  <div>
                    <p className="font-semibold text-primary">{fee.name}</p>
                    <p className="text-sm text-gray-500">{fee.description}</p>
                  </div>
                  <p className="font-bold text-lg text-primary">{fee.fee}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 