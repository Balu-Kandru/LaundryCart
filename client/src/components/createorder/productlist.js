import "./productlist.css"
import shirt from "../assests/images.jpeg"
import tshirt from "../assests/tshirt.jpeg"
import trouser from "../assests/trouser.jpg"
import jeans from "../assests/jeans.jpg"
import boxers from "../assests/boxers.jpg"
import joggers from "../assests/joggers.jpeg"
import others from "../assests/others.jpg"
import {useState} from "react"
import Items from "./items"
import Alert from "./alert"
import Summary from "./summary"
import { useNavigate } from "react-router-dom"

let arr=[shirt,tshirt,trouser,jeans,boxers,joggers,others]
const productList={
                type:[
                    {
                        "name":"Shirts",
                        "description":"Lorem Ipsum is simply dummy text",
                        "image":arr[0],
                    },
                    {
                        "name":"TShirts",
                        "description":"Lorem Ipsum is simply dummy text",
                        "image":arr[1],
                    },{
                        "name":"Trousers",
                        "description":"Lorem Ipsum is simply dummy text",
                        "image":arr[2],
                    },{
                        "name":"Jeans",
                        "description":"Lorem Ipsum is simply dummy text",
                        "image":arr[3],
                    },{
                        "name":"Boxers",
                        "description":"Lorem Ipsum is simply dummy text",
                        "image":arr[4],
                    },{
                        "name":"Joggers",
                        "description":"Lorem Ipsum is simply dummy text",
                        "image":arr[5],
                    },{
                        "name":"Others",
                        "description":"Lorem Ipsum is simply dummy text",
                        "image":arr[6],
                    },
                ]
}           



const Productlist=()=>{
    const navigate =useNavigate()
    const [summpage, setsummpage]=useState(false)//summary
    const [state,setState]=useState([])
    const [confirm,setconfirm]=useState(false)//alert
    const subtotal=state.reduce((v,obj)=>v +obj.price,0)

    const handlecancel=()=>{
        navigate('/order/history')

    }
    const handlesummary=()=>{
        if (!state.length){
            return window.alert('Please select items to continue');
        } 
        setsummpage(true)
    }

    return (
        <>
            {confirm && <Alert/>}
            {
                productList.type.map((content,i)=>{
                    
                    return(
                        <Items content={content} mykey={i} state={state} setState={setState} />
                    )

                })
            }
            <div>
                <button className='btn-cancel'onClick={handlecancel} >Cancel</button>
                <button className='btn-proceed' onClick={handlesummary} >Proceed</button>
            </div>
            <Summary trigger={summpage} setTrigger={setsummpage} state={state} subtotal={subtotal} setconfirm={setconfirm}  />
        </>
    )
}
export default Productlist