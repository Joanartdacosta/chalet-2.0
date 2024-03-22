export default function CardAdvantage(props) {
  return (
    <div
      className="w-60 align-center text-center p-8 no-underline border border-neutral-200 rounded-3xl
    "
    >
      <div className="">
        <img className="w-10 m-auto" src={props.imgURL} alt={props.alt} />
      </div>

      <div>
        {" "}
        <p className="text-lg pb-2 text-center mt-6">{props.title}</p>
        <p className="text-xs text-gray-400">{props.description}</p>
      </div>
    </div>
  );
}
