import React from "react";

interface Card {
  id: number;
  url: string;
  title: string;
}

interface Props {
  data: Array<Card>;
}

const MovingCards = ({ data }: Props) => {
  const [activeId, setActiveId] = React.useState<number>(1);

  const onClick = (id: number) => setActiveId(id);

  return (
    <div className="container">
      {data.map((card) => (
        <div
          key={card.id}
          className={`panel ${activeId === card.id ? "active" : ""}`}
          onClick={() => onClick(card.id)}
          style={{ backgroundImage: `url(${card.url})` }}
        >
          <h3 className="text-2xl absolute bottom-5 left-5 m-0 opacity-0">
            {card.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default MovingCards;
