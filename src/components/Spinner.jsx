import "./index.css";
import PropTypes from "prop-types"; // Import PropTypes

const Spinner = ({ loading }) => {
  // Use the `loading` prop to control the visibility of the spinner
  return loading ? (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  ) : null;
};

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired, // Require `loading` to be a boolean
};
export default Spinner;
