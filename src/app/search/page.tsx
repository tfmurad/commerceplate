import Search from "@/layouts/Search";
import { getSinglePage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";


// Retrieve all articles
const products: any = getSinglePage("products");

// List of items to search in
const searchList = products.map((item: any) => ({
  slug: item.slug!,
  frontmatter: item.frontmatter,
  content: item.content,
}));

const SearchPage = () => {
  return (
    <>
      <SeoMeta title={"Search"} />
      <Search searchList={searchList} />
    </>
  );
};

export default SearchPage;
