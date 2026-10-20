import type { Metadata } from "next";
import { ArrowUpRight, CircleHelp, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import { TrackingLookup } from "@/components/tracking-lookup";

export const metadata: Metadata = { title: "Track a shipment" };

export default function TrackPage() {
  return (
    <>
      <section className="track-page"><div className="container track-page-grid"><div className="track-page-copy"><p className="eyebrow"><span className="eyebrow-rule" />SHIPMENT VISIBILITY</p><h1>Every mile,<br /><span>in view.</span></h1><p className="inner-hero-lede">Look up a consignment to see its latest checkpoint and what happens next.</p><div className="track-assurance"><span><ShieldCheck size={18} /></span><p><b>Clear updates, fewer unknowns.</b><small>Track your shipment from pickup through delivery.</small></p></div><div className="track-help"><CircleHelp size={17} /><span>Don't have your ID? <Link href="/contact">Ask the dispatch team <ArrowUpRight size={13} /></Link></span></div></div><div className="tracking-column"><TrackingLookup /><p className="tracking-demo-note"><Truck size={15} /> This interactive preview uses demo shipments only. Live status requires a carrier tracking connection.</p></div></div></section>
      <section className="track-steps"><div className="container track-steps-inner"><div><span className="track-step-number">01</span><span><b>Booked</b><small>Your shipment is registered</small></span></div><span className="track-steps-line" /><div><span className="track-step-number">02</span><span><b>Moving</b><small>On its way to the next stop</small></span></div><span className="track-steps-line" /><div><span className="track-step-number">03</span><span><b>Delivered</b><small>Received at destination</small></span></div></div></section>
    </>
  );
}
