import {Route,Routes,BrowserRouter} from "react-router-dom";
// import Header from "./Components/header";
import Testapi from "./Components/testapi";
import TopRated from "./Components/topRated";
import TopSold from "./Components/topSold";
import Bag from "./popups/bag";

function App() {
  
  return (
   <BrowserRouter>
   {/* <Header/> */}
      <Routes>
        {/* <Route path="/test" element={<Testapi/>}></Route> */}
        <Route path="/" element={<TopRated/>}></Route>
        {/* <Route path="/sold" element={<TopSold/>}></Route> */}
        {/* <Route path="/bag" element={<Bag/>}></Route> */}
      </Routes>
   </BrowserRouter>
  );
}

export default App;
