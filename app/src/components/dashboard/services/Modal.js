import Button from "@/components/common/buttons/Button";
import Number from "@/components/dashboard/services/Number";
import Step from "@/components/dashboard/services/Step";

export default function Modal(props) {
  return (
    <div>
      <p className="quicksand text-xl text-custom-mediumBrown font-semibold">
        MAIS INFORMACOES
      </p>
      <div className="flex m-10">
        <div>
          <div className="max-w-5xl m-auto">
            {props.step1 ? (
              <div className="flex items-center text-start pb-4">
                <Number step={"1"} />

                <Step
                  stepTitle={props.step1Title}
                  stepDescription={props.step1}
                />
              </div>
            ) : (
              "Nao existem detalhes"
            )}

            {props.step2 ? (
              <div className="flex items-center text-start pb-4">
                <Number step={"2"} />

                <Step
                  stepTitle={props.step2Title}
                  stepDescription={props.step2}
                />
              </div>
            ) : (
              ""
            )}

            {props.step3 ? (
              <div className="flex items-center justify-center text-start pb-4">
                <Number step={"3"} />

                <Step
                  stepTitle={props.step3Title}
                  stepDescription={props.step3}
                />
              </div>
            ) : (
              ""
            )}

            {props.step4 ? (
              <div className="flex items-center text-start pb-4">
                <Number step={"4"} />

                <Step
                  stepTitle={props.step4Title}
                  stepDescription={props.step4}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Button label={"Pedir orcamento"} href={"/contacts"} />
      </div>
    </div>
  );
}
