"use client";

import RangeSlider from "@/components/rangeSlider/RangeSlider";
import { ShopifyCollection } from "@/lib/shopify/types";
import { createUrl } from "@/lib/utils";
import { slugify } from "@/lib/utils/textConverter";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

const ProductFilters = ({
  categories,
  vendors,
  tags,
  maxPriceData,
}: {
  categories: ShopifyCollection[];
  vendors: { vendor: string, productCount: number }[];
  tags: any;
  maxPriceData: { maxProductPrice: number; maxProductCurrency: string };
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // console.log(selectedCategory)
  // const sizes = [
  //   {
  //     id: "H40E27",
  //     height: 40,
  //     bulbSize: 27,
  //   },
  //   {
  //     id: "H35E14",
  //     height: 35,
  //     bulbSize: 14,
  //   },
  //   {
  //     id: "H150E25",
  //     height: 150,
  //     bulbSize: 25,
  //   },
  // ];

  const handleBrandClick = (name: string) => {
    const slugName = slugify(name.toLowerCase());
    const newParams = new URLSearchParams(searchParams.toString());

    if (name === selectedBrand) {
      newParams.delete("brand");
      setSelectedBrand(null);
    } else {
      newParams.set("brand", slugName);
      setSelectedBrand(name);
    }

    router.push(createUrl("/products", newParams), { scroll: false });
  };


  const handleCategoryClick = (name: string) => {
    const slugName = slugify(name.toLowerCase());
    const newParams = new URLSearchParams(searchParams.toString());

    if (name === selectedCategory || name === '') {
      newParams.delete("c");
      setSelectedCategory(null);
    } else {
      newParams.set("c", slugName);
      setSelectedCategory(name);
    }

    router.push(createUrl("/products", newParams), { scroll: false });
  };

  return (
    <>
      <div>
        <h5 className="mb-2 mt-8 lg:mt-10 lg:text-xl">Select Price Range</h5>
        <hr />
        <RangeSlider maxPriceData={maxPriceData} />
      </div>

      {/* <div>
        <h5 className="mb-2 mt-8 lg:mt-10 lg:text-xl">Product Categories</h5>
        <hr />
        <ul className="mt-4 space-y-4">
          {categories &&
            categories.map((category) => (
              <CollectionItem
                key={category.handle}
                title={category.title}
                path={category.path || ""}
                productCount={category.products?.edges.length}
              />
            ))}
        </ul>
      </div> */}

      <div>
        <h5 className="mb-2 mt-8 lg:mt-10 lg:text-xl">Product Categories</h5>
        <hr />
        <ul className="mt-4 space-y-4">
          {categories.map((category) => (
            <li key={category.handle}
              className={`flex items-center justify-between text-light dark:text-darkmode-light cursor-pointer ${selectedCategory === category.title ? "text-dark dark:text-darkmode-light font-semibold" : ''}`}
              onClick={() => handleCategoryClick(category.title)}
            >
              {category.title} <span>{category?.products?.edges.length! > 0 ? `(${category?.products?.edges.length!})` : ''}</span>
            </li>
          ))}
        </ul>
      </div>

      {
        vendors &&
        <div>
          <h5 className="mb-2 mt-8 lg:mt-10 lg:text-xl">Brand</h5>
          <hr />
          <ul className="mt-4 space-y-4">
            {vendors.map(vendor => (
              <li
                key={vendor.vendor}
                className={`flex items-center justify-between cursor-pointer text-light dark:text-darkmode-light`}
                onClick={() => handleBrandClick(vendor.vendor)}
              >
                <span>
                  {vendor.vendor} ({vendor.productCount})
                </span>
                <div className="h-4 w-4 rounded-sm flex items-center justify-center border border-light dark:border-darkmode-light">
                  {selectedBrand === vendor.vendor && (
                    <span>
                      <BsCheckLg size={16} />
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      }

      {/* <div>
        <h5 className="mb-2 mt-8 lg:mt-10 lg:text-xl">Frame Color</h5>
        <hr />
        <FrameColor />
      </div>

      <div>
        <h5 className="mb-2 mt-8 lg:mt-10 lg:text-xl">Size</h5>
        <hr />
        <ul className="mt-4 space-y-4">
          {sizes.map((item) => (
            <li
              key={item.id}
              className={`flex items-center justify-between cursor-pointer text-light dark:text-darkmode-light`}
              onClick={() => handleSizeClick(item.id)}
            >
              <span>
                Height {item.height}cm, Bulb E{item.bulbSize}
              </span>
              <div className="h-4 w-4 rounded-sm flex items-center justify-center border border-light dark:border-darkmode-light">
                {selectedSize === item.id && (
                  <span>
                    <BsCheckLg size={16} />
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div> */}

      {
        tags &&
        <div>
          <h5 className="mb-2 mt-8 lg:mt-10 lg:text-xl">Tags</h5>
          <hr />
          <button className="flex flex-wrap gap-3 mt-4">
            {tags.map((tag: string) => (
              <p
                key={tag}
                className="px-2 py-1 rounded-md border text-light dark:text-darkmode-light"
              >
                {tag}
              </p>
            ))}
          </button>
        </div>
      }
    </>
  );
};

export default ProductFilters;
