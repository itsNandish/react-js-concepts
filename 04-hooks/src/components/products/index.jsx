import { use, useEffect, useState } from "react";
import ProductItem from "./components/product-items";
import "./style.css";

const initialState = true;

function ProductList(props){

    const {name, city, listOfProducts} = props;

    //useState hook
    const [flag, setFlag] = useState(initialState);

    //Implementing count equal to 10 to change something
    const [count, setCount] = useState(0);

    const [changeStyle, setChangeStyle] = useState(false);

    function handleToggleText(){
        setFlag(!flag);
    }

    function handleIncreaseCount(){
        setCount(count+1);

    }

    //useEffect Hook
    useEffect(()=>{
        setFlag(!flag);
        console.log("run on page load");
    },[])//this is will only run of page load once

    useEffect(()=>{
        // console.log("count changes");
        if(count === 10){
            setChangeStyle(true);
        }
    },[count]);

    console.log(changeStyle);


    return(
        <div>
            <h2 className="title">Ecommerce Project</h2>
            <button onClick={handleToggleText}>Toggle Text</button>
            {/* <ProductItem/> */}
            
            {
                flag ? <h3>Name is {name}, he belongs to {city}</h3> :
                <h3>Hello Nandish, The flag is False</h3>
            }

            <div>
                <button style={{backgroundColor : changeStyle ? 'green' : 'Red', color : changeStyle ? 'white' : 'black'}} onClick={handleIncreaseCount}>Increase Count</button>
                <p>Count is {count}</p>
            </div>
            {/* {renderTextBlock} */}
            <ol>
                {
                    listOfProducts.map((item, index) => (
                    <ProductItem singleProductItem = {item} key ={index}/>
                ))}
            </ol>
        </div>
    );
}

export default ProductList;