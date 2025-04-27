import React, { useEffect, useState } from "react";

function DataFetch() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h2>Fetching the Data with useEffect</h2>
      <ol>
        {data.map((user) => (
          <>
            <li key={user.id}>{user.login}</li>
            <button>User Details</button>
            {/* <li>{user.login}</li> */}
          </>
        ))}
      </ol>
      <div>
        <button onClick={() => setData([])}>Clear Data</button>
      </div>
    </div>
  );
}

export default DataFetch;
