import CardAdvantage from "./card/CardAdvantage";

export default function AdvantagesList(props) {
  return (
    <div className="flex flex-wrap gap-2 max-w-4xl m-auto">
      {props.items.map((item) => {
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
