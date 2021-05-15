import Link from "next/link";
export default function BackButton() {
  return (
    <Link href="/products">
        <button
          className="transition delay-75 duration-300 ease-in-out bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg my-2"
        >
          <p className="text-xl">Back</p>
        </button> 
    </Link>
  );
}
