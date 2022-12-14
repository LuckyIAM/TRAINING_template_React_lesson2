import React, {useState} from "react";
import "./style.css";
import Logo from "../Logo"
import {ReactComponent as FavIcon} from "./img/ic-favorites.svg";
import {ReactComponent as CartIcon} from "./img/ic-cart.svg";
import {ReactComponent as ProfIcon} from "./img/ic-profile.svg";

export default ({products, update, openPopup}) => {
    const [text, changeText] = useState('Рога');
    const [cnt, setCnt] = useState(0);
    const handler = e =>{
        changeText(e.target.value)
        const result = products.filter(el => el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1);
        setCnt(result.length)
        if(!text){
            update(products)
        }else{
            update(result)
        }
    }
    return <> 
        <header>
            <Logo/>
            <input type="search" value={text} onChange = {handler}/>
            <nav>
                <a href=""><FavIcon/></a>
                <a href=""><CartIcon/></a>
                <a href="" onClick = {e =>{e.preventDefault(); openPopup(true)}}><ProfIcon/></a>
            </nav>
        </header>
        <div>
            {text ? `По запросу  ${text} найдено ${cnt} позиций` : "Пойск..."}
        </div>
    </>
}