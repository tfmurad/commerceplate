import ProductList from "@/components/product/ProductList";
import ImageFallback from "@/helpers/ImageFallback";
import { getCollections, getVendors } from "@/lib/shopify";
import { Product } from "@/lib/shopify/types";

const ProductListView = async ({
  products,
  searchValue,
  searchParams,
}: any) => {
  const resultsText = products.length > 1 ? "results" : "result";

  return (
    <section>
      <div className="space-y-10 pb-24 lg:pb-36 xl:pb-24 sticky top-28">
        {searchValue ? (
          <p className="mb-4">
            {products.length === 0
              ? "There are no products that match "
              : `Showing ${products.length} ${resultsText} for `}
            <span className="font-bold">&quot;{searchValue}&quot;</span>
          </p>
        ) : null}

        {products?.length === 0 && (
          <div className="mx-auto pt-5 text-center">
            <ImageFallback
              className="mx-auto mb-6"
              src="/images/no-search-found.png"
              alt="no-search-found"
              width={211}
              height={184}
            />
            <h1 className="h2 mb-4">No Product Found!</h1>
            <p>
              We couldn&apos;t find what you filtered for. Try filtering again.
            </p>
          </div>
        )}

        <div>
          <ProductList searchParams={searchParams} />
        </div>
      </div>
    </section>
  );
};

export default ProductListView;
