import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import { navigation } from "@/lib/data";
import { BrandMark } from "@/components/brand-mark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-intro">
            <BrandMark footer />
            <p>Road freight with a human point of contact. Tell us what needs to move and where it needs to go.</p>
            <Link href="/contact" className="footer-contact-link">Talk to our team <ArrowUpRight size={15} /></Link>
          </div>
          <div className="footer-col">
            <p className="footer-heading">Explore</p>
            {navigation.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
          <div className="footer-col footer-location">
            <p className="footer-heading">Find us</p>
            <p className="footer-placeholder"><MapPin size={16} /> Office location to be confirmed</p>
            <p className="footer-small">Official address and dispatch number will be added before launch.</p>
          </div>
          <div className="footer-cta">
            <span className="eyebrow eyebrow-light">READY WHEN YOU ARE</span>
            <h3>Let's move your next load.</h3>
            <Link href="/#quote" className="button button-amber">Request a quote <ArrowUpRight size={16} /></Link>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Rasika Roadlines</span><span>Built around the road. Ready for the next mile.</span></div>
      </div>
    </footer>
  );
}
