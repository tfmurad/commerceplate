import Pagination from "@/components/Pagination";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import ProductFilters from "@/partials/ProductFilters";
import Link from "next/link";
const { pagination_card } = config.settings;

const ProductCardView = ({ currentPage }: { currentPage: number | null }) => {
  // sample array of products
  const products = [
    {
      id: 1,
      productName: "Product 1",
      image: "/images/category-1.png",
      currentPrice: 29.99,
      previousPrice: 39.99,
    },
    {
      id: 2,
      productName: "Product 2",
      image: "/images/category-1.png",
      currentPrice: 19.95,
      previousPrice: 24.99,
    },
    {
      id: 3,
      productName: "Product 3",
      image: "/images/category-1.png",
      currentPrice: 45.5,
      previousPrice: 49.99,
    },
    {
      id: 4,
      productName: "Product 4",
      image: "/images/category-1.png",
      currentPrice: 14.99,
      previousPrice: 19.99,
    },
    {
      id: 5,
      productName: "Product 5",
      image: "/images/category-1.png",
      currentPrice: 79.99,
      previousPrice: 89.99,
    },
    {
      id: 6,
      productName: "Product 6",
      image: "/images/category-1.png",
      currentPrice: 9.95,
      previousPrice: 12.99,
    },
    {
      id: 7,
      productName: "Product 7",
      image: "/images/category-1.png",
      currentPrice: 34.99,
      previousPrice: 44.99,
    },
    {
      id: 8,
      productName: "Product 8",
      image: "/images/category-1.png",
      currentPrice: 54.5,
      previousPrice: 59.99,
    },
    {
      id: 9,
      productName: "Product 9",
      image: "/images/category-1.png",
      currentPrice: 54.5,
      previousPrice: 59.99,
    },
    {
      id: 10,
      productName: "Product 10",
      image: "/images/category-1.png",
      currentPrice: 29.99,
      previousPrice: 39.99,
    },
    {
      id: 11,
      productName: "Product 11",
      image: "/images/category-1.png",
      currentPrice: 19.95,
      previousPrice: 24.99,
    },
    {
      id: 12,
      productName: "Product 12",
      image: "/images/category-1.png",
      currentPrice: 45.5,
      previousPrice: 49.99,
    },
    {
      id: 13,
      productName: "Product 13",
      image: "/images/category-1.png",
      currentPrice: 14.99,
      previousPrice: 19.99,
    },
    {
      id: 14,
      productName: "Product 14",
      image: "/images/category-1.png",
      currentPrice: 79.99,
      previousPrice: 89.99,
    },
    {
      id: 15,
      productName: "Product 15",
      image: "/images/category-1.png",
      currentPrice: 9.95,
      previousPrice: 12.99,
    },
    {
      id: 16,
      productName: "Product 16",
      image: "/images/category-1.png",
      currentPrice: 34.99,
      previousPrice: 44.99,
    },
    {
      id: 17,
      productName: "Product 17",
      image: "/images/category-1.png",
      currentPrice: 54.5,
      previousPrice: 59.99,
    },
    {
      id: 18,
      productName: "Product 18",
      image: "/images/category-1.png",
      currentPrice: 54.5,
      previousPrice: 59.99,
    },
    {
      id: 19,
      productName: "Product 19",
      image: "/images/category-1.png",
      currentPrice: 79.99,
      previousPrice: 89.99,
    },
    {
      id: 20,
      productName: "Product 20",
      image: "/images/category-1.png",
      currentPrice: 9.95,
      previousPrice: 12.99,
    },
    {
      id: 21,
      productName: "Product 21",
      image: "/images/category-1.png",
      currentPrice: 34.99,
      previousPrice: 44.99,
    },
    {
      id: 22,
      productName: "Product 22",
      image: "/images/category-1.png",
      currentPrice: 54.5,
      previousPrice: 59.99,
    },
    {
      id: 23,
      productName: "Product 23",
      image: "/images/category-1.png",
      currentPrice: 54.5,
      previousPrice: 59.99,
    },
  ];

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
              {productsToDisplay?.map((product: any) => (
                <div
                  key={product.id}
                  className="text-center col-6 md:col-4 mb-8 md:mb-14 relative group"
                >
                  <ImageFallback
                    src={product.image}
                    width={1000}
                    height={269}
                    alt={product.productName}
                  />
                  <button className="btn btn-primary max-md:btn-sm absolute opacity-0 bottom-24 md:bottom-32 group-hover:-translate-y-3 -translate-x-1/2 group-hover:opacity-100 duration-300 ease-in-out">
                    Add to Cart
                  </button>
                  <div className="py-6 text-center">
                    <h2 className="font-bold md:font-normal h4">
                      <Link href={`/product/product-1`}>
                        {product.productName}
                      </Link>
                    </h2>
                    <div className="flex justify-center items-center gap-x-2 mt-2">
                      <span className="text-light dark:text-darkmode-light text-xs md:text-lg font-bold">
                        ${product.currentPrice} USD
                      </span>
                      <s className="text-light dark:text-darkmode-light text-xs md:text-base font-medium">
                        ${product.previousPrice} USD
                      </s>
                    </div>
                  </div>
                </div>
              ))}
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
