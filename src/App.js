import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import { Testing } from "./components/Testing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </div>
  );
}

export default App;
