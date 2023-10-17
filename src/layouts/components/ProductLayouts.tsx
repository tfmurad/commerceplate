"use client";

import ProductCardView from '@/partials/ProductCardView';
import ProductListView from '@/partials/ProductListView';
import { useState } from 'react';
import { BsGridFill } from 'react-icons/bs';
import { FaList } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import ModalFilter from './ModalFilter';
import Pagination from './Pagination';
import config from "@/config/config.json";
const { pagination_card, pagination_list } = config.settings;

const ProductLayouts = ({currentPage}:{currentPage:any}) => {
	const [showModal, setShowModal] = useState(false);
	const [changeLayout, setChangeLayout] = useState<boolean>(true);

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
			{
				id: 10,
				productName: "Product 10",
				image: "/images/category-1.png",
				currentPrice: 29.99,
				previousPrice: 39.99,
			},
			{
				id: 11,
				productName: "Product 11",
				image: "/images/category-1.png",
				currentPrice: 19.95,
				previousPrice: 24.99,
			},
			{
				id: 12,
				productName: "Product 12",
				image: "/images/category-1.png",
				currentPrice: 45.5,
				previousPrice: 49.99,
			},
			{
				id: 13,
				productName: "Product 13",
				image: "/images/category-1.png",
				currentPrice: 14.99,
				previousPrice: 19.99,
			},
			{
				id: 14,
				productName: "Product 14",
				image: "/images/category-1.png",
				currentPrice: 79.99,
				previousPrice: 89.99,
			},
			{
				id: 15,
				productName: "Product 15",
				image: "/images/category-1.png",
				currentPrice: 9.95,
				previousPrice: 12.99,
			},
			{
				id: 16,
				productName: "Product 16",
				image: "/images/category-1.png",
				currentPrice: 34.99,
				previousPrice: 44.99,
			},
			{
				id: 17,
				productName: "Product 17",
				image: "/images/category-1.png",
				currentPrice: 54.5,
				previousPrice: 59.99,
			},
			{
				id: 18,
				productName: "Product 18",
				image: "/images/category-1.png",
				currentPrice: 54.5,
				previousPrice: 59.99,
			},
			{
				id: 19,
				productName: "Product 19",
				image: "/images/category-1.png",
				currentPrice: 79.99,
				previousPrice: 89.99,
			},
			{
				id: 20,
				productName: "Product 20",
				image: "/images/category-1.png",
				currentPrice: 9.95,
				previousPrice: 12.99,
			},
			{
				id: 21,
				productName: "Product 21",
				image: "/images/category-1.png",
				currentPrice: 34.99,
				previousPrice: 44.99,
			},
			{
				id: 22,
				productName: "Product 22",
				image: "/images/category-1.png",
				currentPrice: 54.5,
				previousPrice: 59.99,
			},
			{
				id: 23,
				productName: "Product 23",
				image: "/images/category-1.png",
				currentPrice: 54.5,
				previousPrice: 59.99,
			}
		];
	
		const totalPagesCard = Math.ceil(products.length / pagination_card);
		const currentProductsCard = products.slice(0, pagination_card);

		const totalPagesList = Math.ceil(products.length / pagination_list);
		const currentProductsList = products.slice(0, pagination_list);

	return (
		<>
			<section className="pt-14 xl:pt-28">
				<div className="container">
					<div className="row gy-4">
						<div className="col-12 lg:col-3">
							<div className="flex lg:block justify-between">
								<button
									className="block lg:hidden"
									onClick={() => setShowModal(true)}
								>
									+ Filter
								</button>

								<div className="border border-border rounded-md flex justify-between">
									<input
										className="bg-transparent border-none focus:ring-transparent"
										type="text"
										placeholder="Search For Products"
									/>
									<button className='px-2'>
										<IoSearch size={20} />
									</button>
								</div>
							</div>
						</div>

						<div className="col-12 lg:col-9">
							<div className="flex justify-between items-center mb-4">
								<div className="flex gap-2">
									<button onClick={() => setChangeLayout(true)} className="bg-dark text-white dark:bg-darkmode-primary dark:text-dark p-2 rounded-md hover:scale-105 duration-300">
										<BsGridFill />
									</button>
									<button onClick={() => setChangeLayout(false)} className="border border-dark text-dark dark:text-darkmode-dark dark:border-darkmode-primary p-2 rounded-md hover:scale-105 duration-300">
										<FaList />
									</button>
								</div>

								<div className="flex gap-2 items-center font-medium text-base">
									<p>Sort By</p>
									<select
										className="rounded-md border border-border text-light text-sm"
										name=""
										id=""
									>
										<option value="Alphabetically, A-Z">
											Alphabetically, A-Z
										</option>
										<option value="Alphabetically, Z-A">
											Alphabetically, Z-A
										</option>
										<option value="Price, low to high">
											Price, low to high
										</option>
										<option value="Price, high to low">
											Price, high to low
										</option>
										<option value="Date, old to new">
											Date, old to new
										</option>
										<option value="Date, new to old">
											Date, new to old
										</option>
									</select>
								</div>

							</div>
						</div>
					</div>
				</div>

				<ModalFilter isVisible={showModal} onClose={() => setShowModal(false)} />
			</section>

			{
				changeLayout ? <>
					<ProductCardView products={currentProductsCard} />
					<Pagination
							section={"product"}
							currentPage={currentPage}
							totalPages={totalPagesCard}
						/>
				</> : <>
					<ProductListView products={currentProductsList} />
					<Pagination
							section={"product"}
							currentPage={currentPage}
							totalPages={totalPagesList}
						/>
				</>
			}
		</>
	)
}

export default ProductLayouts;