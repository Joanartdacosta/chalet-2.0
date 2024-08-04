import CardProject from "@/components/dashboard/projects/CardProject";

export default function Projects() {
  return (
    <div className="m-auto max-w-5xl justify-center">
      <p className="pt-24 text-2xl opensans text-center">PROJETOS</p>
      <CardProject projectName={"PROJECTO OEIRAS"} />
    </div>
  );
}
