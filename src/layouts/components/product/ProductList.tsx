"use client";

import { useEffect, useRef, useState } from "react";
import { AddToCart } from "../cart/add-to-cart";
import ImageFallback from "@/helpers/ImageFallback";
import { PageInfo, Product } from "@/lib/shopify/types";
import Link from "next/link";
import { getCollectionProducts, getProducts } from "@/lib/shopify";
import useLoadMore from "@/hooks/useLoadMore";
import { currencySymbol, defaultSort, sorting } from "@/lib/constants";
import { BiLoaderAlt } from "react-icons/bi";
import LoadingCards from "../loading/LoadingCards";

const ProductList = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const targetElementRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<{
    products: Product[];
    pageInfo: PageInfo;
  }>({
    products: [],
    pageInfo: { endCursor: "", hasNextPage: false, hasPreviousPage: false },
  });

  const {
    sort,
    q: searchValue,
    minPrice,
    maxPrice,
    b: brand,
    c: category,
    t: tag,
    cursor,
  } = searchParams as {
    [key: string]: string;
  };

  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        let productsData;

        if (
          searchValue ||
          brand ||
          minPrice ||
          maxPrice ||
          category ||
          tag ||
          cursor
        ) {
          let queryString = "";

          if (minPrice || maxPrice) {
            queryString += `variants.price:<=${maxPrice} variants.price:>=${minPrice}`;
          }

          if (searchValue) {
            queryString += ` ${searchValue}`;
          }

          if (brand) {
            Array.isArray(brand)
              ? (queryString += `${brand
                  .map((b) => `(vendor:${b})`)
                  .join(" OR ")}`)
              : (queryString += `vendor:"${brand}"`);
          }

          if (tag) {
            queryString += ` ${tag}`;
          }

          const query = {
            sortKey,
            reverse,
            query: queryString,
          };

          productsData =
            category && category !== "all"
              ? await getCollectionProducts({
                  collection: category,
                  sortKey,
                  reverse,
                })
              : await getProducts({ ...query, cursor });
        } else {
          // Fetch all products
          productsData = await getProducts({ sortKey, reverse, cursor });
        }

        setData({
          products: productsData.products,
          pageInfo: productsData.pageInfo!,
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [
    cursor,
    sortKey,
    searchValue,
    brand,
    minPrice,
    maxPrice,
    category,
    tag,
    reverse,
  ]);

  const { products, pageInfo } = data;
  const endCursor = pageInfo?.endCursor || "";
  const hasNextPage = pageInfo?.hasNextPage || false;

  useLoadMore(targetElementRef, () => {
    if (hasNextPage && !isLoading) {
      fetchDataWithNewCursor(endCursor);
    }
  });

  const fetchDataWithNewCursor = async (newCursor: string) => {
    // setIsLoading(true);

    try {
      const res = await getProducts({
        sortKey,
        reverse,
        query: searchValue,
        cursor: newCursor,
      });

      setData({
        products: [...products, ...res.products],
        pageInfo: res.pageInfo,
      });
    } catch (error) {
      console.error("Error fetching more products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingCards />;
  }

  return (
    <div ref={targetElementRef} className="row">
      {products?.map((product: Product) => {
        const {
          id,
          title,
          variants,
          handle,
          featuredImage,
          priceRange,
          description,
          compareAtPriceRange,
        } = product;
        return (
          <div className="col-12 mb-10" key={id}>
            <div className="row">
              <div className="col-12 md:col-4">
                <ImageFallback
                  src={featuredImage?.url || "/images/product_image404.jpg"}
                  // fallback={'/images/category-1.png'}
                  width={312}
                  height={269}
                  alt={featuredImage?.altText || "fallback image"}
                  className="w-[312px] h-[150px] md:h-[269px] object-cover border dark:border-darkmode-border rounded-md"
                />
              </div>

              <div className="col-12 md:col-8 py-3 max-md:pt-4">
                <h2 className="font-bold md:font-normal h4">
                  <Link href={`/product/${handle}`}>{title}</Link>
                </h2>

                <div className="flex items-center gap-x-2 mt-2">
                  <span className="text-light dark:text-darkmode-light text-xs md:text-lg font-bold">
                    ৳ {priceRange.minVariantPrice.amount}{" "}
                    {priceRange.minVariantPrice.currencyCode}
                  </span>
                  {parseFloat(compareAtPriceRange?.maxVariantPrice.amount) >
                  0 ? (
                    <s className="text-light dark:text-darkmode-light text-xs md:text-base font-medium">
                      {currencySymbol}{" "}
                      {compareAtPriceRange?.maxVariantPrice.amount}{" "}
                      {compareAtPriceRange?.maxVariantPrice?.currencyCode}
                    </s>
                  ) : (
                    ""
                  )}
                </div>

                <p className="max-md:text-xs text-light dark:text-darkmode-light my-4 md:mb-8">
                  {description}
                </p>
                <AddToCart
                  variants={product.variants}
                  availableForSale={product.availableForSale}
                  handle={handle}
                  stylesClass={
                    "btn btn-outline-primary max-md:btn-sm drop-shadow-md"
                  }
                />
              </div>
            </div>
          </div>
        );
      })}

      <p
        className={
          hasNextPage || isLoading
            ? "opacity-100 flex justify-center"
            : "opacity-0"
        }
      >
        <BiLoaderAlt className={`animate-spin`} size={30} />
      </p>
    </div>
  );
};

export default ProductList;
