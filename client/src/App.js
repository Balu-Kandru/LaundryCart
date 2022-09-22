import { BrowserRouter,Routes,Route } from "react-router-dom";
import Createorder from "./components/createorder/createorder";
import Signin from "./components/signin/signin";
import Register from "./components/register/register";
import Pastorders from "./components/pastorder/pastorders";
import { Protected,Isuserloggedin } from "./utility/utility";

const App = ()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Isuserloggedin><Signin/></Isuserloggedin>}></Route>
      <Route path="/register" element={<Isuserloggedin><Register/></Isuserloggedin>}></Route>
      <Route path="/order" element={<Protected><Createorder/></Protected>} ></Route>
      <Route path="/order/history" element={<Protected><Pastorders/></Protected>} ></Route>
    </Routes>
    </BrowserRouter>
    )
}
export default App;