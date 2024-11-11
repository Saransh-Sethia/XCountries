import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const API_URL = "https://xcountries-backend.azurewebsites.net/all";
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      const result = await response.data;
      setCountries(result);
    } catch (error) {
      console.log("error",error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid-container">
      {countries.map((country) => (
        <div className="grid-item">
          <img src={country.flag} alt={country.name} />
          <h3>{country.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
