import React from 'react';
import { WidgetMessageDoctor } from '../components/WidgetMessageDoctor'
import { WidgetInsurances } from '../components/WidgetInsurances'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 space-y-8">
      <WidgetMessageDoctor
        title="Message Doctor"
        subheading="Have a quick question?"
        description="f"
        className=""
      />
      <WidgetInsurances
        selectedInsurances={[
        {
                "name": "Aetna",
                "logo": "/Storefront/Doctor Widget/Insurances/aetna.svg"
        },
        {
                "name": "Cigna",
                "logo": "/Storefront/Doctor Widget/Insurances/cigna.svg"
        },
        {
                "name": "Humana",
                "logo": "/Storefront/Doctor Widget/Insurances/humana.svg"
        },
        {
                "name": "Empire Life",
                "logo": "/Storefront/Doctor Widget/Insurances/empirelife.svg"
        }
]}
        paymentOptions={[
        {
                "name": "Insurance copay/deductible"
        },
        {
                "name": "c"
        },
        {
                "name": "Flexible Spending Account (FSA)"
        },
        {
                "name": "Cash/Credit card"
        },
        {
                "name": "Payment plans available"
        }
]}
        insuranceQuestions={{
        "description": "Our billing team is available to help with insurance questions and payment arrangements.",
        "phone": "(555) 123-4567",
        "email": "billing@drmitchell.com",
        "hours": "Mon-Fri 9AM-5PM EST"
}}
        className=""
      />
    </main>
  );
}