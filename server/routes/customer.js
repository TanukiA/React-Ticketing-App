const express = require('express');
const router = express.Router();
const pool = require('../db/database');

router.get('/home', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM TicketListing');
        res.json(rows);
    } catch (error) {
        console.error('Error while fetching data from TicketListing:', error);
        res.status(500).send('Error while fetching data');
    }
});

router.get('/myticket', async (req, res) => {
    res.json({ message: 'My Ticket page!' });
});

module.exports = router;