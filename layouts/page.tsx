import Head from "next/head";
import Header from "@components/header";
import Navigation from "@components/navigation";

const Page = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <Navigation />
      <main></main>
    </div>
  );
}

export default Page