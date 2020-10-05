import React from "react";
import "./ContactForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
`;

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
      <div id="ContactFormPage">
        <h2 className="contact-form-title">CONTACT ME</h2>
        <div className="contact-form-div">
          <Grid>
            <Form onSubmit={this.handleSubmit}>
              <div className="name-email-div">
                <Row>
                  <Col size={1}>
                    <Form.Group className="name-email">
                      <Form.Label htmlFor="full-name">Full Name</Form.Label>
                      <Form.Control
                        id="full-name"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col size={1}>
                    <Form.Group className="name-email">
                      <Form.Label htmlFor="email">Email</Form.Label>
                      <Form.Control
                        id="email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </div>
              <Form.Group className="message-form">
                <div className="message-label-txt">
                  <Form.Label htmlFor="message">Your Message</Form.Label>
                  <Form.Control
                    id="message"
                    name="message"
                    as="textarea"
                    rows="3"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </div>
              </Form.Group>
              <Button
                className="submit-btn"
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
          </Grid>
        </div>
        <p className="rights-txt">©2020 Cankat Örüm. All rights reserved.</p>
      </div>
    );
  }
}

export default ContactForm;
