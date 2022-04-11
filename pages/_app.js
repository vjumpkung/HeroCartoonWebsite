import "../styles/globals.css";
import "../styles/style.css";
import dynamic from "next/dynamic";
import NProgress from "nprogress";
import Head from "next/head";
import Router from "next/router";
const ScrollArrow = dynamic(
  () => {
    return import("../components/ScrollArrow");
  },
  { ssr: false }
);
const LazyLoadMessenger = dynamic(() => import("../components/LazyLoadMessenger"))
const Layout = dynamic(() => import("../components/Layout"));

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps, route }) {
  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="https://admin.herocartoontshirt.com/" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://admin.herocartoontshirt.com/" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <meta
          name="description"
          content="มาย้อนเวลาคิดถึงความสุขในวัยเด็กกับเสื้อยืดฮีโร่การ์ตูน
          เสื้อยืดสกรีนลายด้วยระบบดิจิตอลในรูปแบบของฮีโร่โทคุซัทสึ"
        />
        <meta property="og:url" content="https://herocartoontshirt.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="เสื้อยืด Hero Cartoon" />
        <meta
          property="og:description"
          content="มาย้อนเวลาคิดถึงความสุขในวัยเด็กกับเสื้อยืดฮีโร่การ์ตูน
          เสื้อยืดสกรีนลายด้วยระบบดิจิตอลในรูปแบบของฮีโร่โทคุซัทสึ"
        />
        <meta
          property="og:image"
          content="https://herocartoontshirt.com/ogbanner2.jpg"
        />
      </Head>
      <LazyLoadMessenger />
      <div className="flex justify-end mx-16 sm:mx-20 md:mx-22 lg:mx-22">
        <div className="">
          <ScrollArrow/>
        </div>
      </div>
      <Layout>
        <Component {...pageProps} key={route} />
      </Layout>
    </>
  );
}
export default MyApp;
