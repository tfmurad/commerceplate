import { ProductViewProps } from "@/app/products/page";
import Pagination from "@/components/Pagination";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import { defaultSort, sorting } from "@/lib/constants";
import { getCollection, getCollections } from "@/lib/shopify";
import ProductFilters from "@/partials/ProductFilters";
import Link from "next/link";
const { pagination_card } = config.settings;
// ProductViewProps
const ProductCardView = async ({currentPage,products,searchValue }: any) => {
  // const { sort, q: searchValue } = searchParams as { [key: string]: string };
  // const { sortKey, reverse } =
  //   sorting.find((item) => item.slug === sort) || defaultSort;

  // const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? "results" : "result";

  const totalPages = Math.ceil(products.length / pagination_card);
  const currentProducts = products.slice(0, pagination_card);

  const indexOfLastPost = currentPage! * pagination_card;
  const indexOfFirstPost = indexOfLastPost - pagination_card;
  const paginatedProducts = products.slice(indexOfFirstPost, indexOfLastPost);

  const productsToDisplay = currentPage ? paginatedProducts : currentProducts;


  // getting collections 
  const categories = await getCollections();

  return (
    <section>
      <div className="container">
        <div className="row">
          {/* Left Side  */}
          <div className="col-3 hidden lg:block">
            <ProductFilters categories={categories}/>
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

              {productsToDisplay?.map((product: any) => {
                const { id, title, featuredImage, priceRange, variants } = product;
                  
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

                      <button className="btn btn-primary max-md:btn-sm z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:-translate-y-6 duration-300 ease-in-out whitespace-nowrap drop-shadow-md">
                        Add to Cart
                      </button>
                    </div>
                    <div className="py-2 md:py-4 text-center z-20">
                      <h2 className="font-bold md:font-medium text-base md:text-xl">
                        <Link href={`/products/product-1`}>{title}</Link>
                      </h2>
                      <div className="flex justify-center items-center gap-x-2 mt-2">
                        <span className="text-light dark:text-darkmode-light text-xs md:text-lg font-bold">
                          ${priceRange.minVariantPrice.amount} USD
                        </span>
                        {variants.map(
                          (p: any) =>
                            p.compareAtPrice?.amount && (
                              <s
                                key={p.id}
                                className="text-light dark:text-darkmode-light text-xs md:text-base font-medium"
                              >
                                ${p.compareAtPrice?.amount} USD
                              </s>
                            ),
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
