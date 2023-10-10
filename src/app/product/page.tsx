"use client"
import ModalFilter from "@/components/ModalFilter";
import ImageFallback from "@/helpers/ImageFallback";
// import { getListPage } from "@/lib/contentParser";
// import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import Link from "next/link";
import { useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Product = () => {
	// const callToAction = getListPage("sections/call-to-action.md");
	const [showModal, setShowModal] = useState(false);
	// sample array of products 
	const products = [
		{
			id: 1,
			productName: "Product 1",
			image: "/images/category-1.png",
			currentPrice: 29.99,
			previousPrice: 39.99
		},
		{
			id: 2,
			productName: "Product 2",
			image: "/images/category-1.png",
			currentPrice: 19.95,
			previousPrice: 24.99
		},
		{
			id: 3,
			productName: "Product 3",
			image: "/images/category-1.png",
			currentPrice: 45.50,
			previousPrice: 49.99
		},
		{
			id: 4,
			productName: "Product 4",
			image: "/images/category-1.png",
			currentPrice: 14.99,
			previousPrice: 19.99
		},
		{
			id: 5,
			productName: "Product 5",
			image: "/images/category-1.png",
			currentPrice: 79.99,
			previousPrice: 89.99
		},
		{
			id: 6,
			productName: "Product 6",
			image: "/images/category-1.png",
			currentPrice: 9.95,
			previousPrice: 12.99
		},
		{
			id: 7,
			productName: "Product 7",
			image: "/images/category-1.png",
			currentPrice: 34.99,
			previousPrice: 44.99
		},
		{
			id: 8,
			productName: "Product 8",
			image: "/images/category-1.png",
			currentPrice: 54.50,
			previousPrice: 59.99
		},
		{
			id: 9,
			productName: "Product 9",
			image: "/images/category-1.png",
			currentPrice: 54.50,
			previousPrice: 59.99
		}
	];

	return (
		<>
			<section>
				<div>
					<PageHeader title={"Product"} />
				</div>
			</section>

			<section className="pt-14 xl:pt-28">
				<div className="container">
					<div className="row">
						{/* Left Side  */}
						<div className="col-3 hidden md:block">
							<div className="border border-border rounded-md flex justify-evenly">
								<div>
									<input className="bg-transparent border-none focus:ring-transparent" type="text" placeholder="Search For Products" />
								</div>
								<button><IoSearch size={20} /></button>
							</div>

							<div>
								<h4 className="mt-10 mb-2">Select Price Range</h4>
								<hr />
								<input className="mt-4 w-full" type="range" name="" id="" />
							</div>

							<div>
								<h4 className="mt-10 mb-2">Product Categories</h4>
								<hr />
								<ul className="mt-4 space-y-4">
									{Array.from({ length: 6 }).map((_, i) => (
										<li key={i} className="flex justify-between text-lunar dark:text-darkmode-lunar">Gatelight <span>( 09 )</span></li>
									))}

								</ul>
							</div>

							<div>
								<h4 className="mt-10 mb-2">Brand</h4>
								<hr />
								<ul className="mt-4 space-y-4">
									{Array.from({ length: 5 }).map((_, i) => (
										<li key={i} className="flex justify-between text-lunar dark:text-darkmode-lunar">
											<span>WebelKart ( 09 )</span>
											<span> <input type="checkbox" name="" id="" /></span>
										</li>
									))}

								</ul>
							</div>

							<div>
								<h4 className="mt-10 mb-2">Frame Color</h4>
								<hr />
								<div className="flex gap-4 mt-4">
									<div className=' bg-gray-800 rounded-md border'>
										<input type="checkbox"
											className='input-checkbox'
										/>
									</div>

									<div className=' bg-gray-200 rounded-md border'>
										<input type="checkbox"
											className='input-checkbox'
										/>
									</div>

									<div className=' bg-gray-400 rounded-md border'>
										<input type="checkbox"
											className='input-checkbox'
										/>
									</div>
								</div>
							</div>

							<div>
								<h4 className="mt-10 mb-2">Size</h4>
								<hr />
								<ul className="mt-4 space-y-4">
									{Array.from({ length: 3 }).map((_, i) => (
										<li key={i} className="flex justify-between text-lunar dark:text-darkmode-lunar">
											<span>Height 61cm,Bulb E27</span>
											<span> <input type="checkbox" name="" id="" /></span>
										</li>
									))}

								</ul>
							</div>


							<div>
								<h4 className="mt-10 mb-2">Size</h4>
								<hr />
								<button className="flex flex-wrap gap-3 mt-4">
									{Array.from({ length: 4 }).map((_, idx) => <p
										key={idx} className="px-2 py-1 rounded-md border text-lunar dark:text-darkmode-lunar">Table Lamps</p>)}
								</button>
							</div>
						</div>

						{/* Right side  */}
						<div className="col-12 md:col-9">
							<div className="flex justify-between items-center mb-4">
								<div className="flex gap-2">
									<div className="bg-dark text-white p-2 rounded-md"><BsGridFill /></div>
									<div className="border border-dark text-dark p-2 rounded-md"><FaList /></div>
								</div>

								<div className="flex gap-2 items-center">
									<p className="font-medium">Sort By</p>
									<select className="rounded-md px-4 border border-border" name="" id="">
										<option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
										<option value="Height 61cm,Bulb E27">Height 61cm,Bulb E27</option>
										<option value="Height 41cm,Bulb E26">Height 41cm,Bulb E26</option>
										<option value="Height 32cm,Bulb E25">Height 32cm,Bulb E25</option>
									</select>
								</div>
							</div>

							<div className="row">
								{products.map((product) => (
									<div key={product.id} className="text-center col-6 md:col-4 mb-8 md:mb-14 relative group">
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
											<h4 className='font-bold md:font-normal'>{product.productName}</h4>
											<div className="flex justify-center items-center gap-2 mt-2">
												<span className="text-light text-xs md:text-lg">${product.currentPrice} USD</span>
												<del className="text-lunar line-through text-xxs md:text-base">${product.previousPrice} USD</del>
											</div>
										</div>
									</div>
								))}
							</div>


							<div className="flex justify-center">
								<Link className="btn-sm md:btn-lg btn-primary font-medium" href={"/product"}>
									+ See All Products
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<button onClick={() => setShowModal(true)}>show modal</button>
			{/* <CallToAction data={callToAction} /> */}

			<ModalFilter isVisible={showModal} onClose={() => setShowModal(false)}>
				<div className="col-3 hidden md:block">
					<div className="border border-border rounded-md flex justify-evenly">
						<div>
							<input className="bg-transparent border-none focus:ring-transparent" type="text" placeholder="Search For Products" />
						</div>
						<button><IoSearch size={20} /></button>
					</div>

					<div>
						<h4 className="mt-10 mb-2">Select Price Range</h4>
						<hr />
						<input className="mt-4 w-full" type="range" name="" id="" />
					</div>

					<div>
						<h4 className="mt-10 mb-2">Product Categories</h4>
						<hr />
						<ul className="mt-4 space-y-4">
							{Array.from({ length: 6 }).map((_, i) => (
								<li key={i} className="flex justify-between text-lunar dark:text-darkmode-lunar">Gatelight <span>( 09 )</span></li>
							))}

						</ul>
					</div>

					<div>
						<h4 className="mt-10 mb-2">Brand</h4>
						<hr />
						<ul className="mt-4 space-y-4">
							{Array.from({ length: 5 }).map((_, i) => (
								<li key={i} className="flex justify-between text-lunar dark:text-darkmode-lunar">
									<span>WebelKart ( 09 )</span>
									<span> <input type="checkbox" name="" id="" /></span>
								</li>
							))}

						</ul>
					</div>

					<div>
						<h4 className="mt-10 mb-2">Frame Color</h4>
						<hr />
						<div className="flex gap-4 mt-4">
							<div className=' bg-gray-800 rounded-md border'>
								<input type="checkbox"
									className='input-checkbox'
								/>
							</div>

							<div className=' bg-gray-200 rounded-md border'>
								<input type="checkbox"
									className='input-checkbox'
								/>
							</div>

							<div className=' bg-gray-400 rounded-md border'>
								<input type="checkbox"
									className='input-checkbox'
								/>
							</div>
						</div>
					</div>

					<div>
						<h4 className="mt-10 mb-2">Size</h4>
						<hr />
						<ul className="mt-4 space-y-4">
							{Array.from({ length: 3 }).map((_, i) => (
								<li key={i} className="flex justify-between text-lunar dark:text-darkmode-lunar">
									<span>Height 61cm,Bulb E27</span>
									<span> <input type="checkbox" name="" id="" /></span>
								</li>
							))}

						</ul>
					</div>


					<div>
						<h4 className="mt-10 mb-2">Size</h4>
						<hr />
						<button className="flex flex-wrap gap-3 mt-4">
							{Array.from({ length: 4 }).map((_, idx) => <p
								key={idx} className="px-2 py-1 rounded-md border text-lunar dark:text-darkmode-lunar">Table Lamps</p>)}
						</button>
					</div>
				</div>
			</ModalFilter>
		</>
		// <section className="h-96 flex items-center justify-center">
		// 	<Link className="bg-black text-white p-2 rounded-md" href={`product/product-single`}>Product Single</Link>
		// </section>
	)
}

export default Product;