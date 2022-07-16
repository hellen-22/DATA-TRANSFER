const database = require('./../database/database');


const transferData = (req, res) => {
    const { source, destination, table_source, table_destination } = req.body;
    const query = `INSERT INTO ${destination}.${table_destination} SELECT FROM ${source}.${table_source} WHERE sales_rep_id != 0`;
    database.query(query, (err, result) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        } else {
            res.status(200).json({
                message: 'Data transferred successfully'
            });
        }
    });
}

module.exports = { transferData };