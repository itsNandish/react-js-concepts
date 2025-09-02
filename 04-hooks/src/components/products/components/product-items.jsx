
import styles from './ProductItem.module.css';

function ButtonComponent(){
    return (
        <button className={
          styles.buttonStyle}>Click</button>
    )
}

function ProductItem(props){
    const {singleProductItem, key} = props;
    return (
      <div style={{border: "2px solid white"}} key={key}>
        <p>{singleProductItem}</p>
        <ButtonComponent/>
      </div>
    );
}

export default ProductItem;