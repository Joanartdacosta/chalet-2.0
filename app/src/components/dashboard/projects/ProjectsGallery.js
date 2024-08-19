import CardGallery from "@/components/dashboard/projects/galleries/CardGallery";

export default function ProjectsGallery(project) {
  return (
    <div className="m-auto max-w-5xl justify-center text-center p-20">
      <CardGallery
        id={project.id}
        href={project.href}
        projectName={project.projectName}
        projectType={project.projectType}
        gallery={project.gallery}
      />
    </div>
  );
}
