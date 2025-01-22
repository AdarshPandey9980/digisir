import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12" id="faq">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#002B5B]">For more understanding, visit FAQs</h2>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1" className="border-none rounded-lg bg-[#F8F9FA] px-6">
          <AccordionTrigger className="text-[#002B5B] font-medium hover:no-underline">
            Will the app have my coaching name?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Yes, you can customize the app with your coaching name and branding.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-none rounded-lg bg-[#F8F9FA] px-6">
          <AccordionTrigger className="text-[#002B5B] font-medium hover:no-underline">
            Can we add offline students in our app?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Yes, you can add both online and offline students to manage all your students in one place.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-none rounded-lg bg-[#F8F9FA] px-6">
          <AccordionTrigger className="text-[#002B5B] font-medium hover:no-underline">
            Any limitation on the number of students that can be added?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            There are no strict limitations on the number of students you can add to the platform.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-none rounded-lg bg-[#F8F9FA] px-6">
          <AccordionTrigger className="text-[#002B5B] font-medium hover:no-underline">
            How to start without recorded content?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            You can start by creating live sessions and gradually add recorded content as you develop your course
            materials.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

