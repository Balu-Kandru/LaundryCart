import "./style.css";
//import { Link } from "react-router-dom";
import img from "../assests/tick.png"
import { useNavigate } from "react-router-dom"


const OrderSucess = () => {
  const navigate=useNavigate()
  return (
    <>
    <div id="for-black"></div>
    <div className="success-page">
      <img className="success-img" src={img} alt=""/>
      <div className="success-status">Your order is successfully.</div>
      <div className="success-details">You can track the delivery in the "Orders" section.</div>
      <button onClick={()=>navigate('/order/history')} className='success-btn' >Go To Orders</button>
    </div>
    </>
  );
};

export default OrderSucess;
