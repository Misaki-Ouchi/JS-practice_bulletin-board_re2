import { useState, useEffect } from "react";
import axios from "axios";

const Titles = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/api/get/Titles";
    axios
      .get(url)
      .then((res) => setTitles(res.data))
      .catch((error) => console.log(error));
  }, [setTitles]);

  return titles
};

export default Titles
