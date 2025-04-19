import { FaStar } from "react-icons/fa6";
import { useState } from "react";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return (
    <>
      <FaStar color={selected ? "#03b016" : "#686868"} size={35} onClick={onSelect} />
    </>
  );
}

function StartRating({ totalStars = 5 }) {
  const [selectedStar, setSelectedStar] = useState(0);

  const handleStar = (e) => {
    e.preventDefault();
    alert(`Rating is ${selectedStar} out of ${totalStars} `);
  };

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStar > i}
          onSelect={() => setSelectedStar(i + 1)}
        />
      ))}
      <button onClick={handleStar}>submit</button>
      <p>
        {selectedStar} of {totalStars}
      </p>
    </>
  );
}

export default StartRating;
