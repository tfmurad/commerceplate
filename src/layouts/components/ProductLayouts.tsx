"use client";

import ProductCardView from "@/partials/ProductCardView";
import ProductListView from "@/partials/ProductListView";
import { useContext, useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import ModalFilter from "./ModalFilter";
import { GlobalContext } from "context/GlobalState";

const ProductLayouts = ({ currentPage }: { currentPage: any }) => {
  const { changeLayout, setChangeLayout } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);
  //   const [changeLayout, setChangeLayout] = useState<boolean>(true);

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

                <div className="border border-border rounded-md flex justify-between">
                  <input
                    className="bg-transparent border-none focus:ring-transparent"
                    type="text"
                    placeholder="Search For Products"
                  />
                  <button className="px-2">
                    <IoSearch size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 lg:col-9">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => setChangeLayout(true)}
                    className={`btn ${
                      changeLayout ? "btn-primary" : "btn-outline-primary"
                    } p-2 hover:scale-105 duration-300`}
                  >
                    <BsGridFill />
                  </button>
                  <button
                    onClick={() => setChangeLayout(false)}
                    className={`btn ${
                      changeLayout ? "btn-outline-primary" : "btn-primary"
                    } p-2 hover:scale-105 duration-300`}
                  >
                    <FaList />
                  </button>
                </div>

                <div className="flex gap-2 items-center font-medium text-base">
                  <p>Sort By</p>
                  <select
                    className="rounded-md border border-border text-light text-sm"
                    name=""
                    id=""
                  >
                    <option value="Alphabetically, A-Z">
                      Alphabetically, A-Z
                    </option>
                    <option value="Alphabetically, Z-A">
                      Alphabetically, Z-A
                    </option>
                    <option value="Price, low to high">
                      Price, low to high
                    </option>
                    <option value="Price, high to low">
                      Price, high to low
                    </option>
                    <option value="Date, old to new">Date, old to new</option>
                    <option value="Date, new to old">Date, new to old</option>
                  </select>
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

      {changeLayout ? (
        <ProductCardView currentPage={currentPage} />
      ) : (
        <ProductListView currentPage={currentPage} />
      )}
    </>
  );
};

export default ProductLayouts;
