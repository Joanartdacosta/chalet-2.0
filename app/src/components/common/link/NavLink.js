import Link from "next/link";

export default function NavLink(props) {
  return (
    <>
      <Link className="text-lg text-black no-underline pr-10" href={props.href}>
        {props.label}
      </Link>
    </>
  );
}
