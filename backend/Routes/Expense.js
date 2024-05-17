const mysql = require('mysql');
const dbConfig = require('./dbConfig');

// Create a connection pool using MySQL
const pool = mysql.createPool(dbConfig);

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    try {
        // Validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' });
        }
        if (isNaN(amount) || amount <= 0) {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }

        // Inserting expense
        const insertQuery = `INSERT INTO expenses (title, amount, category, description, date) VALUES (?, ?, ?, ?, ?)`;
        pool.query(insertQuery, [title, amount, category, description, date], (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ message: 'Server Error' });
            }
            res.status(200).json({ message: 'Expense Added' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getExpense = async (req, res) => {
    try {
        const selectQuery = `SELECT * FROM expenses ORDER BY date DESC`;
        pool.query(selectQuery, (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ message: 'Server Error' });
            }
            res.status(200).json(results);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteQuery = `DELETE FROM expenses WHERE id = ?`;
        pool.query(deleteQuery, [id], (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ message: 'Server Error' });
            }
            res.status(200).json({ message: 'Expense Deleted' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
