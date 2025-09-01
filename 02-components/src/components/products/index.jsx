import ProductItem from "./components/product-items";




function ProductList(props){
    console.log(props);

    const {name, city, listOfProducts} = props;
    return(
        <div>
            <h2>Ecommerce Project</h2>
            {/* <ProductItem/> */}
            <h3>Name is {name}, he belongs to {city}</h3>
            <ol>
                {
                    listOfProducts.map((item, index) => (
                    <ProductItem singleProductItem = {item} key ={index}/>
                ))}
            </ol>
        </div>
    )
}

export default ProductList;