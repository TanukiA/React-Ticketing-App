const express = require('express');
const app = express();

app.get('/api/myticket', (req, res) => {
    res.json({ message: 'My Ticket page!' });
});

app.listen(5000, () => {console.log("Server started on port 5000")})