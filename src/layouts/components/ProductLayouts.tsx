"use client";

import { SortFilterItem, sorting } from "@/lib/constants";
import { createUrl } from "@/lib/utils";
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import ModalFilter from "./ModalFilter";
import DropdownMenu from "./filter/DropdownMenu";

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

const ProductLayouts = () => {
  // const { changeLayout, setChangeLayout } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const isListView = searchParams.get("layout") === "list";

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

    router.push(createUrl('/products', newParams));
  }

  function layoutChange(isCard: string) {
    const newParams = new URLSearchParams(searchParams.toString());

    if (isCard == 'list') {
      newParams.set('layout', isCard);
    } else {
      newParams.delete('layout');
    }
    router.push(createUrl('/products', newParams));
  }

  return (
    <>
      <section className="pt-14 xl:pt-28">
        <div className="container">
          <div className="row gy-4">
            <div className="col-12 lg:col-3">
              <div className="flex lg:block justify-between">
                <button
                  className="block lg:hidden"
                  onClick={() => setShowModal(true)}
                >
                  + Filter
                </button>

                <form onSubmit={onSubmit} className="border border-border rounded-md flex justify-between">
                  <input
                    className="bg-transparent border-none focus:ring-transparent"
                    key={searchParams?.get('q')}
                    type="text"
                    name="search"
                    placeholder="Search for products..."
                    autoComplete="off"
                    defaultValue={searchParams?.get('q') || ''}
                  />
                  <button className="px-2 search-icon">
                    <IoSearch size={20} />
                  </button>
                </form>
              </div>
            </div>

            <div className="col-12 lg:col-9">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => layoutChange("card")}
                    className={`btn ${isListView ? "btn-outline-primary" : "btn-primary"
                      } p-2 hover:scale-105 duration-300`}
                  >
                    <BsGridFill />
                  </button>
                  <button
                    onClick={() => layoutChange("list")}
                    className={`btn ${isListView ? "btn-primary" : "btn-outline-primary"
                      } p-2 hover:scale-105 duration-300`}
                  >
                    <FaList />
                  </button>
                </div>

                <div className="flex gap-2 items-center font-medium text-base">
                  <p>Sort By</p>
                  <DropdownMenu list={sorting} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ModalFilter
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      </section>

      {/* {
        changeLayout ? <div>{children[0]}</div> : <div>{children[1]}</div>
      } */}
    </>
  );
};

export default ProductLayouts;
