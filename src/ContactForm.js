import React from "react";
import "./ContactForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    disabled: false,
    emailSent: null,
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value; // if type of target is checkbox, value is checked, else value is value.
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // prevents page refresh when submit button pressed.
    this.setState({
      disabled: true,
    });
  };

  render() {
    return (
      <div>
        <h1>CONTACT ME!!!</h1>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message">Full Name</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="3"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              className="d-inline-block"
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>

            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Send</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">Email Not Send</p>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
