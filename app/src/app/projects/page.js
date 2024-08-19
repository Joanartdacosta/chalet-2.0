import CardProject from "@/components/dashboard/projects/CardProject";
import PROJECTS from "@/app/data/projects.json";

export default function Projects() {
  return (
    <div className="m-auto max-w-5xl justify-center">
      <header>
        {" "}
        <h3 className="pt-24 text-2xl opensans text-center">PROJETOS</h3>
      </header>
      {PROJECTS.map((project) => (
        <CardProject
          imgURL={project.imgURL}
          href={project.href}
          projectName={project.projectName}
          gallery={project.gallery}
          key={project.id}
        />
      ))}
    </div>
  );
}
