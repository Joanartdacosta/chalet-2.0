export default function Step(props) {
  return (
    <div>
      <p className="font-semibold quicksand text-lg text-custom-mediumBrown tracking-wider">
        {props.stepTitle}
      </p>
      <p className="quicksand text-s">{props.stepDescription}</p>
    </div>
  );
}
