export default function BrownButton(props) {
  return (
    <div>
      <div className="bg-[#B7997B] cursor-pointer p-2 quicksand w-80 ">
        <p className="font-semibold text-[#E9DCCF]">{props.text}</p>
      </div>
    </div>
  );
}
