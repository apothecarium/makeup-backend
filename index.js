const server = require('express')();

const port = process.env.PORT || 3005;

server.listen(port, () => {
  console.log(`🌺 Listening on port ${port} 🌺`);
});
