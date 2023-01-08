import React from "react";
import "../styles/movingcards.css";

interface Card {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  projectUrl: string;
  bgColor: string;
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
            background: card.bgColor,
          }}
        >
          <p className="card-id">{card.id}</p>

          <a href={card.projectUrl} target="_blank">
            <h2>{card.title}</h2>
          </a>
          <a href={card.projectUrl} target="_blank">
            <p>{card.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default MovingCards;
