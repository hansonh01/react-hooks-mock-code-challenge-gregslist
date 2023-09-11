import React, { useState } from 'react'

function ListingForm({onAdd}) {
  const [description,setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image,setImage] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    const formData = {description,image,location};
    onAdd(formData)
    setDescription("");
    setImage("");
    setLocation("");
  };
  return (
    <form className="" onSubmit={handleAddItem}>
      <input
        type="text"
        id="description"
        placeholder="Enter Item Name..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        id="image"
        placeholder="Enter Item Image Url..."
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        id="location"
        placeholder="Enter Item Location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  )
}

export default ListingForm