"use client"
import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(1);

	const incrementCount = () => {
		setCount(count + 1);
	};

	const decrementCount = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	return (
		<div className="border rounded-md flex gap-6 justify-between items-center">
			<button className='p-2' onClick={decrementCount}>-</button>
			<p>{count}</p>
			<button className='p-2' onClick={incrementCount}>+</button>
		</div>
	);
};

export default Counter;