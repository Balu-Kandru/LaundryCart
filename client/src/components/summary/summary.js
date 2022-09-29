import Modal from "../modals/modal";
import React, { useState } from 'react';
import "./summary.css";
import { getToken } from "../../utility/utility";
import axios from "axios";


const Summary =({closesummary,orders})=>{
    const[viewalert,setviewalert] = useState(false);
    
    // useEffect
    // fetch
    const cancelOrderfunc=(id)=>{
        let token=getToken()
        let header={Authorization:token}
        
        axios.delete(`https://laundry-cart-server.herokuapp.com/order/cancel/${id}`,{headers:header})
        .then(function (response) {
            if(response.status===200){           
                window.location.reload();
            
            }
        })
    }
if(viewalert){

    return <Modal setOpenModal ={setviewalert} cancelOrderfunc={cancelOrderfunc} cancelid={orders._id}/>
}

return(
    <>
    <div id='for-black'></div>
    <div className="sumcontainer" >
        
            <div className="header">
                <h2 className="header-h2">Summary</h2>
                <h2 className="header-h" onClick={() => closesummary(false)} >X</h2>
            </div>
            <div className="topaddress">
            <ul type="none">
                <li className="Title">Store Address</li>
                <li className="tval">Jp Nagar</li>
            </ul>
            <ul type="none">
                <li className="Title">Store Address:</li>
                <li className="tval">Near Phone booth, 10th road,</li>
            </ul>
            <ul type="none" className="three">
                <li className="Title">Phone</li>
                <li className="tval">91-989898989</li>
            </ul>
            </div>
            <div className="track">
                    <ul type="none" className="track_v">
                        <li className="t_dis"><input type="radio"/>Pickedup<span className="line">------------------</span></li>
                        <li className="t_dis"><input type="radio"/>Washed<span className="line">-------------------</span></li>
                        <li className="t_dis"><input type="radio"/>Ironed<span className="line">-------------------</span></li>
                        <li className="t_dis"><input type="radio"/>Delivered</li>
                    </ul>
                </div>
            <div className="ordersummary">
            {orders.producttype.map((obj,i)=>{
                return (
                <div className="order-details" key={i}>     
                    <span className="item-type1">{obj.name}</span>
                    <span className="item-method1">{obj.washType} </span>
                    <span className="item-eq1">{obj.multiple}=</span>
                    <span className="item-price1">{obj.price}</span>
                </div>
                )
            })}

        <span className="sec-sub1" >Sub Total:</span>
        <span className="sec-val1">{orders.subtotal}</span>
        <span className="pickup1" >Pickup-Charges:</span>
        <span className="pick-val1">90</span>
        
        <section className="total-bar1">
            <span className="name-total1">Total:</span>
            <div className="total-val1">Rs {orders.subtotal+90}</div>
        </section>
            </div>
           
            <div className="downaddress">
                <p> Address</p>
                <div className="home">
                    <p className="home1"><strong>Home</strong></p>
                    <p>#223, 10th road, Jp Nagar, Bangalore</p>
                </div>
                <div className="btn-bar1" >
                     <button className="btn-confirm1" onClick={()=> setviewalert(true)}>Cancel order</button>
                </div>
            </div>
           
        
    </div>
    </>
)
}

export default Summary;
