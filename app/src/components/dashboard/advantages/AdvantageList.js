import CardAdvantage from "./CardAdvantage";
import ADVANTAGES from "./advantages";

export default function AdvantagesList() {
  return (
    <div className="display-flex wrap-section justify-center gap-2">
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
