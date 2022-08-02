import { BrowserRouter,Routes,Route } from "react-router-dom";
import Createorder from "./components/createorder/createorder";
import Signin from "./components/signin/signin";
import Register from "./components/register/register";
import Pastorders from "./components/pastorder/pastorders";
import OrderSucess from "./components/createorder/alert"
import { Protected } from "./utility/utility";

const App = ()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/order" element={<Protected><Createorder/></Protected>} ></Route>
      <Route path="/order/history" element={<Protected><Pastorders/></Protected>} ></Route>


      <Route path="/order/popup" element={<OrderSucess/>}></Route>
    </Routes>
    </BrowserRouter>
    )
}
export default App;