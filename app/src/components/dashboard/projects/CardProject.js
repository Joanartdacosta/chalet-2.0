import Button from "@/components/common/buttons/Button";
import generateRandomKey from "@/components/utils/generate_random_key";
import Image from "next/legacy/image";

export default function CardProject(props) {
  return (
    <div className="m-10">
      <div className="bg-gradient-to-tr from-neutral-700 to-neutral-800 content-center h-96 max-w-5xl relative">
        <Image
          className="absolute mix-blend-overlay object-cover"
          layout="fill"
          priority={false}
          src={props.imgURL}
          alt={props.projectName + "_" + generateRandomKey()}
        />
        <div className="pt-20 pb-20 relative text-center">
          <h3 className="pb-5 ropasans text-5xl text-white tracking-wider">
            {props.projectName}
          </h3>
          <div className="m-auto lg:w-72 w-[8rem]">
            <Button href={`/projects/${props.slug}`} label={"VER GALERIA"} />
          </div>
        </div>
      </div>
    </div>
  );
}
