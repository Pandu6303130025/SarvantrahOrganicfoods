"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Linkedin,
} from "lucide-react";
import {
  PHONE_NUMBER,
  PHONE_NUMBER_ALT,
  EMAIL,
  ADDRESS,
  BUSINESS_HOURS,
  WHATSAPP_NUMBER,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from "@/lib/data";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Enquiry - Zyva*\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );

    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-black">
          Contact Us
        </h1>
        <div className="mx-auto mt-4 h-[2px] w-16 bg-black" />
        <p className="mx-auto mt-6 max-w-xl text-gray-600">
          Have questions or bulk enquiries? We’d love to hear from you.
        </p>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-16 lg:flex-row">

            {/* ================= FORM ================= */}
            <div className="flex-1">

              <h2 className="mb-8 text-2xl font-semibold text-black">
                Send a Message
              </h2>

              {submitted && (
                <div className="mb-6 border border-black p-4 text-sm text-black">
                  Message sent via WhatsApp successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid gap-6 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email (optional)"
                    value={form.email}
                    onChange={handleChange}
                    className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                  />

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                  />
                </div>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message *"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
                />

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-black px-6 py-4 text-sm font-semibold text-white hover:bg-gray-800"
                >
                  <MessageCircle className="h-5 w-5" />
                  Send via WhatsApp
                </button>

              </form>
            </div>

            {/* ================= CONTACT INFO ================= */}
            <div className="w-full lg:w-96 space-y-10">

              <div className="space-y-6 text-sm">

                <div className="flex gap-4">
                  <Phone className="h-5 w-5 text-black" />
                  <div>
                    <p className="font-semibold text-black">Phone</p>
                    <p className="text-gray-600">{PHONE_NUMBER}</p>
                    <p className="text-gray-600">{PHONE_NUMBER_ALT}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="h-5 w-5 text-black" />
                  <div>
                    <p className="font-semibold text-black">Email</p>
                    <p className="text-gray-600 break-all">{EMAIL}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 text-black" />
                  <div>
                    <p className="font-semibold text-black">Address</p>
                    <p className="text-gray-600">{ADDRESS}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="h-5 w-5 text-black" />
                  <div>
                    <p className="font-semibold text-black">Business Hours</p>
                    <p className="text-gray-600">{BUSINESS_HOURS}</p>
                  </div>
                </div>

              </div>

              {/* SOCIALS */}
              <div>
                <p className="mb-4 font-semibold text-black">Follow Us</p>
                <div className="flex gap-4">
                  <a href={INSTAGRAM_URL} target="_blank">
                    <Instagram className="h-6 w-6 text-gray-600 hover:text-black transition" />
                  </a>
                  <a href={LINKEDIN_URL} target="_blank">
                    <Linkedin className="h-6 w-6 text-gray-600 hover:text-black transition" />
                  </a>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank">
                    <MessageCircle className="h-6 w-6 text-gray-600 hover:text-black transition" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* ================= MAP ================= */}
          <div className="mt-20">
            <div className="border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.5!2d80.5!3d16.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDM2JzAwLjAiTiA4MMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                title="Location"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
