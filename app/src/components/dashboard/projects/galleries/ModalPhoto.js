export default function ModalPhoto(props) {
  if (!props.isOpen) return null;
  return (
    <div
      className="items-center content-center h-full flex fixed modal-overlay top-0 left-0 w-full"
      onClick={props.onClose}
    >
      <div
        className="items-center relative flex justify-center modal-content lg:w-11/12 h-lvh box-border p-2 m-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute close-btn cursor-pointer p-1 text-sm top-2 right-2"
          onClick={props.onClose}
        >
          ✖
        </button>
        <img
          src={props.src}
          alt={props.alt}
          key={props.id}
          className="max-w-full max-h-full object-cover"
        />
      </div>
    </div>
  );
}
