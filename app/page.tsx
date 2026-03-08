"use client";
import { useState } from "react";
import Polaroid from "../components/Polaroid";
import GalleryPost from "../components/GalleryPost";
import { photos } from "./data/photos";
import Navbar from "../components/Navbar";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const openPost = (idx) => setActiveIndex(idx);
  const closePost = () => setActiveIndex(null);

  const current = activeIndex != null ? photos[activeIndex] : null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-8 pt-20">
        <header className="max-w-7xl mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-2">Hello, I’m [Your Name]</h1>
          <p className="text-gray-600">
            A visual storyteller exploring light, color, and ideas.
          </p>
        </header>

        <section
          aria-label="Polaroid gallery"
          className="max-w-7xl mx-auto mb-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {photos.map((p, idx) => (
              <Polaroid
                key={p.id}
                src={p.image}
                title={p.title}
                onClick={() => openPost(idx)}
              />
            ))}
          </div>
        </section>

        <section id="skills" className="max-w-7xl mx-auto mb-12 px-2">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "React", level: 90 },
              { name: "Next.js", level: 85 },
              { name: "Tailwind CSS", level: 85 },
              { name: "UI/UX Design", level: 80 },
              { name: "CSS Animations", level: 75 },
              { name: "Web Accessibility", level: 70 },
            ].map((s) => (
              <li key={s.name} className="bg-white rounded-lg p-4 shadow">
                <div className="flex items-center justify-between mb-2">
                  <span>{s.name}</span>
                  <span className="text-sm text-gray-500">{s.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-blue-500"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="blog" className="max-w-7xl mx-auto mb-12 px-2">
          <h2 className="text-2xl font-semibold mb-4">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Starting the journey",
                excerpt: "Documenting the first steps and learnings...",
                slug: "start",
              },
              {
                title: "Design decisions",
                excerpt: "How I approached layout and typography...",
                slug: "design-decisions",
              },
            ].map((b) => (
              <article key={b.slug} className="border rounded-lg p-4 shadow">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{b.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-7xl mx-auto mb-12 px-2">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 mb-4">
            Let’s collaborate! Reach me at: email@example.com
          </p>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for reaching out! (demo form)");
            }}
          >
            <input
              className="p-3 border rounded"
              placeholder="Your name"
              required
            />
            <input
              className="p-3 border rounded"
              placeholder="Your email"
              type="email"
              required
            />
            <textarea
              className="p-3 border rounded md:col-span-2"
              placeholder="Your message"
              rows={4}
              required
            />
            <button
              type="submit"
              className="md:col-span-2 bg-blue-600 text-white p-3 rounded"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      <GalleryPost
        post={current}
        onClose={closePost}
        onPrev={() => setActiveIndex((i) => (i > 0 ? i - 1 : i))}
        onNext={() =>
          setActiveIndex((i) => (i < photos.length - 1 ? i + 1 : i))
        }
      />
    </>
  );
}
