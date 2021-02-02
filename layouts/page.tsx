import Header from "@components/header";
import Navigation from "@components/navigation";
import SEO, { SEOProps } from "@components/seo";
import { ReactNode } from "react";
import Footer from "@components/footer/footer";
import { mainContainer } from "./styles/pageStyles"

//we define pageProps
type PageProps = {
  meta?: SEOProps;
  children?: ReactNode;
};

const Page = ({ meta, children }: PageProps) => {
  return (
    <div>
      <SEO {...meta} />
        <Header />
      <main css={mainContainer}>
        <Navigation />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Page;
