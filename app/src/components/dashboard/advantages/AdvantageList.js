import ADVANTAGES from "./advantages";
import CardAdvantage from "./CardAdvantage";

export default function AdvantagesList() {
  return (
    <div className="flex flex-wrap gap-2 max-w-4xl m-auto">
      {ADVANTAGES.map((item) => {
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
