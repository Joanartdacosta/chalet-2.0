"use client";
import { useState } from "react";
import ImageCard from "../dashboard/services/ImageCard";

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
    <div className="quicksand flex">
      <div>
        <ImageCard
          alt={"Chalet"}
          image={
            "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <p>
          Para mais informações ou dúvidas, entre em contacto: a partir do
          formulário abaixo; por mensagem privada no Instagram ou envie email
          para
        </p>
        <p>Phone: </p>
        <p>Email: chalet.designinteriores@gmail.com</p>
      </div>
      <div>
        <div className="w-56 p-2">
          <p className="text-lg opensans">PECA O SEU ORCAMENTO</p>
          <form
            className=""
            id="freetour"
            action="https://formcarry.com/s/OlAl-K2DqOh"
            method="POST"
          >
            <input type="hidden" name="contact_number" required />
            <div className="flex flex-column p-4 w-96">
              <input
                className="text-base"
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
                required
              />
            </div>

            <div className="flex flex-column p-4 w-96">
              <input
                className="text-base"
                type="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>

            <div className="flex flex-column p-4 w-96">
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
    </div>
  );
}

export default Form;
