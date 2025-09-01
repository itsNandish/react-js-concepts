


function ButtonComponent(){
    return (
        <button>Click</button>
    )
}

function ProductItem(props){
    const {singleProductItem, key} = props;
    console.log(singleProductItem);
    return (
      <div key={key}>
        <p>{singleProductItem}</p>
        <ButtonComponent/>
      </div>
    );
}

export default ProductItem;