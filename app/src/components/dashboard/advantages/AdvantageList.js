import CardAdvantage from "./CardAdvantage";
import CONTACT_ME from "@/components/dashboard/advantages/contact_me";

export default function AdvantagesList(props) {
  return (
    <div className="flex flex-wrap justify-center gap-5 max-w-4xl m-auto">
      {CONTACT_ME.map((item) => {
        return (
          <CardAdvantage
            imgURL={item.imgURL}
            description={item.description}
            title={item.title}
          />
        );
      })}
    </div>
  );
}
