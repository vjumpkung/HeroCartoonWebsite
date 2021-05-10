import '../styles/globals.css'
import Layout from "../components/Layout"
import Messenger from '../components/Messenger'
import NProgress from "nprogress"
import Head from "next/head"
import Router from "next/router"

Router.onRouteChangeStart = url => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

function MyApp({Component, pageProps, route}) {
    return (
        <>
            <Head>
               <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
             </Head>
              <Messenger/>
              <Layout/>
              <Component {...pageProps} key={route} />
        </>
      )
}
export default MyApp;