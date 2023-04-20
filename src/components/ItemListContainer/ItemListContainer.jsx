import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <p>¡Bienvenido a nuestra tienda en línea! Aquí encontrarás una amplia selección de productos para satisfacer tus necesidades de compra.</p>
    </div>
  );
}

export default ItemListContainer;
