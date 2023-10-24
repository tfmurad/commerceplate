import ProductLayouts from "@/components/ProductLayouts";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import ProductCardView from "@/partials/ProductCardView";
import ProductListView from "@/partials/ProductListView";

const Products = () => {
	const callToAction = getListPage("sections/call-to-action.md");

	return (
		<>
			<PageHeader title={"Products"} />
			<ProductLayouts currentPage={null}>
				<ProductCardView currentPage={null}/>
				<ProductListView currentPage={null}/>
			</ProductLayouts>
			<CallToAction data={callToAction} />
		</>
	);
};

export default Products;