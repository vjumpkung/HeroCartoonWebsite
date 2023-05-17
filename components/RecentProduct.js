import "lazysizes";
import { placeholder1 } from "../lib/constant";

export default function RecentProduct(items) {
  return (
    <>
      <div className="md:flex md:flex-wrap justify-center">
        {Object.values(items).map((item) => {
          return Object.values(item).map((x) =>
            x.map((p) => (
              <div
                key={p.id}
                id={p.id}
                className="pt-3 transition delay-75 duration-300 ease-in-out my-5 px-1 sm:my-5 sm:px-1 md:my-6 md:px-6 md:w-1/2 lg:my-6 lg:px-6 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/2 hover:shadow-2xl"
              >
                <img
                  src={placeholder1}
                  data-src={p.picture.url}
                  width={p.picture.width}
                  height={p.picture.height}
                  alt={p.name}
                  className="object-fill h-auto w-1/2 mx-auto lazyload"
                />
                <p key={p.id} className="text-center text-3xl font-bold">
                  {p.name}
                </p>
                <p className="text-center text-sm text-gray-400 mb-3">
                  ภาพตัวอย่างสินค้าใช้ในการโฆษณาเท่านั้น
                </p>
              </div>
            ))
          );
        })}
      </div>
    </>
  );
}
