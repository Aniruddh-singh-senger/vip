import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Vip from './Vip'

function App() {
  return (
    <>
     <BrowserRouter basename="/vip">
     <Vip />
     </BrowserRouter>
    </>
  );
}

export default App;
