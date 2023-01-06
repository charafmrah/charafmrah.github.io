import React from "react";

interface Card {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  projectUrl: string;
}

interface Props {
  data: Array<Card>;
}

const MovingCards = ({ data }: Props) => {
  const [activeId, setActiveId] = React.useState<number>(1);

  const onClick = (id: number) => setActiveId(id);

  return (
    <div className="moving-cards">
      {data.map((card) => (
        <div
          key={card.id}
          className={`panel ${activeId === card.id ? "active" : ""}`}
          onClick={() => onClick(card.id)}
          style={{
            background: `linear-gradient(0deg, rgba(40, 40, 43, 0.9), rgba(255, 255, 255, 0.1)), url(${card.imageUrl})`,
          }}
        >
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MovingCards;
