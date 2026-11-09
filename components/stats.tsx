export function Stats() {
  const stats = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "10M+", label: "Tasks Automated Daily" },
    { value: "500+", label: "Global Enterprise Clients" },
    { value: "4.9/5", label: "Customer Satisfaction" },
  ]

  return (
    <section className="py-16 border-y border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl md:text-5xl font-extrabold text-gradient">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}