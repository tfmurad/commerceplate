import Pagination from "@/components/Pagination";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import ProductFilters from "@/partials/ProductFilters";
import Link from "next/link";
import { getProducts } from "../../lib/shopify/shopify";
const { pagination_card } = config.settings;

const ProductCardView = async ({ currentPage }: { currentPage: number | null }) => {
  const data = await getProducts();
  // console.log(data.products.edges.slice(0,3));

  // const idToFind = '7994525745320';

  // const foundProduct = data.products.edges.find((product) => {
  //   return product.node.id === `gid://shopify/Product/${idToFind}`;
  // });
  // console.log(foundProduct?.node.priceRange)

  // if (foundProduct) {
  //   // foundProduct contains the product with the specified ID
  //   console.log(foundProduct);
  // } else {
  //   // Product not found
  //   console.log("Product not found");
  // }

  const products = data.products.edges;

  const totalPages = Math.ceil(products.length / pagination_card);
  const currentProducts = products.slice(0, pagination_card);

  const indexOfLastPost = currentPage! * pagination_card;
  const indexOfFirstPost = indexOfLastPost - pagination_card;
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
            <div className="row">
              {productsToDisplay?.map((product: any) => {
                const { id, title, featuredImage, priceRange } = product?.node;
                // const { url: imageSrc , altText: imageAlt } = featuredImage;
                return (
                  <div
                    key={id}
                    className="text-center col-6 md:col-4 mb-8 md:mb-14 relative group"
                  >

                    <ImageFallback
                      src={featuredImage?.url || '/images/category-1.png'}
                      // fallback={'/images/category-1.png'}
                      width={312}
                      height={269}
                      alt={featuredImage?.altText || 'fallback image'}
                      className='w-[312px] h-[150px] md:h-[269px] object-cover'
                    />
                    <button className="btn btn-primary max-md:btn-sm absolute opacity-0 bottom-24 md:bottom-32 group-hover:-translate-y-3 -translate-x-1/2 group-hover:opacity-100 duration-300 ease-in-out">
                      Add to Cart
                    </button>
                    <div className="py-6 text-center">
                      <h2 className="font-bold md:font-normal h4">
                        <Link href={`/product/product-1`}>
                          {title}
                        </Link>
                      </h2>
                      <div className="flex justify-center items-center gap-x-2 mt-2">
                        <span className="text-light dark:text-darkmode-light text-xs md:text-lg font-bold">
                          ${priceRange.minVariantPrice.amount} USD
                        </span>
                        {/* { priceRange.maxVariantPrice.amount &&
                          <s className="text-light dark:text-darkmode-light text-xs md:text-base font-medium">
                            ${priceRange.maxVariantPrice.amount} USD
                          </s>
                        } */}
                      </div>
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

export default ProductCardView;
