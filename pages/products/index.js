import Head from "next/head";
import Link from "next/link";
import "lazysizes";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { imgLink, placeholder1 } from "../../lib/constant";
const Home = ({ items, items2, items3, items4, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <>
      <Head>
        <title>Products - เสื้อยืด Hero Cartoon</title>
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
                href="/products/[name]"
                as={`/products/${kamen_riders.name}`}
                prefetch={false}
              >
                <a key={kamen_riders.id}>
                  <img
                    src={placeholder1}
                    data-src={
                      "https://admin.herocartoontshirt.com" +
                      kamen_riders.picture.formats.small.url
                    }
                    width="460"
                    height="434.59"
                    alt={kamen_riders.picture.name}
                    className="object-fill w-full mx-auto lazyload"
                  />
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
                href="/products/[name]"
                as={`/products/${sp_collections.name}`}
                prefetch={false}
              >
                <a key={sp_collections.id}>
                  <img
                    src={placeholder1}
                    data-src={
                      "https://admin.herocartoontshirt.com" +
                      sp_collections.picture.formats.small.url
                    }
                    width="460"
                    height="434.59"
                    alt={sp_collections.picture.name}
                    className="object-fill w-full mx-auto lazyload"
                  />

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
                href="/products/[name]"
                as={`/products/${um_collections.name}`}
                prefetch={false}
              >
                <a key={um_collections.id}>
                  <img
                    src={placeholder1}
                    data-src={
                      imgLink + um_collections.picture.formats.small.url
                    }
                    width="460"
                    height="434.59"
                    alt={um_collections.picture.name}
                    className="object-fill w-full mx-auto lazyload"
                  />

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
        {/*Manga Cartoon */}

        <h2 className="md:text-6xl font-black text-center py-6 text-5xl">
          Manga Cartoon
        </h2>

        <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {items4.map((mc_collections) => (
            <div
              key={mc_collections.id}
              className="transition delay-75 duration-300 ease-in-out my-5 px-5 pt-3 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
            >
              <Link
                href="/products/[name]"
                as={`/products/${mc_collections.name}`}
                prefetch={false}
              >
                <a key={mc_collections.id}>
                  <img
                    src={placeholder1}
                    data-src={
                      imgLink + mc_collections.picture.formats.small.url
                    }
                    width="460"
                    height="434.59"
                    alt={mc_collections.picture.name}
                    className="object-fill w-full mx-auto lazyload"
                  />

                  <p className="text-center text-3xl font-bold">
                    {mc_collections.name}
                  </p>
                  <p className="text-center text-xl">
                    {mc_collections.description}
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
          mCcollections {
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
        items4: data.mCcollections,
      },
      revalidate: 1,
    };
  } catch (error) {
    return { error };
  }
}
export default Home;
