import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { gql, useQuery } from "@apollo/client";
import client from "../../apollo-client";
import { useRouter } from "next/router";
import SizeChart from "../../components/SizeChart";
import Details from "../../components/Details";
import Head from "next/head";
import Image from "next/image";

function MRCollections({ kamen_riders }) {
  const router = useRouter();
  if (router.isFallback)
    return (
      <>
        <div className="md:container md:mx-auto">
          <button className="spinner"></button>
        </div>
      </>
    );
  // Render post...
  return (
    <SimpleReactLightbox>
      <Head>
        <title>{kamen_riders.name} - เสื้อยืด Hero Cartoon</title>
      </Head>
      <div className="xl:container xl:mx-auto">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-1 mt-2"></div>
        <div className="md:flex md:flex-wrap  justify-center items-center">
          <div className="my-5 w-full sm:my-6 sm:px-6 md:my-6 lg:my-6 lg:px-6 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/2">
            <SRLWrapper>
              <a
                href={
                  "https://admin.herocartoontshirt.com" +
                  kamen_riders.picture.url
                }
              >
                <>
                  <img
                    src={
                      "https://admin.herocartoontshirt.com" +
                      kamen_riders.picture.formats.small.url
                    }
                    width={kamen_riders.picture.formats.small.width}
                    height={kamen_riders.picture.formats.small.height}
                    alt={kamen_riders.picture.name}
                    className=" w-4/5 mx-auto"
                    loading="lazy"
                  ></img>
                </>
              </a>
            </SRLWrapper>
          </div>
          <div className="my-5  w-full sm:my-6 sm:px-6 md:my-6 lg:my-6 lg:px-6 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/2">
            <h1 className="text-6xl font-bold text-center">
              {kamen_riders.name}
            </h1>
            <h2 className="text-center text-2xl mb-2">
              {kamen_riders.description}
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
        kamenRiders {
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
  const kamen_riders_data = data.kamenRiders.filter((p) => p.name.toString() === params.name);
  return {
    props: {
      kamen_riders: kamen_riders_data[0],
    },
  };
};

export const getStaticPaths = async () => {
  //data fetching
  const { data } = await client.query({
    query: gql`
      query {
        kamenRiders {
          name
          description
          id
          picture {
            formats
          }
        }
      }
    `,
  });
  const paths = data.kamenRiders.map((kamen_riders_paths) => ({
    params: { name: kamen_riders_paths.name.toString() },
  }));

  return { paths, fallback: false };
};

export default MRCollections;
