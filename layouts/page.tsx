import Head from "next/head";
import Header from "@components/header";
import Navigation from "@components/navigation";
import SEO, { SEOProps } from "@components/seo";
import { ReactNode } from "react";
import Footer from "@components/footer/footer";

//we define pageProps
type PageProps = {
  meta?: SEOProps;
  children?: ReactNode;
};

const Page = ({ meta, children }: PageProps) => {
  return (
    <div>
      <SEO {...meta} />

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
