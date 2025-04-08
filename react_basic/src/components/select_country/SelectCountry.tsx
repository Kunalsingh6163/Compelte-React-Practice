import { useState } from "react";

const countries = [
  { name: "india", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pakistan", value: "PAK", cities: ["Lahore", "Islamabad"] },
  { name: "ShriLanka", value: "SLN", cities: ["Columbia", "Lanka"] },
];
export default function SelectCountry() {
  //state to store the value of Country
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  // Find the selected country object
  const selectedCountry = countries.find((c) => c.value === country);

  return (
    <div className="SelectCountry">
      <h2>Country with cities. </h2>
      <div>
        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setCity(""); // reset city when country changes
          }}
        >
          {countries.map((item, index) => {
            return (
              <>
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              </>
            );
          })}
        </select>
      </div>
      {selectedCountry && (
        <div>
          {/*show the cities */}
          <select
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            {selectedCountry.cities.map((cityname, index) => {
              return (
                <option key={index} value={cityname}>
                  {cityname}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
}
