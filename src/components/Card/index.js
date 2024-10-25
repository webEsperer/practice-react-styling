import React from "react";
import { Card } from "./Card";
import CardImg from "./CardImg";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";
import CardText from "./CardText";

export default Object.assign(Card, {
  Img: CardImg,
  Body: CardBody,
  Title: CardTitle,
  Text: CardText,
});
