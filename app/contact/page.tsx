import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
        <ContactForm />
      </div>
    </>
  );
}
