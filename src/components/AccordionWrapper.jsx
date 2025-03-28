import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TermsAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="general">
        <AccordionTrigger className="text-xl font-semibold text-[#20513F]">
          General Conditions
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 pl-3 text-gray-700">
            <div>
              <h4 className="font-medium">Travel Documentation</h4>
              <p>
                Customers are responsible for ensuring that they have the
                necessary travel documents, including passports, visas, and
                vaccinations, for the destinations included in the tour.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Health and Safety</h4>
              <p>
                Customers are responsible for informing us of any medical
                conditions, allergies, or dietary requirements that may affect
                their participation in the tour. We will endeavor to accommodate
                these needs but cannot guarantee that all requests will be met.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Responsibility</h4>
              <p>
                Bromo AdventureLand Tour & Travel acts only as an agent for the
                participants in all matters connected with transportation,
                accommodation, or other services, and as such, we assume no
                liability for injury, damage, loss, accident, delay, or
                irregularity.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Governing Law</h4>
              <p>
                These Terms & Conditions are governed by the laws of the
                Republic of Indonesia, and any disputes shall be resolved under
                the jurisdiction of the Indonesian courts.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="reservations">
        <AccordionTrigger className="text-xl font-semibold text-[#20513F]">
          Reservations
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 pl-3 text-gray-700">
            <div>
              <h4 className="font-medium">Booking Procedure</h4>
              <p>
                All reservations must be made through our official website, via
                email, or over the phone. Each reservation will be confirmed via
                email within 24 hours of the booking.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Participant Information</h4>
              <p>
                Customers are required to provide accurate and complete
                information regarding the identity, contact details, and any
                special requirements (if applicable) of each tour participant at
                the time of booking.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Availability</h4>
              <p>
                All reservations are subject to availability at the time of
                booking. We reserve the right to refuse or cancel any
                reservation that does not meet our conditions.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Changes in Reservation</h4>
              <p>
                Any request for changes in reservation, including changes in
                travel dates, accommodations, or other aspects, must be
                communicated in writing. Changes are subject to availability and
                may incur additional fees.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="payment">
        <AccordionTrigger className="text-xl font-semibold text-[#20513F]">
          Deposit, Payment & Cancellation
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 pl-3 text-gray-700">
            <div>
              <h4 className="font-medium">Deposit</h4>
              <p>
                A deposit of 30% of the total tour cost is required at the time
                of booking to secure the reservation. This deposit is
                non-refundable.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Full Payment</h4>
              <p>
                The remaining balance must be paid in full no later than 14 days
                before the departure date. If full payment is not received by
                the specified date, we reserve the right to cancel the
                reservation, and the deposit will be forfeited.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Payment Methods</h4>
              <p>
                We accept payments via bank transfer, credit card, or any other
                method specified on our website. Any transaction fees are the
                responsibility of the customer.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Cancellation by Company</h4>
              <p>
                We reserve the right to cancel a tour if the minimum number of
                participants is not met or if conditions are deemed unsafe, with
                notice provided at least 7 days before departure. In this case,
                customers will receive a full refund.
              </p>
            </div>
            <div>
              <h4 className="font-medium">No-shows</h4>
              <p>
                No refunds will be provided for no-shows or failure to join the
                tour on the scheduled departure date.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Cancellation by Customer</h4>
              <ul className="list-disc pl-6">
                <li>
                  Cancellations made more than 14 days before the departure date
                  will incur a cancellation fee of 50% of the total tour cost.
                </li>
                <li>
                  Cancellations made within 14 days of the departure date will
                  incur a cancellation fee of 100% of the total tour cost.
                </li>
              </ul>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="force-majeure">
        <AccordionTrigger className="text-xl font-semibold text-[#20513F]">
          Force Majeure
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 pl-3 text-gray-700">
            <div>
              <h4 className="font-medium">Definition of Force Majeure</h4>
              <p>
                Force Majeure refers to events beyond our control, including but
                not limited to natural disasters, war, civil unrest, epidemics,
                fires, airport closures, strikes, government actions, or other
                emergencies that may affect the execution of the tour.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Liability</h4>
              <p>
                We are not liable for delays, changes, or cancellations caused
                by force majeure events. In the event of force majeure, we will
                make our best efforts to offer alternative dates or revised
                itineraries.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Refunds</h4>
              <p>
                No refunds will be issued for tours canceled or altered due to
                force majeure. However, we will work with relevant parties to
                seek the best possible resolution for the customer, which may
                include rescheduling or offering alternative services.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Travel Insurance</h4>
              <p>
                We strongly recommend that customers purchase travel insurance
                that covers cancellations, delays, and other unexpected events,
                including those related to force majeure.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="faq-1">
        <AccordionTrigger className="text-lg font-medium text-[#20513F]">
          What should I bring on the tour?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-700">
            We recommend bringing warm clothing (especially for sunrise tours),
            comfortable walking shoes, sunscreen, a hat, water bottle, camera,
            and any necessary medications. A detailed packing list will be
            provided upon booking.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="faq-2">
        <AccordionTrigger className="text-lg font-medium text-[#20513F]">
          Is the tour suitable for children?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-700">
            Most of our tours are suitable for children aged 8 and above.
            However, some activities may have age restrictions due to physical
            demands or safety concerns. Please inquire about specific tours if
            you're traveling with young children.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="faq-3">
        <AccordionTrigger className="text-lg font-medium text-[#20513F]">
          How fit do I need to be for these tours?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-700">
            Our tours vary in physical demands. The Bromo sunrise tour involves
            moderate walking and climbing stairs, while the Ijen Crater tour
            requires a more challenging hike. Please check the physical
            requirements for each specific tour or contact us for advice.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="faq-4">
        <AccordionTrigger className="text-lg font-medium text-[#20513F]">
          Can you arrange airport transfers?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-700">
            Yes, we offer airport transfers from major airports in East Java
            (Surabaya, Malang) to your hotel or directly to the tour starting
            point for an additional fee. Please specify your requirements during
            booking.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="faq-5">
        <AccordionTrigger className="text-lg font-medium text-[#20513F]">
          What happens in case of bad weather?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-700">
            Tours proceed regardless of weather conditions unless safety is
            compromised. In case of severe weather that prevents the tour from
            proceeding, we will offer alternative activities or reschedule when
            possible. No refunds are provided for weather-related visibility
            issues (such as fog obscuring the sunrise view).
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
