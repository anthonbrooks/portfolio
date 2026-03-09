"use client";
import { useState } from "react";
import Polaroid from "../components/Polaroid";
import GalleryPost from "../components/GalleryPost";
import { photos } from "./data/photos";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { sendEmail } from "@/app/actions/sendEmail";
import Link from "next/link";

export interface Photo {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

interface Skill {
  name: string;
  level: number;
}

interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
}

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const openPost = (idx: number): void => setActiveIndex(idx);
  const closePost = (): void => setActiveIndex(null);

  const current: Photo | null =
    activeIndex != null ? (photos as Photo[])[activeIndex] : null;

  const skills: Skill[] = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "CSS Animations", level: 75 },
    { name: "Web Accessibility", level: 70 },
  ];

  const blogPosts: BlogPost[] = [
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
  ];

  const handleSubmit = (): void => {
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-8 pt-20">
        <header className="max-w-7xl mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-2">Hello, I’m Anthony</h1>
          <p className="text-gray-600">
            A visual storyteller exploring light, color, and ideas.
          </p>
        </header>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          aria-label="Polaroid gallery"
          className="max-w-7xl mx-auto mb-12"
        >
          <h2 className="font-bold">Snapshots of my work</h2>
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
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="skills"
          className="max-w-7xl mx-auto mb-12 px-2"
        >
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((s) => (
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
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="blog"
          className="max-w-7xl mx-auto mb-12 px-2"
        >
          <h2 className="text-2xl font-semibold mb-4">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((b) => (
              <article key={b.slug} className="border rounded-lg p-4 shadow">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{b.excerpt}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="contact"
          className="max-w-7xl mx-auto mb-12 px-2"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 mb-4">
            Let’s collaborate! Send me your project details.
          </p>
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
            <form
              action={sendEmail}
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
          )}
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-2"
        >
          <Link href={"https://github.com/anthonbrooks"}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-github hover:cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </Link>
          <Link href={"https://www.linkedin.com/in/anthonyprescottbrooks/"}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-linkedin hover:cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </Link>
        </motion.section>
      </main>

      <GalleryPost
        post={current}
        onClose={closePost}
        onPrev={() => setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i))}
        onNext={() =>
          setActiveIndex((i) =>
            i !== null && i < photos.length - 1 ? i + 1 : i,
          )
        }
      />
    </>
  );
}
