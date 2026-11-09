"use client"

import { Button } from "./ui/button"
import { ArrowRight, Play, CheckCircle2 } from "lucide-react"

export function Hero() {
  const highlights = [
    "No credit card required",
    "14-day free trial",
    "Cancel anytime",
  ]

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl -z-10 opacity-50" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-secondary/30 rounded-full blur-2xl -z-10" />

      <div className="container mx-auto px-4 text-center">
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-primary" />
          Announcing FlowSpace 2.0 • Read More
          <ArrowRight className="h-4 w-4" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto mb-6">
          Automate Workflows. <br />
          <span className="text-gradient">Scale Your Productivity.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Streamline your team's business processes, connect your tools, and unleash peak operational speed with FlowSpace's intelligent automation suite.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" variant="gradient" className="w-full sm:w-auto text-base">
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
            <Play className="mr-2 h-4 w-4" /> Watch Demo
          </Button>
        </div>

        {/* Key Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Dashboard Preview / Mockup */}
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-border bg-background/50 p-2 shadow-2xl backdrop-blur-xl">
          <div className="rounded-xl overflow-hidden border border-border/50 bg-card">
            <div className="h-8 bg-muted/50 border-b border-border/50 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto text-xs text-muted-foreground font-mono bg-background/50 px-4 py-0.5 rounded-md border border-border/40">
                app.flowspace.com/dashboard
              </div>
            </div>
            
            {/* Visual Dashboard Interface Placeholder */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="text-xs text-muted-foreground mb-1">Active Automations</div>
                <div className="text-2xl font-bold">1,284</div>
                <div className="text-xs text-green-500 mt-2">↑ 12% from last month</div>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="text-xs text-muted-foreground mb-1">Hours Saved</div>
                <div className="text-2xl font-bold">342 hrs</div>
                <div className="text-xs text-green-500 mt-2">↑ 8% from last month</div>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="text-xs text-muted-foreground mb-1">Team Members</div>
                <div className="text-2xl font-bold">24 Active</div>
                <div className="text-xs text-muted-foreground mt-2">Across 3 workspaces</div>
              </div>
              <div className="md:col-span-3 p-6 rounded-lg bg-background border border-border h-64 flex flex-col justify-between">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-semibold text-sm">Workflow Performance Analytics</div>
                  <div className="text-xs text-muted-foreground">Last 30 Days</div>
                </div>
                <div className="h-full flex items-end gap-2 pt-8">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/20 hover:bg-primary/40 rounded-t transition-all" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}