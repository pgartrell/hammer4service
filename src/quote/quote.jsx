import Footer from '../footer/footer'
import NavBar from '../navbar/navbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import styles from './quotecss.module.css';

const Quote = () => {

  const [validated, setvalidated] = useState(false)

  const [form_data, setform_data] = useState({
    name: "",
    description: "",
    email: "",
    pictures: "",
  })

  const submitFn = (event) => {
    // identifies the element to which the event handler has been attached
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      // tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be
        event.preventDefault();
      // prevents further propagation of the current event in the capturing and bubbling phases
        event.stopPropagation();
    }
    setvalidated(true);
    // alert("Form Submitted Successfully!!")
    handleClear()
    }

    const chngFn = (event) => {
      const { name, value } = event.target;
      setform_data({
          ...form_data,
          [name]: value,
      });
    }

    const handleClear = () => (
      setform_data({
        name: "",
        description: "",
        email: "",
        pictures: "",
      })
    )


  return (
    <div id={styles.form__mainDiv}>
        <NavBar />
        <h1 className={styles.form__h1}>We want to hear from you!</h1>
        <Form
              id={styles.form}
              noValidate validated={validated} 
              onSubmit={submitFn}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control 
              type="name" 
              name="name" 
              placeholder="Enter Full Name"
              value={form_data.name}
              onChange={chngFn}
              pattern="^[a-zA-Z]+$"
              required
              isInvalid={
                  validated
              } 
              />
            <Form.Control.Feedback type="invalid">
                Value cannot be blank
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control 
            style={{height: '200px'}} 
            componentClass="textarea"
            type="description"
            name="description" 
            value={form_data.description}
            onChange={chngFn}
            required
            isInvalid={
                validated
            } 
            placeholder="Please describe your project details" 
            />
            <Form.Control.Feedback type="invalid">
                Value cannot be blank
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            name="email" 
            placeholder="Enter email" 
            value={form_data.email}
            onChange={chngFn}
            required
            isInvalid={
                validated &&
                !/^\S+@\S+\.\S+$/.test(form_data.email)
            }
            />
            <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Pictures</Form.Label>
            <Form.Control 
              type="pictures" 
              name="pictures" 
              placeholder="Upload" 
              value={form_data.pictures}
              onChange={chngFn}
              required
              isInvalid={
                  validated
              }
              />
            <Form.Text className="text-muted">
            Upload some pictures of how the project looks now
            </Form.Text>
          </Form.Group>
          {/* onClick={CollapseForm()} */}
          <button className={styles.form__button} type="submit">
            Submit
          </button>
      </Form>
        <Footer />


    </div>
  )
}

export default Quote