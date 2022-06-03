import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form }  from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container>
        <Form className='mb-4'>
          <Row>
            <Col md>
              <Form.Group controlId='formEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='example@gmail.com' />
                <Form.Text className='text-muted'>
                  We'll never share your email, trust us
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId='formPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='password' />
              </Form.Group>
            </Col>
          </Row>
          <Button variant='secondary' type='submit'>Login</Button>
        </Form>

        <Card className='mb-3' style={{color: "#000"}}>
          <Card.Img src='https://picsum.photos/200/70'/>
          <Card.Body>
            <Card.Title>
              Card Examples
            </Card.Title>
            <Card.Text>
              This is an examples of react bootstrap cards
            </Card.Text>
            <Button variant='primary'>Test Button</Button>
          </Card.Body>
        </Card>

        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test 2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>

        <Alert variant='secondary'>This is a button</Alert>
        <Button>Text Button</Button>
        
      </Container>
      </header>
    </div>
  );
}

export default App;
