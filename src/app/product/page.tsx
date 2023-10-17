import ProductLayouts from "@/components/ProductLayouts";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";

const Products = () => {
	const callToAction = getListPage("sections/call-to-action.md");

	return (
		<>
			<PageHeader title={"Product"} />
			<ProductLayouts currentPage={1}/>
			<CallToAction data={callToAction} />
		</>
	);
};

export default Products;