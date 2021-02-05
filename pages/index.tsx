import Page from "@layouts/page";
import { InferGetStaticPropsType } from "next";
import { POSTS_DIR } from "config"
import Bio from "@components/bio-comp"
import { getPosts } from "@shared/get-posts";

import PostIndex from './../components/post-index/index';

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page>
   {/*  <Bio /> */}
    <PostIndex list={posts} />
    </Page>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts(POSTS_DIR);
  const allMdx = posts.map(({ slug, frontMatter }) => ({
    slug,
    frontMatter,
  }));
  return {
    props: {
      posts: allMdx,
    },
  };
};
