import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { getPosts } from "@shared/get-posts";
import hydrate from 'next-mdx-remote/hydrate'

export default function Post({ 
    mdxContnent,
    frontMatter
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const content = hydrate(mdxContnent, { components: { }})
  return (
    <>
    <header>
        <h1>{frontMatter.tittle}</h1>
    </header>
      <article>{content}</article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts("./posts");

  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }));
  return {
    paths: [
      {
        params: {},
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => { 
const { slug: routeSlug } = params as { slug: string }
const posts = await getPosts('./posts')

const { mdx, frontMatter } = posts.find(({slug: postSlug }) => postSlug === routeSlug) as FormatedPost 
return { 
    props: { 
        mdxContnent: mdx,
        frontMatter
    }
}
}