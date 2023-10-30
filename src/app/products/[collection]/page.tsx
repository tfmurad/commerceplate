import ProductLayouts from '@/components/product/ProductLayouts';
import { defaultSort, sorting } from '@/lib/constants';
import { getListPage } from '@/lib/contentParser';
import { getCollectionProducts } from '@/lib/shopify';
import CallToAction from '@/partials/CallToAction';
import PageHeader from '@/partials/PageHeader';
import ProductCardView from '@/partials/ProductCardView';
import ProductListView from '@/partials/ProductListView';

const CategoryPage = async ({ params, searchParams }: { params: { page: number; collection: string }; searchParams: { [key: string]: string | string[] | undefined } }) => {
  const callToAction = getListPage("sections/call-to-action.md");
  const currentPage =
    params.page && !isNaN(Number(params.page)) ? Number(params.page) : 1;

  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const { layout } = searchParams as { [key: string]: string };
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });
  return (
    <>
      <PageHeader title={"Products"} />
      <ProductLayouts />
      {
        layout === "list" ? <ProductListView currentPage={currentPage} products={products} searchValue={searchValue} /> : <ProductCardView currentPage={currentPage} products={products} searchValue={searchValue} />
      }
      <CallToAction data={callToAction} />
    </>
  )
}

export default CategoryPage;