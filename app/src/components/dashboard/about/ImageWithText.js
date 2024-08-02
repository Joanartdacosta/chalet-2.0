import HighlightedText from "@/components/dashboard/about/HighlightedText";
import Image from "next/image";

export default function ImageWithText(props) {
  return (
    <div>
      <div className="lg:flex lg:flex-row flex-col">
        <Image
          className="border border-2 border-[#E9DCCF] justify-center lg:mr-10 object-fit p-8 m-auto mb-5"
          src={props.image}
          width={400}
          height={500}
          alt={props.description}
          priority={false}
        />
        <div className="content-center">
          <p className="pb-10">{props.info1}</p>
          <p className="pb-10">{props.info2}</p>
          <HighlightedText info={props.quote} />
          <p className="pt-10">{props.info3}</p>
        </div>
      </div>
    </div>
  );
}
