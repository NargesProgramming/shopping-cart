import React from "react";
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//icons
import shopIcons from "../../assets/icons/shop.svg";

const Navbar = () => {

    const state = useSelector(state => state.cartState)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products" >Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/Cart" ><img src={shopIcons} alt="shop" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;