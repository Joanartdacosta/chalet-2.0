import Button from "@/components/common/buttons/Button";

export default function Modal() {
  return (
    <div className="">
      <p className="quicksand text-xl text-custom-mediumBrown font-semibold">
        MAIS INFORMACOES
      </p>
      <div className="flex p-10 justify-center">
        <div className="text-center">
          <p className="text-9xl mr-10 text-custom-lightBrown playfair">1</p>
        </div>

        <div>
          <p className="quicksand text-lg text-custom-mediumBrown">REUNIAO</p>
          <p className="quicksand text-s">
            Após aprovação do orçamento, é marcada uma Reunião com o cliente
            para definir gostos, necessidades e funcionalidade do(s) espaço(s).
          </p>
        </div>
      </div>
      <Button label={"Pedir orcamento"} />
    </div>
  );
}
