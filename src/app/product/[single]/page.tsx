import Counter from "@/components/Counter";
import Social from "@/components/Social";
import social from "@/config/social.json";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import Image from "next/image";

const ProductSingle = (props: any) => {
	const tabsData: any = getSinglePage("products");
	console.log(props)

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
								<h6 className="text-lunar line-through">$89.99 USD</h6>
							</div>

							<div>
								<h5 className="mb-2">Frame Color</h5>
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
								<h5 className="mb-2">Size & Weight</h5>
								<select className="bg-theme-light rounded-md md:w-1/2 border-none" name="size-weight" id="size-weight">
									<option value="Height 61cm,Bulb E27">Height 61cm,Bulb E27</option>
									<option value="Height 61cm,Bulb E27">Height 61cm,Bulb E27</option>
									<option value="Height 41cm,Bulb E26">Height 41cm,Bulb E26</option>
									<option value="Height 32cm,Bulb E25">Height 32cm,Bulb E25</option>
								</select>
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

			<div>
				<MDXContent content={tabsData} />
			</div>
		</>
	)
}

export default ProductSingle;