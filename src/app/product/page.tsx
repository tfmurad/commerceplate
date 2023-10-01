import Link from "next/link";

const Product = () => {
	return (
		<section className="h-96 flex items-center justify-center">
			<Link className="bg-black text-white p-2 rounded-md" href={`product/product-single`}>Product Single</Link>
		</section>
	)
}

export default Product;