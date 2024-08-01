import Button from "@/components/common/buttons/Button";

export default function InfoCardService(props) {
  return (
    <div className="w-[46rem]">
      <div className="flex">
        <div className="h-32 bg-[#E9DCCF] w-2">
          <hr />
        </div>

        <div className="ml-10 mr-10">
          <div className="pb-10">
            {" "}
            <p className="font-light ropaSans text-3xl text-custom-mediumBrown">
              {props.type.toUpperCase()}
            </p>
            <p className="font-light ropaSans text-3xl text-custom-mediumBrown ">
              {props.projectType.toUpperCase()}
            </p>
          </div>

          <div className="content-center">
            <p className="pb-4 quicksand text-s">{props.description}</p>
            <ul className="pb-8">
              <li className="quicksand text-s">{props.info1}</li>
              <li className="quicksand text-s">{props.info2}</li>
              <li className="quicksand text-s">{props.info3}</li>
              <li className="quicksand text-s">{props.info4}</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Button className="w-96" label={props.text} onClick={props.onClick} />
      </div>
    </div>
  );
}
