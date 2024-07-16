export default function Step(props) {
  return (
    <div className="">
      <p className="font-semibold quicksand text-lg text-custom-mediumBrown tracking-wider pt-6">
        {props.stepTitle}
      </p>
      <p className="quicksand text-s">{props.stepDescription}</p>
    </div>
  );
}
