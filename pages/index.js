import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import client from "../apollo-client";
const Home = ({ items, items2, items3, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <>
      <Head>
        <title>หน้าแรก - เสื้อยืด Hero Cartoon</title>
      </Head>
      <div className="md:container md:mx-auto my-5 px-5 sm:my-6 sm:px-6 md:my-6 md:px-6 lg:my-6 lg:px-6 xl:my-6 xl:px-6">
        {/*MR Collection */}
        <h2 className="md:text-6xl font-black text-center py-6 text-5xl">
          Masked Rider Collections
        </h2>
        <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {items.map((kamen_riders) => (
            <div
              key={kamen_riders.id}
              className="pt-3 transition delay-75 duration-300 ease-in-out my-5 px-5 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
            >
              <Link
                href="/MR/[name]"
                as={`/MR/${kamen_riders.name}`}
                key={kamen_riders.id}
              >
                <a>
                  <p className="text-center">
                    <Image
                      src={
                        "https://admin.herocartoontshirt.com" +
                        kamen_riders.picture.formats.small.url
                      }
                      width={kamen_riders.picture.formats.small.width}
                      height={kamen_riders.picture.formats.small.height}
                      alt={kamen_riders.picture.name}
                      className="object-fill w-full"
                      loading="lazy"
                    />
                  </p>
                  <p className="text-center text-3xl font-bold">
                    {kamen_riders.name}
                  </p>
                  <p className="text-center text-xl">
                    {kamen_riders.description}
                  </p>
                  <p className="text-center text-sm text-gray-400 mb-3">
                    ภาพตัวอย่างสินค้าใช้ในการโฆษณาเท่านั้น
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
        {/*SP Collection */}

        <h2 className="md:text-6xl font-black text-center py-6 text-5xl">
          Special Collections
        </h2>

        <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {items2.map((sp_collections) => (
            <div
              key={sp_collections.id}
              className="pt-3 transition delay-75 duration-300 ease-in-out my-5 px-5 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
            >
              <Link
                href="/SP/[name]"
                as={`/SP/${sp_collections.name}`}
                key={sp_collections.id}
              >
                <a>
                  <p className="text-center">
                    <Image
                      src={
                        "https://admin.herocartoontshirt.com" +
                        sp_collections.picture.formats.small.url
                      }
                      width={sp_collections.picture.formats.small.width}
                      height={sp_collections.picture.formats.small.height}
                      alt={sp_collections.picture.name}
                      className="object-fill w-full"
                      loading="lazy"
                    />
                  </p>
                  <p className="text-center text-3xl font-bold">
                    {sp_collections.name}
                  </p>
                  <p className="text-center text-xl">
                    {sp_collections.description}
                  </p>
                  <p className="text-center text-sm text-gray-400 mb-3">
                    ภาพตัวอย่างสินค้าใช้ในการโฆษณาเท่านั้น
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
        {/*UM Collection */}

        <h2 className="md:text-6xl font-black text-center py-6 text-5xl">
          Ultraman Collections
        </h2>

        <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {items3.map((um_collections) => (
            <div
              key={um_collections.id}
              className="transition delay-75 duration-300 ease-in-out my-5 px-5 pt-3 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
            >
              <Link
                href="/UM/[name]"
                as={`/UM/${um_collections.name}`}
                key={um_collections.id}
              >
                <a>
                  <p className="text-center">
                    <Image
                      src={
                        "https://admin.herocartoontshirt.com" +
                        um_collections.picture.formats.small.url
                      }
                      width={um_collections.picture.formats.small.width}
                      height={um_collections.picture.formats.small.height}
                      alt={um_collections.picture.name}
                      className="object-fill w-full"
                      loading="lazy"
                    />
                  </p>
                  <p className="text-center text-3xl font-bold">
                    {um_collections.name}
                  </p>
                  <p className="text-center text-xl">
                    {um_collections.description}
                  </p>
                  <p className="text-center text-sm text-gray-400 mb-3">
                    ภาพตัวอย่างสินค้าใช้ในการโฆษณาเท่านั้น
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export async function getStaticProps(context) {
  try {
    const { data } = await client.query({
      query: gql`
        query {
          kamenRiders {
            id
            name
            description
            picture {
              formats
            }
          }
          spCollections {
            id
            name
            description
            picture {
              formats
            }
          }
          umCollections {
            id
            name
            description
            picture {
              formats
            }
          }
        }
      `,
    });
    return {
      props: {
        items: data.kamenRiders,
        items2: data.spCollections,
        items3: data.umCollections,
      },
      revalidate: 1, // In seconds
    };
  } catch (error) {
    return { error };
  }
}
export default Home;
