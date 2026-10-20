"use client";

import { ArrowRight, Check, Circle, Clock3, Package, Search, Truck } from "lucide-react";
import { FormEvent, useState } from "react";

const demoShipments: Record<string, { from: string; to: string; status: string; eta: string; progress: number; events: { title: string; detail: string; done: boolean; current?: boolean }[] }> = {
  "RR-DEMO-2048": {
    from: "Pune, MH", to: "Mumbai, MH", status: "In transit", eta: "Next business day", progress: 2,
    events: [
      { title: "Booking confirmed", detail: "Shipment details received", done: true },
      { title: "Picked up", detail: "Collected from Pune", done: true },
      { title: "In transit", detail: "En route to Mumbai", done: true, current: true },
      { title: "Out for delivery", detail: "Delivery partner assigned", done: false },
      { title: "Delivered", detail: "Proof of delivery recorded", done: false },
    ],
  },
  "RR-DEMO-7315": {
    from: "Ahmedabad, GJ", to: "Surat, GJ", status: "Delivered", eta: "Delivered successfully", progress: 4,
    events: [
      { title: "Booking confirmed", detail: "Shipment details received", done: true },
      { title: "Picked up", detail: "Collected from Ahmedabad", done: true },
      { title: "In transit", detail: "Moved through the regional hub", done: true },
      { title: "Out for delivery", detail: "Courier on the final leg", done: true },
      { title: "Delivered", detail: "Received at Surat", done: true, current: true },
    ],
  },
};

export function TrackingLookup() {
  const [trackingId, setTrackingId] = useState("");
  const [searched, setSearched] = useState("");
  const [error, setError] = useState("");
  const shipment = searched ? demoShipments[searched] : undefined;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const id = trackingId.trim().toUpperCase();
    if (!id) { setError("Enter a tracking ID to search."); setSearched(""); return; }
    setError("");
    setSearched(id);
  }

  return (
    <div className="tracking-card">
      <div className="tracking-search-heading"><span className="tracking-search-icon"><Search size={19} /></span><div><h3>Where is your shipment?</h3><p>Enter the tracking number from your booking confirmation.</p></div></div>
      <form className="tracking-form" onSubmit={submit}>
        <label className="sr-only" htmlFor="tracking-id">Tracking ID</label>
        <input id="tracking-id" value={trackingId} onChange={(e) => setTrackingId(e.target.value)} placeholder="e.g. RR-DEMO-2048" autoComplete="off" />
        <button className="button button-dark" type="submit">Track shipment <ArrowRight size={16} /></button>
      </form>
      {error && <p className="form-error tracking-error" role="alert">{error}</p>}
      {searched && (shipment ? (
        <div className="tracking-result" aria-live="polite">
          <div className="tracking-result-top"><div><span className="eyebrow"><span className="eyebrow-rule" />DEMO TRACKING</span><h4>{shipment.status}</h4></div><span className={`tracking-status-pill${shipment.status === "Delivered" ? " delivered" : ""}`}><span className="status-dot" />{shipment.eta}</span></div>
          <div className="tracking-lane"><div><small>FROM</small><strong>{shipment.from}</strong></div><div className="tracking-lane-line"><Truck size={20} /><span /></div><div className="text-right"><small>TO</small><strong>{shipment.to}</strong></div></div>
          <div className="timeline" aria-label="Shipment tracking history">{shipment.events.map((event, index) => <div className={`timeline-event${event.done ? " is-done" : ""}${event.current ? " is-current" : ""}`} key={event.title}><span className="timeline-icon">{event.current ? <Truck size={14} /> : event.done ? <Check size={14} /> : <Circle size={10} />}</span><div className="timeline-copy"><b>{event.title}</b><span>{event.detail}</span></div>{index < shipment.events.length - 1 && <span className="timeline-connector" />}</div>)}</div>
        </div>
      ) : <div className="tracking-not-found" role="status"><Package size={19} /><div><strong>No demo shipment found for {searched}.</strong><span>Try RR-DEMO-2048 or RR-DEMO-7315. Live tracking needs a carrier connection.</span></div></div>)}
      {!searched && <div className="tracking-examples"><span><Clock3 size={14} /> DEMO IDS</span><button type="button" onClick={() => { setTrackingId("RR-DEMO-2048"); setSearched("RR-DEMO-2048"); }}>RR-DEMO-2048</button><button type="button" onClick={() => { setTrackingId("RR-DEMO-7315"); setSearched("RR-DEMO-7315"); }}>RR-DEMO-7315</button></div>}
    </div>
  );
}
