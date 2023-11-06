import Social from "@/components/Social";
import { AddToCart } from "@/components/cart/add-to-cart";
import ProductGallery from "@/components/product/ProductGallery";
import { VariantSelector } from "@/components/product/variant-selector";
import social from "@/config/social.json";
import { currencySymbol } from "@/lib/constants";
import { getProduct, getProductRecommendations } from "@/lib/shopify";
import LatestProducts from "@/partials/LatestProducts";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

// export const runtime = "edge";

export const generateMetadata = async ({
  params,
}: {
  params: { single: string };
}): Promise<Metadata> => {
  const product = await getProduct(params.single);
  if (!product) return notFound();
  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
  };
};

const ProductSingle = async ({ params }: { params: { single: string } }) => {
  const product = await getProduct(params.single);
  if (!product) return notFound();
  const {
    id,
    title,
    description,
    availableForSale,
    priceRange,
    featuredImage,
    compareAtPriceRange,
    images,
    options,
    variants,
    tags,
  } = product;

  const relatedProducts = await getProductRecommendations(id);
  if (!relatedProducts.length) return null;
  // console.log(relatedProducts[0])

  return (
    <>
      <section className="md:section-sm">
        <div className="container">
          <div className="row justify-center">
            {/* right side contents  */}
            <div className="col-10 md:col-8 lg:col-6">
              <ProductGallery images={images} />
            </div>

            {/* left side contents  */}
            <div className="col-10 md:col-8 lg:col-5 md:ml-7 py-6 lg:py-0">
              <h1 className="text-3xl md:h2 mb-2 md:mb-6">{title}</h1>

              <div className="flex gap-2 items-center">
                <h4 className="text-light max-md:h2">
                  {currencySymbol} {priceRange?.minVariantPrice.amount}{" "}
                  {priceRange?.minVariantPrice?.currencyCode}
                </h4>
                {parseFloat(compareAtPriceRange?.maxVariantPrice.amount) > 0 ? (
                  <s className="text-light max-md:h3 dark:text-darkmode-light">
                    {currencySymbol} {compareAtPriceRange?.maxVariantPrice.amount}{" "}
                    {compareAtPriceRange?.maxVariantPrice?.currencyCode}
                  </s>
                ) : (
                  ""
                )}
              </div>

              <div className="my-8 md:my-10 space-y-6 md:space-y-10">
                <div className="-mt-2">
                  {options && <VariantSelector options={options} variants={variants} />}
                </div>
              </div>

              <div className="flex gap-4 mt-8 md:mt-10 mb-6">
                {/* <Counter /> */}
                <AddToCart variants={product.variants} availableForSale={product.availableForSale} stylesClass={"btn max-md:btn-sm btn-primary"} />
              </div>

              <div className="mb-8 md:mb-10">
                <p className="p-2 max-md:text-sm rounded-md bg-theme-light dark:bg-darkmode-theme-light inline">
                  Est. Delivery between 0 - 3 days
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <h5 className="max-md:text-base">Payment: </h5>
                {Array.from({ length: 7 }).map((_, i) => (
                  <Image
                    key={i}
                    src={"/images/visa.png"}
                    alt="payment"
                    width={44}
                    height={32}
                  />
                ))}
              </div>

              <hr className="my-6" />

              <div className="flex gap-3 items-center mb-6">
                <h5 className="max-md:text-base">Share:</h5>
                <Social source={social.main} className="social-icons" />
              </div>

              {tags && (
                <div className="flex gap-3 items-center">
                  <h5 className="max-md:text-base">Tags:</h5>
                  <button className="flex flex-wrap gap-3">
                    {tags.map((tag, i) => (
                      <p
                        key={`tags-${i}`}
                        className="px-2 py-1 rounded-md border max-md:text-sm"
                      >
                        {tag}
                      </p>
                    ))}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TODO: tabs description of a product  */}
      <section>
        <div className="container">
          {/* <MDXContent content={description} /> */}
          <p>{description}</p>
        </div>
      </section>

      {/* Recommented Products section  */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-6 md:mb-14">
            <h2 className="mb-2">Related Products</h2>
          </div>
          <LatestProducts products={relatedProducts} />
        </div>
      </section>

      {/* <section>
        <div className="container text-center">
          <h3 className="mb-14">Related Products</h3>

          <div className="row mb-6">
          <LatestProducts products={relatedProducts}/>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ProductSingle;
