const query = require("../database")

async function getAllPromos(req, res) {
    try{
        const promos = await query('SELECT * FROM promo');
        res.json(promos);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAllPromos
}