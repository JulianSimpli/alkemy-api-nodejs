const transaction = require('../models/transactionModel');

exports.create = async (req, res) => {
    // Create a transaction
    const newTransaction = {
        concept: req.body.concept,
        amount: req.body.amount,
        type: req.body.type
    };

    // Save transaction in the database
    try {
        const addTransaction = await transaction.create(newTransaction);
        res.redirect('/');
    } catch (err) {
        res.send(err.message || 'Some error occurred while creating the transaction.');
    }
}

// Retrieve all transactions from the database.
exports.findAll = async (req, res) => {
    try {
        const transactions = await transaction.findAll();
        res.send(transactions);
    } catch (err) {
        res.send(err.message || 'Some error occurred while retrieving transactions.');
    }
};

// Update a transaction by id
exports.update = async (req, res, next) => {
    try {
        const transactionById = await transaction.update(req.body, {
            where: { id: req.params.id }
        });
        res.send('Transaction was updated successfully.');
    } catch (err) {
        res.send(err.message || `Cannot update transaction with id=${id}. Maybe transaction was not found or req.body is empty!`);
        next();
    }
}

// Find a transaction by id
exports.findOne = async (req, res) => {
    const id = req.params.id;

    try {
        const transactionById = await transaction.findByPk(id);
        res.send(transactionById);
    } catch (err) {
        res.send('Error retrieving tutorial with id=' + id);   
    }
};

exports.delete = async (req, res, next) => {
    try {
        const transactions = await transaction.destroy({
            where: { id: req.params.id }
        });
        res.send('Transaction was deleted successfully.');
    } catch (err) {
        res.send(err.message || `Cannot delete transaction with id=${id}. Maybe transaction was not found!`);
        next();
    }
};