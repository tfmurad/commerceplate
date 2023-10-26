import ProductLayouts from "@/components/ProductLayouts";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import ProductCardView from "@/partials/ProductCardView";
import ProductListView from "@/partials/ProductListView";

export interface ProductViewProps {
  currentPage: number | null;
  searchParams: {[key: string]: string | string[] | undefined};
}

const Products = ({searchParams}: ProductViewProps) => {
	// console.log(searchParams)
	const callToAction = getListPage("sections/call-to-action.md");

	return (
		<>
			<PageHeader title={"Products"} />
			<ProductLayouts currentPage={null}>
				<ProductCardView currentPage={null} searchParams={searchParams}/>
				<ProductListView currentPage={null} searchParams={searchParams}/>
			</ProductLayouts>
			<CallToAction data={callToAction} />
		</>
	);
};

export default Products;