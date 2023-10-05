
const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => {
	return (
		<div className="text-center">
			<h3 className="mb-6 md:mb-3 text-xl md:text-5xl">{title}</h3>
			<p className="hidden md:block text-xl mb-14">{subtitle}</p>
		</div>
	)
}

export default SectionTitle