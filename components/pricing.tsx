"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Check } from "lucide-react"

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams starting out.",
      priceMonthly: 19,
      priceAnnual: 15,
      features: [
        "Up to 5 team members",
        "1,000 automated tasks / mo",
        "Standard integrations",
        "Email support",
        "Basic analytics",
      ],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Pro",
      description: "Ideal for growing teams with complex workflow needs.",
      priceMonthly: 49,
      priceAnnual: 39,
      features: [
        "Up to 20 team members",
        "10,000 automated tasks / mo",
        "All 100+ integrations",
        "Priority support",
        "Advanced AI Insights",
        "Custom webhooks",
      ],
      popular: true,
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      description: "Custom capabilities and dedicated support for scale.",
      priceMonthly: 149,
      priceAnnual: 119,
      features: [
        "Unlimited team members",
        "Unlimited automated tasks",
        "Custom integrations",
        "Dedicated account manager",
        "SOC2 & Custom SLA",
        "Role-based access controls",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Choose the perfect plan for your team. Scale up or down at any time.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center p-1 rounded-full bg-background border border-border">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                !isAnnual ? "bg-primary text-white" : "text-muted-foreground"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                isAnnual ? "bg-primary text-white" : "text-muted-foreground"
              }`}
            >
              Annual Billing <span className="text-xs text-green-400 font-bold ml-1">(Save 20%)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl bg-card border ${
                plan.popular ? "border-primary shadow-xl ring-2 ring-primary/20" : "border-border shadow-sm"
              } flex flex-col justify-between`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">
                    ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-muted-foreground">/ month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={plan.popular ? "gradient" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}