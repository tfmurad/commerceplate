import ProductLayouts from "@/components/product/ProductLayouts";
import { defaultSort, sorting } from "@/lib/constants";
import { getListPage } from "@/lib/contentParser";
import { getCollectionProducts, getCollections, getProducts, getVendors } from "@/lib/shopify";
import { Product } from "@/lib/shopify/types";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import ProductCardView from "@/partials/ProductCardView";
import ProductListView from "@/partials/ProductListView";

// export interface ProductViewProps {
//   currentPage: number | null;
//   searchParams: { [key: string]: string | string[] | undefined };
// }

const Products = async ({ searchParams }: { searchParams: any }) => {
  const callToAction = getListPage("sections/call-to-action.md");

  const {
    sort,
    q: searchValue,
    minPrice,
    maxPrice,
    brand,
    c
  } = searchParams as {
    [key: string]: string;
  };

  const { layout } = searchParams as { [key: string]: string };

  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  let products;

  if (searchValue || brand || minPrice || maxPrice || c) {
    let queryString = "";

    if (minPrice || maxPrice) {
      queryString += `variants.price:<=${maxPrice} variants.price:>=${minPrice}`;
    }
    if (searchValue) {
      queryString += ` ${searchValue}`;
    }
    if (brand) {
      queryString += ` ${brand}`;
    }

    const query = {
      sortKey,
      reverse,
      query: queryString
    };

    if(c && c != 'all'){
      products = await getCollectionProducts({ collection: c, sortKey, reverse});
      // console.log(products[2])
    } else{
      products = await getProducts(query);
    }



  } else {
    // Fetch all products
    products = await getProducts({ sortKey, reverse });
  }

  // const products = await getProducts({ sortKey, reverse, query: searchValue });
  const categories = await getCollections();
  const vendors = await getVendors({});
  const tags = [
    ...new Set(products.flatMap((product: Product) => product.tags)),
  ];

  return (
    <>
      <PageHeader title={"Products"} />
      <ProductLayouts
        categories={categories}
        vendors={vendors}
        tags={tags}
        maxPriceData={0} />
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
