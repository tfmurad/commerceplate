
const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => {
	return (
		<div className="text-center">
			<h2 className="mb-6 md:mb-2">{title}</h2>
			<p className="hidden md:block mb-14 h5">{subtitle}</p>
		</div>
	)
}

export default SectionTitle;