import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//styles
import styles from "./ProductsDetails.module.css";

const ProductsDetails = (props) => {
  const { id } = useParams();


  const data = useSelector((state) => state.productsState.products);
  const product = data[id - 1];
  const {image , title , description , price , category} = product

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="product" />  
          <div className={styles.textContainer} >
              <h3>{title}</h3>
              <p className={styles.description} >{description}</p>
              <p className={styles.category} ><span>Category:</span>{category}</p>
              <div className={styles.buttonContainer} >
                  <span className={styles.price}>{price}$</span>
      <Link to="/product">Back to shop</Link>
      </div>
          </div>
    </div>
  );
};

export default ProductsDetails;
