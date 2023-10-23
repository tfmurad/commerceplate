/* eslint-disable react/no-unescaped-entities */
import CategoriesSlider from "@/components/CategoriesSlider";
import HeroSlider from "@/components/HeroSlider";
import { getListPage } from "@/lib/contentParser";
import { getLatestProducts, getProducts } from "@/lib/shopify/shopify";
import CallToAction from "@/partials/CallToAction";
import LatestProducts from "@/partials/LatestProducts";
import SeoMeta from "@/partials/SeoMeta";
import { Banner } from "@/types";

const Home = async() => {
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

  const data = await getLatestProducts();
  const products = data.collection.products.edges;
  // console.log(products)

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
          <div className="text-center mb-6 md:mb-14">
            <h2>Categories</h2>
          </div>
          <CategoriesSlider categories={categories} />
        </div>
      </section>

      {/* Latest Products section  */}
      <section>
        <div className="container">
          <div className="text-center mb-6 md:mb-14">
            <h2 className="mb-2">Latest Products</h2>
            <p className="md:h5">Don't Miss Today's Latest Deals</p>
          </div>
          <LatestProducts products={products} />
        </div>
      </section>

      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;