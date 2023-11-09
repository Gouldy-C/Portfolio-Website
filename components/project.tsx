"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  learned,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1.]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  
  const router = useRouter();

  function handleLinkClick() {
    router.push(link)
  }

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-3 group sm:mb-8 last:mb-0"
      onClick={handleLinkClick}
    >
      <section className="bg-gray-100 max-w-[44rem] border border-black/5 rounded-lg overflow-hidden sm:pr-4 relative hover:bg-gray-200 transition sm:group-even:pl-4 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-3 sm:pr-2 sm:pt-10 sm:max-w-[58%] flex flex-col h-full sm:group-odd:ml-[20rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <p className="mt-3 leading-relaxed text-gray-700 dark:text-white/70">
            {learned}
          </p>
          <ul className="flex flex-wrap gap-2 mt-5">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-10 -left-52 w-[32rem] rounded-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:left-[initial] group-even:-right-52"
        />
      </section>
    </motion.div>
  );
}
