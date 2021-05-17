import Head from "next/head";
const About = () => {
  return (
    <>
      <Head>
        <title>เกี่ยวกับเรา - เสื้อยืด Hero Cartoon</title>
      </Head>
      <div className="flex h-screen text-gray-500">
        <div className="m-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-center">
            เกี่ยวกับเรา
          </h1>
          <div className="max-w-md mx-3 sm:mx-0">
            <p className="py-6 ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"มาย้อนเวลาคิดถึงความสุขในวัยเด็กกับเสื้อยืดฮีโร่การ์ตูน
              เสื้อยืดสกรีนลายด้วยระบบดิจิตอลในรูปแบบของฮีโร่โทคุซัทสึ
              บนเนื้อผ้าที่นุ่ม ใส่สบาย ไม่หด ไม่ย้วย รีดง่าย
              พร้อมแพ็คเกจที่สวยงาม
              โบนัสพิเศษกับโปสการ์ดฮีโร่ในตำนานมาให้สะสมด้วยค่ะ
              มาเติมความฝันในวัยเด็กพร้อมกับความสุขในการสวมใส่เสื้อยืดฮีโร่ด้วยกันนะคะ"
              <p className="text-center  text-lg">ทีมงานเสื้อยืดฮีโร่การ์ตูน</p>
            </p>
          </div>
          <a href="tel:0948541177">
            <p className="text-xl my-2 text-center">
              <span className="icon-phone"></span> : 0948541177
            </p>
          </a>
          <a href="https://www.facebook.com/herocartoontshirt">
            <p className="text-xl my-2 text-center ">
              <span className="icon-facebook2"></span> : เสื้อยืด Hero Cartoon
            </p>
          </a>
          <a href="https://line.me/R/ti/p/%40004ktxqi">
            <p className="text-xl my-2 text-center ">
              <span class="icon-line"></span> : @004ktxqi
            </p>
          </a>
          <a href="https://herocartoontshirt.my.to">
            <p className="text-xl my-2 text-center ">
              <span class="icon-earth"></span> : herocartoontshirt.my.to
            </p>
          </a>
        </div>
      </div>
    </>
  );
};
export default About;
