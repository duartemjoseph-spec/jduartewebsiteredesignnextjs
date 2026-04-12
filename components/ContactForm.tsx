"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("Please fill out all fields.");
      return;
    }

    setStatus("Thanks! Your message was submitted for demo purposes.");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#1c1b1b] p-6 md:p-8">
      <p className="mb-4 text-sm font-semibold text-[#f5f1ea]">Send an Inquiry</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs uppercase tracking-[0.16em] text-[#9f958e]"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full rounded-none border border-white/5 bg-[#111111] px-4 py-3 text-sm text-[#f5f1ea] outline-none placeholder:text-[#6f6963] focus:border-[#ffb3ad]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs uppercase tracking-[0.16em] text-[#9f958e]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-none border border-white/5 bg-[#111111] px-4 py-3 text-sm text-[#f5f1ea] outline-none placeholder:text-[#6f6963] focus:border-[#ffb3ad]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs uppercase tracking-[0.16em] text-[#9f958e]"
          >
            Special Requests
          </label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Let us know about dietary restrictions, private events, or feedback..."
            className="w-full rounded-none border border-white/5 bg-[#111111] px-4 py-3 text-sm text-[#f5f1ea] outline-none placeholder:text-[#6f6963] focus:border-[#ffb3ad]"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="rounded-md bg-linear-to-r from-[#ffb3ad] to-[#b32f2d] px-5 py-3 text-sm font-semibold text-[#4a0909] transition hover:scale-[1.02]"
          >
            Send Message
          </button>
        </div>

        {status && <p className="pt-2 text-sm text-[#e9c349]">{status}</p>}
      </form>
    </div>
  );
}