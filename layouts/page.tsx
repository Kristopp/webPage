import Head from "next/head";
import Header from "@components/header";
import Navigation from "@components/navigation";
import { ReactNode } from "react";

type MetaProps = { 
  title: string;
  description: string; 
}

//we define pageProps
type PageProps = {
  meta: MetaProps;
  children?: ReactNode;
};

const Page = ({ meta, children }: PageProps) => {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <main>
        <Header />
        <Navigation />
        {children}
      </main>
    </div>
  );
};

export default Page;
