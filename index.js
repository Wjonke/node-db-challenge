const server = require('./server.js');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Whoot!..Listening on port ${PORT}...`);
});