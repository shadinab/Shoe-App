import { useState } from "react";

const ShoePage = () => {
  const [shoe, setShoe] = useState(JSON.parse(localStorage.getItem("shoe")));
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    // If you want to cancel the edit and revert to the original data,
    // you can reset the shoe state to its original value from localStorage.
    const originalShoe = JSON.parse(localStorage.getItem("shoe"));
    setShoe(originalShoe);
    setIsEditing(false);
  };

  const handleSave = () => {
    // Assuming you have an API endpoint like '/api/shoes/:id' where :id is the shoe's ID
    const apiUrl = `https://6508aeaf56db83a34d9ca202.mockapi.io/shoeList/${shoe.id}`;

    // Prepare the updated data to send to the API
    const updatedShoeData = {
      name: shoe.name,
      description: shoe.description,
      price: shoe.price,
      image: shoe.image,
    };

    // Make a PUT request to update the shoe data
    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedShoeData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update shoe data");
        }
        // Handle success here, e.g., show a success message to the user
        setIsEditing(false); // Exit edit mode after successful save
      })
      .catch((error) => {
        console.error("Error updating shoe data:", error);
        // Handle errors here, e.g., show an error message to the user
      });
  };

  const handleDelete = () => {
    // Assuming you have an API endpoint like '/api/shoes/:id' where :id is the shoe's ID
    const apiUrl = `/api/shoes/${shoe.id}`;

    // Make a DELETE request to remove the shoe data
    fetch(apiUrl, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete the shoe");
        }
        // Handle success here, e.g., redirect to a different page or show a success message
      })
      .catch((error) => {
        console.error("Error deleting the shoe:", error);
        // Handle errors here, e.g., show an error message to the user
      });
  };

  return (
    <div>
      <div>
        {isEditing ? (
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={shoe.name}
              onChange={(e) => setShoe({ ...shoe, name: e.target.value })}
            />
            <br />
            <label>Description:</label>
            <input
              type="text"
              value={shoe.description}
              onChange={(e) =>
                setShoe({ ...shoe, description: e.target.value })
              }
            />
            <br />
            <label>Price:</label>
            <input
              type="text"
              value={shoe.price}
              onChange={(e) => setShoe({ ...shoe, price: e.target.value })}
            />
            <br />
            <label>Image URL:</label>
            <input
              type="text"
              value={shoe.image}
              onChange={(e) => setShoe({ ...shoe, image: e.target.value })}
            />
            <br />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <div>
            <h2>{shoe.name}</h2>
            <p>{shoe.description}</p>
            <img src={shoe.image} alt="Shoe" />
            <p>{shoe.price}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoePage;
