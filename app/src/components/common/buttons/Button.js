export default function Button(props) {
  return (
    <div className="text-center">
      <button
        type="button"
        className="bg-[#b7997b] dark:bg-[#856343] dark:hover:bg-[#dbccbd] dark:focus:ring-[#b7997b] focus:ring-2 focus:outline-none focus:ring-[#b7997b] font-medium font-semibold hover:bg-[#efe4d9] hover:text-custom-darkBrown inline-flex items-center py-2.5 quicksand text-sm w-full text-[#e9dccf] justify-center"
      >
        {props.label}
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
}
