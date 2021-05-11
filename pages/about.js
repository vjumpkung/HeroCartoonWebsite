import Head from "next/head";
const About = () => {
  return (
    <>
      <Head>
        <title>เกี่ยวกับเรา - เสื้อยืด Hero Cartoon</title>

      </Head>
      <div class="flex h-screen ">
        <div class="m-auto">
          <h1 className="text-3xl lg:text-6xl font-bold text-center">เกี่ยวกับเรา</h1>
          <a href="tel:0948541177">
            <p className="text-xl my-2 text-center ">
              <i className="fas fa-phone-alt"></i> : 0948541177
            </p>
          </a>
          <a href="https://www.facebook.com/herocartoontshirt">
            <p className="text-xl my-2 text-center ">
              <i class="fab fa-facebook"></i> : เสื้อยืด Hero Cartoon
            </p>
          </a>
          <a href="https://line.me/R/ti/p/%40004ktxqi">
            <p className="text-xl my-2 text-center ">
              <i class="fab fa-line"></i> : @004ktxqi
            </p>
          </a>
          <a href="https://herocartoontshirt.my.to">
            <p className="text-xl my-2 text-center ">
              <i class="fas fa-globe"></i> : herocartoontshirt.my.to
            </p>
          </a>
        </div>
      </div>
    </>
  );
};
export default About;
