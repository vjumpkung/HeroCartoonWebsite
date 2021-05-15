import "lazysizes";
import Link from "next/link"
const navigation = [
  { name: "หน้าแรก", href: "/", current: false },
  { name: "สินค้า", href: "/products", current: false },
  { name: "รูปภาพ", href: "/gallery", current: false },
  { name: "รีวิว", href: "/reviews", current: false },
  { name: "เกี่ยวกับ", href: "/about", current: false },
];
export default function Footer() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="md:container md:mx-auto text-white">
          <div className="flex flex-wrap  overflow-hidden  justify-center">
            <div className=" w-full overflow-hidden md:w-1/2  lg:w-1/2  xl:w-1/4 ">
              <img
                className="hidden lg:block h-8 w-auto"
                src="/logo.png"
                alt="Hero Cartoon Tshirt"
                width="199.42"
                height="32"
                className="mx-auto pt-2"
                loading="lazy"
              />
              <div className="flex">
                <div className="mx-auto my-2">
                  <p className="text-left my-2 mx-2">
                    มาย้อนเวลาคิดถึงความสุขในวัยเด็กกับเสื้อยืดฮีโร่การ์ตูน
                    เสื้อยืดสกรีนลายด้วยระบบดิจิตอลในรูปแบบของฮีโร่โทคุซัทสึ
                </p>
                </div>
              </div>

            </div>
            <div className=" w-full overflow-hidden md:w-1/2  lg:w-1/2  xl:w-1/4 ">
              <p className="text-2xl my-1 text-center font-bold underline">
                Navigation
            </p>
              <div className="flex h-3/5">
                <div className="m-auto">
                  <p className="text-justify my-1 text-lg">
                    {
                      navigation.map((item) => (
                        <Link href={item.href}>
                          <a>
                            <span>• {item.name}</span>
                            <br />
                          </a>
                        </Link>
                      ))
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="  w-full overflow-hidden  md:w-1/2  lg:w-1/2  xl:w-1/4">
              <p className="text-2xl my-2 text-center font-bold underline">
                ติดต่อเรา
            </p>
              <a href="tel:0948541177">
                <p className="text-xl my-2 text-center ">
                  <i className="fas fa-phone-alt"></i> : 0948541177
              </p>
              </a>
              <a href="https://www.facebook.com/herocartoontshirt">
                <p className="text-xl my-2 text-center text-blue-500">
                  <i className="fab fa-facebook"></i> : เสื้อยืด Hero Cartoon
              </p>
              </a>
              <a href="https://line.me/R/ti/p/%40004ktxqi">
                <p className="text-xl my-2 text-center text-green-500">
                  <i className="fab fa-line"></i> : @004ktxqi
              </p>
              </a>
              <a href="https://herocartoontshirt.my.to">
                <p className="text-xl my-2 text-center text-red-500">
                  <i className="fas fa-globe"></i> : herocartoontshirt.my.to
              </p>
              </a>
            </div>
            <div className="w-full overflow-hidden  md:w-1/2  lg:w-1/2  xl:w-1/4 ">
              <div className="my-2">
                <p className="text-xl my-2 text-center ">
                  <i className="fab fa-facebook"></i> Facebook
              </p>
                <center>
                  <iframe
                    data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fherocartoontshirt%2F&tabs&width=300&height=200&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=196640848959446"
                    width="300"
                    height="200"
                    className="facebook lazyload"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-2">
        <p className="text-center font-bold text-white">© VjumpKunG Made with ❤️ Next.JS + Tailwind</p>
      </div>
    </>
  );
}
