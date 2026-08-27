"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { waLink } from "@/lib/whatsapp";

const inputCls =
  "w-full border border-line bg-offwhite px-4 py-3 text-sm text-ink placeholder:text-slate-soft/70 focus:border-ink focus:outline-none transition-colors";

function Field({
  label,
  id,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputCls}
      />
    </div>
  );
}

function Select({
  label,
  id,
  options,
  required,
  placeholder = "Select",
}: {
  label: string;
  id: string;
  options: string[];
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
        {label}
      </label>
      <select id={id} name={id} required={required} defaultValue="" className={inputCls}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export function EnquiryForm() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const fields = {
      name: String(fd.get("name") ?? ""),
      brand: String(fd.get("brand") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      product: String(fd.get("product") ?? ""),
      quantity: String(fd.get("quantity") ?? ""),
      size: String(fd.get("size") ?? ""),
      colour: String(fd.get("colour") ?? ""),
      branding: String(fd.get("branding") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const lines = [
      "Hi OG Blanks, I'd like to make a bulk/wholesale enquiry.",
      "",
      `Name: ${fields.name}`,
      fields.brand ? `Business / Brand: ${fields.brand}` : null,
      fields.phone ? `Phone / WhatsApp: ${fields.phone}` : null,
      fields.email ? `Email: ${fields.email}` : null,
      fields.product ? `Product: ${fields.product}` : null,
      fields.quantity ? `Quantity: ${fields.quantity}` : null,
      fields.size ? `Preferred size: ${fields.size}` : null,
      fields.colour ? `Preferred colour: ${fields.colour}` : null,
      `Custom branding: ${fields.branding || "No"}`,
      fields.message ? `Message: ${fields.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    setSending(true);
    // open WhatsApp with the composed enquiry so the funnel stays functional
    window.open(waLink(lines), "_blank", "noopener,noreferrer");
    setSending(false);
    setDone(true);
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 border border-line bg-offwhite p-10 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-bone">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-ink">
          Enquiry open in WhatsApp
        </h3>
        <p className="max-w-md text-sm text-slate-soft">
          Your enquiry has been prepared in WhatsApp — just press send. We&apos;ll get back to
          you with pricing, sizes and colours.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-5 border border-line bg-offwhite p-6 sm:grid-cols-2 sm:p-8"
    >
      <Field label="Name" id="name" required />
      <Field label="Business / Brand Name" id="brand" />
      <Field label="Phone / WhatsApp" id="phone" type="tel" required />
      <Field label="Email" id="email" type="email" />
      <Select
        label="Product"
        id="product"
        options={products.map((p) => p.name)}
        required
      />
      <Field label="Quantity" id="quantity" placeholder="e.g. 100 pieces" required />
      <Select
        label="Preferred size"
        id="size"
        options={["S", "M", "L", "XL", "XXL", "3XL", "Mixed sizes"]}
      />
      <Field label="Preferred colour" id="colour" placeholder="e.g. Black, Off-white" />
      <div className="flex flex-col gap-2 sm:col-span-1">
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
          Custom branding?
        </label>
        <div className="flex gap-3">
          {["Yes", "No"].map((op) => (
            <label
              key={op}
              className="flex flex-1 cursor-pointer items-center justify-center gap-2 border border-line py-3 text-sm text-ink transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-bone"
            >
              <input type="radio" name="branding" value={op} className="sr-only" />
              {op}
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:col-span-1">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className={inputCls}
          placeholder="Tell us about your project, deadlines or any other requirements."
        />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className="group inline-flex items-center justify-center gap-2 bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-bone transition-colors hover:bg-charcoal disabled:opacity-60"
        >
          {sending ? "Opening WhatsApp…" : "Send Bulk Enquiry"}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <p className="text-center text-xs text-slate-soft">
          This opens WhatsApp with your enquiry pre-filled. No account needed.
        </p>
      </div>
    </form>
  );
}
