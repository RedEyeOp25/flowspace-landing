"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastPrimitivesProvider = ToastPrimitives.Provider
const ToastPrimitivesViewport = ToastPrimitives.Viewport
const ToastPrimitivesRoot = ToastPrimitives.Root
const ToastPrimitivesTitle = ToastPrimitives.Title
const ToastPrimitivesDescription = ToastPrimitives.Description
const ToastPrimitivesAction = ToastPrimitives.Action
const ToastPrimitivesClose = ToastPrimitives.Close

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-border p-6 pr-8 shadow-lg backdrop-blur-sm transition-all data-[swipe=translate-x]:transition-none data-[swipe=translate-x]:duration-200 data-[swipe=translate-x]:will-change-transform data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=destroyed]:hidden sm:translate-x-0",
  {
    variants: {
      variant: {
        default: "bg-popover text-popover-foreground",
        destructive:
          "destructive group-destructive border-destructive/50 bg-destructive/10 text-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const ToastProvider = ToastPrimitivesProvider
const ToastViewport = ToastPrimitivesViewport

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitivesRoot>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitivesRoot> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitivesRoot
      ref={ref}
      className={cn(toastVariants({ variant, className }))}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitivesRoot.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitivesTitle>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitivesTitle>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitivesTitle
      ref={ref}
      className={cn(
        "text-sm font-semibold",
        "group-destructive:text-destructive",
        className
      )}
      {...props}
    />
  )
})
ToastTitle.displayName = ToastPrimitivesTitle.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitivesDescription>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitivesDescription>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitivesDescription
      ref={ref}
      className={cn(
        "text-sm text-muted-foreground",
        "group-destructive:text-destructive/90",
        className
      )}
      {...props}
    />
  )
})
ToastDescription.displayName = ToastPrimitivesDescription.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitivesClose>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitivesClose>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitivesClose
      ref={ref}
      className={cn(
        "absolute right-2 top-2 rounded-md p-1 text-muted-foreground opacity-0 transition-opacity hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-ring",
        "group-hover:opacity-100",
        className
      )}
      toast-close=""
      {...props}
    >
      <X className="h-4 w-4" />
    </ToastPrimitivesClose>
  )
})
ToastClose.displayName = ToastPrimitivesClose.displayName

export {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
}