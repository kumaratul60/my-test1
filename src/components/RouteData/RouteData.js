import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RouteData.css";

function RouteData() {
  const [name, setName] = useState([]);

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

  return (
    <div className="routeData">
      <div className="routeData_name">
        {name.map((item) => (
          <li key={item.id}>
            <span className="routeData_text"> {item.name}</span>
            <div className="routeData_text1">{item.criteria[0].text}</div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default RouteData;
