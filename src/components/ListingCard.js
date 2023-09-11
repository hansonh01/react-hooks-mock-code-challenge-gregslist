import React, { useState } from "react";

function ListingCard({item, onDeleteItem}) {
  const {id,description,image,location} = item;
  const [isFav, setIsFav] = useState(false);
  const handleDeleteItem = () => {
    onDeleteItem(id)
  };
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFav ? (
          <button
          className="emoji-button favorite active"
          onClick={()=>setIsFav(!isFav)}
          >★</button>
        ) : (
          <button
          className="emoji-button favorite"
          onClick={()=>setIsFav(!isFav)}
          >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button 
        className="emoji-button delete"
        onClick={handleDeleteItem}
        >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
