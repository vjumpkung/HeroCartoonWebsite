import axios from "axios";
import Image from "next/image";
const Home = ({ kamen_riders, sp_collections, um_collections, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <>
      <div className="lg:container lg:mx-auto">
        <h2 className="text-6xl font-black text-center">
          Masked Rider collections
        </h2>
      </div>
      <div className="lg:container lg:mx-auto">
        {/*MR Collection */}
        <div className="flex flex-wrap -mx-5 overflow-hidden sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {kamen_riders.map((kamen_riders) => (
            <div
              key={kamen_riders.id}
              className="transition delay-75 duration-300 ease-in-out my-5 px-5 w-full overflow-hidden sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
            >
              <Image
                src={
                  "https://admin.herocartoontshirt.my.to" +
                  kamen_riders.picture.formats.small.url
                }
                width={kamen_riders.picture.formats.small.width}
                height={kamen_riders.picture.formats.small.height}
                layout="responsive"
                loading="lazy"
              ></Image>
              <p className="text-center text-3xl font-bold my-3">
                {kamen_riders.name}
              </p>
              <p className="text-center text-xl my-2">
                {kamen_riders.description}
              </p>
            </div>
          ))}
        </div>
        {/*SP Collection */}
        <div className="lg:container lg:mx-auto">
          <h2 className="text-6xl font-black text-center">
            Special collections
          </h2>
        </div>
        <div className="flex flex-wrap -mx-5 overflow-hidden sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {sp_collections.map((sp_collections) => (
            <div
              key={sp_collections.id}
              className="transition delay-75 duration-300 ease-in-out my-5 px-5 w-full overflow-hidden sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
            >
              <Image
                src={
                  "https://admin.herocartoontshirt.my.to" +
                  sp_collections.picture.formats.small.url
                }
                width={sp_collections.picture.formats.small.width}
                height={sp_collections.picture.formats.small.height}
                layout="responsive"
                loading="lazy"
              ></Image>
              <p className="text-center text-3xl font-bold my-3">
                {sp_collections.name}
              </p>
              <p className="text-center text-xl my-2">
                {sp_collections.description}
              </p>
            </div>
          ))}
        </div>
        {/*UM Collection */}
        <div className="lg:container lg:mx-auto">
          <h2 className="text-6xl font-black text-center">
            Ultraman collections
          </h2>
        </div>
        <div className="flex flex-wrap -mx-5 overflow-hidden sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 justify-center">
          {um_collections.map((um_collections) => (
            <div
              key={um_collections.id}
              className="transition delay-75 duration-300 ease-in-out my-5 px-5 w-full overflow-hidden sm:my-6 sm:px-6 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/3 xl:my-6 xl:px-6 xl:w-1/3 hover:shadow-2xl"
            >
              <Image
                src={
                  "https://admin.herocartoontshirt.my.to" +
                  um_collections.picture.formats.small.url
                }
                width={um_collections.picture.formats.small.width}
                height={um_collections.picture.formats.small.height}
                layout="responsive"
                loading="lazy"
              ></Image>
              <p className="text-center text-3xl font-bold my-3">
                {um_collections.name}
              </p>
              <p className="text-center text-xl my-2">
                {um_collections.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  try {
    const res = await axios.get(
      "https://admin.herocartoontshirt.my.to/kamen-riders"
    );
    const res2 = await axios.get(
      "https://admin.herocartoontshirt.my.to/sp-collections"
    );
    const res3 = await axios.get(
      "https://admin.herocartoontshirt.my.to/UM-collections"
    );
    const sp_collections = res2.data;
    const kamen_riders = res.data;
    const um_collections = res3.data;
    return { props: { kamen_riders, sp_collections, um_collections } };
  } catch (error) {
    return { error };
  }
}
export default Home;