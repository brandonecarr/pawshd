"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-xl",
        secondary:
          "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
        outline:
          "border-2 border-sand-300 text-bark-900 hover:border-purple-600 hover:text-purple-600",
        ghost: "text-bark-900 hover:bg-sand-100",
        white: "bg-white text-purple-600 hover:bg-sand-50 shadow-lg",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
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
    const { ...linkProps } = rest as Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "href">;
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

  const { ...buttonProps } = rest as Omit<ComponentPropsWithoutRef<"button">, "className">;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
