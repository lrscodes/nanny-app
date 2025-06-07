import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/Accordion";
  
  const clientFaqs = [
    {
      question: "How do you vet your nannies?",
      answer:
        "Every nanny on our platform undergoes a rigorous vetting process, including Enhanced DBS checks, in-person interviews, and thorough reference checks. Your child's safety is our absolute priority.",
    },
    {
      question: "Can I book a nanny at the last minute?",
      answer:
        "Yes, our platform is designed to accommodate last-minute bookings. While we recommend booking in advance, we can often find you a qualified nanny with just a few hours' notice.",
    },
    {
      question: "What are your hourly rates?",
      answer:
        "Our pricing is transparent and competitive. Please visit our Pricing page for a detailed breakdown of our hourly rates and any supplementary fees for holidays or additional children.",
    },
  ];
  
  const nannyFaqs = [
    {
      question: "How do I join the Hotel Nannies platform?",
      answer:
        "We are always looking for exceptional, self-employed nannies to join our platform. Please visit our 'For Nannies' page to learn about our requirements and start your application.",
    },
    {
      question: "How do I get paid?",
      answer:
        "Payments are processed securely through our platform. Once a booking is completed, the funds are transferred directly to your connected bank account within 3-5 business days.",
    },
    {
      question: "Am I self-employed?",
      answer:
        "Yes, all nannies on our platform operate on a self-employed basis. This gives you the flexibility to set your own schedule and manage your work-life balance.",
    },
  ];
  
  export default function FaqPage() {
    return (
      <div className="bg-secondary">
        <div className="container mx-auto px-6 py-20 pt-32">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold font-serif">Frequently Asked Questions</h1>
            <p className="mt-4 text-lg text-gray-600">
              Find answers to common questions below.
            </p>
          </div>
  
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                For Our Clients
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {clientFaqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
  
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                For Our Nannies
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {nannyFaqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    );
  } 