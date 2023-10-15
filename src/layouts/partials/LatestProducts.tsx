"use client";
import ImageFallback from '@/helpers/ImageFallback';
import { CartContext } from 'context/GlobalState';
import Link from 'next/link';
import { useContext } from 'react';

const LatestProducts = ({ products }: { products: any }) => {
	const { handleAddToCart } = useContext(CartContext);
	return (
		<>
			<div className="row">
				{products.map((product: any) => (
					<div key={product.id} className="text-center sm:col-6 md:col-4 lg:col-3 mb-8 md:mb-14 relative group">
						<ImageFallback
							src={product.image}
							width={1000}
							height={269}
							alt="category image"
						/>
						{/* <p className='px-4 py-1 rounded-md bg-dark dark:bg-darkmode-dark text-darkmode-dark dark:text-dark absolute top-2 right-6'>New</p> */}
						<button onClick={() => handleAddToCart(product)} className="btn btn-primary font-medium absolute opacity-0 bottom-28 md:bottom-32 group-hover:-translate-y-3 -translate-x-1/2 group-hover:opacity-100 duration-300 ease-in-out">
							Add to Cart
						</button>
						<div className="py-6 text-center">
							<h4 className='font-bold md:font-normal'>{product.productName}</h4>
							<div className="flex justify-center items-center gap-2 mt-2">
								<span className="text-light dark:text-darkmode-light text-xs md:text-lg font-bold">${product.currentPrice} USD</span>
								<s className="text-light dark:text-darkmode-light text-xs md:text-base font-medium">${product.previousPrice} USD</s>
							</div>
						</div>
					</div>

				))}
			</div>

			<div className="flex justify-center">
				<Link className="btn btn-sm md:btn-lg btn-primary font-medium" href={"/product"}>
					+ See All Products
				</Link>
			</div>
		</>
	)
}

export default LatestProducts