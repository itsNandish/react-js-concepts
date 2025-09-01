import ProductItem from "./components/product-items";
import "./style.css";



function ProductList(props){

    const {name, city, listOfProducts} = props;

    const flag = true;

    // Create a function and use trinary operator to display html based on condition
    // function renderTextBlock(getFlag){
    //     return getFlag ? <h3>Name is {name}, he belongs to {city}</h3> : <h3>Hello Nandish, The flag is False</h3>
    // }

    let renderTextBlock = null;
    if(flag){
        renderTextBlock = <h3>Name is {name}, he belongs to {city}</h3>
    }else {
        renderTextBlock = <h3>Hello Nandish, The flag is False</h3>
    }

    return(
        <div>
            <h2 className="title">Ecommerce Project</h2>
            {/* <ProductItem/> */}

            {renderTextBlock}
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