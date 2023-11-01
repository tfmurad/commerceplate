import ProductLayouts from "@/components/product/ProductLayouts";
import { defaultSort, sorting } from "@/lib/constants";
import { getListPage } from "@/lib/contentParser";
import { getProducts } from "@/lib/shopify";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import ProductCardView from "@/partials/ProductCardView";
import ProductListView from "@/partials/ProductListView";

export interface ProductViewProps {
  currentPage: number | null;
  searchParams: { [key: string]: string | string[] | undefined };
}

const Products = async ({ searchParams }: ProductViewProps) => {
  const callToAction = getListPage("sections/call-to-action.md");

  const {
    sort,
    q: searchValue,
    minPrice,
    maxPrice,
    brand,
  } = searchParams as {
    [key: string]: string;
  };

  const { layout } = searchParams as { [key: string]: string };

  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  let products;

  if (searchValue || minPrice || maxPrice || brand) {
    // Construct the query string
    let queryString = `variants.price:<=${maxPrice} variants.price:>=${minPrice}`;

    if (searchValue) {
      queryString += ` ${searchValue}`;
    }
    if (brand) {
      queryString += ` ${brand}`;
    }

    // Include the query string in the query object
    const query = {
      sortKey,
      reverse,
      query: queryString,
    };

    products = await getProducts(query);
  } else {
    // Fetch all products
    products = await getProducts({ sortKey, reverse });
  }

  return (
    <>
      <PageHeader title={"Products"} />
      <ProductLayouts />
      {layout === "list" ? (
        <ProductListView
          currentPage={null}
          products={products}
          searchValue={searchValue}
        />
      ) : (
        <ProductCardView
          currentPage={null}
          products={products}
          searchValue={searchValue}
        />
      )}
      <CallToAction data={callToAction} />
    </>
  );
};

export default Products;
