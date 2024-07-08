import Button from "@/components/common/buttons/Button";

export default function InfoCardService(props) {
  return (
    <div className="pr-10">
      <p className="font-light ropaSans text-2xl text-custom-mediumBrown">
        {props.type}
      </p>
      <p className="font-light pb-10 ropaSans text-2xl text-custom-mediumBrown ">
        {props.title}
      </p>
      <div className="content-center">
        <p className="quicksand text-s">{props.info1}</p>
        <p className="pb-20 quicksand text-s">{props.info2}</p>
      </div>
      <Button className="w-96" label="VER MAIS" />
    </div>
  );
}
