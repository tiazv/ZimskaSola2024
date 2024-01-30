import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Blog = ({
  id,
  naziv,
  vrsta,
  opis,
  cena,
  color,
  handleDelete,
}) => {
  return (
    <Card className={`blog-card blog-${color}`}>
      <CardBody>
        <CardTitle tag="h5">{naziv}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {vrsta}
        </CardSubtitle>
        <p className="card-text">{opis}</p>
        <p className="card-text">{cena} €</p>
        <Button color={color} onClick={() => handleDelete(id)}>
          Izbriši
        </Button>
      </CardBody>
    </Card>
  );
};

export default Blog;
