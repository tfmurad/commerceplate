/* eslint-disable react/no-unescaped-entities */
import CategoriesSlider from "@/components/CategoriesSlider";
import HeroSlider from "@/components/HeroSlider";
import SectionTitle from "@/components/SectionTitle";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import LatestProducts from "@/partials/LatestProducts";
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
      name: 'Multiple Lights',
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
      name: 'Multiple Lights',
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

  // sample array of products 
  const products = [
    {
      id: 1,
      productName: "Product 1",
      image: "/images/category-1.png",
      currentPrice: 29.99,
      previousPrice: 39.99
    },
    {
      id: 2,
      productName: "Product 2",
      image: "/images/category-1.png",
      currentPrice: 19.95,
      previousPrice: 24.99
    },
    {
      id: 3,
      productName: "Product 3",
      image: "/images/category-1.png",
      currentPrice: 45.50,
      previousPrice: 49.99
    },
    {
      id: 4,
      productName: "Product 4",
      image: "/images/category-1.png",
      currentPrice: 14.99,
      previousPrice: 19.99
    },
    {
      id: 5,
      productName: "Product 5",
      image: "/images/category-1.png",
      currentPrice: 79.99,
      previousPrice: 89.99
    },
    {
      id: 6,
      productName: "Product 6",
      image: "/images/category-1.png",
      currentPrice: 9.95,
      previousPrice: 12.99
    },
    {
      id: 7,
      productName: "Product 7",
      image: "/images/category-1.png",
      currentPrice: 34.99,
      previousPrice: 44.99
    },
    {
      id: 8,
      productName: "Product 8",
      image: "/images/category-1.png",
      currentPrice: 54.50,
      previousPrice: 59.99
    }
  ];

  return (
    <>
      <SeoMeta />
      <section>
        <div className="container">
          <div className="bg-gradient py-10">
            <HeroSlider content={banner} />
          </div>
        </div>
      </section>

      {/* category section  */}
      <section className="section">
        <div className="container">
          <SectionTitle title="Categories" />
          <CategoriesSlider categories={categories} />
        </div>
      </section>

      {/* Latest Products section  */}
      <section>
        <div className="container-sm">
          <SectionTitle title="Latest Products" subtitle="Don't Miss Today's Latest Deals" />
          <LatestProducts products={products} />

          <div className="flex justify-center">
            <Link className="btn-sm md:btn-lg btn-primary font-medium" href={"/product"}>
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
