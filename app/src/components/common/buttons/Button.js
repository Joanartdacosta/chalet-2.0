import Link from "next/link";

export default function Button(props) {
  if (props.href) {
    return (
      <div>
        <Link href={props.href}>
          <button className="bg-[#b7997b] dark:bg-[#856343] dark:hover:bg-[#dbccbd] dark:focus:ring-[#b7997b] focus:ring-2 focus:outline-none focus:ring-[#b7997b] font-medium font-semibold hover:bg-[#efe4d9] hover:text-custom-darkBrown inline-flex items-center py-2.5 quicksand text-sm w-full text-[#e9dccf] justify-center">
            <p>{props.label}</p>
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="text-center">
      <button
        className="bg-[#b7997b] dark:bg-[#856343] dark:hover:bg-[#dbccbd] dark:focus:ring-[#b7997b] focus:ring-2 focus:outline-none focus:ring-[#b7997b] font-medium font-semibold hover:bg-[#efe4d9] hover:text-custom-darkBrown inline-flex items-center py-2.5 quicksand text-sm w-full text-[#e9dccf] justify-center"
        onClick={props.onClick}
        type="button"
      >
        {props.label}
      </button>
    </div>
  );
}
