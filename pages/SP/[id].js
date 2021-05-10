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
    "https://admin.herocartoontshirt.my.to/sp-collections"
  );
  const sp_collections = res.data;
  //parsing
  const sp_collections_data = sp_collections.filter(
    (p) => p.id.toString() === params.id
  );
  return {
    props: {
      sp_collections: sp_collections_data[0],
    },
  };
};

export const getStaticPaths = async () => {
  //data fetching
  const res = await axios.get(
    "https://admin.herocartoontshirt.my.to/sp-collections"
  );
  const sp_collections = res.data;
  const paths = sp_collections.map((sp_collections_paths) => ({
    params: { id: sp_collections_paths.id.toString() },
  }));

  return { paths, fallback: false };
};

