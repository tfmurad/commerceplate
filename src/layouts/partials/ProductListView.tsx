import Pagination from "@/components/Pagination";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import { getCollections } from "@/lib/shopify";
import ProductFilters from "@/partials/ProductFilters";
import Link from "next/link";
const { pagination_list } = config.settings;

const ProductListView = async ({ currentPage, products, searchValue }: any) => {

  const resultsText = products.length > 1 ? "results" : "result";

  const totalPages = Math.ceil(products.length / pagination_list);
  const currentProducts = products.slice(0, pagination_list);

  const indexOfLastPost = currentPage! * pagination_list;
  const indexOfFirstPost = indexOfLastPost - pagination_list;
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
            <ProductFilters categories={categories} />
          </div>

          {/* Right side  */}
          <div className="col-12 lg:col-9">
            <div className="space-y-10 mb-14">

              {searchValue ? (
                <p className="mb-4">
                  {products.length === 0
                    ? "There are no products that match "
                    : `Showing ${products.length} ${resultsText} for `}
                  <span className="font-bold">&quot;{searchValue}&quot;</span>
                </p>
              ) : null}

              {productsToDisplay?.map((product: any) => {
                const { id, title, variants, handle, featuredImage, priceRange, description } = product;
                return (
                  <div className="row" key={id}>
                    <div className="col-12 md:col-4">
                      <ImageFallback
                        src={featuredImage?.url || '/images/product_image404.jpg'}
                        // fallback={'/images/category-1.png'}
                        width={312}
                        height={269}
                        alt={featuredImage?.altText || 'fallback image'}
                        className='w-[312px] h-[150px] md:h-[269px] object-contain'
                      />
                    </div>

                    <div className="col-12 md:col-8 py-3 max-md:pt-4">
                      <h2 className="font-bold md:font-normal h4">
                        <Link href={`/products/${handle}`}>
                          {title}
                        </Link>
                      </h2>

                      <div className="flex items-center gap-x-2 mt-2">
                        <span className="text-light dark:text-darkmode-light text-xs md:text-lg font-bold">
                          ${priceRange.minVariantPrice.amount} USD
                        </span>
                        {
                          variants.map((p: any) => (
                            p.compareAtPrice?.amount && <s key={p.id} className="text-light dark:text-darkmode-light text-xs md:text-base font-medium">
                              ${p.compareAtPrice?.amount} USD
                            </s>
                          ))
                        }
                      </div>

                      <p className="max-md:text-xs text-light dark:text-darkmode-light my-4 md:mb-8">{description}</p>

                      <button className="btn btn-outline-primary max-md:btn-sm drop-shadow-md">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                )
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

export default ProductListView;
