import { createUrl } from "@/lib/utils";
import MultiRangeSlider from "multi-range-slider-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from 'react';
import "./rangeSlider.css";

const RangeSlider = ({maxPriceData}:{maxPriceData:any}) => {
	console.log(maxPriceData)
	const [minValue, setMinValue] = useState(0);
	const [maxValue, setMaxValue] = useState(0);
	const [minValue2, setMinValue2] = useState(0);
	const [maxValue2, setMaxValue2] = useState(1000);

	const router = useRouter();
	const searchParams = useSearchParams();

	// Define the priceChange function
	function priceChange(minValue: number, maxValue: number) {
		const newParams = new URLSearchParams(searchParams.toString());

		if (minValue || maxValue !== undefined) {
			newParams.set('minPrice', minValue.toString());
			newParams.set('maxPrice', maxValue.toString());
		} else {
			newParams.delete('minPrice');
			newParams.delete('maxPrice');
		}

		router.push(createUrl('/products', newParams));
	}

	return (
		<div>
			<div className="flex justify-between">
				<p>৳{minValue2} {maxPriceData.maxProductCurrency}</p>
				<p>৳{maxValue2} {maxPriceData.maxProductCurrency}</p>
			</div>

			<MultiRangeSlider
				style={{ border: 'none', boxShadow: 'none' }}
				ruler="false"
				label="false"
				min="0"
				max={maxPriceData.maxProductPrice}
				minValue={minValue2}
				maxValue={maxValue2}
				onInput={(e) => {
					setMinValue2(e.minValue);
					setMaxValue2(e.maxValue);
					// priceChange(e.minValue, e.maxValue);
				}}
				onChange={(e) => {
					setMinValue2(e.minValue);
					setMaxValue2(e.maxValue);
					//  priceChange(e.minValue, e.maxValue);
				}}
			/>

			<button className="btn btn-sm btn-primary w-full" onClick={() => { priceChange(minValue2, maxValue2) }}>sumbit</button>
			
		</div>
	);
}

export default RangeSlider;
