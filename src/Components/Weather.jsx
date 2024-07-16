import React, { useEffect, useState } from "react";
import { IoLocation } from "react-icons/io5";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Kahuta");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=f9a3a7d6882d5985af24534b748721b9`;
      const response = await fetch(url);
      const json = await response.json();
      setCity(json.main);
    };
    fetchApi();
  }, [search]);

  return (
    <div className="container">
      <input
        type="search"
        className="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {!city ? (
        <p>No data found</p>
      ) : (
        <div>
          <h2 className="child2">
            <IoLocation /> {search}
          </h2>
          <h2 className="child1">{city.temp}°C</h2>
          <p className="child3">
            {city.temp_min}°C | {city.temp_max}°C
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
