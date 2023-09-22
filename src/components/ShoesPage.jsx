import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import AddShoePage from "./AddShoePage";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This code will run when the component mounts
    axios
      .get("https://6508aeaf56db83a34d9ca202.mockapi.io/shoeList") // Replace with your API endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty array [] means this effect runs only once, like componentDidMount

  return (
    <div>
      <AddShoePage />
      <div className="cat-list">
        {data.map((dat) => (
          <div className="cat-item" key={dat.id}>
            <img src={dat.image} alt={dat.name} />
            <h3>{dat.name}</h3>
            <p>Price: ${dat.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyComponent;
