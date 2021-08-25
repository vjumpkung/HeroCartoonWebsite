import Head from "next/head";
import { useRef } from "react";
import Link from "next/link";
import "lazysizes";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { imgLink, placeholder1 } from "../../lib/constant";
const Home = ({
  items,
  items2,
  items3,
  items4,
  items5,
  items6,
  items7,
  items8,
  error,
}) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  const SP_Collection = useRef(null);
  const MR_Collection = useRef(null);
  const UM_Collection = useRef(null);
  const MC_Collection = useRef(null);
  const B_Collection = useRef(null);
  const G_Collection = useRef(null);
  const N_Collection = useRef(null);
  const BT_Collection = useRef(null);
  const executeScroll_mr = () => MR_Collection.current.scrollIntoView();
  const executeScroll_sp = () => SP_Collection.current.scrollIntoView();
  const executeScroll_um = () => UM_Collection.current.scrollIntoView();
  const executeScroll_mc = () => MC_Collection.current.scrollIntoView();
  const executeScroll_b = () => B_Collection.current.scrollIntoView();
  const executeScroll_g = () => G_Collection.current.scrollIntoView();
  const executeScroll_n = () => N_Collection.current.scrollIntoView();
  const executeScroll_bt = () => BT_Collection.current.scrollIntoView();
  return (
    <>
      <div className="flex flex-wrap md:container md:mx-auto sm:hidden">
        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4">
          <p align="center">
            <Link href="/" prefetch={false}>
              <a>
                <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 w-4/5 h-10 rounded-md my-2 mx-2">
                  <span className="text-lg">Home</span>
                </button>
              </a>
            </Link>
          </p>
        </div>
      </div>
      <h2 className="md:text-6xl font-black text-center py-6 text-5xl">
        Products สินค้า
      </h2>
      <div className="flex flex-wrap md:container md:mx-auto">
        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4">
          <p align="center">
            <button
              onClick={executeScroll_mr}
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 w-4/5 h-20 rounded-md my-2 mx-2"
            >
              <span className="text-lg">MR Collection</span>
            </button>
          </p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4">
          <p align="center">
            <button
              onClick={executeScroll_sp}
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 w-4/5 h-20 rounded-md my-2 mx-2"
            >
              <span className="text-lg">SP Collection</span>
            </button>
          </p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4">
          <p align="center">
            <button
              onClick={executeScroll_um}
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 w-4/5 h-20 rounded-md my-2 mx-2"
            >
              <span className="text-lg">UM Collection</span>
            </button>
          </p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4">
          <p align="center">
            <button
              onClick={executeScroll_mc}
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 w-4/5 h-20 rounded-md my-2 mx-2"
            >
              <span className="text-lg">Manga Cartoon</span>
            </button>
          </p>
        </div>
        <div className="w-full md:w-1/4 ">
          <p align="center">
            <button
              onClick={executeScroll_b}
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 w-4/5 h-20 rounded-md my-2 mx-2"
            >
              <span className="text-lg">Black T-Shirt</span>
            </button>
          </p>
        </div>
        <div className="w-full md:w-1/4">
          <p align="center">
            <button
              onClick={executeScroll_g}
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 w-4/5 h-20 rounded-md my-2 mx-2"
            >
              <span className="text-lg">Topdry T-shirt</span>
            </button>
          </p>
        </div>
        <div className="w-full md:w-1/4">
          <p align="center">
            <button
              onClick={executeScroll_n}
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 w-4/5 h-20 rounded-md my-2 mx-2"
            >
              <span className="text-lg">Navy Blue T-shirt</span>
            </button>
          </p>
        </div>
        <div className="w-full md:w-1/4">
          <p align="center">
            <button
              onClick={executeScroll_bt}
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 w-4/5 h-20 rounded-md my-2 mx-2"
            >
              <span className="text-lg">Top Black T-shirt</span>
            </button>
          </p>
        </div>
      </div>
      <Head>
        <title>Products - เสื้อยืด Hero Cartoon</title>
      </Head>
      <div className="md:container md:mx-auto my-5 px-5 sm:my-6 sm:px-6 md:my-6 md:px-6 lg:my-6 lg:px-6 xl:my-6 xl:px-6">
        {/*MR Collection */}
        <h2
          className="md:text-6xl font-black text-center py-6 text-5xl"
          ref={MR_Collection}
        >
          Masked Rider Collections
        </h2>
        <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {items.map((kamen_riders) => (
            <div
              key={kamen_riders.id}
              className="pt-3 transition delay-75 duration-300 ease-in-out my-5 px-5 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
            >
              <Link
                href="/products/DTG/[name]"
                as={`/products/DTG/${kamen_riders.name}`}
                prefetch={false}
              >
                <a key={kamen_riders.id}>
                  <img
                    src={placeholder1}
                    data-src={
                      (kamen_riders.picture.formats.small.url).substr((kamen_riders.picture.formats.small.url).indexOf("h"),kamen_riders.picture.formats.small.url.indexOf("ad")+3) + "f_auto/" + (kamen_riders.picture.formats.small.url).substr((kamen_riders.picture.formats.small.url).indexOf("ad")+3)
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

        <h2
          className="md:text-6xl font-black text-center py-6 text-5xl"
          ref={SP_Collection}
        >
          Special Collections
        </h2>

        <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {items2.map((sp_collections) => (
            <div
              key={sp_collections.id}
              className="pt-3 transition delay-75 duration-300 ease-in-out my-5 px-5 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
            >
              <Link
                href="/products/DTG/[name]"
                as={`/products/DTG/${sp_collections.name}`}
                prefetch={false}
              >
                <a key={sp_collections.id}>
                  <img
                    src={placeholder1}
                    data-src={
                      (sp_collections.picture.formats.small.url).substr((sp_collections.picture.formats.small.url).indexOf("h"),sp_collections.picture.formats.small.url.indexOf("ad")+3) + "f_auto/" + (sp_collections.picture.formats.small.url).substr((sp_collections.picture.formats.small.url).indexOf("ad")+3)
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

        <h2
          className="md:text-6xl font-black text-center py-6 text-5xl"
          ref={UM_Collection}
        >
          Ultraman Collections
        </h2>

        <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {items3.map((um_collections) => (
            <div
              key={um_collections.id}
              className="transition delay-75 duration-300 ease-in-out my-5 px-5 pt-3 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
            >
              <Link
                href="/products/DTG/[name]"
                as={`/products/DTG/${um_collections.name}`}
                prefetch={false}
              >
                <a key={um_collections.id}>
                  <img
                    src={placeholder1}
                    data-src={
                      (um_collections.picture.formats.small.url).substr((um_collections.picture.formats.small.url).indexOf("h"),um_collections.picture.formats.small.url.indexOf("ad")+3) + "f_auto/" + (um_collections.picture.formats.small.url).substr((um_collections.picture.formats.small.url).indexOf("ad")+3)
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

        <h2
          className="md:text-6xl font-black text-center py-6 text-5xl"
          ref={MC_Collection}
        >
          Manga Cartoon
        </h2>

        <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {items4.map((mc_collections) => (
            <div
              key={mc_collections.id}
              className="transition delay-75 duration-300 ease-in-out my-5 px-5 pt-3 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
            >
              <Link
                href="/products/DTG/[name]"
                as={`/products/DTG/${mc_collections.name}`}
                prefetch={false}
              >
                <a key={mc_collections.id}>
                  <img
                    src={placeholder1}
                    data-src={
                      (mc_collections.picture.formats.small.url).substr((mc_collections.picture.formats.small.url).indexOf("h"),mc_collections.picture.formats.small.url.indexOf("ad")+3) + "f_auto/" + (mc_collections.picture.formats.small.url).substr((mc_collections.picture.formats.small.url).indexOf("ad")+3)
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
        {/*Black T-shirt */}

        <h2
          className="md:text-6xl font-black text-center py-6 text-5xl"
          ref={B_Collection}
        >
          Black T-shirt
        </h2>

        <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {items5.map((b) => (
            <div
              key={b.id}
              className="transition delay-75 duration-300 ease-in-out my-5 px-5 pt-3 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
            >
              <Link
                href="/products/DTF/[name]"
                as={`/products/DTF/${b.name}`}
                prefetch={false}
              >
                <a key={b.id}>
                  <img
                    src={placeholder1}
                    data-src={(b.picture.formats.small.url).substr((b.picture.formats.small.url).indexOf("h"),b.picture.formats.small.url.indexOf("ad")+3) + "f_auto/" + (b.picture.formats.small.url).substr((b.picture.formats.small.url).indexOf("ad")+3)}
                    width="460"
                    height="434.59"
                    alt={b.picture.name}
                    className="object-fill w-full mx-auto lazyload"
                  />

                  <p className="text-center text-3xl font-bold">{b.name}</p>
                  <p className="text-center text-xl">{b.description}</p>
                  <p className="text-center text-sm text-gray-400 mb-3">
                    ภาพตัวอย่างสินค้าใช้ในการโฆษณาเท่านั้น
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
        {/*Topdry T-shirt */}

        <h2
          className="md:text-6xl font-black text-center py-6 text-5xl"
          ref={G_Collection}
        >
          Topdry T-shirt
        </h2>

        <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {items6.map((b) => (
            <div
              key={b.id}
              className="transition delay-75 duration-300 ease-in-out my-5 px-5 pt-3 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
            >
              <Link
                href="/products/DTF/[name]"
                as={`/products/DTF/${b.name}`}
                prefetch={false}
              >
                <a key={b.id}>
                  <img
                    src={placeholder1}
                    data-src={(b.picture.formats.small.url).substr((b.picture.formats.small.url).indexOf("h"),b.picture.formats.small.url.indexOf("ad")+3) + "f_auto/" + (b.picture.formats.small.url).substr((b.picture.formats.small.url).indexOf("ad")+3)}
                    width="460"
                    height="434.59"
                    alt={b.picture.name}
                    className="object-fill w-full mx-auto lazyload"
                  />

                  <p className="text-center text-3xl font-bold">{b.name}</p>
                  <p className="text-center text-xl">{b.description}</p>
                  <p className="text-center text-sm text-gray-400 mb-3">
                    ภาพตัวอย่างสินค้าใช้ในการโฆษณาเท่านั้น
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
        {/*Navy T-shirt */}

        <h2
          className="md:text-6xl font-black text-center py-6 text-5xl"
          ref={N_Collection}
        >
          Navy Blue T-shirt
        </h2>

        <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {items7.map((b) => (
            <div
              key={b.id}
              className="transition delay-75 duration-300 ease-in-out my-5 px-5 pt-3 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
            >
              <Link
                href="/products/DTF/[name]"
                as={`/products/DTF/${b.name}`}
                prefetch={false}
              >
                <a key={b.id}>
                  <img
                    src={placeholder1}
                    data-src={(b.picture.formats.small.url).substr((b.picture.formats.small.url).indexOf("h"),b.picture.formats.small.url.indexOf("ad")+3) + "f_auto/" + (b.picture.formats.small.url).substr((b.picture.formats.small.url).indexOf("ad")+3)}
                    width="460"
                    height="434.59"
                    alt={b.picture.name}
                    className="object-fill w-full mx-auto lazyload"
                  />

                  <p className="text-center text-3xl font-bold">{b.name}</p>
                  <p className="text-center text-xl">{b.description}</p>
                  <p className="text-center text-sm text-gray-400 mb-3">
                    ภาพตัวอย่างสินค้าใช้ในการโฆษณาเท่านั้น
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
        {/*BT T-shirt */}

        <h2
          className="md:text-6xl font-black text-center py-6 text-5xl"
          ref={BT_Collection}
        >
          Top Black T-shirt
        </h2>

        <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {items8.map((b) => (
            <div
              key={b.id}
              className="transition delay-75 duration-300 ease-in-out my-5 px-5 pt-3 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
            >
              <Link
                href="/products/DTF/[name]"
                as={`/products/DTF/${b.name}`}
                prefetch={false}
              >
                <a key={b.id}>
                  <img
                    src={placeholder1}
                    data-src={(b.picture.formats.small.url).substr((b.picture.formats.small.url).indexOf("h"),b.picture.formats.small.url.indexOf("ad")+3) + "f_auto/" + (b.picture.formats.small.url).substr((b.picture.formats.small.url).indexOf("ad")+3)}
                    width="460"
                    height="434.59"
                    alt={b.picture.name}
                    className="object-fill w-full mx-auto lazyload"
                  />

                  <p className="text-center text-3xl font-bold">{b.name}</p>
                  <p className="text-center text-xl">{b.description}</p>
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
export async function getStaticProps() {
  try {
    const { data } = await client.query({
      query: gql`
      # Write your query or mutation here
      query {
        kamenriders {
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
        mCcollections{
          id
          name
          description
          picture {
            formats
          }
        }
        bTshirts {
          id
          name
          description
          picture {
            formats
          }
        }
        gTshirts {
          id
          name
          description
          picture {
            formats
          }
        }
        nTshirts {
          id
          name
          description
          picture {
            formats
          }
        }
        btTshirts {
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
        items: data.kamenriders,
        items2: data.spCollections,
        items3: data.umCollections,
        items4: data.mCcollections,
        items5: data.bTshirts,
        items6: data.gTshirts,
        items7: data.nTshirts,
        items8: data.btTshirts
      },
      revalidate: 1,
    };
  } catch (error) {
    return { error };
  }
}
export default Home;
