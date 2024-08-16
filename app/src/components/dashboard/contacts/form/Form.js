"use client";
import Image from "next/legacy/image";
import { useState } from "react";

function Form() {
  const [color, setColor] = useState("#e9dccf");
  const [label, setLabel] = useState("Enviar");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function changeStyle() {
    setColor("#a89582");
    setLabel("Enviado");
  }

  return (
    <div className="quicksand lg:flex justify-center pb-20 pt-20">
      <div className="lg:w-1/2">
        <div className="items-center">
          <Image
            alt="contact_chalet"
            src="https://images.unsplash.com/photo-1523865236457-3ae3358a4eaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={600}
            height={300}
            priority={true}
          />
          <div className="p-4 text-xs">
            <p className="pb-2 text-xs">
              Para mais informações ou dúvidas, entre em contacto: a partir do
              formulário abaixo; por mensagem privada no Instagram ou envie
              email para
            </p>
            <p>
              <span className="font-semibold">Phone: </span>913847348
            </p>
            <p className="pb-4">
              <span className="font-semibold">Email: </span>
              chalet.designinteriores@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="lg:ml-8 lg:w-1/2">
        <header>
          {" "}
          <h3 className="text-2xl opensans pb-10 pl-4">PECA O SEU ORCAMENTO</h3>
        </header>

        <form
          className="w-full"
          id="freetour"
          action={process.env.NEXT_PUBLIC_FORM_ACTION_URL}
          method="POST"
        >
          <input type="hidden" name="contact_number" required />
          <div className="flex flex-column p-4">
            <input
              className="text-base w-screen"
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
              required
            />
          </div>

          <div className="flex flex-column p-4">
            <input
              className="text-base w-screen"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>

          <div className="flex flex-column p-4">
            <textarea
              className="text-base w-screen"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              name="message"
              placeholder="Enter your message..."
              required
            />
          </div>

          <div>
            <p className="quicksand text-xs text-center">
              Ao clicar em enviar, aceita os nossos termos e condicoes.
            </p>
          </div>

          <div className="p-4">
            <button
              className="align-self cursor h-12 no-underline text-base w-full"
              onClick={changeStyle}
              style={{ background: color }}
              type="submit"
              id="submit"
              value="Send"
            >
              {label}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
