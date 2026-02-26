//importing dotenv to load environment variables from a .env file into process.env
require('dotenv').config();

//importing the Express application from app.js
const app = require('./app');
//connecting to the MongoDB database using the connectDB function from src/config/db.js
const connectDB = require('./src/config/db');
//defining the port on which the server will listen, using an environment variable or defaulting to 3000
const PORT = process.env.PORT || 3000;


//starting the server and listening on the specified port and host, logging a message to the console when the server is running
// Connect to MongoDB first
connectDB().then(() => {
  // Only start server if DB connection succeeds
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
});