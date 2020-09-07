import React from 'react';
import { Card, Form, Col, Button } from 'react-bootstrap';

function SearchForm() {
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
                <Form.Control type="text" />
              </Col>
            </Form.Row>
            <Form.Row className="justify-content-lg-end">
              <Button variant="primary">Search</Button>
            </Form.Row>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default SearchForm;
