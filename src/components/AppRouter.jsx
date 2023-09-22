import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import MyComponent from "./ShoesPage";
import RegistrationForm from "./Homepage";
import ShoePage from "./ShoePage";
import NotFound from "./NotFound";
import AddShoePage from "./AddShoePage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {" "}
        <Route path="/" element={<RegistrationForm />} />{" "}
        {/* Use 'element' prop */}
        <Route path="/shoes/:shoeId" element={<ShoePage />} />{" "}
        <Route path="/shoes/add" element={<AddShoePage />} />{" "}
        <Route path="/shoes" element={<MyComponent />} />{" "}
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>
    </Router>
  );
};

export default AppRouter;
