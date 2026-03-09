"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await result.json();

      if (data.success) {
        setSent(true);
      } else {
        console.error("something went wrong");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="max-w-7xl mx-auto mb-12 px-2"
    >
      {sent ? (
        <motion.div
          className="text-center p-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-2xl font-semibold">Message sent ⌯⌲</p>
          <p className="text-gray-600 mt-2">
            Thanks for reaching out! I'll reply soon.
          </p>
        </motion.div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 mb-4">
            Let’s collaborate! Send me your project details.
          </p>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input type="text" name="company" className="hidden" />
            <input
              name="name"
              className="p-3 border rounded"
              placeholder="Your name"
              required
            />
            <input
              name="email"
              type="email"
              className="p-3 border rounded"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              className="p-3 border rounded md:col-span-2"
              placeholder="Your message"
              rows={4}
              required
            />
            <button
              type="submit"
              className="md:col-span-2 bg-blue-600 text-white p-3 rounded hover:cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </>
      )}
    </motion.section>
  );
}
