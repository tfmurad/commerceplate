"use client";

import React from 'react';
import RangeSlider from "./RangeSlider";

interface ModalFilterProps {
  isVisible: boolean;
  onClose: () => void;
}

const ModalFilter: React.FC<ModalFilterProps> = ({ isVisible, onClose }) => {

  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target && e.target instanceof HTMLDivElement && e.target.id === 'wrapper') {
      onClose();
    }
  };

  return (
    <>
      <div
        className="modal"
        id="wrapper"
        onClick={handleClose}
      >
        <div>
          <button className="modal-close" onClick={() => onClose()}>
            X
          </button>
          <div className="modal-content">
            <div className="z-10">
              <RangeSlider />

              <div>
                <h4 className="mt-10 mb-2">Product Categories</h4>
                <hr />
                <ul className="mt-4 space-y-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <li
                      key={i}
                      className="flex justify-between text-lunar dark:text-darkmode-lunar"
                    >
                      Gatelight <span>( 09 )</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mt-10 mb-2">Brand</h4>
                <hr />
                <ul className="mt-4 space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li
                      key={i}
                      className="flex justify-between text-lunar dark:text-darkmode-lunar"
                    >
                      <span>WebelKart ( 09 )</span>
                      <span>
                        {" "}
                        <input type="checkbox" name="" id="" />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mt-10 mb-2">Frame Color</h4>
                <hr />
                <div className="flex gap-4 mt-4">
                  <div className=" bg-gray-800 rounded-md border">
                    <input type="checkbox" className="input-checkbox" />
                  </div>

                  <div className=" bg-gray-200 rounded-md border">
                    <input type="checkbox" className="input-checkbox" />
                  </div>

                  <div className=" bg-gray-400 rounded-md border">
                    <input type="checkbox" className="input-checkbox" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mt-10 mb-2">Size</h4>
                <hr />
                <ul className="mt-4 space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <li
                      key={i}
                      className="flex justify-between text-lunar dark:text-darkmode-lunar"
                    >
                      <span>Height 61cm,Bulb E27</span>
                      <span>
                        {" "}
                        <input type="checkbox" name="" id="" />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>


              <div>
                <h4 className="mt-10 mb-2">Size</h4>
                <hr />
                <button className="flex flex-wrap gap-3 mt-4">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <p
                      key={idx}
                      className="px-2 py-1 rounded-md border text-lunar dark:text-darkmode-lunar"
                    >
                      Table Lamps
                    </p>
                  ))}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalFilter;
