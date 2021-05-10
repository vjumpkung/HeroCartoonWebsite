import BackButton from "./BackButton";
import { SRLWrapper } from "simple-react-lightbox";
const SizeChart = () => {
  return (
    <div className="md:flex md:flex-wrap sm:-mx-6 md:-mx-6 lg:-mx-6 xl:-mx-6 max-w-3xl">
      <div className="my-5 px-5 w-full">
        <p className="text-center font-bold text-xl text-blue-500 my-3 sm:text-4xl">
          --- ขนาดเสื้อ Size Chart ---
        </p>

        <SRLWrapper>
          <a href="/image/bannerlarge.png">
            <img
              src="/image/bannerOV.png"
              width="728"
              height="706.61"
              loading="lazy"
              alt="Size Chart OV"
              className=" w-4/5 mx-auto"
            ></img>
          </a>
        </SRLWrapper>
        <p className="text-center mt-2">
          <BackButton />
        </p>
      </div>
    </div>
  );
};
export default SizeChart
