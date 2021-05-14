import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { gql, useQuery } from "@apollo/client";
import client from "../../apollo-client";
import { useRouter } from "next/router";
import SizeChart from "../../components/SizeChart";
import Details from "../../components/Details";
import Head from "next/head";

export default function SPCollections({ sp_collections }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  // Render post...
  return (
    <SimpleReactLightbox>
      <Head>
        <title>{sp_collections.name} - เสื้อยืด Hero Cartoon</title>
      </Head>
      <div className="xl:container xl:mx-auto">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-1 mt-2"></div>
        <div className="md:flex md:flex-wrap  justify-center items-center">
          <div className="my-5 w-full sm:my-6 sm:px-6 md:my-6 lg:my-6 lg:px-6 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/2">
            <SRLWrapper>
              <a
                href={
                  "https://admin.herocartoontshirt.com" +
                  sp_collections.picture.url
                }
              >
                <>
                  <img
                    src={
                      "https://admin.herocartoontshirt.com" +
                      sp_collections.picture.formats.small.url
                    }
                    width={sp_collections.picture.formats.small.width}
                    height={sp_collections.picture.formats.small.height}
                    alt={sp_collections.picture.name}
                    className=" w-4/5 mx-auto"
                    loading="lazy"
                  ></img>
                </>
              </a>
            </SRLWrapper>
          </div>
          <div className="my-5  w-full sm:my-6 sm:px-6 md:my-6 lg:my-6 lg:px-6 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/2">
            <h1 className="text-6xl font-bold text-center">
              {sp_collections.name}
            </h1>
            <h2 className="text-center text-2xl mb-2">
              {sp_collections.description}
            </h2>
            <Details />
          </div>
          <SizeChart />
        </div>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-1 mb-2"></div>
      </div>
    </SimpleReactLightbox>
  );
}

export const getStaticProps = async ({ params }) => {
  //data fetching
  const { data } = await client.query({
    query: gql`
      query {
        spCollections {
          name
          description
          id
          picture {
            url
            formats
          }
        }
      }
    `,
  });
  //parsing
  const sp_collections_data = data.spCollections.filter(
    (p) => p.name.toString() === params.name
  );
  return {
    props: {
      sp_collections: sp_collections_data[0],
    },
  };
};

export const getStaticPaths = async () => {
  //data fetching
  const { data } = await client.query({
    query: gql`
      query {
        spCollections {
          name
          description
          id
          picture {
            url
            formats
          }
        }
      }
    `,
  });
  const paths = data.spCollections.map((sp_collections_paths) => ({
    params: { name: sp_collections_paths.name.toString() },
  }));

  return { paths, fallback: false };
};
