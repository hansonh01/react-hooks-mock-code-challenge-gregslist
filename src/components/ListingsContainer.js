import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import ListingForm from "./ListingForm";

function ListingsContainer({search}) {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("none");

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
      .then(r=>r.json())
      .then(setItems)
  },[])

  const handleDeleteItem = (id) => {
    fetch(`http://localhost:6001/listings/${id}`,{
      method:'DELETE'
    })
      .then(r=>r.json())
      .then(()=>{
        const updateList = items.filter((item)=> item.id !== id);
        setItems(updateList);
      })
  };

  const handleAddItem = (newItem) => {
    fetch('http://localhost:6001/listings',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newItem)
    })
      .then(r=>r.json())
      .then(()=>setItems([...items,newItem]))
  }

  const filterItems = items.filter((item)=>item.description.toLowerCase().includes(search.toLowerCase()));

  const handleSort = [...filterItems].sort((a,b)=>{
    if(sortBy==='location'){
      return a.location.localeCompare(b.location)
    }
  })
  

  return (
    <main>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value='none'>None</option>
        <option value='location'>Location</option>
      </select>
      <div>
        <ListingForm onAdd={handleAddItem}/>
      </div>
      <ul className="cards">
        {handleSort.map((item)=>(
          <ListingCard
          key={item.id}
          item={item}
          onDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
