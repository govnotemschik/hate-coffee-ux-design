import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

type Props = {
  children: ReactNode;
  as?: ElementType;
  variant?: "up" | "zoom" | "blur" | "stagger";
  delay?: number;
  className?: string;
  threshold?: number;
};

const variantClass = {
  up: "reveal",
  zoom: "reveal-zoom",
  blur: "reveal-blur",
  stagger: "stagger",
};

export function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  threshold = 0.15,
}: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold });
  return (
    <Tag
      ref={ref}
      className={`${variantClass[variant]} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}