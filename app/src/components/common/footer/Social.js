import SOCIALS from "./socials";

export default function Social() {
  return (
    <div className="m-auto">
      <p className="pb-2">ENTRA EM CONTACTO</p>
      <div className="flex justify-center">
        {SOCIALS.map((social) => (
          <a href={social.href} key={social.id}>
            <img
              className="w-10 p-1 no-underline"
              src={social.imgURL}
              alt={social.text}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
