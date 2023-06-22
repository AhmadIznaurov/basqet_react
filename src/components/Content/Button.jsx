import React from 'react';

export const Button = ( { id, setBought, bought}) => {
    return (
        <div className="card-button">
            <button className="btn" disabled={bought} onClick={() => setBought(id)}>
                {
                    bought ? "Добавлен в корзину" : "Добавить в корзину"
                }
            </button>
        </div>
    );
}

