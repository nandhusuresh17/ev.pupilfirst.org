export default function DateAndContent({ date, content }) {
  return (
    <div className="grid grid-cols-12 gap-2 md:gap-3 p-2 md:p-4">
      <p className="col-span-4 text-primary-500 font-medium">{date}</p>
      <p className="col-span-8 flex items-center">
        <span className="pr-3">-</span>
        {content}
      </p>
    </div>
  );
}
