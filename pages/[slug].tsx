import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import PostsLayout from "@layouts/posts";
import { FormatedPost, getPosts } from "@shared/get-posts";
import { POSTS_DIR } from "config";
import hydrate from "next-mdx-remote/hydrate";

export default function Post({
  mdxContent,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const content = hydrate(mdxContent, { components: {} })
 
  return (
    <PostsLayout frontMatter={frontMatter}>
      <header>
        <h1>{frontMatter.title}</h1>
      </header>
      <article>{content}</article>
    </PostsLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts(POSTS_DIR);
  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { slug: routeSlug } = params as { slug: string };
  const posts = await getPosts(POSTS_DIR);

  const { mdx, frontMatter } = posts.find(
    ({ slug: postSlug }) => postSlug === routeSlug
    ) as FormatedPost;
  return {
    props: {
      mdxContent: mdx,
      frontMatter,
    },
  };
};
