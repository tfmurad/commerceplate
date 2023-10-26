import Counter from "@/components/Counter";
import DropdownMenu from "@/components/filter/DropdownMenu";
import FrameColor from "@/components/FrameColor";
import ProductGallery from "@/components/ProductGallery";
import Social from "@/components/Social";
import social from "@/config/social.json";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import Image from "next/image";

const ProductSingle = ({ params }: { params: any }) => {
	const tabsData: any = getSinglePage("products");
	const post = tabsData.filter((page: any) => page.slug === params.single)[0];
	const { content } = post;

	async function handleMenuItemClick(itemId: string) {
		"use server"
		console.log(itemId);
	};

	const menuItems = [
		{ id: "item-1", label: " Alphabetically, Z-A" },
		{ id: "item-2", label: " Price, low to high" },
		{ id: "item-3", label: " Price, high to low" },
		{ id: "item-4", label: "Date, old to new" },
		{ id: "item-5", label: "Date, old to new" },
		{ id: "item-6", label: "Date, new to old" },
	];


	const deskLampProducts = [
		{
			id: 1,
			productName: "Modern LED Desk Lamp",
			imgSrc: "/images/product-1.png"
		},
		{
			id: 2,
			productName: "Adjustable Swing-Arm Desk Lamp",
			imgSrc: "/images/product-1.png"
		},
		{
			id: 3,
			productName: "Vintage Industrial Desk Lamp",
			imgSrc: "/images/product-1.png"
		},
		{
			id: 4,
			productName: "Wooden Base Desk Lamp",
			imgSrc: "/images/product-1.png"
		},
		{
			id: 5,
			productName: "Minimalist LED Task Lamp",
			imgSrc: "/images/product-1.png"
		}
	];

	return (
		<>
			<section className="md:section-sm">
				<div className="container">
					<div className="row justify-center">
						{/* right side contents  */}
						<div className="col-10 md:col-8 lg:col-6">
							<ProductGallery products={deskLampProducts} />
						</div>

						{/* left side contents  */}
						<div className="col-10 md:col-8 lg:col-5 md:ml-7 py-6 lg:py-0">
							<h1 className="text-3xl md:h2 mb-2 md:mb-6">Curved Table Lamp</h1>

							<div className="flex gap-2 items-center">
								<h4 className="text-light max-md:h2">$49.99 USD</h4>
								<s className="text-light max-md:h3 dark:text-darkmode-light">$89.99 USD</s>
							</div>

							<div className="my-8 md:my-10 space-y-6 md:space-y-10">
								<div>
									<h5 className="mb-2 max-md:text-base">Frame Color</h5>
									<div className="-mt-2">
										<FrameColor />
									</div>
								</div>

								<div>
									<h5 className="mb-2 max-md:text-base">Size & Weight</h5>
									<DropdownMenu handleMenuItemClick={handleMenuItemClick} items={menuItems} buttonLabel="Alphabetically, A-Z" />
								</div>
							</div>

							<div className="flex gap-4 mt-8 md:mt-10 mb-6">
								<Counter />

								{/* <button className="btn btn-outline-primary">Add To Cart
								</button> */}

								<button className="btn max-md:btn-sm btn-primary">Buy now
								</button>
							</div>

							<div className="mb-8 md:mb-10">
								<p className="p-2 max-md:text-sm rounded-md bg-theme-light dark:bg-darkmode-theme-light inline">Est. Delivery between 0 - 3 days</p>
							</div>

							{/* <div className="flex gap-3">
								<h5>Payment: </h5>
								<PaymentSlider paymentMethods={paymentMethods} />
							</div> */}

							<div className="flex flex-wrap items-center gap-3">
								<h5 className="max-md:text-base">Payment: </h5>
								{
									Array.from({ length: 7 }).map((_, i) => (
										<Image
											key={i}
											src={"/images/visa.png"}
											alt="payment"
											width={44}
											height={32}
										/>
									))
								}
							</div>

							<hr className="my-6" />

							<div className="flex gap-3 items-center mb-6">
								<h5 className="max-md:text-base">Share:</h5>
								<Social source={social.main} className="social-icons" />
							</div>

							<div className="flex gap-3">
								<h5 className="max-md:text-base">Tags:</h5>
								<button className="flex flex-wrap gap-3">
									{Array.from({ length: 5 }).map((_, idx) => <p
										key={idx} className="px-2 py-1 rounded-md border max-md:text-sm">Table Lamps</p>)}
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<MDXContent content={content} />
				</div>
			</section>

			<section>
				<div className="container text-center">
					<h3 className="mb-14">Latest Products</h3>

					<div className="row mb-6">
						{Array.from({ length: 4 }).map((_, index) => (
							<div
								key={index}
								className="text-center sm:col-6 md:col-4 lg:col-3"
							>
								<ImageFallback
									className=""
									src="/images/category-2.png"
									width={1000}
									height={269}
									alt="category image"
								/>
								<div className="p-6 text-center">
									<h5>Elliot Table Lamp</h5>
									<div className="flex justify-center gap-2">
										<h6 className="text-light">$49.99 USD</h6>
										<h6 className="text-light line-through">$89.99 USD</h6>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

		</>
	)
}

export default ProductSingle;