import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import "./index.css";


const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [validated, setValidated] = useState(false); // New state for validation status

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const usernameRegex = /^[a-zA-Z0-9_]+@[^.]+\.com$/; // Replace with your desired username regex
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Replace with your desired password regex

    const usernameIsValid = usernameRegex.test(formData.username);
    const passwordIsValid = passwordRegex.test(formData.password);

    setErrors({
      username: usernameIsValid
        ? ""
        : "Username must be 3-16 characters and contain only letters, numbers, or underscores.",
      password: passwordIsValid
        ? ""
        : "Password must be at least 8 characters long and include at least one letter and one number.",
    });

    const formIsValid = usernameIsValid && passwordIsValid;

    if (formIsValid) {
      setValidated(true); // Set the validation status to true
      navigate("/shoes"); // Redirect to the /shoes route on successful registration
    }

    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  return (
    <div className="signIn">
      <h2>Registration Form</h2>
      {!validated ? ( // Conditional rendering based on validation status
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <p className="error ">{errors.username}</p>
          </div>
          <div className="input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <p className="error">{errors.password}</p>
          </div>
          <div className="button">
            <button type="submit">Register</button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default RegistrationForm;
