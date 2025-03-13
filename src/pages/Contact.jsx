import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (validate()) alert("Form submitted!");
      }}
      className="space-y-4"
    >
      {"Name: "} <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
      <br></br>
      <br></br>
      {"Email Id:"}<input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <br></br>
      <br></br>
      {"Type your message here"}<textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Send</button>
      {Object.values(errors).map((error, index) => <p key={index} className="text-red-500">{error}</p>)}
    </form>
  );
}

export default Contact;
