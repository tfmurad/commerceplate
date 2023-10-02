/* eslint-disable react/no-unescaped-entities */
import HeroSlider from "@/components/HeroSlider";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { Banner, Feature } from "@/types";
import Link from "next/link";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: Banner[];
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta />
      <section>
        <div className="container">
          <div className="bg-gradient relative py-10">
            <HeroSlider content={banner} />
            {/* <div className="bg-white text-3xl w-[30px] h-[32px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-md absolute bottom-4 left-4"><HiOutlineArrowNarrowLeft /></div> */}
            {/* <div className="bg-white text-3xl w-[30px] h-[32px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-md absolute bottom-4 right-4 md:left-24 opacity-50"><HiOutlineArrowNarrowRight /></div> */}
          </div>
        </div>
      </section>

      {/* category section  */}
      <section className="section">
        <div className="container">
          <h3 className="text-center mb-14">Categories</h3>

          <div className="row">
            {Array.from({ length: 3 }).map((_, idx) =>
              <div key={idx} className="text-center sm:col-12 md:col-6 lg:col-4">
                <ImageFallback
                  className=""
                  src="/images/category-1.png"
                  width={531}
                  height={383}
                  alt="category image"
                />
                <div className="p-6">
                  <h5>Lamp</h5>
                  <h6 className="text-light">8 items</h6>
                </div>
              </div>)}
          </div>
        </div>
      </section>


      {/* Latest Products section  */}
      <section>
        <div className="container text-center">
          <h3 className="mb-2">Latest Products</h3>
          <p className="text-5 mb-14">Don't Miss Today's Latest Deals</p>

          <div className="row mb-6">
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
                  <h5>Elliot Table Lamp</h5>
                  <div className="flex justify-center gap-2">
                    <h6 className="text-light">$49.99 USD</h6>
                    <h6 className="text-light line-through">$89.99 USD</h6>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mx-auto">
            <Link className="btn btn-primary" href={""}>
              + See All Products
            </Link>
          </div>
        </div>
      </section>

      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;