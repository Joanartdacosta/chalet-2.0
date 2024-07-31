import CardProject from "@/components/dashboard/projects/CardProject";

export default function Projects() {
  return (
    <div className="m-auto max-w-5xl justify-center">
      <header>
        {" "}
        <h2 className="p-10 text-2xl opensans text-center">PROJETOS</h2>
      </header>

      <CardProject projectName={"PROJECTO OEIRAS"} />
    </div>
  );
}
