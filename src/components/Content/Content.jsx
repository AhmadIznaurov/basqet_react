import * as React from "react";
import {Card} from "./Card";


export const Content = ({database, setBought}) => {

    return (
        <div className="content">
            {
                database.map((product) => <Card product={product} setBought={setBought}/> )
            }
        </div>
    );
};