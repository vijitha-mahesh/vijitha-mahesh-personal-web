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
        <form action="https://formsubmit.co/vijithamaheshp@gmail.com" method="POST">
        <input type="text" name="Name" class="form-control" placeholder="Your Name" required/>
          <input type="text" name="Email" placeholder="Your Email" required="true"/>
          <textarea name="Message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thank you I'll reaply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
