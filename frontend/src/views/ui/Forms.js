import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Forms = () => {
  const [formData, setFormData] = useState({
    naziv: "",
    vrsta: "",
    opis: "",
    cena: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch("http://localhost:8080/paketi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Paket successfully added:", data);
        setFormData({
          naziv: "",
          vrsta: "",
          opis: "",
          cena: 0,
        });
      })
      .catch((error) => {
        console.error("Error adding paket:", error);
      });
  };
  

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Dodaj nov paket
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="naziv">Naziv</Label>
                <Input
                  id="naziv"
                  name="naziv"
                  type="text"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="vrsta">Vrsta paketa</Label>
                <Input
                  id="vrsta"
                  name="vrsta"
                  type="select"
                  onChange={handleInputChange}
                >
                  <option>TROJCEK</option>
                  <option>DVOJCEK</option>
                  <option>NAROCNISKI_MOBILNI</option>
                  <option>PREDPLACNISKI_MOBILNI</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="opis">Opis</Label>
                <Input
                  id="opis"
                  name="opis"
                  type="text"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="cena">Cena</Label>
                <Input
                  id="cena"
                  name="cena"
                  type="number"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <Button type="submit">Potrdi</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
