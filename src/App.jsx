

import React, {useState, useEffect} from "react";
// import Product from "./pages/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./pages/Catalog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal"

const App = () => {
    const [goods, setGoods] = useState([]);
    const [data, setData ] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('shop-user'));
    const [popupActive, popupChangeActive] = useState(false);

    useEffect(() =>{
        fetch('https://api.react-learning.ru/products',{
            
                headers: {
                    authorization: `Bearer ${token}`   
                }
            
        })
        .then(res =>res.json())
        .then(data => {
            setGoods(data.products);
            setData(data.products);
        })
    },[]);

    return <>
    <div className="wrapper">
        <Header products = {data} update = {setGoods} openPopup={popupChangeActive}/>
        <Catalog goods={goods}/>
        <Footer/>
    </div>
    <Modal isActive={popupActive} changeActive={popupChangeActive}/>
    </>

}

export default App;