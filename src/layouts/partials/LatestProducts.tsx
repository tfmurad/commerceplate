"use client";
import ImageFallback from '@/helpers/ImageFallback';
import { GlobalContext } from 'context/GlobalState';
import Link from 'next/link';
import { useContext } from 'react';

const LatestProducts = ({ products }: { products: any }) => {
	const { handleAddToCart } = useContext(GlobalContext);
	return (
		<>
			<div className="row">
				{products.map((product: any) => {
					 const { id, title,handle, featuredImage, priceRange, variants } = product?.node;

					return(
						<div key={product.id} className="text-center sm:col-6 md:col-4 lg:col-3 mb-8 md:mb-14 group">
						 <div className="relative overflow-hidden">
                      <ImageFallback
                        src={featuredImage?.url || '/images/product_image404.jpg'}
                        width={312}
                        height={269}
                        alt={featuredImage?.altText || 'fallback image'}
                        className='w-[312px] h-[150px] md:h-[269px] object-contain'
                      />

                      <button className="btn btn-primary max-md:btn-sm z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:-translate-y-6 duration-300 ease-in-out whitespace-nowrap drop-shadow-md">
                        Add to Cart
                      </button>
                    </div>
                    <div className="py-2 md:py-4 text-center z-20">
                      <h2 className="font-medium text-base md:text-xl">
                        <Link href={`/products/${handle}`}>
                          {title}
                        </Link>
                      </h2>
                      <div className="flex justify-center items-center gap-x-2 mt-2">
                        <span className="text-light dark:text-darkmode-light text-xs md:text-lg font-bold">
                          ${priceRange.minVariantPrice.amount} USD
                        </span>
                        {
                          variants.edges.map((p: any, i: number) => (
                            p.node.compareAtPrice?.amount && <s key={i} className="text-light dark:text-darkmode-light text-xs md:text-base font-medium">
                              ${p.node.compareAtPrice?.amount} USD
                            </s>
                          ))
                        }
                      </div>
                    </div>
					</div>
					)
				})}
			</div>

			<div className="flex justify-center">
				<Link className="btn btn-sm md:btn-lg btn-primary font-medium" href={"/products"}>
					+ See All Products
				</Link>
			</div>
		</>
	)
}

export default LatestProducts