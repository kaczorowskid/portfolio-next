import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export type Post = {
  title: string;
  subtitle: string;
  description: string;
  author: string;
  date: string;
  image: string;
  color: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

export const getSortedPostsData = () => {
  const fileNames = readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return matterResult.data as Post;
  });

  const sorted = allPostsData.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  return sorted;
};

export const getPostData = async (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as Post[]),
  };
};
