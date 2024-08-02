import Button from "@/components/common/buttons/Button";
import Image from "next/legacy/image";

export default function CardProject(props) {
  return (
    <div className="m-10">
      <div className="bg-gradient-to-tr from-neutral-700 to-neutral-800 content-center h-96 max-w-5xl relative">
        <Image
          className="absolute mix-blend-overlay object-cover"
          unoptimized
          fill
          priority={false}
          src="https://chalet-webapp.s3.amazonaws.com/homepage/MezzanineHall-background.png"
          alt="image"
        />
        <div className="pt-20 pb-20 relative text-center">
          <p className="pb-5 ropasans text-5xl text-white tracking-wider">
            {props.projectName}
          </p>
          <div className="m-auto lg:w-72 w-[8rem]">
            <Button href={"/projects/1"} label={"VER GALERIA"} />
          </div>
        </div>
      </div>
    </div>
  );
}
