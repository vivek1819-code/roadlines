"use client";

import { ArrowUpRight, Route, Truck } from "lucide-react";
import { useState } from "react";

export function PhotoFrame({ className = "", alt, src }: { className?: string; alt: string; src: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`photo-frame ${className}`}>
      {!failed ? <img src={src} alt={alt} onError={() => setFailed(true)} /> : (
        <div className="photo-fallback" aria-label={alt} role="img">
          <div className="fallback-sun" /><div className="fallback-road" />
          <div className="fallback-truck"><span className="fallback-trailer" /><span className="fallback-cab" /><i /><i /></div>
          <span className="fallback-brand"><Route size={14} /> RASIKA ROADLINES</span>
        </div>
      )}
      <div className="photo-frame-shade" />
      <div className="photo-caption"><span className="photo-caption-icon"><Truck size={17} /></span><span><b>Every mile, in good hands</b><small>Dependable freight. Clear communication.</small></span><span className="photo-caption-arrow"><ArrowUpRight size={16} /></span></div>
    </div>
  );
}
