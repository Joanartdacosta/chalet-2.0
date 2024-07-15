export default function HighlightedText(props) {
  return (
    <div className="flex">
      <div className="h-auto bg-[#E9DCCF] w-2">
        <hr />
      </div>

      <p className="m-4 font-bold text-[#824A3D]">{props.info}</p>
    </div>
  );
}
