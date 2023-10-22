import Pagination from "@/components/Pagination";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import { getProducts } from "@/lib/shopify/shopify";
import ProductFilters from "@/partials/ProductFilters";
import Link from "next/link";
import React from "react";
const { pagination_list } = config.settings;

const ProductListView = async ({ currentPage }: { currentPage: number | null }) => {
  const data = await getProducts();
  const products = data.products.edges;

  const totalPages = Math.ceil(products.length / pagination_list);
  const currentProducts = products.slice(0, pagination_list);

  const indexOfLastPost = currentPage! * pagination_list;
  const indexOfFirstPost = indexOfLastPost - pagination_list;
  const paginatedProducts = products.slice(indexOfFirstPost, indexOfLastPost);

  const productsToDisplay = currentPage ? paginatedProducts : currentProducts;

  return (
    <section>
      <div className="container">
        <div className="row">
          {/* Left Side  */}
          <div className="col-3 hidden lg:block">
            <ProductFilters />
          </div>

          {/* Right side  */}
          <div className="col-12 lg:col-9">
            <div className="space-y-10 mb-14">
              {productsToDisplay?.map((product: any) => {
                 const { id, title, featuredImage, priceRange } = product?.node;
                return(
                  <div className="row" key={id}>
                  <div className="col-12 md:col-4">
                  <ImageFallback
                      src={featuredImage?.url || '/images/category-1.png'}
                      // fallback={'/images/category-1.png'}
                      width={312}
                      height={269}
                      alt={featuredImage?.altText || 'fallback image'}
                      className='w-[312px] h-[150px] md:h-[269px] object-cover'
                    />
                  </div>

                  <div className="col-12 md:col-8 py-3 max-md:pt-4">
                    <h2 className="font-bold md:font-normal h4">
                      <Link href={`/product/product-1`}>
                        {title}
                      </Link>
                    </h2>

                    <div className="flex items-center gap-x-2 mt-2">
                      <span className="text-light dark:text-darkmode-light text-xs md:text-lg font-bold">
                        ${priceRange.minVariantPrice.amount} USD
                      </span>
                      {/* <s className="text-light dark:text-darkmode-light text-xs md:text-base font-medium">
                        ${product.previousPrice} USD
                      </s> */}
                    </div>

                    <p className="max-md:text-xs text-light dark:text-darkmode-light my-4 md:mb-8">
                      Consider the overall style of your room. Do you prefer a
                      modern, minimalist look, a classic or vintage style, or
                      something else? Choose a lamp that complements the
                      existing decor.
                    </p>

                    <button className="btn btn-outline-primary max-md:btn-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
                )
              })}
            </div>

            <Pagination
              section={"product"}
              currentPage={currentPage || 1}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListView;
