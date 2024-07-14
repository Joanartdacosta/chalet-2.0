import Image from "next/image";

export default function ImageCard(props) {
  return (
    <div>
      <Image
        alt={props.alt}
        src={props.image}
        priority={true}
        width={500}
        height={400}
        className="h-auto w-auto"
      />
    </div>
  );
}
