const query = require("../database")

async function getAllArtikel(req, res) {
	try {
		const result = await query('SELECT * FROM artikel');
        res.json(result);
	} catch (error) {
		console.error('Error fetching artikel:', err);
        res.status(500).json({ error: 'Internal Server Error' });
	}
}

async function getAllArtikelById(req, res) {
    const id = req.params.id;

    try {
        const result = await query('SELECT * FROM artikel WHERE id = ?', [id]);

        if (result.length === 0) {
            return res.status(404).json({ error: 'Artikel not found' });
        }

        res.json(result[0]); // Ambil data artikel pertama dari array hasil query
    } catch (error) {
        console.error('Error fetching artikel:', error); // Ganti "err" menjadi "error"
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    getAllArtikel,
    getAllArtikelById,
  };