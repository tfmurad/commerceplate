import Social from "@/components/Social";
import social from "@/config/social.json";
import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";

const ProductSingle = () => {
	return (
		<>
			<section className="my-20 container flex justify-between gap-16 items-center">
				{/* right side contents  */}
				<div>
					<div>
						<Image className="rounded-md" src="/images/product-1.png" width={722} height={623} alt="" />
					</div>

					<div className="flex gap-4 mt-6">
						{
							Array.from({ length: 4 }).map((_, idx) => <Image className="rounded-md"
								key={idx} src="/images/product-1.png" width={148} height={146} alt="" />)
						}
					</div>
				</div>

				{/* left side contents  */}
				<div className="space-y-6 py-10">
					<h2 className="text-4xl">Curved Table Lamp</h2>

					<div className="flex gap-2 items-center">
						<p className="text-3xl font-medium text-[#41484D] ">$49.99 USD</p>
						<p className=" font-light text-[#666666] line-through">$89.99 USD</p>
					</div>

					<div>
						<h5 className="text-xl mb-2">Frame Color</h5>
						<div className="flex gap-3">
							<div className="w-10 h-10 border rounded-md bg-black"></div>
							<div className="w-10 h-10 border rounded-md bg-white"></div>
							<div className="w-10 h-10 border rounded-md bg-[#DFDFDF]"></div>
						</div>
					</div>

					<div>
						<h5 className="text-xl mb-2">Size & Weight</h5>
						<select className="bg-[#F2F2F2] rounded-md w-1/2 border-none" name="size-weight" id="size-weight">
							<option value="Height 61cm,Bulb E27">Height 61cm,Bulb E27</option>
							<option value="Height 61cm,Bulb E27">Height 61cm,Bulb E27</option>
							<option value="Height 41cm,Bulb E26">Height 41cm,Bulb E26</option>
							<option value="Height 32cm,Bulb E25">Height 32cm,Bulb E25</option>
						</select>
					</div>

					<div className="text-lg font-medium flex gap-4 w-3/4">
						<div className="border rounded-md px-4 py-2 flex gap-6 justify-between">
							<button>-</button>
							<span>1</span>
							<button>+</button>
						</div>

						<button className="border border-black text-black rounded-md px-4 py-2 flex justify-between">Add To Cart
						</button>

						<button className="border border-black text-white bg-black rounded-md px-4 py-2 flex justify-between">Buy now
						</button>
					</div>

					<div>
						<p className="p-2 rounded-md bg-[#F2F2F2] inline">Est. Delivery between 0 - 3 days</p>
					</div>

					<div className="flex gap-3">
						<h5 className="text-xl">Payment: </h5>
						{Array.from({ length: 6 }).map((_, idx) => <Image key={idx} src={'/images/visa.png'} width={44} height={32} alt="payment methods" />)}
						<p className="p-2 border rounded-md flex items-center justify-center"><BsChevronRight /></p>
					</div>

					<hr />

					<div className="flex gap-3">
						<h5 className="text-xl">Share:</h5>
						<Social source={social.main} className="social-icons" />
					</div>

					<div className="flex gap-3">
						<h5 className="text-xl">Tags:</h5>
						<div className="flex flex-wrap gap-3">
							{Array.from({ length: 5 }).map((_, idx) => <p
								key={idx} className="px-2 py-1 rounded-md border">Table Lamps</p>)}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default ProductSingle;