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

							<div className="border border-border rounded-md flex justify-between">
								<input
									className="bg-transparent border-none focus:ring-transparent"
									type="text"
									placeholder="Search For Products"
								/>
								<button className='px-2'>
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
									<option value="Date, old to new">
										Date, old to new
									</option>
									<option value="Date, new to old">
										Date, new to old
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