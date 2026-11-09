"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How does the 14-day free trial work?",
      answer:
        "You get full access to all FlowSpace features for 14 days without entering any credit card information. At the end of the trial, you can choose a plan that fits your team's needs.",
    },
    {
      question: "Can I upgrade or downgrade my subscription plan anytime?",
      answer:
        "Yes, absolutely. You can upgrade, downgrade, or cancel your plan at any time directly from your workspace dashboard. Changes take effect immediately.",
    },
    {
      question: "What integrations does FlowSpace support out of the box?",
      answer:
        "FlowSpace natively integrates with 100+ popular developer, project management, and business tools including Slack, GitHub, Jira, Hubspot, Google Workspace, and Salesforce.",
    },
    {
      question: "Is my team's data secure?",
      answer:
        "Security is our top priority. FlowSpace enforces end-to-end encryption for data in transit and at rest, complies with SOC2 Type II standard regulations, and offers SSO support.",
    },
    {
      question: "Do you offer custom onboarding and enterprise plans?",
      answer:
        "Yes! Our Enterprise plan includes dedicated onboarding support, custom workflow builds, customized SLA guarantees, and tailored pricing options.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="border border-border rounded-xl overflow-hidden bg-card transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between font-semibold text-lg hover:bg-muted/50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}