import Head from "next/head"
export default function Inbox() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous"/>
      </Head>
      <a href="https://m.me/herocartoontshirt">
        <button className="transition delay-75 duration-300 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          <p className="text-lg"><i className="fab fa-facebook-messenger pr-2"></i>Send to Messenger</p>
        </button>
      </a>
    </>
  );
}
