import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import client from "../apollo-client";
import React, { Fragment } from "react";
import Head from "next/head";

export default function Gallery({ items }) {
  const router = useRouter();
  if (router.isFallback)
    return (
      <div className="flex h-screen">
        <div className="m-auto">
          <button className="spinner"></button>
        </div>
      </div>
    );
  return (
    <div className="container mx-auto">
      <h1 className=" text-3xl lg:text-5xl text-center py-3 font-black">
        Gallery
      </h1>
      <Head>
        <title> Gallery - เสื้อยืด Hero Cartoon</title>
      </Head>
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="flex flex-wrap justify-center">
            {items.map((item) => (
              <Fragment key={item.id}>
                {item.picture.map((object) => (
                  <div
                    key={object.id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 py-2 max-w-max"
                  >
                    <img
                      src={"https://admin.herocartoontshirt.my.to" + object.url}
                      width={object.width}
                      height={object.height}
                      className="mx-auto square transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                      loading="lazy"
                      alt={object.name}
                    />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </div>
  );
}
export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        galleries {
          picture {
            name
            id
            url
            width
            height
          }
        }
      }
    `,
  });
  return {
    props: {
      items: data.galleries,
    },
  };
}
