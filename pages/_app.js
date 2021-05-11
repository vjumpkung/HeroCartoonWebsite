import "../styles/globals.css";
import Layout from "../components/Layout";
import Messenger from "../components/Messenger";
import NProgress from "nprogress";
import Head from "next/head";
import Router from "next/router";
import Footer from "../components/Footer";

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps, route }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
        <link rel="preconnect" href="https://use.fontawesome.com" />
        <link rel="preconnect" href="https://kit.fontawesome.com" />
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
          content="https://herocartoontshirt.com/ogbanner.jpg"
        />
      </Head>
      <Messenger />
      <Layout />
      <Component {...pageProps} key={route} />
      <Footer />
    </>
  );
}
export default MyApp;
