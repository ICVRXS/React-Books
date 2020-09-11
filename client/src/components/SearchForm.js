import React, { useRef } from 'react';
import { Card, Form, Col, Button } from 'react-bootstrap';
import googleBooksApi from "../utils/googleBooksAPI";

function SearchForm( { setResult } ) {

  const searchInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    googleBooksApi
      .searchBooks(searchInput.current.value)
      .then(result => {
        setResult( result.data.items.map( item => ({
          title: item.volumeInfo.title,
          link: item.volumeInfo.previewLink,
          description: item.volumeInfo.description,
          image: item.volumeInfo.imageLinks.thumbnail,
          authors: item.volumeInfo.authors,
          googlebookid: item.id
        })));
      })
  }

  return (
    <Card className="my-4">
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                Search
              </Form.Label>
              <Col>
                <Form.Control type="text" ref={searchInput} />
              </Col>
            </Form.Row>
            <Form.Row className="justify-content-lg-end">
              <Button variant="primary" onClick={handleSubmit}>Search</Button>
            </Form.Row>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default SearchForm;