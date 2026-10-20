"use client";

import { ArrowRight, CheckCircle2, MapPin, PackageCheck, RotateCcw } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { cities } from "@/lib/data";

const laneDistances: Record<string, number> = {
  "Mumbai|Pune": 150, "Mumbai|Ahmedabad": 530, "Mumbai|Bengaluru": 980, "Mumbai|Hyderabad": 710, "Mumbai|Chennai": 1_340, "Mumbai|Delhi": 1_420,
  "Pune|Ahmedabad": 660, "Pune|Bengaluru": 840, "Pune|Hyderabad": 560, "Pune|Chennai": 1_160, "Pune|Delhi": 1_470,
  "Ahmedabad|Bengaluru": 1_480, "Ahmedabad|Hyderabad": 1_070, "Ahmedabad|Chennai": 1_680, "Ahmedabad|Delhi": 930,
  "Bengaluru|Hyderabad": 570, "Bengaluru|Chennai": 350, "Bengaluru|Delhi": 2_150,
  "Hyderabad|Chennai": 630, "Hyderabad|Delhi": 1_560, "Chennai|Delhi": 2_200,
};
const modeRates: Record<string, { base: number; perKm: number; perKg: number; label: string }> = {
  "Road · Full truck": { base: 4_500, perKm: 42, perKg: 0.14, label: "Dedicated road freight" },
  "Road · Shared load": { base: 900, perKm: 12, perKg: 0.34, label: "Shared road freight" },
  "Air cargo": { base: 1_250, perKm: 8, perKg: 8.5, label: "Priority air cargo" },
  "Local courier": { base: 150, perKm: 1.8, perKg: 22, label: "Local courier" },
};

export function QuoteEstimator() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [mode, setMode] = useState("Road · Shared load");
  const [weight, setWeight] = useState("500");
  const [quote, setQuote] = useState<number | null>(null);
  const [error, setError] = useState("");

  const distance = useMemo(() => {
    if (!from || !to || from === to) return 0;
    return laneDistances[`${from}|${to}`] ?? laneDistances[`${to}|${from}`] ?? 900;
  }, [from, to]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const kg = Number(weight);
    if (!from || !to) { setError("Choose a pickup city and a delivery city to see your estimate."); setQuote(null); return; }
    if (from === to) { setError("Choose two different cities for this estimate."); setQuote(null); return; }
    if (!Number.isFinite(kg) || kg <= 0) { setError("Enter a shipment weight greater than zero."); setQuote(null); return; }
    const rate = modeRates[mode];
    const estimate = Math.round((rate.base + distance * rate.perKm + kg * rate.perKg) / 100) * 100;
    setError("");
    setQuote(estimate);
  }

  function reset() { setFrom(""); setTo(""); setMode("Road · Shared load"); setWeight("500"); setQuote(null); setError(""); }

  return (
    <div className="quote-card">
      <div className="quote-card-heading"><div><span className="quote-kicker"><span className="status-dot" /> QUICK ESTIMATE</span><h3>Plan your shipment</h3><p>Get a starting point in a few details.</p></div><div className="quote-card-icon"><PackageCheck size={21} /></div></div>
      <form onSubmit={submit} className="quote-form">
        <div className="quote-route-row">
          <label className="field-group"><span>Pickup city</span><div className="select-wrap"><MapPin size={16} /><select value={from} onChange={(e) => setFrom(e.target.value)} required aria-label="Pickup city"><option value="">Select origin</option>{cities.map((city) => <option key={city}>{city}</option>)}</select></div></label>
          <label className="field-group"><span>Delivery city</span><div className="select-wrap"><MapPin size={16} /><select value={to} onChange={(e) => setTo(e.target.value)} required aria-label="Delivery city"><option value="">Select destination</option>{cities.map((city) => <option key={city}>{city}</option>)}</select></div></label>
        </div>
        <div className="quote-route-line"><span /><span className="route-line-track" /><span /></div>
        <label className="field-group"><span>Transport service</span><div className="select-wrap select-wrap-plain"><select value={mode} onChange={(e) => { setMode(e.target.value); setQuote(null); }} aria-label="Transport service">{Object.keys(modeRates).map((key) => <option key={key}>{key}</option>)}</select></div></label>
        <label className="field-group"><span>Shipment weight</span><div className="weight-field"><input type="number" min="1" max="28000" value={weight} onChange={(e) => { setWeight(e.target.value); setQuote(null); }} aria-label="Shipment weight in kilograms" /><span>kg</span></div></label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="button button-amber quote-submit" type="submit">Calculate estimate <ArrowRight size={17} /></button>
      </form>
      {quote !== null && <div className="quote-result" role="status"><div className="quote-result-icon"><CheckCircle2 size={18} /></div><div><span>Indicative transport estimate</span><strong>₹{(quote * 0.9).toLocaleString("en-IN")} – ₹{(quote * 1.12).toLocaleString("en-IN")}</strong><small>{distance.toLocaleString("en-IN")} km · {modeRates[mode].label}</small></div><button type="button" className="reset-quote" aria-label="Reset estimate" onClick={reset}><RotateCcw size={15} /></button></div>}
      <p className="quote-disclaimer">Demo rates for planning only. Final pricing depends on route, cargo, vehicle and availability.</p>
    </div>
  );
}
