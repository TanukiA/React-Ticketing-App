const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customer'); 
const adminRoutes = require('./routes/admin');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', customerRoutes);
app.use('/api', adminRoutes);

app.listen(5000, () => {console.log("Server started on port 5000")})