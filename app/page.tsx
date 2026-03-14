"use client";
import { useState } from "react";
import Polaroid from "../components/Polaroid";
import GalleryPost from "../components/GalleryPost";
import { photos } from "./data/photos";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export interface Photo {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
  source: string;
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
    { name: "Python", level: 85 },
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-8">
        <header className="max-w-7xl mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-2">Anthony Brooks</h1>
          <p className="text-gray-600 dark:text-white">
            Web developer. Musician. Storyteller. Mentor.
          </p>
        </header>

        <div
          aria-label="Polaroid gallery"
          className="max-w-7xl mx-auto mb-6 overflow-visible"
        >
          <h2 className="font-bold mb-2">Snapshots of my work</h2>
          <p className="text-gray-600 dark:text-white">
            Click a project to learn more.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 relative">
            {photos.map((p, idx) => (
              <Polaroid
                key={p.id}
                src={p.image}
                title={p.title}
                onClick={() => openPost(idx)}
              />
            ))}
          </div>
        </div>

        {/* <div id="skills" className="max-w-7xl mx-auto mb-12 px-2">
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
        </div> */}

        {/* <motion.section
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
        </motion.section> */}
        <Footer />
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
