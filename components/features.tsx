import { Zap, Shield, Sparkles, BarChart3, Layers, Users } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Real-time Automation",
      description: "Trigger complex custom workflows automatically based on user events or scheduled times.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption, SOC2 compliance, and role-based access control to keep data safe.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "AI-Powered Insights",
      description: "Leverage built-in machine learning models to detect bottlenecks and optimize processes.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards with deep metrics to track team execution speed and efficiency.",
    },
    {
      icon: <Layers className="h-6 w-6 text-primary" />,
      title: "100+ Integrations",
      description: "Connect seamlessly with Slack, GitHub, Jira, Salesforce, Hubspot, and many more tools.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Seamless Collaboration",
      description: "Empower cross-functional teams to build, edit, and share automated flows in real-time.",
    },
  ]

  return (
    <section id="features" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-gradient">Scale Fast</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            FlowSpace provides all the essential tools and automations required to transform team productivity and eliminate manual overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}