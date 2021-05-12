import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Masonry from "react-masonry-css";
import { useRouter } from "next/router";
import axios from "axios";
export default function Gallery(data) {
  const router = useRouter();
  if (router.isFallback)
    return (
      <div>
        <div className="flex h-screen">
          <div className="m-auto">
            <button className="spinner"></button>
          </div>
        </div>
      </div>
    );
  return (
    <SimpleReactLightbox>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div>{data.picture.map((item) => (
            <img src={item.picture.url}></img>
        ))}</div>
      </Masonry>
    </SimpleReactLightbox>
  );
}
export async function getServerSideProps({req}) {
  try {
    const res = await axios.get("https://admin.herocartoontshirt.my.to/galleries");
    const data = res.data;
    console.log(res);
    return {
      props: { data },
    };
  } catch (error) {
    return { error };
  }
}
