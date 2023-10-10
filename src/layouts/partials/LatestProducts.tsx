"use client";
import ImageFallback from '@/helpers/ImageFallback';
import { CartContext } from 'context/GlobalState';
import { useContext } from 'react';

const LatestProducts = ({ products }: { products: any }) => {
	const { handleAddToCart } = useContext(CartContext);
	return (
		<div className="row">
			{products.map((product: any) => (
				<div key={product.id} className="text-center sm:col-6 md:col-4 lg:col-3 mb-8 md:mb-14 relative group">
					<ImageFallback
						className=""
						src={product.image}
						width={1000}
						height={269}
						alt="category image"
					/>
					<button onClick={() => handleAddToCart(product)} className="btn btn-primary font-medium absolute opacity-0 bottom-32 group-hover:-translate-y-6 -translate-x-1/2 group-hover:opacity-100 duration-300 ease-in-out">
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
	)
}

export default LatestProducts