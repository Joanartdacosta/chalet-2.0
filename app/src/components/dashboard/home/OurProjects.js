import MultiCarousel from "@/components/common/galleries/MultiCarousel";
import PROJECTS_GALLERY from "@/lists/projects_gallery";

export default function OurProjects() {
  return (
    <div className="pt-20 pb-40">
      <header>
        {" "}
        <h3 className="opensans p-10 text-2xl text-center">
          OS NOSSOS PROJETOS
        </h3>
      </header>
      <section>
        <MultiCarousel slidesData={PROJECTS_GALLERY} />
      </section>
    </div>
  );
}
