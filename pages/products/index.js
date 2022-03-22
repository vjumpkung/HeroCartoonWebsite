import Link from "next/link";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import "lazysizes";
import { gql } from "@apollo/client";
import client2 from "../../apollo-client2";
import ProductCode from "../../components/EachProduct";

export default function Products({items}){
    return(
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
            <SimpleReactLightbox>
              <SRLWrapper>
                <ProductCode items={items}/>
              </SRLWrapper>
            </SimpleReactLightbox>
        </>
    )
}
export async function getStaticProps(){
    const { data } = await client2.query({
        query: gql`
        query MyQuery {
          mrcollections(last:999) {
            id
            name
            picture {
              url
              width
              height
            }
          }
          sPcollections(last:999) {
            id
            name
            picture {
              url
              width
              height
            }
          }
          uMcollections(last:999) {
            id
            name
            picture {
              url
              width
              height
            }
          }
          mCcollections(last:999) {
            id
            name
            picture {
              url
              width
              height
            }
          }
          blacks(last:999) {
            id
            name
            picture{
              url
              width
              height
            }
          }
          navyblues(last:999) {
            id
            name
            picture{
              url
              width
              height
            }
          }
        }
        
        `
          });
    return {
        props: {
            items: data
        },
        revalidate: 1,
    }
}