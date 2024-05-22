// server/routes/properties.js
const express = require('express');
const Property = require('../models/Property');

const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const { owner, place, area, bedrooms, bathrooms, nearby } = req.body;
        const property = new Property({ owner, place, area, bedrooms, bathrooms, nearby });
        await property.save();
        res.status(201).json({ message: 'Property added successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/list', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const property = await Property.findByIdAndUpdate(id, req.body, { new: true });
        res.json(property);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Property.findByIdAndDelete(id);
        res.json({ message: 'Property deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
