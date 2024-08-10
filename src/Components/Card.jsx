import React, { useState } from 'react';
import '../StyleComp/Card.css'; // Ensure you have a separate CSS file for Card component styles


const Card = ({ item, setCartCount }) => {
    const [status, setStatus] = useState(true);

    const cartAdd = () => {
        setStatus(false);
        setCartCount((pval) => pval + 1);
    };

    const cartRemove = () => {
        setStatus(true);
        setCartCount((pval) => pval - 1);
    };

    return (
        <div className="card-container" >
            <div className="card h-100" >
                <img src={item.Image} className="card-img-top" alt={item.name} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    {item.rating && (
                        <div className="rating text-warning text-center mb-2 small">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    )}
                    <p className="card-price original-price">{item.price}</p>
                    <p className="card-price del-price text-muted">{item.delprice}</p>
                    <div className="button-container">
                        {status ? (
                            <button className="btn btn-success" onClick={cartAdd}>Add to Cart</button>
                        ) : (
                            <button className="btn btn-danger" onClick={cartRemove}>Remove from Cart</button>
                        )}
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Card;
