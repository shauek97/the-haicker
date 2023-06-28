import Blog from "./components/pages/Blog/Blog";
import Home from "./components/pages/Home/Home";
import WrongAddress from "./components/pages/WrongAddress/WrongAddress";
import {API_URL} from './config';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
  });

  console.log(formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function dataPushHandler(event) {
    console.log("datapush starded");
    event.preventDefault();

    const jsonData = JSON.stringify(formData);

    fetch(`${API_URL}/blogformshit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    });
  }

  function clickHandler() {
    console.log("button clicked");
  }

  return (
    <>
      <Routes>
        <Route path="*" element={<WrongAddress />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/blog"
          element={
            <Blog
              dataPushHandler={dataPushHandler}
              formData={formData}
              clickHandler={clickHandler}
              handleChange={handleChange}
            />
          }
        />
      </Routes>
    </>
  );
}
