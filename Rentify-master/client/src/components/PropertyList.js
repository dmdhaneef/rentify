// client/src/components/PropertyList.js
import React, { useEffect, useState } from 'react';
import { getProperties } from '../services/api';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await getProperties();
                setProperties(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProperties();
    }, []);

    return (
        <div>
            {properties.map(property => (
                <div key={property._id}>
                    <h2>{property.place}</h2>
                    <p>{property.area} sqft</p>
                    <p>{property.bedrooms} bedrooms</p>
                    <p>{property.bathrooms} bathrooms</p>
                    <p>Nearby: {property.nearby}</p>
                </div>
            ))}
        </div>
    );
};

export default PropertyList;
