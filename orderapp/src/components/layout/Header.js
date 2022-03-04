import React,{Fragment} from "react";
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css'
const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className="main-image">
                <img src={mealsImage} alt="A table full of delicious food"/>
            </div>


        </Fragment>
    )

}

export default Header;
