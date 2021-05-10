import { useRouter } from "next/router";
export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="transition delay-75 duration-300 ease-in-out bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg my-2"
      onClick={() => router.back()}
    >
      <p className="text-xl">Back</p>
    </button>
  );
}
