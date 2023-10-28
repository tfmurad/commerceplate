"use client";

import CollectionItem from '@/components/CollectionItem';
import FrameColor from '@/components/FrameColor';
import RangeSlider from '@/components/RangeSlider/RangeSlider';
import { ShopifyCollection } from '@/lib/shopify/types';
import { useState } from 'react';
import { BsCheckLg } from "react-icons/bs";

const ProductFilters = ({categories}:{categories:ShopifyCollection[]}) => {
	const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
	const [selectedSize, setSelectedSize] = useState<string | null>(null);

	const brands = [
		{
			brand: "Philips",
			products: [
				"Hue Table Lamp",
				"Hue Desk Lamp",
				"LED Lamp",
				"Smart Light",
				"Ambiance Lamp",
			],
		},
		{
			brand: "IKEA",
			products: [
				"FADO Lamp",
				"RANARP Desk Lamp",
				"ARÖD Work Lamp",
			],
		},
		{
			brand: "TaoTronics",
			products: [
				"LED Desk Lamp",
				"Dimmable Table Lamp",
				"Metal Desk Lamp",
				"USB Charging Lamp",
			],
		},
		{
			brand: "BenQ",
			products: [
				"e-Reading Desk Lamp",
				"Smart Lamp",
				"LED Floor Lamp",
			],
		},
		{
			brand: "Anker",
			products: [
				"Wireless Charging Lamp",
				"USB Lamp",
				"Rechargeable Desk Light",
			],
		},
	];

	const sizes = [
		{
			id: "H40E27",
			height: 40,
			bulbSize: 27,
		},
		{
			id: "H35E14",
			height: 35,
			bulbSize: 14,
		},
		{
			id: "H150E25",
			height: 150,
			bulbSize: 25,
		},
	];

	const handleBrandClick = (name: string) => {
		if (selectedBrands.includes(name)) {
			setSelectedBrands(selectedBrands.filter((brand) => brand !== name));
		} else {
			setSelectedBrands([...selectedBrands, name]);
		}
	};

	const handleSizeClick = (sizeId: string) => {
		if (selectedSize === sizeId) {
			setSelectedSize(null);
		} else {
			setSelectedSize(sizeId);
		}
	};

	return (
		<>
			<div>
				<h5 className="mb-2 mt-8 lg:mt-10 lg:text-xl">Select Price Range</h5>
				<hr />
				<RangeSlider />
			</div>

			<div>
				<h5 className="mb-2 mt-8 lg:mt-10 lg:text-xl">Product Categories</h5>
				<hr />
				<ul className="mt-4 space-y-4">
					{
						categories && categories.map(category=> <CollectionItem key={category.handle} title={category.title} path={category.path || ''} productCount={category.products?.edges.length}/>)
					}
				</ul>
			</div>

			<div>
				<h5 className="mb-2 mt-8 lg:mt-10 lg:text-xl">Brand</h5>
				<hr />
				<ul className="mt-4 space-y-4">
					{brands.map((item) => (
						<li
							key={item.brand}
							className={`flex items-center justify-between cursor-pointer text-light dark:text-darkmode-light`}
							onClick={() => handleBrandClick(item.brand)}
						>
							<span>
								{item.brand} ({item.products.length})
							</span>
							<div className="h-4 w-4 rounded-sm flex items-center justify-center border border-light dark:border-darkmode-light">
								{selectedBrands.includes(item.brand) && (
									<span>
										<BsCheckLg size={16} />
									</span>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>

			<div>
				<h5 className="mb-2 mt-8 lg:mt-10 lg:text-xl">Frame Color</h5>
				<hr />
				<FrameColor />
			</div>

			<div>
				<h5 className="mb-2 mt-8 lg:mt-10 lg:text-xl">Size</h5>
				<hr />
				<ul className="mt-4 space-y-4">
					{sizes.map((item) => (
						<li
							key={item.id}
							className={`flex items-center justify-between cursor-pointer text-light dark:text-darkmode-light`}
							onClick={() => handleSizeClick(item.id)}
						>
							<span>
								Height {item.height}cm, Bulb E{item.bulbSize}
							</span>
							<div className="h-4 w-4 rounded-sm flex items-center justify-center border border-light dark:border-darkmode-light">
								{selectedSize === item.id && (
									<span>
										<BsCheckLg size={16} />
									</span>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>

			<div>
				<h5 className="mb-2 mt-8 lg:mt-10 lg:text-xl">Tags</h5>
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
		</>
	)
}

export default ProductFilters;