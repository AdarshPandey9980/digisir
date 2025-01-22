import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "1 Year Plan",
    price: 99,
    duration: "per year",
    description: "Perfect for getting started",
    features: ["Access to all basic features", "Up to 100 student profiles", "5GB cloud storage", "Email support"],
  },
  {
    name: "2 Year Plan",
    price: 179,
    duration: "per 2 years",
    description: "Great value for growing educators",
    features: [
      "All features in 1 Year Plan",
      "Up to 500 student profiles",
      "20GB cloud storage",
      "Priority email & chat support",
      "Advanced analytics",
    ],
  },
  {
    name: "5 Year Plan",
    price: 399,
    duration: "per 5 years",
    description: "Best value for established institutions",
    features: [
      "All features in 2 Year Plan",
      "Unlimited student profiles",
      "100GB cloud storage",
      "24/7 phone, email & chat support",
      "Custom integrations",
      "Dedicated account manager",
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#002B5B] mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan to empower your teaching journey with DigiSir
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`flex flex-col ${index === 1 ? "border-blue-500 border-2" : ""}`}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#002B5B]">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#002B5B]">${plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.duration}</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#002B5B] hover:bg-blue-700 text-white">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

