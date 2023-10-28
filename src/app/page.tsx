/* eslint-disable react/no-unescaped-entities */
import CategoriesSlider from "@/components/CategoriesSlider";
import HeroSlider from "@/components/HeroSlider";
import { getListPage } from "@/lib/contentParser";
import { getCollectionProducts, getCollections } from "@/lib/shopify";
import CallToAction from "@/partials/CallToAction";
import LatestProducts from "@/partials/LatestProducts";
import SeoMeta from "@/partials/SeoMeta";
import { Banner } from "@/types";

const Home = async () => {
  const homepage = getListPage("homepage/_index.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const { banner }: { banner: Banner[]; } = frontmatter;

const categories = await getCollections();
const latestProducts = await getCollectionProducts({collection:"latest-products", reverse:false});

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
          <LatestProducts products={latestProducts} />
        </div>
      </section>

      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;