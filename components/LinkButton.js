import Link from "next/link";
export default function LinkButton({name,url}){
    return(
        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4">
          <p align="center">
            <Link href={"/"+url} prefetch={false}>
              <a>
                <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 w-4/5 h-20 rounded-md my-2 mx-2">
                  <span className="text-lg">{name}</span>
                </button>
              </a>
            </Link>
          </p>
        </div>
    )
}