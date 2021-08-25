import Head from "next/head";
import Link from "next/link";
import "lazysizes";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Fragment } from "react";
import dynamic from "next/dynamic";
import { squareplaceholder, placeholder1, imgLink } from "../lib/constant";
const Banner = dynamic(() => import("../components/Banner"));
const Description = dynamic(() => import("../components/Description"));
export default function Home({ data1, data2, data3, data4 }) {
  return (
    <>
      <Head>
        <title>หน้าแรก - เสื้อยืด Hero Cartoon</title>
      </Head>
      <Banner />
      <Description />
      <h2 className="md:text-6xl font-black text-center py-6 text-5xl">
        Navigation
      </h2>
      <div className="flex flex-wrap md:container md:mx-auto">
        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4">
          <p align="center">
            <Link href="/products" prefetch={false}>
              <a>
                <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 w-4/5 h-20 rounded-md my-2 mx-2">
                  <span className="text-lg">สินค้า</span>
                </button>
              </a>
            </Link>
          </p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4">
          <p align="center">
            <Link href="/gallery" prefetch={false}>
              <a>
                <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 w-4/5 h-20 rounded-md my-2 mx-2">
                  <span className="text-lg">รูปภาพ</span>
                </button>
              </a>
            </Link>
          </p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4">
          <Link href="/reviews" prefetch={false}>
            <a>
              <p align="center">
                <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 w-4/5 h-20 rounded-md my-2 mx-2">
                  <span className="text-lg">รีวิว</span>
                </button>
              </p>
            </a>
          </Link>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4">
          <Link href="/about" prefetch={false}>
            <p align="center">
              <a>
                <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 w-4/5 h-20 rounded-md my-2 mx-2">
                  <span className="text-lg">เกี่ยวกับ</span>
                </button>
              </a>
            </p>
          </Link>
        </div>
      </div>
      <div className="md:container md:mx-auto my-5 px-5 sm:my-6 sm:px-6 md:my-6 md:px-6 lg:my-6 lg:px-6 xl:my-6 xl:px-6">
        <h2 className="md:text-6xl font-black text-center py-3 text-5xl">
          สินค้าล่าสุด
        </h2>
        <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {/*DTG T-SHIRT*/}
          {data1.map((item) => (
            <div
              key={item.id}
              className="pt-3 transition delay-75 duration-300 ease-in-out my-5 px-5 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/2 hover:shadow-2xl"
            >
              <Link
                href="/products/DTG/[name]"
                as={`/products/DTG/${item.name}`}
                key={item.id}
                prefetch={false}
              >
                <a>
                  <img
                    src={placeholder1}
                    data-src={imgLink + item.picture.formats.small.url}
                    width="464"
                    height="430.59"
                    alt={item.picture.name}
                    className="object-fill w-75 mx-auto lazyload"
                  />
                  <p className="text-center text-3xl font-bold">{item.name}</p>
                  <p className="text-center text-xl">{item.description}</p>
                  <p className="text-center text-sm text-gray-600 font-bold mb-3">
                    รายละเอียดสินค้า
                  </p>
                </a>
              </Link>
            </div>
          ))}
          {/*DTF T-SHIRT*/}
          {data4.map((item) => (
            <div
              key={item.id}
              className="pt-3 transition delay-75 duration-300 ease-in-out my-5 px-5 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/2 hover:shadow-2xl"
            >
              <Link
                href="/products/DTF/[name]"
                as={`/products/DTF/${item.name}`}
                key={item.id}
                prefetch={false}
              >
                <a>
                  <img
                    src={placeholder1}
                    data-src={imgLink + item.picture.formats.small.url}
                    width="464"
                    height="430.59"
                    alt={item.picture.name}
                    className="object-fill w-75 mx-auto lazyload"
                  />
                  <p className="text-center text-3xl font-bold">{item.name}</p>
                  <p className="text-center text-xl">{item.description}</p>
                  <p className="text-center text-sm text-gray-600 font-bold mb-3">
                    รายละเอียดสินค้า
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
        <Link href="/products">
          <a>
            <p className="text-center">
              <button className="transition delay-75 duration-300 ease-in-out bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
                <p className="text-center text-2xl">ดูสินค้าทั้งหมด</p>
              </button>
            </p>
          </a>
        </Link>
      </div>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-1 mb-2"></div>
      <div className="md:container md:mx-auto my-5 px-5 sm:my-6 sm:px-6 md:my-6 md:px-6 lg:my-6 lg:px-6 xl:my-6 xl:px-6">
        <h1 className=" text-3xl lg:text-5xl text-center py-3 font-black">
          รีวิวจากลูกค้า
        </h1>
        <div className="flex flex-wrap-reverse justify-center">
          {data2.map((item) => (
            <Fragment key={item.id}>
              {item.picture.slice(-4).map((object) => (
                <div
                  key={object.id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 py-2 max-w-max"
                >
                  <img
                    src={squareplaceholder}
                    data-src={imgLink + object.url}
                    width={object.width}
                    height={object.height}
                    className="mx-auto square transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-105 lazyload"
                    alt={object.name}
                  />
                </div>
              ))}
            </Fragment>
          ))}
        </div>
        <Link href="/reviews" prefetch={false}>
          <a>
            <p className="text-center pt-2">
              <button className="transition delay-75 duration-300 ease-in-out bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
                <p className="text-center text-2xl">ดูรีวิวทั้งหมด</p>
              </button>
            </p>
          </a>
        </Link>
      </div>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-1 mb-2"></div>
      <div className="md:container md:mx-auto my-5 px-5 sm:my-6 sm:px-6 md:my-6 md:px-6 lg:my-6 lg:px-6 xl:my-6 xl:px-6">
        <h1 className=" text-3xl lg:text-5xl text-center py-3 font-black">
          Gallery
        </h1>
        <div className="flex flex-wrap-reverse justify-center">
          {data3.slice(-1).map((item) => (
            <>
              {item.picture.slice(-4).map((object) => (
                <div
                  key={object.id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 py-2 max-w-max"
                >
                  <img
                    src={squareplaceholder}
                    data-src={imgLink + object.url}
                    width={object.width}
                    height={object.height}
                    className="lazyload mx-auto square transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                    alt={object.name}
                  />
                </div>
              ))}
            </>
          ))}
        </div>
        <Link href="/gallery" prefetch={false}>
          <a>
            <p className="text-center pt-2">
              <button className="transition delay-75 duration-300 ease-in-out bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
                <p className="text-center text-2xl">ดูรูปภาพทั้งหมด</p>
              </button>
            </p>
          </a>
        </Link>
      </div>
    </>
  );
}
export async function getStaticProps() {
  //fetch recent product
  const { data } = await client.query({
    query: gql`
    query {
      kamenriders(limit: 2, sort: "id:DESC") {
        id
        name
        picture {
          formats
        }
      }
      spCollections(limit: 2, sort: "id:DESC") {
        id
        name
        picture {
          formats
        }
      }
      umCollections(limit: 2, sort: "id:DESC") {
        id
        name
        picture {
          formats
        }
      }
      mCcollections(limit: 2, sort: "id:DESC") {
        id
        name
        picture {
          formats
        }
      }
      bTshirts(limit: 2, sort: "id:DESC") {
        id
        name
        picture {
          formats
        }
      }
      gTshirts(limit: 2, sort: "id:DESC") {
        id
        name
        picture {
          formats
        }
      }
      nTshirts(limit: 2, sort: "id:DESC") {
        id
        name
        picture {
          formats
        }
      }
      btTshirts(limit: 2,sort: "id:DESC"){
        id
        name
        picture {
          formats
        }  
      }
      galleries(limit: 4, sort: "id:DESC") {
        id
        picture {
          name
          id
          url
          width
          height
          formats
        }
      }
      reviews(limit: 4, sort: "id:DESC") {
        id
        picture {
          name
          id
          width
          height
          url
          formats
        }
      }
    } # Write your query or mutation here
    `,
  });
  const items1 = data.kamenRiders,
    items2 = data.spCollections,
    items3 = data.umCollections,
    items4 = data.mCcollections,
    items5 = data.bTshirts,
    items6 = data.gTshirts,
    items7 = data.nTshirts,
    items8 = data.bTtshirts;
  const mixDTG = [...items1, ...items2, ...items3, ...items4];
  const mixDTF = [...items5, ...items6, ...items7, ...items8];
  const mixReviews = data.reviews;
  const mixGalleries = data.galleries;
  return {
    props: {
      data1: mixDTG,
      data2: mixReviews,
      data3: mixGalleries,
      data4: mixDTF,
    },
    revalidate: 1, // In seconds
  };
}
