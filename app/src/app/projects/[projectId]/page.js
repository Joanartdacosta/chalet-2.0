import ProjectsGallery from "@/components/dashboard/projects/ProjectsGallery";
import projects from "@/app/data/projects.json";
import path from "path";
import { promises as fs } from "fs";

export default async function ProjectDetailPage({ params }) {
  const { projectId } = params;
  const filePath = path.join(process.cwd(), "src/app/data/projects.json");

  const fileContents = await fs.readFile(filePath, "utf-8");

  const projects = JSON.parse(fileContents);

  const project = projects.find((p) => p.id.toString() === projectId) || null;

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="pt-24">
      <ProjectsGallery
        id={project.id}
        href={project.href}
        projectName={project.projectName}
        projectType={project.projectType}
        gallery={project.gallery}
      />
    </div>
  );
}
