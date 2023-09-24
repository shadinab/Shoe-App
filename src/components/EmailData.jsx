import { useState, useEffect } from "react";

const EmailData = () => {
  // Define the API endpoint URL (replace with your actual URL)
  const apiUrl = "https://6508aeaf56db83a34d9ca202.mockapi.io/emaildata";

  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data from the API");
        }
        return response.json();
      })
      .then((responseData) => {
        // Sort the responseData by ID in descending order
        responseData.sort((a, b) => parseInt(b.id) - parseInt(a.id));

        // Get the user data with the latest ID (first element)
        const latestUser = responseData[0];

        setUserData(latestUser);
      })
      .catch((error) => {
        setError(error);
      });
  }, [apiUrl]); // No need for loggedInUsername as a dependency

  return (
    <div>
      <h2>User Information</h2>
      {userData ? (
        <div>
          <p>Username: {userData.formData.username}</p>
          {/* Display other user data here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default EmailData;
