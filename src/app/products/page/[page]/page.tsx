import ProductLayouts from "@/components/ProductLayouts";
import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import { getProducts } from "@/lib/shopify";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import ProductCardView from "@/partials/ProductCardView";
import ProductListView from "@/partials/ProductListView";
const { pagination_card, pagination_list } = config.settings;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams = async() => {
  const products = await getProducts({});
  const totalPages = Math.ceil(products.length / pagination_list);
  let paths: { page: string }[] = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      page: (i + 1).toString(),
    });
  }

  return paths;
};

function spreadPages(num: number): number[] {
  let pages = [];

  for (let i = 2; i <= num; i++) {
    pages.push(i);
  }

  return pages;
}

const Products = ({ params, searchParams }: { params: { page: number }; searchParams:{[key: string]: string | string[] | undefined} }) => {
  const callToAction = getListPage("sections/call-to-action.md");
  const currentPage =
    params.page && !isNaN(Number(params.page)) ? Number(params.page) : 1;

  return (
    <>
      <PageHeader title={"Products"} />
      {/* <ProductLayouts currentPage={currentPage} /> */}
      <ProductLayouts>
				<ProductCardView currentPage={currentPage} searchParams={searchParams}/>
				<ProductListView currentPage={currentPage} searchParams={searchParams}/>
			</ProductLayouts>
      <CallToAction data={callToAction} />
    </>
  );
};

export default Products;
