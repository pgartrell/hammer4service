import Footer from '../footer/footer'
import NavBar from '../navbar/navbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './quotecss.css'

const Quote = () => {
  return (
    <div>
        <NavBar />
        <h1 className='form--h1'>We want to hear from you!</h1>
        <Form className='form'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control 
            style={{height: '200px'}} 
            componentClass="textarea"
            type="description" 
            placeholder="Please describe your project details" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Pictures</Form.Label>
            <Form.Control type="pictures" placeholder="Upload" />
            <Form.Text className="text-muted">
            Upload some pictures of how the project looks now
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
        <Footer />


    </div>
  )
}

export default Quote