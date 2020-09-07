import React from 'react';
import { Row, Col, Card, Button } from "react-bootstrap"

export const Result = ({book}) => {
    return (
        <Card>
        <Card.Body>
            <Row>
            <Col>
                <Card.Title>{book.title}</Card.Title>
                <p><strong>Authors:</strong> {book.authors.join(", ")}</p>
            </Col>
            <Col className="text-right">
                <Button>View</Button>
                <Button href={book.link} className="ml-2">Save</Button>
            </Col>
            </Row>
            <hr />
            <Row>
            <Col md="4">
                <img src={book.image} alt="" />
            </Col>
            <Col>
                <Card.Text>{book.description}</Card.Text>
            </Col>
            </Row>
        </Card.Body>
        </Card>
    );
}


function Results(){

    const data = [{
      authors: ["Suzanne Collins", "Author 2"],
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
      title: "The Hunger Games",
      id: 1
    }];

    return (
      <Card>
        <Card.Body>
          <Card.Title>
              Results
          </Card.Title>
           {data.map(item => <Result book={item}/>)}
        </Card.Body>
      </Card>
    );
}

export default Results