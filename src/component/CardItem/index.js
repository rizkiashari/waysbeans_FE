import React from "react";
import { useHistory } from "react-router-dom";

import { Card } from "react-bootstrap";
import Style from "./CardItem.module.css";

const CardItem = ({ item }) => {
  const router = useHistory();

  const handleDetail = (id) => {
    console.log(id);
    router.push(`product/${id}`);
  };

  return (
    <Card
      className={Style.Pointer}
      style={{ width: "15.5rem", marginBottom: "30px" }}
      onClick={() => handleDetail(item.id)}>
      <Card.Img src={item.photo} alt='./' variant='top' />
      <Card.Body className={Style.BodyImage}>
        <Card.Title className={Style.Title}>{item.name}</Card.Title>
        <Card.Title className={Style.Price}>
          Rp.{item.price.toLocaleString("id-ID")}
        </Card.Title>
        <Card.Title className={Style.Stock}>Stock: {item.stock}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
