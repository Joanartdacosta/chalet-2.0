import Image from "next/legacy/image";

export default function ImageCard(props) {
  return (
    <div>
      <Image
        alt={props.alt}
        src={props.image}
        priority={false}
        width={500}
        height={400}
        className="h-auto w-auto"
      />
    </div>
  );
}
