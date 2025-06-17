import React, { useRef, useState } from "react";
import "../Component/Contacts.css";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef()

  const validate = (email) => {
    const regex = /^[^@]+@[^@]+\.[^@]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      emailjs.sendForm('service_cli4c8k',"template_cmlk9fc", "form", {
        publicKey: "2wiLQzKa6T7OvVkwU"
      })
    } catch (error) {
      
    }
  }

  return (
    <div id="contact" className="h-screen flex justify-center items-center w-screen" >
      <div className="form-card1">
        <div className="form-card2">
          <form className="form" onSubmit={handleSubmit}>
            <p className="form-heading">Get In Touch</p>

            <div className="form-field">
              <input
                placeholder="Name"
                className="input-field"
                value={name}
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-field">
              <input
                required=""
                placeholder="Email"
                className="input-field"
                value={email}
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-field">
              <input
                required=""
                placeholder="Subject"
                className="input-field"
                value={subject}
                type="text"
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="form-field">
              <textarea
                required=""
                placeholder="Message"
                cols="30"
                rows="3"
                className="input-field"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button className="sendMessage-btn" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
