import { ArrowDownRight, ArrowRight, ArrowUpRight, BadgeCheck, Boxes, ChevronRight, Clock3, Handshake, ShieldCheck, Truck, Warehouse, Zap } from "lucide-react";
import Link from "next/link";
import { PhotoFrame } from "@/components/photo-frame";
import { QuoteEstimator } from "@/components/quote-estimator";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";

const serviceIcons = [Truck, Boxes, Zap, Warehouse];

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-rule" />MOVING BUSINESS FORWARD</p>
            <h1>Your goods.<br /><span>On the road.</span><br />In good hands.</h1>
            <p className="hero-lede">Road freight made easier with dependable movement, thoughtful handling and a team that keeps you in the loop.</p>
            <div className="hero-actions"><Link className="button button-amber" href="#quote">Get a quick estimate <ArrowUpRight size={17} /></Link><Link className="button button-outline" href="/track"><span className="button-play">↗</span> Track a shipment</Link></div>
            <div className="hero-proof"><div className="avatar-stack"><span>R</span><span>R</span><span><Truck size={13} /></span></div><p><strong>A clearer way to ship</strong><span>One team from pickup to delivery</span></p><span className="hero-scroll-mark"><ArrowDownRight size={18} /></span></div>
          </div>
          <div className="hero-visual-wrap">
            <PhotoFrame className="hero-visual" alt="Freight truck making its way along an open highway" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=88" />
            <div className="hero-route-card"><span className="hero-route-icon"><Truck size={18} /></span><div><small>ONE JOURNEY AT A TIME</small><strong>Built around the road</strong></div><ArrowUpRight size={16} /></div>
            <span className="hero-side-note">ROAD · FREIGHT · CARE</span>
          </div>
        </div>
      </section>

      <section className="promise-strip" aria-label="Our service approach"><div className="container promise-grid"><div className="promise-item"><span><ShieldCheck size={18} /></span><div><b>Handled with care</b><small>Thoughtful cargo handling</small></div></div><div className="promise-item"><span><Clock3 size={18} /></span><div><b>Clear updates</b><small>Know what comes next</small></div></div><div className="promise-item"><span><Handshake size={18} /></span><div><b>People who listen</b><small>Support at every mile</small></div></div><Link href="/about" className="promise-link">Meet Rasika Roadlines <ArrowRight size={15} /></Link></div></section>

      <section className="section section-stats">
        <div className="container stats-wrap">
          <div className="stats-intro"><p className="eyebrow eyebrow-light"><span className="eyebrow-rule" />A NETWORK IN MOTION</p><h2>Every load has<br />a bigger story.</h2><p>From a single pallet to a full truck, we keep the details in view and the next mile within reach.</p></div>
          <div className="stats-grid"><div className="stat-item"><span className="stat-icon"><Truck size={20} /></span><strong>120<span>+</span></strong><small>Vehicles in network</small></div><div className="stat-item"><span className="stat-icon"><Boxes size={20} /></span><strong>28k<span>+</span></strong><small>Loads moved</small></div><div className="stat-item"><span className="stat-icon"><BadgeCheck size={20} /></span><strong>98<span>%</span></strong><small>On-time delivery</small></div><p className="stats-sample-note">Illustrative sample figures · replace with verified company data before publishing.</p></div>
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <div className="section-row"><SectionHeading kicker="WHAT WE MOVE" title="The right way to get it there." text="Practical freight services designed around your cargo, route and schedule." /><Link className="text-link section-top-link" href="/services">Explore all services <ArrowUpRight size={16} /></Link></div>
          <div className="service-card-grid">{services.map((service, index) => { const Icon = serviceIcons[index]; return <article className="service-card" key={service.number}><div className="service-card-top"><span className="service-number">{service.number}</span><span className="service-icon"><Icon size={21} strokeWidth={1.9} /></span></div><span className="service-tag">{service.tag}</span><h3>{service.title}</h3><p>{service.short}</p><Link href="/services" className="service-link" aria-label={`Learn about ${service.title}`}><ArrowUpRight size={17} /></Link></article>; })}</div>
        </div>
      </section>

      <section className="section section-quote" id="quote">
        <div className="container quote-section-grid"><div className="quote-copy"><p className="eyebrow"><span className="eyebrow-rule" />A GOOD PLACE TO START</p><h2>Know the route.<br /><span>Plan the move.</span></h2><p>Tell us where your shipment is going and get a quick planning estimate. The team can help with the details from there.</p><div className="quote-copy-note"><span><MapPinIcon /></span><div><b>Have a larger or unusual load?</b><small>Share your requirements and we'll help plan the right vehicle and route.</small></div></div><Link href="/contact" className="text-link">Talk through your shipment <ArrowRight size={15} /></Link></div><QuoteEstimator /></div>
      </section>

      <section className="section section-testimonials">
        <div className="container"><div className="section-row"><SectionHeading kicker="THE WAY IT SHOULD FEEL" title="Good freight is a team effort." text="A strong delivery starts with clear expectations and people who follow through." /><span className="sample-review-label">Illustrative sample feedback</span></div><div className="testimonial-grid"><article className="testimonial-card"><div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>“I knew what was happening at every step. The team made a complicated move feel simple.”</blockquote><div className="testimonial-author"><span className="testimonial-initial">A</span><div><strong>Sample client</strong><span>Regional distribution</span></div><BadgeCheck size={18} className="testimonial-check" /></div></article><article className="testimonial-card testimonial-card-dark"><div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>“A responsive team, careful handling and no surprises when our cargo arrived.”</blockquote><div className="testimonial-author"><span className="testimonial-initial">M</span><div><strong>Sample client</strong><span>Manufacturing partner</span></div><BadgeCheck size={18} className="testimonial-check" /></div></article><div className="testimonial-side-note"><span className="quote-mark">“</span><p>Every shipment matters. We bring the same care to the first mile and the last.</p><Link href="/about" className="text-link">Our approach <ArrowUpRight size={15} /></Link></div></div><p className="testimonial-note">Sample testimonials · replace with approved customer quotes before publishing.</p></div>
      </section>

      <section className="bottom-cta"><div className="container bottom-cta-inner"><div><p className="eyebrow eyebrow-light"><span className="eyebrow-rule" />YOUR NEXT MILE STARTS HERE</p><h2>Ready to get moving?</h2><p>Share the route and the details. We'll help you plan the rest.</p></div><div className="bottom-cta-actions"><Link className="button button-amber" href="/#quote">Estimate your shipment <ArrowUpRight size={17} /></Link><Link className="button button-outline-light" href="/contact">Contact our team <ChevronRight size={17} /></Link></div><span className="cta-decoration"><Truck size={132} strokeWidth={0.8} /></span></div></section>
    </>
  );
}

function MapPinIcon() { return <span className="map-pin-icon"><span /></span>; }
