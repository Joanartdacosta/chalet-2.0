import FlipCard from "./card/FlipCard";

export default function AdvantagesList(props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center max-w-4xl m-auto">
      {props.items.map((item) => {
        return (
          <FlipCard
            key={item.id}
            imgURL={item.imgURL}
            description={item.description}
            title={item.title}
          />
        );
      })}
    </div>
  );
}
