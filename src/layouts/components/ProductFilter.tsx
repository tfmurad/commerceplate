"use client";

import { useState } from 'react';
import { BsGridFill } from 'react-icons/bs';
import { FaList } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import ModalFilter from './ModalFilter';

const ProductFilter = () => {
	const [showModal, setShowModal] = useState(false);

	return (
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
							<div className="border border-border rounded-md flex justify-evenly">
								<div>
									<input
										className="bg-transparent border-none focus:ring-transparent"
										type="text"
										placeholder="Search For Products"
									/>
								</div>
								<button>
									<IoSearch size={20} />
								</button>
							</div>
						</div>
					</div>

					<div className="col-12 lg:col-9">
						<div className="flex justify-between items-center mb-4">
							<div className="flex gap-2">
								<div className="bg-dark text-white dark:bg-darkmode-primary dark:text-dark p-2 rounded-md">
									<BsGridFill />
								</div>
								<div className="border border-dark text-dark dark:text-darkmode-dark dark:border-darkmode-primary p-2 rounded-md">
									<FaList />
								</div>
							</div>

							<div className="flex gap-2 items-center">
								<p className="font-medium">Sort By</p>
								<select
									className="rounded-md px-4 border border-border"
									name=""
									id=""
								>
									<option value="Alphabetically, A-Z">
										Alphabetically, A-Z
									</option>
									<option value="Height 61cm,Bulb E27">
										Height 61cm,Bulb E27
									</option>
									<option value="Height 41cm,Bulb E26">
										Height 41cm,Bulb E26
									</option>
									<option value="Height 32cm,Bulb E25">
										Height 32cm,Bulb E25
									</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ModalFilter isVisible={showModal} onClose={() => setShowModal(false)} />
		</section>
	)
}

export default ProductFilter;