export default function DateAndContent({ date, content }) {
	return (
		<div className="grid grid-cols-12 gap-2 md:gap-3 p-4">
			<p className="col-span-3 text-primary-500 font-medium">{date}</p>
			<p className="col-span-9 flex">
				<span className="pr-3">-</span>
				{content}
			</p>
		</div>
	);
}
