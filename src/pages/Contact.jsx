import { useState } from "react";
import { supabase } from "../supabase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("contacts")
      .insert([
        {
          name,
          email,
          message,
        },
      ]);

    if (error) {
      alert("Failed to send message");
      console.error(error);
    } else {
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="5"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>

      <hr />

      <p>Email: mssmart6@gmail.com</p>

      <p>
        GitHub:
        <a
          href="https://github.com/ManjotSingh06"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          ManjotSingh06
        </a>
      </p>
    </div>
  );
};

export default Contact;