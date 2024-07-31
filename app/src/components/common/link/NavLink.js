import Link from "next/link";

export default function NavLink(props) {
  return (
    <>
      <Link className="text-xl text-black no-underline pr-10" href={props.href}>
        {props.label}
      </Link>
    </>
  );
}
