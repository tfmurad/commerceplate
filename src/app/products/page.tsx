import ProductLayouts from "@/components/ProductLayouts";
import { defaultSort, sorting } from "@/lib/constants";
import { getListPage } from "@/lib/contentParser";
import { getProducts } from "@/lib/shopify";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import ProductCardView from "@/partials/ProductCardView";
import ProductListView from "@/partials/ProductListView";

export interface ProductViewProps {
  currentPage: number | null;
  searchParams: {[key: string]: string | string[] | undefined};
}

const Products = async({searchParams}: ProductViewProps) => {
	// console.log(searchParams)
	const callToAction = getListPage("sections/call-to-action.md");

	const { sort, q: searchValue } = searchParams as { [key: string]: string };
	const { sortKey, reverse } =
	  sorting.find((item) => item.slug === sort) || defaultSort;
  
	const products = await getProducts({ sortKey, reverse, query: searchValue });

	return (
		<>
			<PageHeader title={"Products"} />
			<ProductLayouts>
				<ProductCardView currentPage={null} products={products} searchValue={searchValue}/>
				{/* <ProductListView currentPage={null} searchParams={searchParams}/> */}
			</ProductLayouts>
			<ProductCardView currentPage={null} products={products} searchValue={searchValue}/>
			<CallToAction data={callToAction} />
		</>
	);
};

export default Products;