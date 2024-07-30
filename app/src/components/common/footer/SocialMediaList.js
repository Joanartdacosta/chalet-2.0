import SOCIALS from "@/lists/socials";
export default function SocialMediaList() {
  return (
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
  );
}
