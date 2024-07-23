import FlipCard from "./card/FlipCard";

export default function AdvantagesList(props) {
  return (
    <div className="flex flex-col items-center gap-4 max-w-4xl m-auto  sm:flex-row sm:flex-wrap sm:justify-center">
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
