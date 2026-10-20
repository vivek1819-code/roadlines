"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!data.get("name") || !data.get("email") || !data.get("message")) {
      setError("Please complete your name, email and message.");
      return;
    }
    setError("");
    setSubmitted(true);
    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      {submitted ? <div className="contact-success" role="status"><CheckCircle2 size={22} /><div><strong>Thanks for reaching out.</strong><span>This demo form does not send messages yet. Connect it to your inbox to receive inquiries.</span></div></div> : <>
        <div className="contact-form-grid">
          <label className="field-group"><span>Your name</span><input name="name" placeholder="Name" autoComplete="name" required /></label>
          <label className="field-group"><span>Work email</span><input name="email" type="email" placeholder="you@company.com" autoComplete="email" required /></label>
        </div>
        <label className="field-group"><span>What are you moving?</span><select name="service" defaultValue="Road freight"><option>Road freight</option><option>Air cargo</option><option>Ocean shipping</option><option>Local courier</option><option>Warehousing</option><option>Something else</option></select></label>
        <label className="field-group"><span>Tell us about the shipment</span><textarea name="message" rows={4} placeholder="Pickup, delivery, approximate weight and anything else we should know" required /></label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button type="submit" className="button button-amber">Send inquiry <ArrowRight size={16} /></button>
      </>}
      <p className="contact-form-note">Demo form · messages are not sent until an email service is connected.</p>
    </form>
  );
}
