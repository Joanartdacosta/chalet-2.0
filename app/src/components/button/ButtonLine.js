export default function Button(props) {
  return (
    <div>
      <button
        type="button"
        class="bg-white text-[#b7997b]  border border-[#b7997b] hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        {props.label}
      </button>
    </div>
  );
}
