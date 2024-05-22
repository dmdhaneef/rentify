// client/src/components/AddProperty.js
import React, { useState } from 'react';
import { addProperty } from '../services/api';

const AddProperty = () => {
    const [formData, setFormData] = useState({
        place: '',
        area: '',
        bedrooms: '',
        bathrooms: '',
        nearby: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addProperty(formData);
            alert('Property added successfully');
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="place" value={formData.place} onChange={handleChange} placeholder="Place" required />
            <input type="text" name="area" value={formData.area} onChange={handleChange} placeholder="Area (in sqft)" required />
            <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} placeholder="Number of Bedrooms" required />
            <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} placeholder="Number of Bathrooms" required />
            <input type="text" name="nearby" value={formData.nearby} onChange={handleChange} placeholder="Nearby Amenities" required />
            <button type="submit">Add Property</button>
        </form>
    );
};

export default AddProperty;
