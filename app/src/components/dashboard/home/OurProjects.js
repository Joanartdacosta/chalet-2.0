import MultiCarousel from "@/components/dashboard/home/MultiCarousel";
import PROJECTS_GALLERY from "@/lists/projects_gallery";

export default function OurProjects() {
  return (
    <div className="pt-20 pb-40">
      <p className="opensans p-10 text-2xl text-center">OS NOSSOS PROJETOS</p>
      <MultiCarousel slidesData={PROJECTS_GALLERY} />
    </div>
  );
}
