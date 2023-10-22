"use client";

import { GlobalContext } from "context/GlobalState";
import { useContext, useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import DropdownMenu from "./DropdownMenu";
import ModalFilter from "./ModalFilter";

const ProductLayouts = (props: any) => {
  const { children } = props;
  const { changeLayout, setChangeLayout } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);

  const handleMenuItemClick = (itemId: string) => {
    console.log(itemId)
  };

  const menuItems = [
    { id: "item-1", label: " Alphabetically, Z-A" },
    { id: "item-2", label: " Price, low to high" },
    { id: "item-3", label: " Price, high to low" },
    { id: "item-4", label: "Date, old to new" },
    { id: "item-5", label: "Date, old to new" },
    { id: "item-6", label: "Date, new to old" },
  ];

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
                  <button className="px-2 search-icon">
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
                    className={`btn ${changeLayout ? "btn-primary" : "btn-outline-primary"
                      } p-2 hover:scale-105 duration-300`}
                  >
                    <BsGridFill />
                  </button>
                  <button
                    onClick={() => setChangeLayout(false)}
                    className={`btn ${changeLayout ? "btn-outline-primary" : "btn-primary"
                      } p-2 hover:scale-105 duration-300`}
                  >
                    <FaList />
                  </button>
                </div>

                <div className="flex gap-2 items-center font-medium text-base">
                  <p>Sort By</p>
                  <DropdownMenu items={menuItems} handleMenuItemClick={handleMenuItemClick} buttonLabel="Alphabetically, A-Z" />
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

      {
        changeLayout ? <div>{children[0]}</div> : <div>{children[1]}</div>
      }
    </>
  );
};

export default ProductLayouts;
