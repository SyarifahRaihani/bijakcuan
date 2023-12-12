const query = require("../database");

async function getAllEvents(req, res) {
  try {
    const events = await query('SELECT * FROM event');
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}

async function getEventById(req, res) {
  const eventId = req.params.id;

  try {
    const [event] = await query('SELECT * FROM event WHERE id = ?', [eventId]);

    if (event) {
      // Format the date if needed
      // ...

      res.json(event);
    } else {
      res.status(404).send('Event not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  getAllEvents,
  getEventById,
};
