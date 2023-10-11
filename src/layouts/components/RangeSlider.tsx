"use client"

import MultiRangeSlider from "multi-range-slider-react";
import { useState } from 'react';

const RangeSlider = () => {
	const [minValue, setMinValue] = useState(0);
	const [maxValue, setMaxValue] = useState(0);
	const [minValue2, setMinValue2] = useState(0);
	const [maxValue2, setMaxValue2] = useState(0);
	return (
		<div>
			<h4 className="mb-2 mt-0 lg:mt-10">Select Price Range</h4>
			<hr />

			<MultiRangeSlider
				style={{ border: 'none', boxShadow: 'none' }}
				barLeftColor='#E7E7E7'
				barInnerColor='black'
				barRightColor='#E7E7E7'
				ruler="false"
				label="false"
				min="0"
				max="2000"
				minValue="0"
				maxValue="1000"
				onInput={(e) => {
					setMinValue(e.minValue);
					setMaxValue(e.maxValue);
				}}
				onChange={(e) => {
					setMinValue2(e.minValue);
					setMaxValue2(e.maxValue);
				}}
			></MultiRangeSlider>
			<div className="flex justify-between">
				<p>${minValue} USD</p>
				<p>${maxValue} USD</p>
			</div>
		</div>
	)
}

export default RangeSlider;