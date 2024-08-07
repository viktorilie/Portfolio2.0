import React from "react";
import "./Card.css";
export interface CardProps {
  className?: string;
  title?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className="card d-flex m-3 p-5">
      <div className="card w-75">
        <div className="card-body">{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
