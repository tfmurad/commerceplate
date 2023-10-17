import ProductLayouts from "@/components/ProductLayouts";
import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
const { pagination_card, pagination_list } = config.settings;

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

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams = () => {
  const totalPages = Math.ceil(products.length / pagination_list);
  let paths: { page: string }[] = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      page: (i + 1).toString(),
    });
  }

  return paths;
};

function spreadPages(num: number): number[] {
  let pages = [];

  for (let i = 2; i <= num; i++) {
    pages.push(i);
  }

  return pages;
}

const Products = ({ params }: { params: { page: number } }) => {
  const callToAction = getListPage("sections/call-to-action.md");
  const currentPage =
    params.page && !isNaN(Number(params.page)) ? Number(params.page) : 1;

  return (
    <>
      <PageHeader title={"Product"} />
      <ProductLayouts currentPage={currentPage} />
      <CallToAction data={callToAction} />
    </>
  );
};

export default Products;
