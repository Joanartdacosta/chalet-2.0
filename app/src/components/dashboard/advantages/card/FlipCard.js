export default function FlipCard(props) {
  return (
    <div className="perspective-1000 w-72 h-52 group" key={props.id}>
      <div className="relative w-full h-full transition-transform duration-700 preserve-3d rotate-card">
        <div className="absolute w-full h-full bg-white flex flex-col items-center justify-center text-center border border-neutral-200 rounded-3xl hidden-backface">
          <div className="p-8">
            <p className="mt-6 pb-2 text-center text-xl quicksand">
              {props.title}
            </p>
          </div>
        </div>

        <div className="absolute w-full h-full bg-white flex flex-col items-center justify-center text-center border border-neutral-200 rounded-3xl transform rotate-y-180 hidden-backface">
          <div className="p-8">
            <p className="text-sm text-gray-400 poppins">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
