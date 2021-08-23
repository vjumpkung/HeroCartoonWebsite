import Head from "next/head";
import "lazysizes";
import dynamic from "next/dynamic";
const Banner = dynamic(() => import("../components/Banner"));
const Description = dynamic(() => import("../components/Description"));
export default function Home({ data1, data2, data3, data4 }) {
  return (
    <>
      <Head>
        <title>เสื้อยืด Hero Cartoon</title>
      </Head>
      <Banner />
      <Description />
    </>
  );
}
