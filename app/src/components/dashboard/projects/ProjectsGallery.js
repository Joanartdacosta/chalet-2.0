import CardGallery from "./galleries/CardGallery";
import MEZANINE from "./galleries/mezanine";

export default function ProjectsGallery() {
  return (
    <div className="m-auto max-w-5xl justify-center text-center p-20">
      <CardGallery
        id={"1"}
        title={"MEZANINE"}
        typeProject={"Projeto de Design e Remodelação de Interiores"}
        gallery={MEZANINE}
      />
    </div>
  );
}
