import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./AppData.css";

function AppData() {
  const [name, setName] = useState([]);
  let navigate = useNavigate();

  const url = "https://mobile-app-challenge.herokuapp.com/data";
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      return await axios.get(url).then((res) => {
        const results = res.data;
        console.log(results);
        setName(results);
      });
    } catch (error) {
      return console.log(error);
    }
  };

  const openNext = () => {
    navigate("/next-page");
  };

  return (
    <div className="appData">
      <div className="appData_name" onClick={openNext}>
        {name.map((item) => (
          <li key={item.id}>
            <span className="appData_text"> {item.name}</span>

            <div className="appData_tag">{item.tag}</div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default AppData;
