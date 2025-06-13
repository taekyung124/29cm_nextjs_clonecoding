import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        text:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        round:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        flex:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        link: "text-primary underline-offset-4 hover:underline",
      },
      btnSize: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        h52: "h-52 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
      btnColor: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
      },
      textColor: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
      },
      textSize: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
      },
      icon: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        before: "",
        after: "",
      },
      underline: {
        true: "underline",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      btnSize: "default",
      btnColor: "default",
      textColor: "default",
      textSize: "default",
      underline: false,
    },
  }
)

function Button({
  name,
  className,
  variant,
  btnSize,
  btnColor,
  textColor,
  textSize,
  underline,
  icon,
  asChild = false,
  children,
  ...props
} :React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    name : string
    asChild?: boolean
    underline?: boolean
    icon?: "before" | "after"
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      name={name}
      data-slot="button"
      className={cn(
          buttonVariants({ variant, btnSize, btnColor, textColor, textSize, underline, icon }),
          className
      )}
      {...props}
    >
      <span className={cn(buttonVariants({ textColor, textSize, underline, className }))}>
        {name}
      </span>
      {children}
    </Comp>
  )
}

export { Button, buttonVariants }
