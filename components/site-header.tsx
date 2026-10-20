"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/lib/data";
import { BrandMark } from "@/components/brand-mark";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="topline">
        <div className="container flex flex-wrap items-center justify-between gap-2 py-2">
          <span>Road freight, handled with care.</span>
          <span className="topline-right"><span className="status-dot" /> Dispatch desk · contact details to be confirmed</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <BrandMark />
          <nav className={`main-nav${open ? " main-nav--open" : ""}`} aria-label="Main navigation">
            {navigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return <Link key={item.href} className={active ? "nav-link active" : "nav-link"} href={item.href} onClick={() => setOpen(false)} aria-current={active ? "page" : undefined}>{item.label}</Link>;
            })}
            <Link className="button button-small button-dark nav-quote" href="/#quote" onClick={() => setOpen(false)}>Get a quote <ArrowUpRight size={15} /></Link>
          </nav>
          <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <div id="mobile-navigation" className={`mobile-nav${open ? " is-open" : ""}`}>
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link key={item.href} className={active ? "mobile-nav-link active" : "mobile-nav-link"} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>;
          })}
          <Link className="button button-dark mobile-quote" href="/#quote" onClick={() => setOpen(false)}>Get a quote <ArrowUpRight size={16} /></Link>
        </div>
      </header>
    </>
  );
}
