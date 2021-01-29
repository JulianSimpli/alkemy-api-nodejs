const transactionController = require('../controllers/transactionController');
const express = require('express');
const router = express.Router();

module.exports = function () {
    // Simple route
    router.get('/', (req, res) => res.send('Home'));

    // Create a new transaction
    router.post('/new-transaction', transactionController.create);

    return router;
}