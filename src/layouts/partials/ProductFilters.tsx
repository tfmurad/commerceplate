"use client";

import RangeSlider from '@/components/RangeSlider/RangeSlider';
import { useState } from 'react';
import { BsCheckLg } from "react-icons/bs";

const ProductFilters = () => {
	// sample colors 
	const colors = [
		{ name: "Medium Gray", hex: "#888888" },
		{ name: "Light Gray", hex: "#CCCCCC" },
		{ name: "Dark Gray", hex: "#555555" }
	];

	const [selectedColor, setSelectedColor] = useState<number | null>(null);

	const handleColorClick = (colorIndex: number) => {
		if (selectedColor === colorIndex) {
				setSelectedColor(null);
		} else {
				setSelectedColor(colorIndex);
		}
};

	return (
		<>
			<div>
				<h5 className="mb-2 mt-0 lg:mt-10 lg:text-xl">Select Price Range</h5>
				<hr />
				<RangeSlider />
			</div>

			<div>
				<h5 className="mb-2 mt-0 lg:mt-10 lg:text-xl">Product Categories</h5>
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
				<h5 className="mb-2 mt-0 lg:mt-10 lg:text-xl">Brand</h5>
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
				<h5 className="mb-2 mt-0 lg:mt-10 lg:text-xl">Frame Color</h5>
				<hr />
				<div className="flex gap-4 mt-4">
					{colors.map((color, index) => {
						return (
							<button
								key={index}
								className={`h-10 w-10 rounded-md`}
								style={{ backgroundColor: color.hex }}
								onClick={() => handleColorClick(index)}
							>
								{selectedColor === index && (
									<span className="text-white flex items-center justify-center"><BsCheckLg size={25} /></span>
								)}
							</button>
						)
					})}
				</div>
			</div>

			<div>
				<h5 className="mb-2 mt-0 lg:mt-10 lg:text-xl">Size</h5>
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
				<h5 className="mb-2 mt-0 lg:mt-10 lg:text-xl">Tags</h5>
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

export default ProductFilters