import Pagination from "@/components/Pagination";
import ProductFilter from "@/components/ProductFilter";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import ProductFilters from "@/partials/ProductFilters";
import Link from "next/link";
const { pagination } = config.settings;

// sample array of products
const products = [
	{
		id: 1,
		productName: "Product 1",
		image: "/images/category-1.png",
		currentPrice: 29.99,
		previousPrice: 39.99,
	},
	{
		id: 2,
		productName: "Product 2",
		image: "/images/category-1.png",
		currentPrice: 19.95,
		previousPrice: 24.99,
	},
	{
		id: 3,
		productName: "Product 3",
		image: "/images/category-1.png",
		currentPrice: 45.5,
		previousPrice: 49.99,
	},
	{
		id: 4,
		productName: "Product 4",
		image: "/images/category-1.png",
		currentPrice: 14.99,
		previousPrice: 19.99,
	},
	{
		id: 5,
		productName: "Product 5",
		image: "/images/category-1.png",
		currentPrice: 79.99,
		previousPrice: 89.99,
	},
	{
		id: 6,
		productName: "Product 6",
		image: "/images/category-1.png",
		currentPrice: 9.95,
		previousPrice: 12.99,
	},
	{
		id: 7,
		productName: "Product 7",
		image: "/images/category-1.png",
		currentPrice: 34.99,
		previousPrice: 44.99,
	},
	{
		id: 8,
		productName: "Product 8",
		image: "/images/category-1.png",
		currentPrice: 54.5,
		previousPrice: 59.99,
	},
	{
		id: 9,
		productName: "Product 9",
		image: "/images/category-1.png",
		currentPrice: 54.5,
		previousPrice: 59.99,
	},
];

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams = () => {

	const totalPages = Math.ceil(products.length / pagination);
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

const Products = ({ params }: { params: { page: number } }) => {
	const callToAction = getListPage("sections/call-to-action.md");

	const totalPages = Math.ceil(products.length / pagination);
	const currentPage =
		params.page && !isNaN(Number(params.page)) ? Number(params.page) : 1;
	const indexOfLastPost = currentPage * pagination;
	const indexOfFirstPost = indexOfLastPost - pagination;
	const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);

	console.log(params)
	return (
		<>
			<section>
				<div>
					<PageHeader title={"Product"} />
				</div>
			</section>

			<ProductFilter />

			<section>
				<div className="container">
					<div className="row">
						{/* Left Side  */}
						<div className="col-3 hidden lg:block">
							<ProductFilters />
						</div>

						{/* Right side  */}
						<div className="col-12 lg:col-9">
							<div className="row">
								{currentProducts.map((product) => (
									<div
										key={product.id}
										className="text-center col-6 md:col-4 mb-8 md:mb-14 relative group"
									>
										<ImageFallback
											className=""
											src={product.image}
											width={1000}
											height={269}
											alt="category image"
										/>
										<button className="btn btn-primary max-md:btn-sm absolute opacity-0 bottom-24 md:bottom-32 group-hover:-translate-y-3 -translate-x-1/2 group-hover:opacity-100 duration-300 ease-in-out">
											Add to Cart
										</button>
										<div className="py-6 text-center">
											<h2 className="font-bold md:font-normal h4">
												<Link href={`/product/product-1`}>
													{product.productName}
												</Link>
											</h2>
											<div className="flex justify-center items-center gap-x-2 mt-2">
												<span className="text-light text-xs md:text-lg font-bold">
													${product.currentPrice} USD
												</span>
												<s className="text-light text-xs md:text-base font-medium">
													${product.previousPrice} USD
												</s>
											</div>
										</div>
									</div>
								))}
							</div>

							<Pagination
								section={"products"}
								currentPage={1}
								totalPages={totalPages}
							/>
						</div>

					</div>
				</div>
			</section>

			<CallToAction data={callToAction} />

		</>
	);
};

export default Products;