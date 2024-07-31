export default function FlipCard(props) {
  return (
    <div className="perspective-1000 w-60 h-64 group" key={props.id}>
      <div className="relative w-full h-full transition-transform duration-700 preserve-3d rotate-card">
        <div className="absolute w-full h-full bg-white flex flex-col items-center justify-center text-center border border-neutral-200 rounded-3xl hidden-backface">
          <div className="p-8">
            <img className="m-auto w-10" src={props.imgURL} alt={props.alt} />
            <h4 className="mt-6 pb-2 text-center text-lg">{props.title}</h4>
          </div>
        </div>

        <div className="absolute w-full h-full bg-white flex flex-col items-center justify-center text-center border border-neutral-200 rounded-3xl transform rotate-y-180 hidden-backface">
          <div className="p-8">
            <p className="text-xs text-gray-400">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
