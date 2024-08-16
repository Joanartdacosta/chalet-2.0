import CardGallery from "@/components/dashboard/projects/galleries/CardGallery";
import MEZANINE from "@/components/dashboard/projects/galleries/mezanine";

export default function ProjectsGallery() {
  return (
    <div className="m-auto max-w-5xl justify-center text-center p-20">
      <CardGallery
        id={"1"}
        projectName={"MEZANINE"}
        projectType={"Projeto de Design e Remodelação de Interiores"}
        gallery={MEZANINE}
      />
    </div>
  );
}
