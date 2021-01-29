const transaction = require('../models/transactionModel');

exports.create = async (req, res) => {
    console.log(req.body);

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
        console.log(err.message || 'Some error occurred while creating the transaction.');
    }
}