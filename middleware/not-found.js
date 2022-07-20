const notFound = (req, res) => res.status(404).send('Request does not exist');

module.exports = notFound;
