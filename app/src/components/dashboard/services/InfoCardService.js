import Button from "@/components/common/buttons/Button";

export default function InfoCardService(props) {
  return (
    <div>
      <div className="flex">
        <div className="h-32 bg-[#E9DCCF] w-2">
          <hr />
        </div>

        <div className="m-10">
          <header>
            <div className="pb-10">
              <h2 className="font-light ropaSans text-3xl text-custom-mediumBrown">
                {props.type.toUpperCase()}
              </h2>
              <h2 className="font-light ropaSans text-3xl text-custom-mediumBrown ">
                {props.projectType.toUpperCase()}
              </h2>
            </div>
          </header>

          <section>
            <div className="content-center">
              <p className="pb-4 quicksand text-s">{props.description}</p>
              <ul className="pb-8">
                <li className="quicksand text-s">{props.info1}</li>
                <li className="quicksand text-s">{props.info2}</li>
                <li className="quicksand text-s">{props.info3}</li>
                <li className="quicksand text-s">{props.info4}</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <section>
        <div className="pr-10">
          <Button className="w-96" label={props.text} onClick={props.onClick} />
        </div>
      </section>
    </div>
  );
}
