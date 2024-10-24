import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
// import type { Project } from "./types/content";

export type ContentSlugProps = {
  type: "projects";
  slug: string;
  title: string;
  description: string;
};

// export async function getPostData(
//   filename: string,
// ): Promise<Omit<Project, "id">> {
//   const fullPath = join(
//     process.cwd(),
//     "src/content/project",
//     `${filename}.mdx`,
//   );
//   const fileContents = readFileSync(fullPath, "utf8");
//   const { data } = matter(fileContents);

//   return {
//     title: data.title,
//     description: data.description,
//     date: new Date(data.date),
//     author: data.author,
//     tags: data.tags,
//     slug: data.slug,
//     github: data.github,
//     banner: data.banner,
//     publishedAt: data.publishedAt,
//   };
// }

// export async function getAboutData(filename: string): Promise<string> {
//   const fullPath = join(process.cwd(), "src/content/about", `${filename}.mdx`);
//   const fileContents = readFileSync(fullPath, "utf8");
//   const { content } = matter(fileContents);

//   return content;
// }

// /**
//  * Scan the Project directory and return an array of file names
//  * @returns
//  */
// export function getPostNames(): string[] {
//   try {
//     //Read the /Project folder at root dir
//     const dirPath = join(process.cwd(), "src/content/project/");
//     const fileList: string[] = readdirSync(dirPath);

//     if (fileList.length > 0) {
//       return fileList.map((file) => {
//         //Remove extension
//         return file.substring(0, file.lastIndexOf(".")) || file;
//       });
//     }
//   } catch (error) {}
//   return [];
// }

// export async function getPostsData(): Promise<Project[]> {
//   try {
//     const dirPath = join(process.cwd(), "src/content/project");
//     const fileList: string[] = readdirSync(dirPath);

//     if (fileList.length > 0) {
//       const result = fileList.map(async (file) => {
//         const filename = file.substring(0, file.lastIndexOf(".")) || file;
//         return { ...(await getPostData(filename)), id: filename };
//       });

//       return Promise.all(result);
//     }
//   } catch (error) {
//     console.error("Failed to get post data: ", error);
//   }
//   return [];
// }
