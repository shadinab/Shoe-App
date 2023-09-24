import { useNavigate } from "react-router-dom"; // Import useNavigate

const NotFound = () => {
    const navigate = useNavigate();
    const handleReturn = () => {
    navigate("/");
    }
  return (
    <div>
      <h1>Page not found</h1>
      <button onClick={handleReturn}>
      click me please
    </button>
    </div>
  );
};

export default NotFound;
