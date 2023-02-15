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
    <div className="component-hidden moving-cards ">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="absolute top-2 right-2 h-20 w-20 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              ></path>
            </svg>
          </a>
          {/* card.imageUrl && (
            <img
              src={`/projects/${card.imageUrl}`}
              alt="project screenshot"
              className="h-auto w-auto"
              loading="lazy"
            />
          )*/}
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
