import './pastorders.css'
import Header from "../common/header"
import NavBar from "../common/navbar"
import Footer from "../common/footer"
import Search from "../common/search"
import { getToken } from '../../utility/utility'

import { useNavigate } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import eyeIcon from "../assests/eyeicon.svg"
import axios from "axios";
import Modal from "../modals/modal";
import Summary from '../summary/summary'

const Pastorders =()=>{
        const [orders,setorders]=useState([])
        const navigate = useNavigate();
        const [modalOpen, setModalOpen] = useState(false);
        const [summ,setsumm] = useState(false);
        const [price,setprice] =useState(null);
        const [cancelid,setcancelid] = useState("");
        const gotocreateorder = ()=>{
            navigate("/order");
        }
        const cancelOrderfunc=(id)=>{
            let token=getToken()
            let header={Authorization:token}
            
            axios.delete(`http://localhost:3001/order/cancel/${id}`,{headers:header})
            .then(function (response) {
                console.log(response)
                window.location.reload();
                if(response.status===200){           
                    console.log(response.data)
                    window.location.reload();
                
                }
            })
        }
        useEffect(()=>{
        let token=getToken()
        
        let header={Authorization:token}
        
        axios.get('http://localhost:3001/order/history',{headers:header})
        .then(function (response) {
            

            setorders(response.data)
           console.log(response.data)
            }).catch((err)=> {
                console.log(err)
            })
        
        
        },[]);
        return( 
 
        <>
        
        <Header/>
        <NavBar/>
        <Search/>
        
        <div><h2 className='topdiv' >Orders | 0</h2></div>
        <button className="goto" onClick={gotocreateorder}>Create</button>
        <div className='page-titlebar'>
            <span className='orderid'>Order Id</span>
            <span className='orderdatetime'>Order Date & Time</span>
            <span className='StoreLocation' >Store Location</span>
            <span className='City'>City</span>
            <span className='StorePhone'>Store Phone</span>
            <span className='TotalItems'>Total Items</span>
            <span className='Price'>Price</span>
            <span className='Status'>Status</span>
            <span className='canc'>   </span>
            <span className='view'>view</span>
            
        </div>
        
                {orders.map((order,key)=>(
                    <div className='page-titlebar2 ' key={key}>
                    <span className='orderid2'>{order.orderid}</span>
                    <span className='orderdatetime2'>{order.datetime}</span>
                    <span className='StoreLocation2' >Jp Nagar</span>
                    <span className='City2'>Chennai</span>
                    <span className='StorePhone2'>+91 9768647989</span>
                    <span className='TotalItems2'>10</span>
                    <span className='Price2'>{order.subtotal+90}Rs</span>
                    <span className='Status2'>Redy to pickup</span>
                    <button
                className="openModalBtn"
                onClick={() => { 
                  setcancelid(order._id)
                  console.log(order)
                  setModalOpen(true);
                }}>Cancel order</button>
                    <img src={eyeIcon} className='view2' alt="err" onClick={() => {
                    setprice(order)
                  setsumm(true);
                }}></img>
        
                </div>
                 ))} 
                 {modalOpen && <Modal setOpenModal={setModalOpen} cancelid={cancelid} cancelOrderfunc={cancelOrderfunc} />}{summ && <Summary orders={price}closesummary={setsumm} />}
                 

        <Footer/>
      
            
        
        </>
        )
        
    };
export default Pastorders

