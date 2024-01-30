import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Blog from "../../components/dashboard/Blog";

const Paketi = () => {
  const [paketiData, setPaketiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/paketi")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data from backend:", data);
        setPaketiData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching paketi data:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/paketi/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPaketiData((prevData) => prevData.filter((paket) => paket.id !== id));
        console.log(`Paket with ID ${id} deleted successfully`);
      } else {
        console.error(`Error deleting Paket with ID ${id}`);
      }
    } catch (error) {
      console.error("Error deleting Paket:", error);
    }
  };

  return (
    <div>
      <h5 className="mb-3">Paketi</h5>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row>
          {paketiData.map((paket, index) => (
            <Col sm="6" lg="6" xl="3" key={index}>
              <Blog
                id={paket.id}
                naziv={paket.naziv}
                vrsta={paket.vrsta}
                opis={paket.opis}
                cena={paket.cena}
                color={paket.btnbg}
                handleDelete={() => handleDelete(paket.id)}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Paketi;
