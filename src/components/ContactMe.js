import { useState } from 'react';
import axios from 'axios';

function ContactMe() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);

  function onSubmitContact(evt) {
    evt.preventDefault();
    setPending(true);

    const emailData = {
      name,
      message,
      email,
    };
    console.log(process.env.REACT_APP_API_URL);
    axios(`${process.env.REACT_APP_API_URL}/send`, {
      method: 'post',
      data: { emailData },
    })
      .then((res) => {
        console.log(res);
        setPending(false);
        setEmail('');
        setName('');
        setMessage('');
        setOutput('Email sent successfully. Thank you!');
      })
      .catch((err) => {
        console.log(err);
        setPending(false);
        setError('Error sending email');
      });
  }

  function onInputChange(evt, setValue) {
    setValue(evt.currentTarget.value);
  }

  return (
    <div id="contact-me" className="">
      <div className="p-3">
        <h2 class="mb-3 text-dark">Contact Me</h2>
        <div>
          <div class="email-form">
            <form id="contact-form" method="" action="/">
              <div class="form-section mb-3">
                <label for="name" class="form-label">
                  Full Name
                </label>
                <input
                  value={name}
                  id="name-input"
                  name="name"
                  type="text"
                  class="form-control"
                  autocomplete="name"
                  onChange={(evt) => onInputChange(evt, setName)}
                />
              </div>
              <div class="form-section mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  value={email}
                  id="email-input"
                  name="email"
                  type="text"
                  class="form-control"
                  autocomplete="email"
                  onChange={(evt) => onInputChange(evt, setEmail)}
                />
              </div>
              <div class="form-section mb-3">
                <label id="message" for="message" class="form-label">
                  Message
                </label>
                <textarea
                  value={message}
                  id="message-input"
                  name="message"
                  type="text"
                  rows="4"
                  class="form-control"
                  onChange={(evt) => onInputChange(evt, setMessage)}
                ></textarea>
              </div>
              <div class="mb-3">
                <button
                  id="contact-me-btn"
                  type="submit"
                  class="btn btn-primary me-3"
                  onClick={(evt) => onSubmitContact(evt)}
                >
                  Submit
                </button>
                {pending && (
                  <div id="email-spinner" class="d-flex justify-content-center">
                    <div class="me-3">Sending...</div>
                    <div class="spinner-border text-primary" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="text-success" id="contact-success">
                {output}
              </div>
              <div className="text-danger" id="contact-error">
                {error}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
