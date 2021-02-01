import Head from "next/head";
import { metadata as siteMeta } from "config";

export type SEOProps = {
  title?: string;
  description?: string;
  isBlogPost?: boolean
};
//import props
const SEO = ({ title, description, isBlogPost = false }: SEOProps) => {
  const pageTitle = title
    ? `${title} :: ${siteMeta.siteName}`
    : siteMeta.siteName;

  const pageDescription = description ? description : siteMeta.description;
  return (
    <Head>
      {/* tags for seo */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="og::title" content={title} />
      <meta name="og:description" content={pageDescription} />
      <meta name="og:type" content={isBlogPost ? 'article' : 'website'} />
    </Head>
  );
};

export default SEO;
