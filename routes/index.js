const transactionController = require('../controllers/transactionController');
const express = require('express');
const router = express.Router();

module.exports = function () {
    // Create a new transaction
    router.post('/', transactionController.create);

    // Retrieve all transactions
    router.get('/', transactionController.findAll);
    
    // Update a transaction with id
    router.put('/:id', transactionController.update);

    // Delete a transaction with id
    router.delete('/:id', transactionController.delete);

    // Retrieve a single transaction by id
    router.get('/:id', transactionController.findOne);

    return router;
}