import { BrowserRouter } from "react-router-dom";
import Layouts from "./layout/Layouts";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
       <Layouts />
      </BrowserRouter>

    </div>
  );
}

export default App;
