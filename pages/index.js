import Head from "next/head";
import Homepage from "../components/Homepage";
import Layout from "../components/Layout";
import { ScrollToTop } from "../components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tara Trip Gallery</title>
        <meta name="description" content="Tara Trip Gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ScrollToTop />
      <Layout>
        <Homepage />
      </Layout>
    </>
  );
}
