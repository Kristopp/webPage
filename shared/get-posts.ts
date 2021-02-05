import { promises as fs, readdirSync } from "fs";
import path from "path";
import renderToString from "next-mdx-remote/render-to-string";
import matter from "gray-matter";

type Postfile = {
  filepath: string;
  slug: string;
};

export type FrontMatter = {
  date: string;
  title: string;
  path: string;
  description: string;
};

export type FormatedPost = {
  filepath: string;
  slug: string;
  content: string;
  frontMatter: FrontMatter;
  mdx: object;
};

//we give directory of posts and it returns arrray of posts
//recives source string and output os
const getDirData = (source: string): Postfile[] =>
  readdirSync(source).map((name) => ({
    filepath: `${source}/${name}`,

    //we remove extension of that string
    slug: name.replace(new RegExp(path.extname(name) + "$"), ""),
  }));
const formatPostList = async ({ filepath, slug }: Postfile) => {
  const mdxSource = await fs.readFile(filepath);
  const { content, data } = matter(mdxSource);
  const frontMatter = data as FrontMatter;

  const mdx = await renderToString(content, {
    components: {},
    scope: frontMatter,
  });
  return {
    filepath,
    slug,
    content,
    frontMatter,
    mdx,
  };
};
export async function getPosts(source: string) {
  const files = getDirData(source);

  if (files.length === 0) return [];

  const content = await Promise.all(files.map(formatPostList));
  content.sort((post1, post2) => {
    const dateMs1 = +new Date(post1.frontMatter.date);
    const dateMs2 = +new Date(post2.frontMatter.date);

    return dateMs2 - dateMs1;
  });

  return content;
}
