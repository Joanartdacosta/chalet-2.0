"use client";
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
    <div className="pt-4">
      <p>
        Para mais informações ou dúvidas, entre em contacto: a partir do
        formulário abaixo; por mensagem privada no Instagram ou envie email para
        chalet.designinteriores@gmail.com.
      </p>

      <div className="w-56 p-2">
        <form
          className="pb-20"
          id="freetour"
          action="https://formcarry.com/s/OlAl-K2DqOh"
          method="POST"
        >
          <input type="hidden" name="contact_number" required />
          <div className="flex flex-column w-96">
            <label className="text-base">Nome</label>
            <input
              className="text-base"
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-column w-96">
            <label className="">Email</label>
            <input
              className="text-base"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-column w-96">
            <label className="">Mensagem de contacto</label>
            <textarea
              className="text-base"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              name="message"
              placeholder="Enter your message..."
              required
            />
          </div>

          <div>
            <button
              className="cursor w-full p-2 text-base align-self no-underline"
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
