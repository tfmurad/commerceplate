"use client"
import ImageFallback from "@/helpers/ImageFallback";
import { createUrl } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { IoSearch } from "react-icons/io5";

const Search = ({ products }: { products: any }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set('q', search.value);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl('/search', newParams));
  }

  return (
    <section className="section-sm">
      <div className="container">
        <div className="row">
          <form onSubmit={onSubmit} className="flex justify-center col-9 md:col-7 mx-auto">
            <input
              key={searchParams?.get('q')}
              type="text"
              name="search"
              placeholder="Search for products..."
              autoComplete="off"
              defaultValue={searchParams?.get('q') || ''}
              className="form-input bg-white rounded-r-none py-2"
            />
            <button
              className="btn btn-sm md:btn-md btn-primary rounded-tl-none rounded-bl-none cursor-pointer"
              type="submit"
              value="Subscribe"
            >
              <IoSearch size={25} />
            </button>
          </form>


          {
            products.length < 1 &&
            <div className="mx-auto pt-5 text-center">
              <ImageFallback
                className="mx-auto mb-6"
                src="/images/no-search-found.png"
                alt="no-search-found"
                width={211}
                height={184}
              />
              <h1 className="h2 mb-4">
                {products.length < 1 ? "Search Products Here" : "No Search Found!"}
              </h1>
              <p>
                {products.length < 1
                  ? "Search for products by title, category, or tag."
                  : "We couldn't find what you searched for. Try searching again."}
              </p>
            </div>
          }
        </div>
      </div>

    </section>
  )
}

export default Search;