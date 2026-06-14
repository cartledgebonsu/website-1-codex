"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  product: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  product: "",
  message: "",
  website: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^\+?[0-9\s().-]{7,24}$/;

export default function InquiryForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const statusText = useMemo(() => {
    if (status === "submitting") return "Submitting your inquiry...";
    if (status === "success") return "Thank you. Your inquiry has been received.";
    if (status === "error") return "Submission failed. Please check the form or email us directly.";
    return "";
  }, [status]);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    if (status !== "idle") setStatus("idle");
  }

  function validate() {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid business email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Please enter your phone or WhatsApp number.";
    } else if (!phonePattern.test(form.phone.trim())) {
      nextErrors.phone = "Use an international format, for example +86 135 0000 0000.";
    }

    if (form.website.trim()) nextErrors.website = "Spam check failed.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Request failed");
      setForm(initialForm);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="inquiryPageForm" onSubmit={handleSubmit} noValidate>
      <div className="formGrid">
        <label>
          <span>
            Name <em>*</em>
          </span>
          <input
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            required
          />
          {errors.name ? <small>{errors.name}</small> : null}
        </label>

        <label>
          <span>
            Email <em>*</em>
          </span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            required
          />
          {errors.email ? <small>{errors.email}</small> : null}
        </label>

        <label>
          <span>
            Phone / WhatsApp <em>*</em>
          </span>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+1 555 000 0000"
            aria-invalid={Boolean(errors.phone)}
            required
          />
          {errors.phone ? <small>{errors.phone}</small> : null}
        </label>

        <label>
          <span>Company Name</span>
          <input
            name="company"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Your company name"
          />
        </label>

        <label>
          <span>Country / Region</span>
          <input
            name="country"
            value={form.country}
            onChange={(event) => updateField("country", event.target.value)}
            placeholder="United States, UAE, Brazil..."
          />
        </label>

        <label>
          <span>Product Requirement</span>
          <select
            name="product"
            value={form.product}
            onChange={(event) => updateField("product", event.target.value)}
          >
            <option value="">Select product interest</option>
            <option>Silicone Sealant</option>
            <option>PU Foam</option>
            <option>PU Sealant</option>
            <option>Acrylic Sealant</option>
            <option>MS Sealant</option>
            <option>OEM / Private Label</option>
          </select>
        </label>

        <label className="full">
          <span>Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell us your application, quantity, packaging, target market or certification needs."
          />
        </label>

        <label className="hiddenField" aria-hidden="true">
          <span>Website</span>
          <input
            tabIndex={-1}
            name="website"
            value={form.website}
            onChange={(event) => updateField("website", event.target.value)}
            autoComplete="off"
          />
          {errors.website ? <small>{errors.website}</small> : null}
        </label>
      </div>

      <div className="inquiryActions">
        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
        </button>
        <p className={status === "error" ? "formStatus error" : "formStatus"} aria-live="polite">
          {statusText}
        </p>
      </div>
    </form>
  );
}
