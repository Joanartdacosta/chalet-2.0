export default function CardAdvantage(props) {
  return (
    <div
      className="align-center border border-neutral-200 no-underline p-8 rounded-3xl text-center w-60
    "
    >
      <div>
        <img className=" m-auto w-10" src={props.imgURL} alt={props.alt} />
      </div>

      <div>
        {" "}
        <p className="poppins mt-6 pb-2 text-center text-lg ">{props.title}</p>
        <p className="text-xs text-gray-400 quicksand">{props.description}</p>
      </div>
    </div>
  );
}
