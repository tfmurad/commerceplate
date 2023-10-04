/* eslint-disable react/no-unescaped-entities */
import CategoriesSlider from "@/components/CategoriesSlider";
import HeroSlider from "@/components/HeroSlider";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { Banner } from "@/types";
import Link from "next/link";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const { banner }: { banner: Banner[]; } = frontmatter;


  // Sample array of categories
  const categories = [
    {
      id: 1,
      name: 'Lamp',
      imageSrc: '/images/category-1.png',
      itemCount: 8,
    },
    {
      id: 2,
      name: 'Chair',
      imageSrc: '/images/category-2.png',
      itemCount: 12,
    },
    {
      id: 3,
      name: '1 Lamp',
      imageSrc: '/images/category-1.png',
      itemCount: 8,
    },
    {
      id: 4,
      name: 'Lamp',
      imageSrc: '/images/category-1.png',
      itemCount: 8,
    },
    {
      id: 5,
      name: 'Chair',
      imageSrc: '/images/category-2.png',
      itemCount: 12,
    },
    {
      id: 6,
      name: '1 Lamp',
      imageSrc: '/images/category-1.png',
      itemCount: 8,
    }
  ];

  return (
    <>
      <SeoMeta />
      <section>
        <div className="container">
          <div className="bg-gradient relative py-10">
            <HeroSlider content={banner} />
          </div>
        </div>
      </section>

      {/* category section  */}
      <section className="section">
        <div className="container">
          <h3 className="text-center mb-14">Categories</h3>
          <CategoriesSlider categories={categories} />
        </div>
      </section>

      {/* Latest Products section  */}
      <section>
        <div className="container-sm text-center">
          <h3 className="mb-2">Latest Products</h3>
          <p className="text-5 mb-14">Don't Miss Today's Latest Deals</p>

          <div className="row mb-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="text-center sm:col-6 md:col-4 lg:col-3"
              >
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
            ))}
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
