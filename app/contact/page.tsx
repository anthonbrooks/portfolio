"use client";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
