// Example code
import axios from "axios";
import { useRouter } from "next/router";

export default function SPCollections({ sp_collections }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  // Render post...
  return (
    <>
      <p>test {sp_collections.name}</p>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  //data fetching
  const res = await axios.get(
    "https://admin.herocartoontshirt.my.to/UM-collections"
  );
  const um_collections = res.data;
  //parsing
  const um_collections_data = um_collections.filter(
    (p) => p.id.toString() === params.id
  );
  return {
    props: {
      um_collections: um_collections_data[0],
    },
  };
};

export const getStaticPaths = async () => {
  //data fetching
  const res = await axios.get(
    "https://admin.herocartoontshirt.my.to/UM-collections"
  );
  const um_collections = res.data;
  const paths = um_collections.map((um_collections_paths) => ({
    params: { id: um_collections_paths.id.toString() },
  }));

  return { paths, fallback: false };
};

