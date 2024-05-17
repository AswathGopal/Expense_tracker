const mysql = require('mysql');
const dbConfig = require('./dbConfig');

const pool = mysql.createPool(dbConfig);

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    try {
        // Validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' });
        }
        if (isNaN(amount) || amount <= 0) {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }

        // Inserting income
        const insertQuery = `INSERT INTO incomes (title, amount, category, description, date) VALUES (?, ?, ?, ?, ?)`;
        pool.query(insertQuery, [title, amount, category, description, date], (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ message: 'Server Error' });
            }
            res.status(200).json({ message: 'Income Added' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getIncomes = async (req, res) => {
    try {
        const selectQuery = `SELECT * FROM incomes ORDER BY date DESC`;
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

exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteQuery = `DELETE FROM incomes WHERE id = ?`;
        pool.query(deleteQuery, [id], (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ message: 'Server Error' });
            }
            res.status(200).json({ message: 'Income Deleted' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
