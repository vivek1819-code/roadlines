import { Route, Truck } from "lucide-react";
import Link from "next/link";

export function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <Link className={`brand-mark${footer ? " brand-mark--footer" : ""}`} href="/" aria-label="Rasika Roadlines home">
      <span className="brand-symbol" aria-hidden="true">
        <Truck size={22} strokeWidth={2.3} />
        <Route className="brand-route" size={14} strokeWidth={2.4} />
      </span>
      <span className="brand-copy">
        <strong>RASIKA</strong>
        <span>ROADLINES</span>
      </span>
    </Link>
  );
}
