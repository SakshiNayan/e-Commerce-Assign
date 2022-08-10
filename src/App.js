import {Route,Routes,BrowserRouter} from "react-router-dom";
import Header from "./Components/header";
import Testapi from "./Components/testapi";
import TopRated from "./Components/topRated";


function App() {
  
  return (
   <BrowserRouter>
   <Header/>
      <Routes>
        <Route path="/test" element={<Testapi/>}></Route>
        <Route path="/rated" element={<TopRated/>}></Route>
        {/* <Route path="/sold" element={<TopRated/>}></Route> */}
      </Routes>
   </BrowserRouter>
  );
}

export default App;
