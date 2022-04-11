import Head from "next/head";
import useSWR from 'swr'
import Link from "next/link";
import "lazysizes";
import { gql } from "@apollo/client";
import client2 from "../apollo-client2"
import dynamic from "next/dynamic";
import LinkButton from "../components/LinkButton";
import RecentProduct from "../components/RecentProduct";
const Banner = dynamic(() => import("../components/Banner"));
const Description = dynamic(() => import("../components/Description"));
export default function Home({items}) {
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
        <LinkButton name="สินค้า" url="products" />
        <LinkButton name="รูปภาพ" url="gallery" />
        <LinkButton name="รีวิว" url="reviews" />
        <LinkButton name="เกี่ยวกับ" url="about" />
      </div>
      <div className="md:container md:mx-auto my-5 px-5 sm:my-6 sm:px-6 md:my-6 md:px-6 lg:my-6 lg:px-6 xl:my-6 xl:px-6">
        <h2 className="md:text-6xl font-black text-center py-3 text-5xl">
          สินค้าล่าสุด
        </h2>
        <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          <RecentProduct items={items}/>
        </div>
        <Link href="/products" prefetch={false}>
          <a>
            <p className="text-center">
              <button className="transition delay-75 duration-300 ease-in-out bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
                <p className="text-center text-2xl">ดูสินค้าทั้งหมด</p>
              </button>
            </p>
          </a>
        </Link>
      </div>
    </>
  );
}
export async function getStaticProps(){
  const { data } = await client2.query({
      query: gql`
      query MyQuery {
        blacks(last:2) {
          id
          name
          picture{
            url
            width
            height
          }
        }
        navyblues(last:2) {
          id
          name
          picture{
            url
            width
            height
          }
        }
        mrcollections(last:2) {
          id
          name
          picture {
            url
            width
            height
          }
        }
        sPcollections(last:2) {
          id
          name
          picture {
            url
            width
            height
          }
        }
        uMcollections(last:2) {
          id
          name
          picture {
            url
            width
            height
          }
        }
        mCcollections(last:2) {
          id
          name
          picture {
            url
            width
            height
          }
        }
      }
      
      
      `
        });
  return {
      props: {
          items: data
      },
      revalidate: 1,
  }
}
