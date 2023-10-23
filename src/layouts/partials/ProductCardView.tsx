import Pagination from "@/components/Pagination";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import ProductFilters from "@/partials/ProductFilters";
import Link from "next/link";
import { getProducts } from "../../lib/shopify/shopify";
const { pagination_card } = config.settings;

const ProductCardView = async ({ currentPage }: { currentPage: number | null }) => {
  const data = await getProducts();
  const products = data.products.edges;
  // console.log(data.products.edges.slice(0,3));

  // const idToFind = '7994525745320';

  // const foundProduct = data.products.edges.find((product) => {
  //   return product.node.id === `gid://shopify/Product/${idToFind}`;
  // });
  // // console.log(foundProduct?.node.priceRange)

  // if (foundProduct) {
  //   // foundProduct contains the product with the specified ID
  //   console.log(foundProduct.node.variants.edges[0].node.compareAtPrice.amount);
  // } else {
  //   // Product not found
  //   console.log("Product not found");
  // }


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
                const { id, title, featuredImage, priceRange, variants } = product?.node;

                return (
                  <div key={id} className="text-center col-6 md:col-4 mb-8 md:mb-14 group">
                    <div className="relative overflow-hidden">
                      <ImageFallback
                        src={featuredImage?.url || '/images/product_image404.jpg'}
                        width={312}
                        height={269}
                        alt={featuredImage?.altText || 'fallback image'}
                        className='w-[312px] h-[150px] md:h-[269px] object-contain'
                      />

                      <button className="btn btn-primary max-md:btn-sm z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:-translate-y-6 duration-300 ease-in-out whitespace-nowrap">
                        Add to Cart
                      </button>
                    </div>
                    <div className="py-2 md:py-4 text-center z-20">
                      <h2 className="font-bold md:font-medium text-base md:text-xl">
                        <Link href={`/product/product-1`}>
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
