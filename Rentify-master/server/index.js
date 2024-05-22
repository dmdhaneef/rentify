// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')

dotenv.config({
  path: "./.env",
  credentials: true
})

const app = express();
app.use(cors());
app.use(express.json());

// server/index.js (continued)
const userRoutes = require('./routes/users');
const propertyRoutes = require('./routes/properties');

app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);


mongoose.connect(process.env.MONGODB_URL).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 5000');
});
