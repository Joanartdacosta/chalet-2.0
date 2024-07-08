import Button from "@/components/common/buttons/Button";

export default function InfoCardService(props) {
  return (
    <div className="pr-10">
      <p className="text-2xl ropaSans text-custom-mediumBrown font-light">
        {props.type}
      </p>
      <p className="text-2xl ropaSans pb-10 text-custom-mediumBrown font-light">
        {props.title}
      </p>
      <div className="content-center">
        <p className="text-s quicksand">{props.info1}</p>
        <p className="pb-20 text-s quicksand">{props.info2}</p>
      </div>
      <Button className="w-96" label={props.text} onClick={props.onClick} />
    </div>
  );
}
