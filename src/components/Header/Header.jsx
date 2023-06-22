import React from "react";
import {Logo} from "./Logo/Logo";
import {Menu} from "./Menu/Menu";
import {Checkout} from "./Checkout/Checkout";

export const Header = ({database}) => {
    return (
        <div className="header">
            <Logo />
            <Menu />
            <Checkout checkout={database}/>
            <span><a href="#">Выход</a></span>
        </div>
    );
};