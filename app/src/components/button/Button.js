export default function Button(props) {
  return (
    <div>
      <button
        type="button"
        class="text-white bg-[#B7997B] hover:bg-[#efe4d9] focus:ring-2 focus:outline-none focus:ring-[#b7997b] font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-[#856343] dark:hover:bg-[#b7997b] dark:focus:ring-[#b7997b]"
      >
        {props.label}
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
}
