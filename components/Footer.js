import "lazysizes";
export default function Footer() {
  return (
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
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6AQAAAACgl2eQAAABp0lEQVR4Xu2XUY7DMAhEkXyAHClX50g5gCWWmXG6aVfqfo9klKY2fv0YAYZGfbeMT8+HbUC2AdkGZAQy2o4cdMw4Z8SES2c2QH/mkf3E0Ysa19lv+Y0A6Go/NRZMsCOQdQEjYwx0jMbViXYWguUHFFPu9VbiyW8EqPzn83kvfwdgWbB8CiE7X04ngLcWky2QdQeKqBdeQJd832DtDyxWys1HsBwAHE22xQ6TMm3yZrYC8D1usf1W7r1F0wDAJbxk6mFnUfn4AFhrS70IHPm0Am5PR6dJ8ioiOwDzSQTurvb9STkHALqkdHIy0dYOoEB0k76EkWlYN4MjI6CzS/WOhsKsQ+w4dDkBVMfT0D2mqrECkt0cmTYYppJSM6BF8YvDlWpnYu7Sj10AhIn+0pEYN4Aph26CTZ8i/Rg7KyBR7KwUqKNYakwrQAasKJOLdAMgCuow9GI71R8fI4oFUFBXvMEwqMSK1K9MC2Dek9XgPxG4wWjlBaT6CMiVeKchQP8aUVKdxQsoqsOfWYZM1rwXgD1uYDR0XgIQ/gyWA/DNNiDbgGwDsv+BH/ea6GZQWpRdAAAAAElFTkSuQmCC"
              alt="line qr code"
              className="mx-auto py-3"
              width="150"
              height="150"
              loading="lazy"
            ></img>
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
              <p className="text-xl my-2 text-center ">
                <i className="fab fa-facebook"></i> : เสื้อยืด Hero Cartoon
              </p>
            </a>
            <a href="https://line.me/R/ti/p/%40004ktxqi">
              <p className="text-xl my-2 text-center ">
                <i className="fab fa-line"></i> : จิ้มลิ้งนี้เลยค่ะ
              </p>
            </a>
            <a href="https://herocartoontshirt.my.to">
              <p className="text-xl my-2 text-center ">
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
  );
}
