"use client";

import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";

const unitTypes = ["1 Bedroom", "2 Bedroom", "3 Bedroom", "Penthouse"];
const availabilities = [
  { label: "Ready to Move", count: 4, color: "bg-gold" },
  { label: "Under Construction", count: 12, color: "bg-taupe" },
  { label: "Sold Out", count: 6, color: "bg-charcoal/30" },
];

export default function Enquire() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    unitType: "1 Bedroom",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="enquire" className="py-24 md:py-40 px-6 md:px-24 bg-charcoal text-bone">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left — Availability */}
        <div>
          <h2 className="text-sm font-sans tracking-[0.2em] uppercase text-gold mb-4">Availability</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-12">Schedule a Viewing</h3>
          
          <div className="space-y-6 mb-12">
            {availabilities.map((a) => (
              <div key={a.label} className="flex items-center gap-4">
                <span className={`w-3 h-3 rounded-full flex-shrink-0 ${a.color}`} />
                <span className="text-sm font-sans tracking-wider text-taupe flex-1">{a.label}</span>
                <span className="font-serif text-2xl">{a.count}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-taupe/20 pt-8">
            <p className="text-sm font-sans text-taupe leading-relaxed">
              Our dedicated sales team is available Mon–Sat, 10am–7pm at the Experience Centre, Level 1, Aura Tower.
            </p>
          </div>
        </div>

        {/* Right — Form */}
        <div>
          {success ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-4 text-center">
              <CheckCircle className="w-16 h-16 text-gold" />
              <h4 className="text-3xl font-serif">Thank You</h4>
              <p className="text-taupe font-sans text-sm tracking-wide">Our team will reach out to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", label: "Full Name", type: "text" },
                { name: "email", label: "Email Address", type: "email" },
                { name: "phone", label: "Phone Number", type: "tel" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    required
                    value={(form as Record<string, string>)[field.name]}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-taupe/40 focus:border-gold py-3 text-bone font-sans text-sm outline-none transition-colors duration-300 placeholder-transparent"
                  />
                  <label
                    htmlFor={field.name}
                    className="absolute top-3 left-0 text-taupe text-sm font-sans tracking-wider transition-all duration-200 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-gold peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs"
                  >
                    {field.label}
                  </label>
                </div>
              ))}

              <div className="relative">
                <label htmlFor="unitType" className="text-taupe text-xs font-sans tracking-wider uppercase mb-2 block">
                  Unit Interest
                </label>
                <select
                  id="unitType"
                  name="unitType"
                  value={form.unitType}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-taupe/40 focus:border-gold py-3 text-bone font-sans text-sm outline-none transition-colors duration-300 appearance-none cursor-pointer"
                >
                  {unitTypes.map((u) => (
                    <option key={u} value={u} className="bg-charcoal text-bone">
                      {u}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-taupe/40 focus:border-gold py-3 text-bone font-sans text-sm outline-none transition-colors duration-300 resize-none placeholder-transparent"
                />
                <label
                  htmlFor="message"
                  className="absolute top-3 left-0 text-taupe text-sm font-sans tracking-wider transition-all duration-200 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-gold peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs"
                >
                  Message (Optional)
                </label>
              </div>

              {error && <p className="text-red-400 text-sm font-sans">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 flex items-center justify-center gap-3 w-full border border-gold text-gold hover:bg-gold hover:text-bone transition-all duration-500 px-10 py-4 text-sm tracking-widest uppercase font-sans disabled:opacity-50"
              >
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {submitting ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
