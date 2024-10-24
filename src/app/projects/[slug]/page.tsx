"use client";

import React from "react";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";

const TransitionLink = ({ href, label }: { href: string; label: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      router.push(href);
    }
  };

  return (
    <button
      className="text-sm font-medium py-2 px-4 rounded-md hover:bg-slate-200 hover:text-black dark:hover:bg-zinc-600"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

type ProjectPageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const slug = params.slug.replace(".mdx", "");
  const ProjectMarkdown = dynamic(
    () => import("../../../content/projects/" + slug + ".mdx")
  );

  return (
    <div className="container min-h-screen mx-auto p-4">
      <div>
        <TransitionLink href="/" label="&larr; Back" />
      </div>
      <article className="z-50 w-full mt-4 dark:prose-invert">
        <ProjectMarkdown />
      </article>
    </div>
  );
}
