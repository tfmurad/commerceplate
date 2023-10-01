/* eslint-disable react/no-unescaped-entities */
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { Button, Feature } from "@/types";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta />
      <section className="section pt-14 bg-gradient-to-r from-[#F4F4F4] to-[#F4F4F43D] w-[85%] mx-auto relative">
        <div className="container">
          <div className="flex flex-col md:flex-row md:gap-10 items-center">
            <div className="mb-6 md:mb-16 text-center lg:col-7">
              <p
                className="mb-4"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
              <h1
                className="mb-8"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
              {banner.button!.enable && (
                <Link className="btn btn-primary" href={banner.button!.link}>
                  {banner.button!.label}
                </Link>
              )}
            </div>
            {banner.image && (
              <div className="">
                <ImageFallback
                  src={banner.image}
                  className="mx-auto"
                  width="702"
                  height="551"
                  alt="banner image"
                  priority
                />
              </div>
            )}
          </div>
        </div>


        <div className="bg-white text-3xl w-[30px] h-[32px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-md absolute bottom-4 left-4"><HiOutlineArrowNarrowLeft /></div>
        <div className="bg-white text-3xl w-[30px] h-[32px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-md absolute bottom-4 right-4 md:left-24 opacity-50"><HiOutlineArrowNarrowRight /></div>
      </section>

      {/* category section  */}
      <section className="mt-[56px] md:mt-[130px] w-[85%] mx-auto container">
        <h3 className="text-12 text-center mb-14">Categories</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center">
            <ImageFallback
              className=""
              src="/images/category-1.png"
              width={531}
              height={383}
              alt="category image"
            />
            <div className="p-6">
              <p className="text-8 font-bold tracking-wider">Lamp</p>
              <p className="text-6 font-light text-[#666666] ">8 items</p>
            </div>
          </div>

          <div className="text-center">
            <ImageFallback
              className=""
              src="/images/category-2.png"
              width={531}
              height={383}
              alt="category image"
            />
            <div className="p-6">
              <p className="text-8 font-bold tracking-wider">Lamp</p>
              <p className="text-6 font-light text-[#666666] ">8 items</p>
            </div>
          </div>

          <div className="text-center">
            <ImageFallback
              className=""
              src="/images/category-1.png"
              width={531}
              height={383}
              alt="category image"
            />
            <div className="p-6">
              <p className="text-8 font-bold tracking-wider">Lamp</p>
              <p className="text-6 font-light text-[#666666] ">8 items</p>
            </div>
          </div>
        </div>
      </section>


      {/* Latest Products section  */}
      <section className="mt-[56px] md:mt-[130px] w-[85%] mx-auto container">
        <h3 className="text-12 text-center mb-2">Latest Products</h3>
        <p className="text-5 text-[#444444] text-center mb-14">Don't Miss Today's Latest Deals</p>

        <div className="row">
          {Array.from({ length: 8 }).map((_, index) =>
            <div key={index} className="text-center sm:col-6 md:col-4 lg:col-3">
              <ImageFallback
                className=""
                src="/images/category-1.png"
                width={1000}
                height={269}
                alt="category image"
              />
              <div className="p-6 text-center">
                <p className="text-8 font-bold tracking-wider">Elliot Table Lamp</p>
                <div className="flex justify-center gap-2">
                  <p className="text-lg font-light text-[#41484D] ">$49.99 USD</p>
                  <p className="font-light text-[#666666] line-through">$89.99 USD</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center mt-6">
          <Link className="btn btn-primary" href={""}>
            + See All Products
          </Link>
        </div>
      </section>

      {/* <Testimonials data={testimonial} /> */}
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
