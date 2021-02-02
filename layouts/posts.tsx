import Header from "@components/header";
import Navigation from "@components/navigation";
import SEO, { SEOProps } from "@components/seo";
import { ReactNode } from "react";
import Footer from "@components/footer/footer";
import { FrontMatter } from "@shared/get-posts";
import { postStyles, postContainer } from "./styles/postStyles";
import { Global } from "@emotion/react";
import { globalStyles } from './../shared/globals';

//we define postProps
type PostProps = {
  meta?: SEOProps;
  children: ReactNode;
  frontMatter: FrontMatter;
};

const Post = ({ frontMatter, children }: PostProps) => {
  return (
    <div >
      <SEO
        isBlogPost
        title={frontMatter.title}
        description={frontMatter.description}
      />
      <Global styles={globalStyles}/>
      <Header pageTitle={frontMatter.title}/>
      <Navigation />
      <main css={postStyles}>
        <article css={postContainer}>{children}</article>
      </main>
      <Footer />
    </div>
  );
};

export default Post;
