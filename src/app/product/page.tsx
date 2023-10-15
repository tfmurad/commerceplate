import ProductFilter from "@/components/ProductFilter";
import RangeSlider from "@/components/RangeSlider/RangeSlider";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import Link from "next/link";

const Product = () => {
	const callToAction = getListPage("sections/call-to-action.md");

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

							<RangeSlider />

							<div>
								<h4 className="mt-10 mb-2">Product Categories</h4>
								<hr />
								<ul className="mt-4 space-y-4">
									{Array.from({ length: 6 }).map((_, i) => (
										<li
											key={i}
											className="flex justify-between text-light dark:text-darkmode-light"
										>
											Gatelight <span>( 09 )</span>
										</li>
									))}
								</ul>
							</div>

							<div>
								<h4 className="mt-10 mb-2">Brand</h4>
								<hr />
								<ul className="mt-4 space-y-4">
									{Array.from({ length: 5 }).map((_, i) => (
										<li
											key={i}
											className="flex justify-between text-light dark:text-darkmode-light"
										>
											<span>WebelKart ( 09 )</span>
											<span>
												{" "}
												<input type="checkbox" name="" id="" />
											</span>
										</li>
									))}
								</ul>
							</div>

							<div>
								<h4 className="mt-10 mb-2">Frame Color</h4>
								<hr />
								<div className="flex gap-4 mt-4">
									<div className=" bg-gray-800 rounded-md border">
										<input type="checkbox" className="input-checkbox" />
									</div>

									<div className=" bg-gray-200 rounded-md border">
										<input type="checkbox" className="input-checkbox" />
									</div>

									<div className=" bg-gray-400 rounded-md border">
										<input type="checkbox" className="input-checkbox" />
									</div>
								</div>
							</div>

							<div>
								<h4 className="mt-10 mb-2">Size</h4>
								<hr />
								<ul className="mt-4 space-y-4">
									{Array.from({ length: 3 }).map((_, i) => (
										<li
											key={i}
											className="flex justify-between text-light dark:text-darkmode-light"
										>
											<span>Height 61cm,Bulb E27</span>
											<span>
												{" "}
												<input type="checkbox" name="" id="" />
											</span>
										</li>
									))}
								</ul>
							</div>

							<div>
								<h4 className="mt-10 mb-2">Size</h4>
								<hr />
								<button className="flex flex-wrap gap-3 mt-4">
									{Array.from({ length: 4 }).map((_, idx) => (
										<p
											key={idx}
											className="px-2 py-1 rounded-md border text-light dark:text-darkmode-light"
										>
											Table Lamps
										</p>
									))}
								</button>
							</div>
						</div>

						{/* Right side  */}
						<div className="col-12 lg:col-9">
							<div className="row">
								{products.map((product) => (
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
										<button className="btn btn-primary font-medium absolute opacity-0 bottom-32 group-hover:-translate-y-6 -translate-x-1/2 group-hover:opacity-100 duration-300 ease-in-out">
											Add to Cart
										</button>
										<div className="p-6 text-center">
											<h4 className="font-bold md:font-normal">
												<Link href={`/product/product-1`}>
													{product.productName}
												</Link>
											</h4>
											<div className="flex justify-center items-center gap-2 mt-2">
												<span className="text-light text-xs md:text-lg">
													${product.currentPrice} USD
												</span>
												<s className="text-light line-through md:text-base">
													${product.previousPrice} USD
												</s>
											</div>
										</div>
									</div>
								))}
							</div>

							<div className="flex justify-center">
								<Link
									className="btn-sm md:btn-lg btn-primary font-medium"
									href={"/product"}
								>
									+ See All Products
								</Link>
							</div>
						</div>

					</div>
				</div>
			</section>

			<CallToAction data={callToAction} />

		</>
	);
};

export default Product;