import Counter from "@/components/Counter";
import DropdownMenu from "@/components/DropdownMenu";
import FrameColor from "@/components/FrameColor";
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

	async function handleMenuItemClick (itemId: string) {
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

	return (
		<>
			<section className="md:section">
				<div className="container">
					<div className="row justify-center">
						{/* right side contents  */}
						<div className="col-12 md:col-5">
							<Image className="rounded-md" src="/images/product-1.png" width={722} height={623} alt="" />

							<div className="row mt-6">
								{
									Array.from({ length: 4 }).map((_, idx) => <Image className="col-3 rounded-md"
										key={idx} src="/images/product-1.png" width={168} height={146} alt="product" />)
								}
							</div>
						</div>

						{/* left side contents  */}
						<div className="col-12 md:col-6 space-y-6 md:ml-10 py-6 md:py-0">
							<h2>Curved Table Lamp</h2>

							<div className="flex gap-2 items-center">
								<h4 className="text-light">$49.99 USD</h4>
								<h6 className="text-light line-through">$89.99 USD</h6>
							</div>

							<div>
								<h5 className="mb-2">Frame Color</h5>
								<div className="mt-4">
									<FrameColor />
								</div>
							</div>

							<div>
								<h5 className="mb-2">Size & Weight</h5>
								<DropdownMenu handleMenuItemClick={handleMenuItemClick} items={menuItems} buttonLabel="Alphabetically, A-Z" />
							</div>

							<div className="flex gap-4 md:w-3/4">
								<Counter />

								<button className="btn btn-outline-primary">Add To Cart
								</button>

								<button className="btn btn-primary">Buy now
								</button>
							</div>

							<div>
								<p className="p-2 rounded-md bg-theme-light inline">Est. Delivery between 0 - 3 days</p>
							</div>

							{/* <div className="flex gap-3">
								<h5>Payment: </h5>
								<PaymentSlider paymentMethods={paymentMethods} />
							</div> */}

							<div className="flex flex-wrap gap-3">
								<h5>Payment: </h5>
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

							<hr />

							<div className="flex gap-3 items-center">
								<h5>Share:</h5>
								<Social source={social.main} className="social-icons" />
							</div>

							<div className="flex gap-3">
								<h5>Tags:</h5>
								<button className="flex flex-wrap gap-3">
									{Array.from({ length: 5 }).map((_, idx) => <p
										key={idx} className="px-2 py-1 rounded-md border">Table Lamps</p>)}
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