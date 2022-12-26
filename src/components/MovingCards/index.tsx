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
    <div className="container">
      {data.map((card) => (
        <div
          key={card.id}
          className={`panel ${activeId === card.id ? "active" : ""}`}
          onClick={() => onClick(card.id)}
          style={{
            background: `linear-gradient(0deg, rgba(40, 40, 43, 0.9), rgba(255, 255, 255, 0.1)), url(${card.imageUrl})`,
          }}
        >
          <div className="absolute bottom-5 left-5 m-0">
            <p className="text-slate-300">{card.description}</p>
            <h3>{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovingCards;
