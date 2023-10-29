import Counter from "@/components/Counter";
// import DropdownMenu from "@/components/filter/DropdownMenu";
import FrameColor from "@/components/FrameColor";
import ProductGallery from "@/components/ProductGallery";
import Social from "@/components/Social";
import social from "@/config/social.json";
import ImageFallback from "@/helpers/ImageFallback";
// import MDXContent from "@/helpers/MDXContent";
import { HIDDEN_PRODUCT_TAG } from "@/lib/constants";
// import { getSinglePage } from "@/lib/contentParser";
import { getProduct } from "@/lib/shopify";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export const runtime = "edge";

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

  console.log(variants[0].selectedOptions[0].name);

  const deskLampProducts = [
    {
      id: 1,
      productName: "Modern LED Desk Lamp",
      imgSrc: "/images/product-1.png",
    },
    {
      id: 2,
      productName: "Adjustable Swing-Arm Desk Lamp",
      imgSrc: "/images/product-1.png",
    },
    {
      id: 3,
      productName: "Vintage Industrial Desk Lamp",
      imgSrc: "/images/product-1.png",
    },
    {
      id: 4,
      productName: "Wooden Base Desk Lamp",
      imgSrc: "/images/product-1.png",
    },
    {
      id: 5,
      productName: "Minimalist LED Task Lamp",
      imgSrc: "/images/product-1.png",
    },
  ];

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
                  ৳ {priceRange?.minVariantPrice.amount}{" "}
                  {priceRange?.minVariantPrice?.currencyCode}
                </h4>
                {parseFloat(compareAtPriceRange?.maxVariantPrice.amount) > 0 ? (
                  <s className="text-light max-md:h3 dark:text-darkmode-light">
                    ৳ {compareAtPriceRange?.maxVariantPrice.amount}{" "}
                    {compareAtPriceRange?.maxVariantPrice?.currencyCode}
                  </s>
                ) : (
                  ""
                )}
              </div>

              <div className="my-8 md:my-10 space-y-6 md:space-y-10">
                <div>
                  <h5 className="mb-2 max-md:text-base">Frame Color</h5>
                  <div className="-mt-2">
                    <FrameColor />
                  </div>
                </div>

                <div>
                  <h5 className="mb-2 max-md:text-base">Size & Weight</h5>
                  {/* <DropdownMenu /> */}
                </div>
              </div>

              <div className="flex gap-4 mt-8 md:mt-10 mb-6">
                <Counter />

                {/* <button className="btn btn-outline-primary">Add To Cart
								</button> */}

                <button className="btn max-md:btn-sm btn-primary">
                  Buy now
                </button>
              </div>

              <div className="mb-8 md:mb-10">
                <p className="p-2 max-md:text-sm rounded-md bg-theme-light dark:bg-darkmode-theme-light inline">
                  Est. Delivery between 0 - 3 days
                </p>
              </div>

              {/* <div className="flex gap-3">
								<h5>Payment: </h5>
								<PaymentSlider paymentMethods={paymentMethods} />
							</div> */}

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
      {/* <section className="section">
				<div className="container">
					<MDXContent content={content} />
				</div>
			</section> */}

      <section>
        <div className="container text-center">
          <h3 className="mb-14">Latest Products</h3>

          <div className="row mb-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="text-center sm:col-6 md:col-4 lg:col-3"
              >
                <ImageFallback
                  className=""
                  src="/images/category-2.png"
                  width={1000}
                  height={269}
                  alt="category image"
                />
                <div className="p-6 text-center">
                  <h5>Elliot Table Lamp</h5>
                  <div className="flex justify-center gap-2">
                    <h6 className="text-light">$49.99 USD</h6>
                    <h6 className="text-light line-through">$89.99 USD</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSingle;
