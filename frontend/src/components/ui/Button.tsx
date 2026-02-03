"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-purple-500 text-white hover:bg-purple-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        accent:
          "bg-accent text-white hover:bg-purple-600 shadow-[0_0_20px_rgba(103,61,230,0.4)] hover:-translate-y-0.5",
        accentOutline:
          "border-2 border-accent text-accent hover:bg-accent hover:text-white",
        secondary:
          "border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white",
        outline:
          "border-2 border-sand-300 text-bark-900 hover:border-purple-500 hover:text-purple-500",
        ghost: "text-bark-900 hover:bg-sand-100",
        white:
          "bg-white text-purple-900 hover:bg-sand-50 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
      },
      size: {
        sm: "px-5 py-2.5 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "className">;

type ButtonAsButton = ButtonBaseProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button(props: ButtonProps) {
  const { variant, size, className, children, href, ...rest } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    const isExternal = href.startsWith("http");
    const { ...linkProps } = rest as Omit<
      ComponentPropsWithoutRef<typeof Link>,
      "className" | "href"
    >;
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const { ...buttonProps } = rest as Omit<
    ComponentPropsWithoutRef<"button">,
    "className"
  >;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
