import Header from "@components/header";
import Navigation from "@components/navigation";
import SEO, { SEOProps } from "@components/seo";
import { ReactNode } from "react";
import Footer from "@components/footer/footer";
import { FrontMatter } from "@shared/get-posts";

//we define postProps
type PostProps = {
  meta?: SEOProps;
  children: ReactNode;
  frontMatter: FrontMatter;
};

const Page = ({ frontMatter, children }: PostProps) => {
  return (
    <div>
      <SEO
        isBlogPost
        title={frontMatter.title}
        description={frontMatter.description}
      />

      <main>
        <Header />
        <Navigation />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Page;
