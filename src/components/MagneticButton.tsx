import { useRef, type ReactNode, type MouseEvent } from "react";

export function MagneticButton({
  href,
  children,
  className = "",
  strength = 0.35,
  target,
  rel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
  target?: string;
  rel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`inline-block transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </a>
  );
}