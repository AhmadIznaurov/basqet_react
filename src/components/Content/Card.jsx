import  React from 'react';
import {Button} from "./Button";


export const Card = ({product, setBought}) => {

    return (
      <div className="card">
          <div className="card-image">
              <img src={product.image} alt=""/>
          </div>
          <div className="card-info">
              <div className="card-name">{product.name}</div>
              <div className="card-price">{product.price} ₽</div>
              <Button id={product.id} setBought={setBought} bought={product.bought}/>
          </div>
       </div>

    );
};