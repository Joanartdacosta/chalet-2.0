export default function Step(props) {
  return (
    <div className="">
      <header>
        <h4 className="font-semibold quicksand text-lg text-custom-mediumBrown tracking-wider pt-6">
          {props.stepTitle}
        </h4>
      </header>
      <section>
        {" "}
        <p className="quicksand text-s">{props.stepDescription}</p>
      </section>
    </div>
  );
}
