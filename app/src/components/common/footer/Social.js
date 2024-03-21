import SOCIALS from "./socials";

export default function Social() {
  return (
    <div className="m-auto pt-2">
      {SOCIALS.map((social) => (
        <a href={social.href} key={social.id}>
          <img
            className="w-10 p-1 no-underline"
            src={social.imgURL}
            alt={social.text}
          ></img>
        </a>
      ))}
    </div>
  );
}
