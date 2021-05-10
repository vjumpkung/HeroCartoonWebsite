// Example code
import axios from "axios";
import { useRouter } from "next/router";
import Details from "../../components/Details";

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
    <div className="sm:container sm:mx-auto my-5 px-5 sm:my-6 sm:px-6 md:my-6 md:px-6 lg:my-6 lg:px-6 xl:my-6 xl:px-6">
      <div className="md:flex md:flex-wrap -mx-5 sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center items-center">
        <div className="my-5 px-5 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 lg:my-6 lg:px-6 lg:w-2/5 xl:my-6 xl:px-6 xl:w-2/5">
          <center>
            <img
              src={
                "https://admin.herocartoontshirt.my.to" +
                kamen_riders.picture.formats.small.url
              }
              width={kamen_riders.picture.formats.small.width}
              height={kamen_riders.picture.formats.small.height}
              alt={kamen_riders.picture.name}
              className="w-25"
              loading="lazy"
            ></img>
          </center>
        </div>
        <div className="my-5 px-5 w-full sm:my-6 sm:px-6 md:my-6 md:px-6 lg:my-6 lg:px-6 lg:w-3/5 xl:my-6 xl:px-6 xl:w-3/5">
          <h1 className="text-6xl font-bold text-center">
            {kamen_riders.name}
          </h1>
          <p className="text-center text-2xl mb-2">
            {kamen_riders.description}
          </p>
          <Details />
          <p className="text-center">
            <button className="backer" onClick={() => router.back()}>
              Back
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  //data fetching
  const res = await axios.get(
    "https://admin.herocartoontshirt.my.to/kamen-riders"
  );
  const kamen_riders = res.data;
  //parsing
  const kamen_riders_data = kamen_riders.filter(
    (p) => p.id.toString() === params.id
  );
  return {
    props: {
      kamen_riders: kamen_riders_data[0],
    },
  };
};

export const getStaticPaths = async () => {
  //data fetching
  const res = await axios.get(
    "https://admin.herocartoontshirt.my.to/kamen-riders"
  );
  const kamen_riders = res.data;
  const paths = kamen_riders.map((kamen_riders_paths) => ({
    params: { id: kamen_riders_paths.id.toString() },
  }));

  return { paths, fallback: false };
};

export default MRCollections;
