import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function CountUp({
  to,
  decimals = 0,
  duration = 1600,
  suffix = "",
  className = "",
}: {
  to: number;
  decimals?: number;
  duration?: number;
  suffix?: string;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLSpanElement>({ threshold: 0.4 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, to, duration]);

  return (
    <span ref={ref} className={className}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}