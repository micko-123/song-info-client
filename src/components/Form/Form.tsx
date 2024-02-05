import React, { useState } from "react";
import "./form.css"; // Import CSS file for styling

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    album: "",
    artist: "",
    genre: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="title"
        className="input"
      />
      <input
        type="text"
        name="album"
        value={formData.album}
        onChange={handleChange}
        placeholder="album"
        className="input"
      />
      <input
        type="text"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
        placeholder="artist"
        className="input"
      />
      <input
        type="text"
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        placeholder="genre"
        className="input"
      />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};

export default Form;
