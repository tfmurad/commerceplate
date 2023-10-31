import Pagination from "@/components/Pagination";
import { AddToCart } from "@/components/cart/add-to-cart";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import { getCollections } from "@/lib/shopify";
import { Product, ProductOption } from "@/lib/shopify/types";
import ProductFilters from "@/partials/ProductFilters";
import Link from "next/link";
const { pagination_card } = config.settings;
// ProductViewProps
const ProductCardView = async ({ currentPage, products, searchValue }: any) => {

  const resultsText = products.length > 1 ? "results" : "result";

  const totalPages = Math.ceil(products.length / pagination_card);
  const currentProducts = products.slice(0, pagination_card);

  const indexOfLastPost = currentPage! * pagination_card;
  const indexOfFirstPost = indexOfLastPost - pagination_card;
  const paginatedProducts = products.slice(indexOfFirstPost, indexOfLastPost);

  const productsToDisplay = currentPage ? paginatedProducts : currentProducts;


  // getting collections 
  const categories = await getCollections();
  const vendors: any = [...new Set(products.map((product:Product) => product?.vendor))];
  const tags = [...new Set(products.flatMap((product:Product) => product.tags))];

// console.log(tags);

  return (
    <section>
      <div className="container">
        <div className="row">
          {/* Left Side  */}
          <div className="col-3 hidden lg:block">
            <ProductFilters categories={categories} vendors={vendors} tags={tags}/>
          </div>

          {/* Right side  */}
          <div className="col-12 lg:col-9">
            <div className="row">

              {searchValue ? (
                <p className="mb-4">
                  {products.length === 0
                    ? "There are no products that match "
                    : `Showing ${products.length} ${resultsText} for `}
                  <span className="font-bold">&quot;{searchValue}&quot;</span>
                </p>
              ) : null}

              {productsToDisplay?.map((product: Product) => {
                const { id, title,handle, featuredImage, priceRange, variants, compareAtPriceRange } = product;

                return (
                  <div
                    key={id}
                    className="text-center col-6 md:col-4 mb-8 md:mb-14 group"
                  >
                    <div className="relative overflow-hidden">
                      <ImageFallback
                        src={
                          featuredImage?.url || "/images/product_image404.jpg"
                        }
                        width={312}
                        height={269}
                        alt={featuredImage?.altText || "fallback image"}
                        className="w-[312px] h-[150px] md:h-[269px] object-contain"
                      />

                       <AddToCart variants={product.variants} availableForSale={product.availableForSale} stylesClass={"btn btn-primary max-md:btn-sm z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:-translate-y-6 duration-300 ease-in-out whitespace-nowrap drop-shadow-md"}/>
                    </div>
                    <div className="py-2 md:py-4 text-center z-20">
                      <h2 className="font-bold md:font-medium text-base md:text-xl">
                        <Link href={`/product/${handle}`}>{title}</Link>
                      </h2>
                      <div className="flex justify-center items-center gap-x-2 mt-2">
                        <span className="text-light dark:text-darkmode-light text-xs md:text-lg font-bold">
                          ${priceRange.minVariantPrice.amount} USD
                        </span>
                        {parseFloat(compareAtPriceRange?.maxVariantPrice.amount) > 0 ? (
                          <s className="text-light dark:text-darkmode-light text-xs md:text-base font-medium">
                            ৳ {compareAtPriceRange?.maxVariantPrice.amount}{" "}
                            {compareAtPriceRange?.maxVariantPrice?.currencyCode}
                          </s>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Pagination
              section={"products"}
              currentPage={currentPage || 1}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCardView;
