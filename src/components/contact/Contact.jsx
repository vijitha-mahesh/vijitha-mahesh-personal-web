import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMesage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMesage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>.Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thank you I'll reaply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
